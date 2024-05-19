from rest_framework import serializers
from .models import Teacher, Subject, TeacherSubject, Class, TeacherClass, Student, StudentSubject

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'

class TeacherSubjectSerializer(serializers.ModelSerializer):
    teacher_name = serializers.CharField(source='teacher.name', read_only=True)
    teacher_surname = serializers.CharField(source='teacher.surname', read_only=True)
    teacher_patronymic = serializers.CharField(source='teacher.patronymic', read_only=True)
    subject_name = serializers.CharField(source='subject.name', read_only=True)
    
    class Meta:
        model = TeacherSubject
        fields = ['id', 'teacher_name', 'teacher_surname', 'teacher_patronymic', 'teacher', 'subject_name', 'subject']

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'

class TeacherClassSerializer(serializers.ModelSerializer):
    teacher_name = serializers.CharField(source='teacher.name', read_only=True)
    teacher_surname = serializers.CharField(source='teacher.surname', read_only=True)
    teacher_patronymic = serializers.CharField(source='teacher.patronymic', read_only=True)
    class_name = serializers.CharField(source='class_id.name', read_only=True)

    class Meta:
        model = TeacherClass
        fields = ['id', 'teacher_name', 'teacher_surname', 'teacher_patronymic', 'teacher', 'class_name', 'class_id']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class StudentSubjectSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.name', read_only=True)
    student_surname = serializers.CharField(source='student.surname', read_only=True)
    student_patronymic = serializers.CharField(source='student.patronymic', read_only=True)
    subject_name = serializers.CharField(source='subject.name', read_only=True)

    class Meta:
        model = StudentSubject
        fields = ['id', 'student_name', 'student_surname', 'student_patronymic', 'student', 'subject_name', 'subject']
