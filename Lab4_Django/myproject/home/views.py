from django.shortcuts import render
from django.http import HttpResponse

# Create your views here
def index(request):
    return render(request, 'index.html')  # Renders index.html

def about(request):
    return HttpResponse("This is the About page")

def services(request):
    return HttpResponse("This is the Services page")

def contact(request):
    return HttpResponse("This is the Contact page")
