from django.urls import path
from . import views

urlpatterns = [
    path("Register/",views.Register),
    path("Login/",views.Login)
    ]
