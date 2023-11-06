from django.urls import path, include
from .views import CategoryList, CategoryDetail, EventList, EventDetail
from apps.accounts.signals import create_category_api, create_event_api

accounts_urlpatterns = [
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.authtoken')),
    
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),

    path('events/', EventList.as_view(), name='event-list'),
    path('events/<int:pk>/', EventDetail.as_view(), name='event-detail'),


    path('create_category_api/', create_category_api, name='create-category-api'),
    path('create_event_api/', create_event_api, name='create_event_api'),

]
