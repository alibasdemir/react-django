from django.contrib import admin

# Register your models here.

from .models import Category, Event

admin.site.register(Category)
admin.site.register(Event)