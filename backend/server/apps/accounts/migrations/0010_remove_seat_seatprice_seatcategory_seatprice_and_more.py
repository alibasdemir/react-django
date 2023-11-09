# Generated by Django 4.2.7 on 2023-11-08 22:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_remove_event_seat_seatcategory_event'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='seat',
            name='seatPrice',
        ),
        migrations.AddField(
            model_name='seatcategory',
            name='seatPrice',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='end_date',
            field=models.DateField(default=datetime.date(2023, 11, 23)),
        ),
        migrations.AlterField(
            model_name='event',
            name='start_date',
            field=models.DateField(default=datetime.date(2023, 11, 8)),
        ),
    ]