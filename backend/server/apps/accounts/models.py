from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100)
    img_url = models.URLField()

    def __str__(self):
        return self.title

