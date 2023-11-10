from rest_framework import serializers
from .models import Category, Event, SeatCategory, Seat, EventImage


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


class EventImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventImage
        fields = ['id', 'image']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'location', 'locationUrl', 'owner', 'description', 'isActive', 'start_date', 'end_date', 'category', 'seats', 'eventImages']
    category = CategorySerializer()
    seats = SeatSerializer(many=True)
    eventImages = EventImageSerializer(many=True)
