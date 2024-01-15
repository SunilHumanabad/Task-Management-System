# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from task.models import Task
from task.serializers import TaskSerializer
from django.shortcuts import get_object_or_404
from account.renderers import UserRenderer
from rest_framework.permissions import IsAuthenticated

class TaskView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        objects = Task.objects.filter(user = request.user)
        serializer = TaskSerializer(objects, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        obj = Task.objects.get(user = request.user, pk=pk)
        serializer = TaskSerializer(obj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        obj = Task.objects.get(user = request.user, pk=pk)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
class TaskSingleView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request, pk=None):
        if pk is not None:
            obj = get_object_or_404(Task, pk=pk)
            serializer = TaskSerializer(obj)
            return Response(serializer.data)        
        objects = Task.objects.filter(user = request.user)
        serializer = TaskSerializer(objects, many=True)
        return Response(serializer.data)
