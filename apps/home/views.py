from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.contrib.auth.decorators import login_required
from django.template import RequestContext

# Create your views here.

@login_required
def index(request):
    return HttpResponseRedirect('/home/index');

@login_required
def logged_in(request):
    return render_to_response('logged_in.html',
        context_instance=RequestContext(request)
    )