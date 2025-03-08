from rest_framework import serializers
from .models import Sustainability

class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sustainability
        fields = '__all__'
