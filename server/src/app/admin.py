from django.contrib import admin
from .models import (
    ServiceGroup, Position, Service, Client, Employee, Visit, Cosmetic, CosmeticPurchase
)

@admin.register(ServiceGroup)
class ServiceGroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Position)
class PositionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'service_group', 'work_schedule')
    search_fields = ('name',)
    list_filter = ('service_group',)

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'group', 'cost', 'duration')
    search_fields = ('name',)
    list_filter = ('group',)

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'phone_number', 'category', 'email')
    search_fields = ('full_name', 'phone_number', 'email')
    list_filter = ('category',)

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('id', 'full_name', 'position', 'address', 'phone_number')
    search_fields = ('full_name', 'phone_number', 'address')
    list_filter = ('position',)

@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    list_display = ('id', 'client', 'service', 'employee', 'date', 'time', 'service_rendered')
    search_fields = ('client__full_name', 'service__name', 'employee__full_name')
    list_filter = ('date', 'service_rendered')

@admin.register(Cosmetic)
class CosmeticAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'cost', 'type')
    search_fields = ('name',)
    list_filter = ('type',)

@admin.register(CosmeticPurchase)
class CosmeticPurchaseAdmin(admin.ModelAdmin):
    list_display = ('id', 'date', 'client', 'position', 'quantity', 'cost_per_item', 'total_cost')
    search_fields = ('client__full_name', 'position__name')
    list_filter = ('date',)
