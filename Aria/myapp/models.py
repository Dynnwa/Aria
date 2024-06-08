from django.db import models

# Create your models here.
class SongItem(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100) #models.ForeignKey(models.ForeignKey)
    length = models.IntegerField()
    genre = models.CharField(max_length=100)
    fingerprint = models.CharField(max_length=100) #models.ForeignKey(models.ForeignKey)