from rest_framework import generics
from .models import Category, Event, SeatCategory, Seat, EventImage
from .serializers import CategorySerializer,EventSerializer, SeatCategorySerializer, SeatSerializer, EventImageSerializer
from rest_framework.permissions import AllowAny


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

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

class EventImageList(generics.ListCreateAPIView):
    queryset = EventImage.objects.all()
    serializer_class = EventImageSerializer
    permission_classes = [AllowAny]

class EventImageDetail(generics.RetrieveDestroyAPIView):
    queryset = EventImage.objects.all()
    serializer_class = EventImageSerializer


class EventListForCategory(generics.ListAPIView):
    serializer_class = EventSerializer
    permission_classes = [AllowAny] 

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        category_events = Event.objects.filter(category_id=category_id)
        return category_events