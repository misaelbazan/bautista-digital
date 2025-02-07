from django.db import models
from django.utils.text import slugify  # Importar slugify

class Noticia(models.Model):
    categoria = models.CharField(max_length=100)
    titulo = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    descripcion = models.TextField()
    autor = models.CharField(max_length=50, null=True)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)
    imagen = models.ImageField(upload_to='noticias/', null=True, blank=True) 

    def __str__(self):
        return self.titulo

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.titulo)  # Generar slug automáticamente
        super().save(*args, **kwargs)

class Recurso(models.Model):
    titulo = models.CharField(max_length=100)
    categoria = models.CharField(max_length=40)
    descripcion = models.TextField(blank=True)
    fecha_publicacion = models.DateTimeField(auto_now_add=True)
    autor = models.CharField(max_length=50, null=True)
    archivo = models.URLField(null=True, blank=True)  # Nuevo campo para subir URLs

    def __str__(self):
        return self.titulo

class Testimonio(models.Model):
    titulo = models.CharField(max_length=100)
    contenido = models.TextField()
    fecha_publicacion = models.DateTimeField(auto_now_add=True)
    autor = models.CharField(max_length=50, null=True)
    imagen = models.ImageField(upload_to='testimonios/', null=True, blank=True)  # Cambia a URLField

    def __str__(self):
        return self.titulo