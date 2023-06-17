"""
URL configuration for eduindia project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.HomeView.as_view(),name='home'),
    path('register/',views.register_user,name='register'),
    path('login-user/',views.login_user,name='login-user'),
    path('courses-pdf/<int:id>/',views.course_pdf,name="courses-pdf"),
   


    # ---------------------
    # Class Base Url format
    # ---------------------
    path('about/',views.AboutView.as_view(),name='about'),
    path('privacy-policy/',views.PolicyView.as_view(),name='privacy-policy'),
    path('terms-conditions/',views.TermsView.as_view(),name='terms-conditions'),
    path('contact/',views.ContactView.as_view(),name='contact'),
    path('sitemap/',views.SitemapView.as_view(),name='sitemap'),
    path('vision/',views.VisionView.as_view(),name='vision'),
    path('services/',views.ServicesView.as_view(),name='services'),

    
    # path('audioplay/',views.AudioPlayView.as_view(),name='audioplay'),
    path('bookdetails/',views.BookDetailsView.as_view(),name='bookdetails'),

    path('get-file-url/',views.get_file_url,name='get-file-url'),
    
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)