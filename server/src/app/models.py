from django.db import models

class Service(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.IntegerField()

    def __str__(self):
        return self.name


class Client(models.Model):
    LOYAL = 'loyal'
    REGULAR = 'regular'
    NEW = 'new'
    VIP = 'vip'
    BLOGER = 'bloger'
    EMPLOYEE = 'employee'

    CATEGORY_CHOICES = [
        (LOYAL, 'Loyal'),
        (REGULAR, 'Regular'),
        (NEW, 'New'),
        (VIP, 'VIP'),
        (BLOGER, 'Bloger'),
        (EMPLOYEE, 'Employee'),
    ]

    id = models.AutoField(primary_key=True)
    fio = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    email = models.EmailField()

    def __str__(self):
        return self.full_name


class Visit(models.Model):
    id = models.AutoField(primary_key=True)
    client_id = models.ForeignKey(Client, on_delete=models.CASCADE)
    service_id = models.ForeignKey(Service, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    service_fullfilled = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.client.full_name} - {self.service.name}'
