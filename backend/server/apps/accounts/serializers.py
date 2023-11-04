from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'password', 'email')

def validate_username(self, value):
        # Kullanıcı adının benzersiz olduğunu kontrol et
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Bu kullanıcı adında bir kullanı zaten mevcut.")
        return value