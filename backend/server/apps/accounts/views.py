from rest_framework import generics
from .models import Category
from .serializers import CategorySerializer
from rest_framework.permissions import AllowAny

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

from django.shortcuts import render, redirect
from .forms import CategoryForm

def add_category(request):
    if request.method == 'POST':
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('category-list')  # Kategori listesine yönlendirme
    else:
        form = CategoryForm()
    return render(request, 'add_category.html', {'form': form})
