from django.conf.urls import url
from apps.filial.views import index

urlpatterns = [
    url(r'^index$', index),
]