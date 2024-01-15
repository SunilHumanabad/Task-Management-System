from django.db import models
from django.contrib.auth.models import User
import uuid
from django.conf import settings
# Create your models here.
class Task(models.Model):
    id = models.UUIDField( primary_key = True, default = uuid.uuid4, editable = False)
    title = models.CharField(max_length = 200)
    description = models.TextField()
    status = models.BooleanField(default=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title