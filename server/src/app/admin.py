from django.contrib import admin
from .models import Teacher, Subject, TeacherSubject, Class, TeacherClass, Student, StudentSubject

admin.site.register(Teacher)
admin.site.register(Subject)
admin.site.register(TeacherSubject)
admin.site.register(Class)
admin.site.register(TeacherClass)
admin.site.register(Student)
admin.site.register(StudentSubject)

