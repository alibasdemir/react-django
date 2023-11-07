from rest_framework import serializers
from .models import Category, Event


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'img_url']

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'location', 'locationUrl', 'owner', 'description', 'category', 'isActive', 'start_date', 'end_date']  
    category = CategorySerializer()