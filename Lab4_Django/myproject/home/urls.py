from django.urls import path
from home import views

urlpatterns = [
    path('', views.index, name='home'),  # Home page
    path('about/', views.about, name='about'),  # About page
    path('services/', views.services, name='services'),  # Services page
    path('contact/', views.contact, name='contact'),  # Contact page
]
