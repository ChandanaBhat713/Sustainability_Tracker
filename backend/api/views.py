from django.shortcuts import render
from rest_framework import generics
from .models import Sustainability
from .serializers import ActionSerializer

class ActionListCreateView(generics.ListCreateAPIView):
    queryset=Sustainability.objects.all()
    serializer_class=ActionSerializer
    
class ActionRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Sustainability.objects.all()
    serializer_class=ActionSerializer

