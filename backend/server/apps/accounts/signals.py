from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Category, Event
from rest_framework import status
from rest_framework.response import Response
from .serializers import CategorySerializer, EventSerializer
from rest_framework.decorators import api_view

@api_view(['POST'])
@receiver(post_save, sender=Category)
def create_category_api(sender, instance, created, **kwargs):
    if created:
        serializer = CategorySerializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@receiver(post_save, sender=Event)
def create_event_api(sender, instance, created, **kwargs):
    if created:
        serializer = EventSerializer(instance, context={'request': None})
        return Response(serializer.data, status=status.HTTP_201_CREATED)
