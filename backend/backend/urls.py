from django.contrib import admin
from django.urls import path,include
from api.views import ActionListCreateView, ActionRetrieveUpdateDeleteView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/actions/', ActionListCreateView.as_view(), name='action_list_create'),
    path('api/actions/<int:pk>/', ActionRetrieveUpdateDeleteView.as_view(), name='action_retrieve_update_delete'),
    path('api/',include("api.urls"))
]

