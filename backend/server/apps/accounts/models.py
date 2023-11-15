from django.db import models
from django.utils import timezone

class Category(models.Model):
    title = models.CharField(max_length=100)
    img_url = models.URLField()

    def __str__(self):
        return self.title
     
class SeatCategory(models.Model):
    seatClass = models.CharField(max_length=1, unique=True)
    totalSeat = models.PositiveIntegerField()
    seatPrice = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.seatClass

    def save(self, *args, **kwargs):
        super(SeatCategory, self).save(*args, **kwargs)
        if not Seat.objects.filter(seatCategory=self).exists():
            for i in range(1, self.totalSeat + 1):
                seat = Seat(seatNumber=i, seatCategory=self)
                seat.save()    

class Seat(models.Model):
    seatNumber = models.PositiveIntegerField()
    seatCategory = models.ForeignKey(SeatCategory, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.seatCategory.seatClass}{self.seatNumber}"


class Event(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    locationUrl = models.URLField()
    owner = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True, null=True, related_name="category")
    isActive = models.BooleanField(default=True)

    start_date = models.DateField(default=timezone.now().date())
    end_date = models.DateField(default=timezone.now().date() + timezone.timedelta(days=15))

    seats = models.ManyToManyField(Seat, related_name='events', blank=True)

    eventImages = models.ManyToManyField('EventImage', related_name='events', blank=True)
    
    def __str__(self):
        return self.name
    
    def save(self, args, **kwargs):
        if self.end_date < timezone.now().date():
            self.isActive = False
        super().save(args, **kwargs)


class EventImage(models.Model):
    image = models.ImageField(upload_to='event_images/')

    def __str__(self):
        return f"Image for {self.image.name}"
    
