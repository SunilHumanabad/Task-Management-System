from django.urls import path, include
from task.views import TaskView, TaskSingleView

urlpatterns = [
    path('', TaskView.as_view(), name='TaskView'),
    path('<pk>/', TaskView.as_view(), name='TaskView'),
    path('e/<pk>/', TaskSingleView.as_view(), name='TaskSingleView'),
]
