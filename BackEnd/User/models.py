from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('operator', 'Operator')
    ]
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    password = models.CharField(max_length=255)
    last_login = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):            
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class BlacklistedToken(models.Model):
    token = models.TextField()
    expiry = models.DateTimeField()
    blacklisted_at = models.DateTimeField(auto_now_add=True)