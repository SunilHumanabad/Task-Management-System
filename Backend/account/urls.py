from django.urls import path, include
from account.views import UserRegisterationView, UserLoginView, UserProfileView, UserPasswordResetEmailView, UserPasswordResetView

urlpatterns = [
    path('register/', UserRegisterationView.as_view(), name='UserRegisterationView'),
    path('login/', UserLoginView.as_view(), name='UserLoginView'),
    path('profile/', UserProfileView.as_view(), name='UserProfileView'),
    path('reset/', UserPasswordResetEmailView.as_view(), name='UserPasswordResetEmailView'),
    path('reset/<uid>/<token>/', UserPasswordResetView.as_view(), name='UserPasswordResetView'),
]
