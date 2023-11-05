from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Category
from rest_framework import status
from rest_framework.response import Response
from .serializers import CategorySerializer
from rest_framework.decorators import api_view

@api_view(['POST'])
@receiver(post_save, sender=Category)
def create_category_api(sender, instance, created, **kwargs):
    if created:
        serializer = CategorySerializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
