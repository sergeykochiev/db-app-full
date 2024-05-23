from rest_framework import generics
from rest_framework.response import Response
from .models import Service, Client, Visit
from .serializers import ServiceSerializer, ClientSerializer, VisitSerializer

class ModelListView(generics.ListCreateAPIView):
    def get_queryset(self):
        model_name = self.kwargs.get('model_name').lower()
        model_map = {
            'service': Service,
            'client': Client,
            'visit': Visit,
        }
        model = model_map.get(model_name)
        return model.objects.all()

    def get_serializer_class(self):
        model_name = self.kwargs.get('model_name').lower()
        serializer_map = {
            'service': ServiceSerializer,
            'client': ClientSerializer,
            'visit': VisitSerializer,
        }
        return serializer_map.get(model_name)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({"results": serializer.data})

class ModelDetailView(generics.RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        model_name = self.kwargs.get('model_name').lower()
        model_map = {
            'service': Service,
            'client': Client,
            'visit': Visit,
        }
        model = model_map.get(model_name)
        return model.objects.all()

    def get_serializer_class(self):
        model_name = self.kwargs.get('model_name').lower()
        serializer_map = {
            'service': ServiceSerializer,
            'client': ClientSerializer,
            'visit': VisitSerializer,
        }
        return serializer_map.get(model_name)
