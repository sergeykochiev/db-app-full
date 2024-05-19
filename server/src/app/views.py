from rest_framework import generics
from rest_framework.response import Response
from .models import Teacher, Subject, TeacherSubject, Class, TeacherClass, Student, StudentSubject
from .serializers import (
    TeacherSerializer, SubjectSerializer, TeacherSubjectSerializer,
    ClassSerializer, TeacherClassSerializer, StudentSerializer, StudentSubjectSerializer
)

class ModelListView(generics.ListCreateAPIView):
    def get_queryset(self):
        model_name = self.kwargs.get('model_name').lower()
        model_map = {
            'teacher': Teacher,
            'subject': Subject,
            'teachersubject': TeacherSubject,
            'class': Class,
            'teacherclass': TeacherClass,
            'student': Student,
            'studentsubject': StudentSubject,
        }
        model = model_map.get(model_name)
        return model.objects.all()

    def get_serializer_class(self):
        model_name = self.kwargs.get('model_name').lower()
        model_map = {
            'teacher': TeacherSerializer,
            'subject': SubjectSerializer,
            'teachersubject': TeacherSubjectSerializer,
            'class': ClassSerializer,
            'teacherclass': TeacherClassSerializer,
            'student': StudentSerializer,
            'studentsubject': StudentSubjectSerializer,
        }
        return model_map.get(model_name)
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({"results": serializer.data})

class ModelDetailView(generics.RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        model_name = self.kwargs.get('model_name').lower()
        model_map = {
            'teacher': Teacher,
            'subject': Subject,
            'teachersubject': TeacherSubject,
            'class': Class,
            'teacherclass': TeacherClass,
            'student': Student,
            'studentsubject': StudentSubject,
        }
        model = model_map.get(model_name)
        
        return model.objects.all()

    def get_serializer_class(self):
        model_name = self.kwargs.get('model_name').lower()
        model_map = {
            'teacher': TeacherSerializer,
            'subject': SubjectSerializer,
            'teachersubject': TeacherSubjectSerializer,
            'class': ClassSerializer,
            'teacherclass': TeacherClassSerializer,
            'student': StudentSerializer,
            'studentsubject': StudentSubjectSerializer,
        }
        return model_map.get(model_name)

