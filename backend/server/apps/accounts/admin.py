from django.contrib import admin

# Register your models here.

from .models import Category, Event, SeatCategory, Seat, EventImage

admin.site.register(Category)
admin.site.register(Event)
admin.site.register(Seat)
admin.site.register(EventImage)

class SeatInline(admin.TabularInline):
    model = Seat
    extra = 0

class SeatCategoryAdmin(admin.ModelAdmin):
    inlines = [SeatInline]

admin.site.register(SeatCategory, SeatCategoryAdmin)