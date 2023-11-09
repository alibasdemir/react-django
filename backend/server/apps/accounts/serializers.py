from rest_framework import serializers
from .models import Category, Event, SeatCategory, Seat


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'img_url']


class SeatCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SeatCategory
        fields = ['id', 'seatPrice', 'seatClass', 'totalSeat']


class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = ['id', 'seatNumber', 'seatCategory']
    seatCategory = SeatCategorySerializer()


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'location', 'locationUrl', 'owner', 'description', 'isActive', 'start_date', 'end_date', 'category', 'seatCategories']  
    category = CategorySerializer()
    seatCategories = SeatCategorySerializer(many=True)