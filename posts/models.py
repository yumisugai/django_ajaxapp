from django.db import models
from django.utils import timezone 

class Post(models.Model):
  content = models.TextField(blank=True)
  created_at = models.DateTimeField(verbose_name='投稿日時', default=timezone.now)