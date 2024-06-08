from django.shortcuts import render, HttpResponse
from .models import SongItem

def home(request):
    return HttpResponse("Hello!!!!!!")

def songs(request):
    songs = SongItem.objects.all()
    return HttpResponse(songs)