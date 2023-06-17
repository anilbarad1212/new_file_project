from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import StudentModel

class StudentCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = StudentModel
        fields = ('Standard','email', 'first_name', 'last_name',)


