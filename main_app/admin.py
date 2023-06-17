
from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from uuid import uuid4

from .models import Our_courses,Courses_pdf,Payments,Main_Slider,Custom_User,Testimonials,Slider_One,Slider_Two,Banner_Videos


from django.contrib.auth.models import Group

# Unregister the Group model from the admin site
admin.site.unregister(Group)




from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    model = Custom_User
    list_display = ('email', 'first_name', 'last_name',)
    list_filter = ('email',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name',)}),
        ('Permissions', {'fields': ('is_active',)}),
       
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name' ,'is_active',)}
        ),
    )
    search_fields = ('email', 'first_name', 'last_name',)
    ordering = ('email',)

admin.site.register(Custom_User, CustomUserAdmin)



# @admin.register(Book)
# class BookAdmin(admin.ModelAdmin):
#     list_display = ('book_id', 'standard', 'book_images')
#     fields = ('standard', 'book_id','sequence','book_password', 'book_descriptions','read_more_description','book_image')
#     # readonly_fields = ('book_id',)
    
#     def save_model(self, request, obj, form, change):
#         if not obj.book_id:
#             obj.book_id = str(uuid4())
#         super().save_model(request, obj, form, change)
    

#     class Media:
#         js = (
#             'https://code.jquery.com/jquery-3.6.0.min.js',
#             '/static/js/generate_uuid.js',
#         )


# class AudioAdmin(admin.ModelAdmin):
#     list_display=['id','sequence','book','audio_title','audio_file']

# admin.site.register(Audios,AudioAdmin)




            
from django.contrib import admin
from django.core.exceptions import ValidationError
from django.forms import ModelForm
from django.utils.translation import gettext_lazy as _
from PIL import Image


class SliderOneAdminForm(ModelForm):
    class Meta:
        model = Slider_One
        fields = '__all__'

    def clean_slider_image(self):
        image = self.cleaned_data.get('slider_image')
        if image:
            img = Image.open(image)
            width, height = img.size
            if width < 1920 and height < 500:
                raise ValidationError(_('The slider image must be 1920px width and 500px height.'))
        return image

class SliderOneAdmin(admin.ModelAdmin):
    form = SliderOneAdminForm
    list_display = ['slider_image']

admin.site.register(Slider_One, SliderOneAdmin)


class SliderTwoAdminForm(ModelForm):
    class Meta:
        model = Slider_Two
        fields = '__all__'

    def clean_slider_image(self):
        image = self.cleaned_data.get('slider_image')
        if image:
            img = Image.open(image)
            width, height = img.size
            if width < 1920 and height < 500:
                raise ValidationError(_('The slider image must be 1920px width and 500px height.'))
        return image

class SliderTwoAdmin(admin.ModelAdmin):
    form = SliderTwoAdminForm
    list_display = ['slider_image']

admin.site.register(Slider_Two, SliderTwoAdmin)



class TestimonialsAdmin(admin.ModelAdmin):
    list_display=['id','student_name','student_profile_images']

admin.site.register(Testimonials,TestimonialsAdmin)



# class Banner_VideosAdmin(admin.ModelAdmin):
#     list_display=['video']

# admin.site.register(Banner_Videos,Banner_VideosAdmin)





class MainSliderAdminForm(ModelForm):
    class Meta:
        model = Main_Slider
        fields = '__all__'

    def clean_slider_image(self):
        image = self.cleaned_data.get('slider_image')
        if image:
            img = Image.open(image)
            width, height = img.size
            if width < 1920 and height < 500:
                raise ValidationError(_('The slider image must be 1920px width and 500px height.'))
        return image
    
class Main_Slider_Admin(admin.ModelAdmin):
    form = MainSliderAdminForm
    list_display = ['slider_image']

admin.site.register(Main_Slider, Main_Slider_Admin)


class Our_courses_Admin(admin.ModelAdmin):
    list_display = ('course_name','course_discriptions','course_images')

admin.site.register(Our_courses, Our_courses_Admin)


class Courses_Pdf_Admin(admin.ModelAdmin):
   list_display = ('course','file_name','file')

admin.site.register(Courses_pdf, Courses_Pdf_Admin)



class Payments_Admin(admin.ModelAdmin):
   list_display = ('payment_id','user','courses_pdf','payment_done','purchase_date')

admin.site.register(Payments, Payments_Admin)

