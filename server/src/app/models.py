from django.db import models

from django.db import models

class Teacher(models.Model):
    surname = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    patronymic = models.CharField(max_length=50, blank=True, null=True)
    is_class_teacher = models.BooleanField()

    def __str__(self):
        return f'{self.surname} {self.name}'

class Subject(models.Model):
    name = models.CharField(max_length=50)
    grade = models.IntegerField(blank=True)
    date_of_grade = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.name

class TeacherSubject(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.teacher} - {self.subject}'

class Class(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name

class TeacherClass(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.teacher} - {self.class_id}'

class Student(models.Model):
    surname = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    patronymic = models.CharField(max_length=50, blank=True, null=True)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    birth_date = models.DateField()
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    grade = models.IntegerField(blank=True, null=True)
    date_of_grade = models.DateField(blank=True, null=True)

    def __str__(self):
        return f'{self.surname} {self.name}'

class StudentSubject(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.student} - {self.subject}'
