from rest_framework import generics
from .models import Category, Event, SeatCategory, Seat
from .serializers import CategorySerializer,EventSerializer, SeatCategorySerializer, SeatSerializer
from rest_framework.permissions import AllowAny


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [AllowAny]

class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class SeatCategoryList(generics.ListCreateAPIView):
    queryset = SeatCategory.objects.all()
    serializer_class = SeatCategorySerializer
    permission_classes = [AllowAny]

class SeatCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SeatCategory.objects.all()
    serializer_class = SeatCategorySerializer    

class SeatList(generics.ListCreateAPIView):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer
    permission_classes = [AllowAny]

class SeatDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer


