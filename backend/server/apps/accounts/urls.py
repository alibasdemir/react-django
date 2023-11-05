from django.urls import path, include
from .views import CategoryList, CategoryDetail, add_category
from apps.accounts.signals import create_category_api

accounts_urlpatterns = [
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.authtoken')),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('add_category/', add_category, name='add-category'),
    path('create_category_api/', create_category_api, name='create-category-api'),
]
