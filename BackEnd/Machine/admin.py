from django.contrib import admin
from .models import Machine,  Production, DefectLog, Task

admin.site.register(Machine)
admin.site.register(Production)
admin.site.register(DefectLog)
admin.site.register(Task)
