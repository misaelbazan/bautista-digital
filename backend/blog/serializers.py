from rest_framework import serializers
from .models import Noticia, Recurso, Testimonio

class NoticiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Noticia
        fields = ['categoria', 'titulo', 'slug', 'descripcion', 'autor', 'imagen', 'fecha_publicacion']

class RecursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recurso
        fields = ['titulo', 'categoria', 'descripcion', 'fecha_publicacion', 'autor', 'archivo']

class TestimonioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonio
        fields = ['titulo', 'contenido', 'fecha_publicacion', 'autor', 'imagen']
