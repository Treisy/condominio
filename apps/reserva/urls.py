from django.conf.urls import url
from apps.reserva.views import index

urlpatterns = [
    url(r'^$', index),
]