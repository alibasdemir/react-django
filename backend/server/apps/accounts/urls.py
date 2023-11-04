from django.urls import path, include
from .views import UserCreate
from .views import UserList

accounts_urlpatterns = [
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.authtoken')),
    path('api/v1/register/', UserCreate.as_view(), name='register'),
    path('api/v1/userlist/', UserList.as_view(), name='user-list'),
]
