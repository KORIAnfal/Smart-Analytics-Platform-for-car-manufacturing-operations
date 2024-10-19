import uuid
from django.db import models
from User.models import User  # Import User from the user app
from django.core.validators import MinValueValidator

class Machine(models.Model):
    machine_id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    last_maintenance_date = models.DateField()

    def __str__(self):
        return self.machine_name

class Production(models.Model):
    production_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    machin_id = models.ForeignKey(Machine, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    energy_consumed = models.FloatField(
    validators=[MinValueValidator(0.0)]
)


    def __str__(self):
        return f"Production Shift {self.shift}"

class DefectLog(models.Model):
    defect_id = models.AutoField(primary_key=True)
    id_machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    production_id = models.ForeignKey(Production,on_delete=models.CASCADE)
    time_detected = models.DateTimeField(auto_now_add=True)
    defect_type = models.CharField(max_length=100)
    resolved = models.BooleanField(default=False)

    def __str__(self):
        return f"Defect {self.defect_type} for {self.machine}"

class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    defect_id = models.ForeignKey(DefectLog,on_delete=models.CASCADE)
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    assignee = models.ForeignKey(User, on_delete=models.CASCADE)
    due_date = models.DateTimeField()
    status = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Task {self.task_type} for {self.machine} assigned to {self.assigned_to}"
