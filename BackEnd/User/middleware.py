import uuid
from django.http import HttpResponseForbidden, JsonResponse
from django.contrib.auth import get_user_model
from django.utils.deprecation import MiddlewareMixin
import jwt, re
from django.conf import settings

# Middleware that checks if a user is authenticated before allowing access to certain views.
class UserAuthMiddleware(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response
        self.exempt_patterns = [
            r'^/users/Forgotpwd/$',
            r'^/users/Login/$',
            r'^/users/Register/$',
            r'^/users/RefreshToken/$',
        ]

    def get_user(self, user_id):
        User = get_user_model()
        try:
            return User.objects.filter(id=uuid.UUID(user_id)).first()
        except (User.DoesNotExist, ValueError):
            return None

    def __call__(self, request):
        if any(re.match(pattern, request.path) for pattern in self.exempt_patterns):
            response = self.get_response(request)
            return response

        authorization_header = request.headers.get('authorization')
        if not authorization_header:
            return HttpResponseForbidden('No authorization header')

        try:
            token = authorization_header.split(' ')[1]
            if not token : 
                print('no token passed')
            payload = jwt.decode(token, settings.JWT, algorithms=['HS256'])
            user = self.get_user(payload['user_id'])
            if not user:
                return HttpResponseForbidden('User not found.')
            request.user = user
            request.user_id = user.user_id
            request.name = user.name
            request.email = user.email
            return self.get_response(request)
        except jwt.ExpiredSignatureError:
            return HttpResponseForbidden('Token expired.')
        except jwt.DecodeError:
            return HttpResponseForbidden('Invalid token.')
        except Exception as e:
            print(f"Unexpected error: {e}")
            return HttpResponseForbidden('An error occurred during token processing.')
