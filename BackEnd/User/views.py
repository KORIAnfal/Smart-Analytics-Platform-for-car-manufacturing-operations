import datetime
from django.utils.timezone import now
import uuid
from jwt import encode , decode 
from django.urls import reverse
import httpagentparser
import jwt
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from rest_framework import status
from .models import BlacklistedToken, User
from django.shortcuts import  render
from django.conf import settings
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from django.template.loader import render_to_string

# Create your views here.
@api_view(['POST'])
def Register(request): 
    user = User.objects.filter(email=request.data["email"])
    if user: 
        return Response({'success':False, "message": "This email already exists "})
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({'success':True, "message": "Registration successful!"})
    else : 
        user.delete()
        return Response({'success':False, "message": serializer.error_messages})
    
# Login of the user 
@api_view(['POST'])
def Login(request): 
    #loggin the user activity: 
    ip = request.META.get('HTTP_X_FORWARDED_FOR')
    if ip:
        ip = ip.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')

    user_agent = request.META.get('HTTP_USER_AGENT')
    parsed_data = httpagentparser.detect(user_agent)
    os_info = parsed_data.get('os', {})
    browser_info = parsed_data.get('browser', {})

    os_name = os_info.get('name', 'Unknown OS')
    os_version = os_info.get('version', 'Unknown Version')
    browser_name = browser_info.get('name', 'Unknown Browser')
    browser_version = browser_info.get('version', 'Unknown Version')


    print(f'ip add: {ip}')
    print(f"Operating System: {os_name} {os_version}")
    print(f"Browser: {browser_name} {browser_version}")


    response = Response()
    user = User.objects.filter(email = request.data['email']).first()
    if not user: 
        return Response({"seccess":False, "message": "wrong credentials"})
    if not user.check_password(request.data['password']):
        return Response({"seccess":False, "message": "wrong credentials"})
    #prepare access token
    payload = {
            'id' : str(user.user_id),
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=90),
            'role': user.role, 
            'name':user.name,
            'email': user.email,
            'iat' : datetime.datetime.utcnow()
        }
    access_token = encode(payload, settings.JWT, algorithm='HS256')
    #check that the generated token is not blacklisted
    token = BlacklistedToken.objects.filter(token=access_token).first()
    while(token): 
        payload = {
            'id' : str(user.user_id),
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=90),
            'role': user.role, 
            'name':user.name,
            'email': user.email,
            'iat' : datetime.datetime.utcnow()
        }
        access_token = encode(payload, settings.JWT, algorithm='HS256')
        token = BlacklistedToken.objects.filter(token=access_token).first()

    #preparing the refresh token
    refresh_payload = {
        'email' : str(user.email),
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=10),
        }
    refresh_token = encode(refresh_payload, settings.JWT, algorithm='HS256')
    response.set_cookie(key='refresh_token',value=refresh_token,httponly=True,samesite='Lax',secure=True)
    response.data = {'success':True,'jwt':access_token}
    return response

