# Generated by Django 4.2 on 2023-06-01 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Main_Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('slider_image', models.ImageField(upload_to='main-slider-img')),
            ],
            options={
                'verbose_name': 'Main Slider',
                'verbose_name_plural': 'Main Slider',
            },
        ),
    ]
