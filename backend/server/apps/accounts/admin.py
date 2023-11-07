from django.contrib import admin

# Register your models here.

from .models import Category, Event, SeatCategory, Seat

admin.site.register(Category)
admin.site.register(Event)
admin.site.register(SeatCategory)
admin.site.register(Seat)