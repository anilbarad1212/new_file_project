from django.shortcuts import render,redirect
from django.views.generic.base import TemplateView
from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from uuid import uuid4
from django.views.decorators.csrf import csrf_exempt
from .models import Slider_One,Slider_Two,Testimonials,Banner_Videos,Our_courses,Courses_pdf
from django.views.generic.detail import DetailView
from django.template.loader import render_to_string
from django.contrib.auth.mixins import LoginRequiredMixin
from . models import Main_Slider,Custom_User,Payments
from django.views.generic.detail import DetailView
from django.db.models import Q
from django.contrib.auth import authenticate, login
from django.utils import timezone
from django.utils.timezone import now, timedelta
from django.conf import settings
import razorpay


# Create your views here.

# Create your views here.
# def home(request):
#     return render(request,'index.html')

class HomeView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, *args,**kwargs):
        context = super().get_context_data(**kwargs)
        context['main_slider']=Main_Slider.objects.all()
        context['our_courses']=Our_courses.objects.all()
        context['slider_one']=Slider_One.objects.all()
        context['slider_two']=Slider_Two.objects.all()
        context['testimonial']=Testimonials.objects.all()
        context['banner_videos']=Banner_Videos.objects.all()
        return context
    
   

def about(request):
    return render(request,'about.html')



def course_pdf(request,id=None):
    if id:
       course=Our_courses.objects.get(id=id)
       course_pdfs=Courses_pdf.objects.filter(course=course)
       return render(request,'bookdetail.html',{'course_pdfs':course_pdfs,'course':course})





    



# def audioPlay(request):



# ---------------------
# Class Base Url format
# ---------------------
# class BookdetailView(TemplateView):
#     template_name = 'book-detail.html'
#     model = Book

class BookaudioView(TemplateView):
    template_name = 'book-audio.html'
     
class AboutView(TemplateView):
    template_name = 'about.html'

class PolicyView(TemplateView):
    template_name = 'privacy-policy.html'

class TermsView(TemplateView):
    template_name = 'terms-conditions.html'

class ContactView(TemplateView):
    template_name = 'contact.html'

class SitemapView(TemplateView):
    template_name = 'sitemap.html'

class VisionView(TemplateView):
    template_name = 'vision.html'

class LoginView(TemplateView):
    template_name = 'login.html'

class ServicesView(TemplateView):
    template_name = 'services.html'

class BookaudiocopyView(TemplateView):
    template_name = 'book-audio-copy.html'




def register_user(request):
    email=request.POST.get('email')
    password=request.POST.get('password') 
    confirm_password = request.POST.get('confirm_password')
  

    check_email=Custom_User.objects.filter(email=email).first()
    if check_email:
        message = "Email Already Exist"
        return JsonResponse({'status':404,'message':message})
    else:
        user=Custom_User.objects.create(email=email)
        user.set_password(confirm_password)
        user.save()
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')
        message = "Registerd"
        return JsonResponse({'status':400,'message':message})


 

def login_user(request):
    email=request.POST.get('email')
    password=request.POST.get('password')  
    user = authenticate(request, email=email, password=password)
    if user is not None:
        # Log in the user
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')
        message = "Login successful"
        return JsonResponse({'status': 400, 'message': message})
    else:
        message = "Invalid email or password"
        return JsonResponse({'status': 404, 'message': message})


# from django.utils.timezone import now, timedelta
# from django.http import JsonResponse
# from django.utils import timezone
# import razorpay
# from django.conf import settings
# from django.contrib.auth.decorators import login_required
# from django.views.decorators.csrf import csrf_exempt

# @login_required(login_url='/')
# def create_site_plan(request):
#     if request.method == 'POST':
#         detail_id = request.POST['detail_id']
#         path_id = request.POST['path_id']

#         print(detail_id,path_id,'_______')
#         plan_details = request.POST['my_plan']
#         price_str = request.POST['plan_price']
#         price = int(price_str.replace('₹', ''))
#         new_plan = request.POST['new_plan']
#         duration_str = request.POST['duration']
#         duration = (duration_str.replace('/', ''))

#         # check_user_plans=Site_Plans.objects.filter(user=request.user)
  

#                 if price == 4999 or price == 6999:

#                     expiry_date = now() + timedelta(days=365)
#                 else:
#                     expiry_date = now() + timedelta(days=29)

#                 amount = int(price) * 100
#                 plan_purchase_date = timezone.localtime()
#                 user = request.user
#                 client = razorpay.Client(
#                     auth=(settings.RAZORPAY_KEY, settings.RAZORPAY_SECRET_KEY))
#                 payment = client.order.create(
#                     {'amount': amount, 'currency': 'INR', 'payment_capture': '1'})
#                 call_backurls = 'succsess-plan-purchased/'
#                 key = settings.RAZORPAY_KEY
#                 plan_purchase_payment = Site_Plans.objects.create(
#                     payment_id=payment['id'], redirect_id=path_id, redirect_path=detail_id, user=user, plane_title=new_plan, plan_price=price, purchase_date=plan_purchase_date, expiry_date=expiry_date)
#                 razorcode = render_to_string('main_app/ajax/apeend-plan-purchase.html', {
#                                             'call_backurls': call_backurls, 'key': key, 'payment': payment})
#                 return JsonResponse({'raz': razorcode})

        

# @csrf_exempt
# def plan_payment_succsess(request):
#     if request.method == 'POST':
#         order_id = request.POST['order_id']
#         payment_success = Site_Plans.objects.filter(payment_id=order_id).first()
#         redirect_id = payment_success.redirect_id
#         print(redirect_id,'THIS IS REDIRECT ID ....')
#         if payment_success:
#             Site_Plans.objects.filter(payment_id=order_id).update(payment_done=True)
#             payment_success = Site_Plans.objects.get(payment_id=order_id)
#             redirect_id = payment_success.redirect_id
#             redirect_path = payment_success.redirect_path  
#             print(redirect_path,'REDIRECT PATH')
#         return JsonResponse({'message': 'ok', 'redirect_id': redirect_id, 'redirect_path': redirect_path})


class BookDetailsView(TemplateView):
    template_name = 'bookdetail.html'




def get_file_url(request):
    if request.user.is_authenticated:
        id=request.GET.get('id')
        file_already_downloaded=Payments.objects.filter(user=request.user,courses_pdf__id=id,payment_done=True).first()
        if file_already_downloaded:
            file_url=file_already_downloaded.courses_pdf.file.url
            return JsonResponse({'msg':'ok','file_url':file_url})
        else:
                course_pdf_file=Courses_pdf.objects.get(id=id)
                amount = 5 * 100
                plan_purchase_date = timezone.localtime()
                user = request.user
                client = razorpay.Client(
                    auth=(settings.RAZORPAY_KEY, settings.RAZORPAY_SECRET_KEY))
                payment = client.order.create(
                    {'amount': amount, 'currency': 'INR', 'payment_capture': '1'})
                key = settings.RAZORPAY_KEY
                plan_purchase_payment = Payments.objects.create(
                    payment_id=payment['id'], user=request.user,purchase_date=plan_purchase_date,courses_pdf=course_pdf_file)
                razorcode = render_to_string('ajax/razorpay.html', {'key': key, 'payment': payment})
                return JsonResponse({'raz': razorcode})
    else:
        return JsonResponse({'msg':'login required'})