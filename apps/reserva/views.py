from django.shortcuts import render

# Create your views here.

# Listado de reservas
def index (request):
    return render(request, 'reserva/index.html')


# Calendario de las reservas
def reservas (request):
    return render(request, 'reserva/reserva.html')