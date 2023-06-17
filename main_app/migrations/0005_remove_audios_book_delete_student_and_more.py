# Generated by Django 4.2 on 2023-06-11 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0004_our_courses_remove_courses_pdf_file_discriptions_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='audios',
            name='book',
        ),
        migrations.DeleteModel(
            name='Student',
        ),
        migrations.AddField(
            model_name='our_courses',
            name='course_images',
            field=models.FileField(blank=True, null=True, upload_to='our-coursese-img'),
        ),
        migrations.DeleteModel(
            name='Audios',
        ),
        migrations.DeleteModel(
            name='Book',
        ),
    ]