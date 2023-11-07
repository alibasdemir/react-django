from django.db import models
from django.utils import timezone

class Category(models.Model):
    title = models.CharField(max_length=100)
    img_url = models.URLField()

    def __str__(self):
        return self.title

class Event(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    locationUrl = models.URLField()
    owner = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True, related_name="category")
    isActive = models.BooleanField(default=True)

    start_date = models.DateField(default=timezone.now().date())
    end_date = models.DateField(default=timezone.now().date() + timezone.timedelta(days=15))

    def __str__(self):
        return self.name



