from rest_framework import generics
from rest_framework.response import Response
from .models import (
    ServiceGroup, Position, Service, Client, Employee, Visit, Cosmetic, CosmeticPurchase
)
from .serializers import (
    ServiceGroupSerializer, PositionSerializer, ServiceSerializer, ClientSerializer,
    EmployeeSerializer, VisitSerializer, CosmeticSerializer, CosmeticPurchaseSerializer
)

class ModelListView(generics.ListCreateAPIView):
    def get_queryset(self):
        model_name = self.kwargs.get('model_name').lower()
        model_map = {
            'servicegroup': ServiceGroup,
            'position': Position,
            'service': Service,
            'client': Client,
            'employee': Employee,
            'visit': Visit,
            'cosmetic': Cosmetic,
            'cosmeticpurchase': CosmeticPurchase,
        }
        model = model_map.get(model_name)
        return model.objects.all()

    def get_serializer_class(self):
        model_name = self.kwargs.get('model_name').lower()
        serializer_map = {
            'servicegroup': ServiceGroupSerializer,
            'position': PositionSerializer,
            'service': ServiceSerializer,
            'client': ClientSerializer,
            'employee': EmployeeSerializer,
            'visit': VisitSerializer,
            'cosmetic': CosmeticSerializer,
            'cosmeticpurchase': CosmeticPurchaseSerializer,
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
            'servicegroup': ServiceGroup,
            'position': Position,
            'service': Service,
            'client': Client,
            'employee': Employee,
            'visit': Visit,
            'cosmetic': Cosmetic,
            'cosmeticpurchase': CosmeticPurchase,
        }
        model = model_map.get(model_name)
        return model.objects.all()

    def get_serializer_class(self):
        model_name = self.kwargs.get('model_name').lower()
        serializer_map = {
            'servicegroup': ServiceGroupSerializer,
            'position': PositionSerializer,
            'service': ServiceSerializer,
            'client': ClientSerializer,
            'employee': EmployeeSerializer,
            'visit': VisitSerializer,
            'cosmetic': CosmeticSerializer,
            'cosmeticpurchase': CosmeticPurchaseSerializer,
        }
        return serializer_map.get(model_name)
