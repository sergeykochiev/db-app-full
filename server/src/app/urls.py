from django.urls import path
from .views import ModelListView, ModelDetailView

urlpatterns = [
    path('<str:model_name>/', ModelListView.as_view(), name='model-list'),
    path('<str:model_name>/<int:pk>/', ModelDetailView.as_view(), name='model-detail'),
]
