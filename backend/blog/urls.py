from django.urls import path
from .views import NoticiaListView, NoticiaDetailView, RecursoListView, TestimonioListView

urlpatterns = [
    path('noticias/', NoticiaListView.as_view(), name='noticia-list'),
    path('noticias/<int:pk>/', NoticiaDetailView.as_view(), name='noticia-detail'),
    path('recursos/', RecursoListView.as_view(), name='recurso-list'),
    path('testimonios/', TestimonioListView.as_view(), name='testimonio-list'), 
]