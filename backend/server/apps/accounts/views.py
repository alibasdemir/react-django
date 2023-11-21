from rest_framework import generics
from .models import Category, Event, SeatCategory, Seat, EventImage
from .serializers import CategorySerializer,EventSerializer, SeatCategorySerializer, SeatSerializer, EventImageSerializer
from rest_framework.permissions import AllowAny
from django.db.models import Q
from django.http import JsonResponse
from unidecode import unidecode
from unicodedata import normalize
from django.core.serializers.json import DjangoJSONEncoder
from django.http import HttpResponse
import json

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
    permission_classes = [AllowAny]

class SeatCategoryList(generics.ListCreateAPIView):
    queryset = SeatCategory.objects.all()
    serializer_class = SeatCategorySerializer
    permission_classes = [AllowAny]

class SeatCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SeatCategory.objects.all()
    serializer_class = SeatCategorySerializer
    permission_classes = [AllowAny]    

class SeatList(generics.ListCreateAPIView):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer
    permission_classes = [AllowAny]

class SeatDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer
    permission_classes = [AllowAny]

class EventImageList(generics.ListCreateAPIView):
    queryset = EventImage.objects.all()
    serializer_class = EventImageSerializer
    permission_classes = [AllowAny]

class EventImageDetail(generics.RetrieveDestroyAPIView):
    queryset = EventImage.objects.all()
    serializer_class = EventImageSerializer
    permission_classes = [AllowAny]


class EventListForCategory(generics.ListAPIView):
    serializer_class = EventSerializer
    permission_classes = [AllowAny] 

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        category_events = Event.objects.filter(category_id=category_id)
        return category_events
    


def normalize_search_term(term):
    return unidecode(term).lower()

def search_events(request):
    query = request.GET.get('query', '').strip()

    normalized_query = normalize_search_term(query)

    search_terms = normalized_query.split()

    events = Event.objects.all()

    for term in search_terms:
        normalized_term = unidecode(term).lower()
        events = events.filter(
            Q(name__icontains=normalized_term) |
            Q(location__icontains=normalized_term) |
            Q(owner__icontains=normalized_term)
        )

    serialized_data = [
        {'id': event.id, 'name': event.name, 'location': event.location, 'owner': event.owner}
        for event in events
    ]

    return JsonResponse(serialized_data, safe=False, json_dumps_params={'ensure_ascii': False})