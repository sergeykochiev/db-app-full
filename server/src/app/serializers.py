from rest_framework import serializers
from .models import ServiceGroup, Position, Service, Client, Employee, Visit, Cosmetic, CosmeticPurchase

class ServiceGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceGroup
        fields = '__all__'

class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = '__all__'

class CosmeticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cosmetic
        fields = '__all__'

class CosmeticPurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CosmeticPurchase
        fields = '__all__'
