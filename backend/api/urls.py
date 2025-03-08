from django.urls import path
from .views import ActionListCreateView, ActionRetrieveUpdateDeleteView

urlpatterns = [
    path('actions/', ActionListCreateView.as_view(), name='action_list_create'),
    path('actions/<int:pk>/', ActionRetrieveUpdateDeleteView.as_view(), name='action_retrieve_update_delete'),
]