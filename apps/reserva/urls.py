from django.conf.urls import url
from apps.reserva.views import index
from apps.reserva.views import reservas

urlpatterns = [
    url(r'^$', index, name='listado-reserva'),
    url(r'^reservas$', reservas, name='reservas'),
]