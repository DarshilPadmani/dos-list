from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin Panel
    path('', include('home.urls')),  # Include URLs from home app
]
