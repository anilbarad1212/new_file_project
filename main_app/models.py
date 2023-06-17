from django.db import models
from base.models import BaseModels
from django.utils.safestring import mark_safe
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
# from .manager import StudnetManager
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
      extra_fields.setdefault('is_staff', True)
      extra_fields.setdefault('is_superuser', True)
      # Set the default value for Standard field
      if extra_fields.get('is_staff') is not True:
          raise ValueError('Superuser must have is_staff=True.')
      if extra_fields.get('is_superuser') is not True:
          raise ValueError('Superuser must have is_superuser=True.')
      return self.create_user(email, password, **extra_fields)


class Custom_User(AbstractBaseUser,PermissionsMixin,BaseModels):

  first_name = models.CharField(max_length=50, blank=True, null=True)
  last_name = models.CharField(max_length=50, blank=True, null=True)
  email = models.EmailField(max_length=200, unique=True)
  # required
  is_staff = models.BooleanField(default=False)
  is_active = models.BooleanField(default=True)  
  is_admin = models.BooleanField(default=False)

  objects = CustomUserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELD = ['first_name', 'last_name']

  def __str__(self):
     return f'{self.email}'

  class Meta: 
        verbose_name = "User"
        verbose_name_plural = "User"
           
  









class Main_Slider(BaseModels):
    slider_image=models.ImageField(upload_to='main-slider-img')

    class Meta: 
        verbose_name = "Main Slider"
        verbose_name_plural = "Main Slider"

class Slider_One(BaseModels):
    slider_image=models.ImageField(upload_to='slider-one-img')

    class Meta: 
        verbose_name = "Slider One"
        verbose_name_plural = "Slider One"




class Slider_Two(BaseModels):
    slider_image=models.ImageField(upload_to='slider-two-img') 

    class Meta: 
        verbose_name = "Slider Two"
        verbose_name_plural = "Slider Two"   



class Testimonials(BaseModels):
    student_name=models.CharField(max_length=500)
    studnt_feedback=models.TextField()
    student_profile_images=models.ImageField(upload_to='student-profile-img')

    class Meta: 
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonial"   


class Banner_Videos(BaseModels):
    video=models.FileField(upload_to='banner-videos')

    class Meta: 
        verbose_name = "Banner Videos"
        verbose_name_plural = "Banner Videos"   





class Our_courses(BaseModels):
    course_name=models.CharField(max_length=200,blank=True,null=True)
    course_discriptions=models.TextField()
    course_images=models.FileField(upload_to='our-coursese-img',blank=True,null=True)
    

    class Meta: 
        verbose_name = "Our Corses"
        verbose_name_plural = "Our Corses"

class Courses_pdf(BaseModels):
    course=models.ForeignKey(Our_courses,on_delete=models.CASCADE,blank=True,null=True)
    file_name=models.CharField(max_length=1000,null=True,blank=True)
    file=models.FileField(upload_to='courses-files')

    class Meta: 
        verbose_name = "Pdf"
        verbose_name_plural = "Pdf"   


class Payments(BaseModels):
    payment_id=models.CharField(max_length=500,blank=True,null=True)
    redirect_id=models.IntegerField(blank=True,null=True)
    redirect_path=models.CharField(max_length=500,blank=True,null=True)
    user=models.ForeignKey(Custom_User,on_delete=models.CASCADE,blank=True,null=True)
    courses_pdf=models.ForeignKey(Courses_pdf,on_delete=models.CASCADE,blank=True,null=True)
    payment_done=models.BooleanField(default=False,null=True,blank=True)
    purchase_date=models.DateTimeField(null=True,blank=True)

    class Meta: 
        verbose_name = "Payments"
        verbose_name_plural = "Payments"   
    

   
