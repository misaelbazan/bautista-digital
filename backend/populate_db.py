import os
import django
from datetime import datetime

# Configurar el entorno de Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from blog.models import Noticia, Recurso, Testimonio

def poblar_noticias():
    noticias = [
        {
            "categoria": "Evangelismo",
            "titulo": "El Poder del Evangelio",
            "descripcion": "El evangelio tiene el poder de transformar vidas. En este artículo exploramos cómo el evangelio impacta el corazón humano.",
            "autor": "Juan Pérez",
            "imagen": "noticias/billy-preaching.jpg"
        },
        {
            "categoria": "Vida Cristiana",
            "titulo": "La Vida Cristiana: Un Camino de Transformación",
            "descripcion": "Descubre cómo la vida cristiana es un proceso continuo de crecimiento y transformación a través de la fe en Cristo.",
            "autor": "María González",
            "imagen": "noticias/billy-preaching.jpg"
        },
        {
            "categoria": "Evangelismo",
            "titulo": "La Gran Comisión: El Llamado a Predicar",
            "descripcion": "Jesús nos dejó un mandato claro: ir y hacer discípulos. Este artículo nos enseña cómo cumplir esa gran comisión.",
            "autor": "Pedro López",
            "imagen": "noticias/billy-preaching.jpg"
        },
        {
            "categoria": "Renovación Espiritual",
            "titulo": "La Oración como Herramienta de Crecimiento",
            "descripcion": "La oración es una de las herramientas más poderosas que tenemos los cristianos para crecer espiritualmente.",
            "autor": "Ana Torres",
            "imagen": "noticias/billy-preaching.jpg"
        },
        # Añadimos contenido nuevo
        {
            "categoria": "Evangelismo",
            "titulo": "El Evangelio que Transforma Corazones",
            "descripcion": "El evangelio no solo cambia pensamientos, sino que transforma el corazón humano, llevándonos a vivir una vida nueva.",
            "autor": "Lucas Martínez",
            "imagen": "noticias/billy-preaching.jpg"
        },
        {
            "categoria": "Vida Cristiana",
            "titulo": "Viviendo una Fe Activa y Viva",
            "descripcion": "Una fe activa implica una vida en constante relación con Dios. En este artículo analizamos cómo vivir una fe viva y dinámica.",
            "autor": "Clara Díaz",
            "imagen": "noticias/billy-preaching.jpg"
        },
        {
            "categoria": "Evangelismo",
            "titulo": "La Misión de Alcanzar al Mundo con el Evangelio",
            "descripcion": "El mundo necesita conocer a Cristo. ¿Cómo podemos ser parte de esa misión global para alcanzar las naciones?",
            "autor": "Carlos Gómez",
            "imagen": "noticias/billy-preaching.jpg"
        },
        {
            "categoria": "Renovación Espiritual",
            "titulo": "Creando una Vida de Disciplina Espiritual",
            "descripcion": "La disciplina espiritual es clave para crecer en la fe. Este artículo profundiza en cómo podemos implementar hábitos espirituales.",
            "autor": "Laura Mendoza",
            "imagen": "noticias/billy-preaching.jpg"
        }
    ]

    for noticia in noticias:
        Noticia.objects.create(
            categoria=noticia['categoria'],
            titulo=noticia['titulo'],
            slug=noticia['titulo'].lower().replace(' ', '-'),
            descripcion=noticia['descripcion'],
            autor=noticia['autor'],
            imagen=noticia['imagen']
        )
        print(f"Noticia '{noticia['titulo']}' creada correctamente.")

def poblar_recursos():
    recursos = [
        {
            "titulo": "Comic Evangelístico",
            "categoria": "Recursos Visuales",
            "descripcion": "Este cómic explica de manera visual y entretenida el mensaje del evangelio.",
            "autor": "José Martínez",
            "archivo": "https://example.com/comic-evangelistico.jpg"
        },
        {
            "titulo": "Guía de Oración Diaria",
            "categoria": "Espiritualidad",
            "descripcion": "Una guía que te ayudará a mantener una disciplina de oración diaria.",
            "autor": "Sofía López",
            "archivo": "https://example.com/guia-oracion.jpg"
        },
        {
            "titulo": "Devocionales para Jóvenes",
            "categoria": "Educación Cristiana",
            "descripcion": "Un devocional pensado para jóvenes que buscan profundizar en su fe.",
            "autor": "David Pérez",
            "archivo": "https://example.com/devocionales-jovenes.jpg"
        },
        {
            "titulo": "Estudio Bíblico sobre la Fe",
            "categoria": "Estudios Bíblicos",
            "descripcion": "Estudio profundo sobre el tema de la fe y cómo aplicarla en nuestra vida cotidiana.",
            "autor": "Raquel Díaz",
            "archivo": "https://example.com/estudio-biblico-fe.pdf"
        }
    ]

    for recurso in recursos:
        Recurso.objects.create(
            titulo=recurso['titulo'],
            categoria=recurso['categoria'],
            descripcion=recurso['descripcion'],
            autor=recurso['autor'],
            archivo=recurso['archivo']
        )
        print(f"Recurso '{recurso['titulo']}' creado correctamente.")

def poblar_testimonios():
    testimonios = [
        {
            "titulo": "Mi Encuentro con Cristo",
            "contenido": "Mi vida cambió cuando conocí a Cristo. Este es mi testimonio de cómo Jesús transformó mi vida.",
            "autor": "Juan Carlos",
            "imagen": "testimonios/billyg-preaching.jpg"
        },
        {
            "titulo": "Sanidad a Través de la Fe",
            "contenido": "En este testimonio, relato cómo experimenté una sanidad milagrosa al poner mi confianza en Dios.",
            "autor": "Ana María",
            "imagen": "testimonios/billyg-preaching.jpg"
        },
        {
            "titulo": "La Paz de Cristo en Tiempos de Crisis",
            "contenido": "A pesar de las dificultades, experimenté la paz que solo Cristo puede dar. Esta es mi experiencia.",
            "autor": "Carlos Andrés",
            "imagen": "testimonios/billyg-preaching.jpg"
        },
        {
            "titulo": "Restauración Familiar a Través de la Oración",
            "contenido": "Mi familia fue restaurada gracias a la oración y el poder de Dios. Aquí comparto mi testimonio.",
            "autor": "Sofía González",
            "imagen": "testimonios/billyg-preaching.jpg"
        }
    ]

    for testimonio in testimonios:
        Testimonio.objects.create(
            titulo=testimonio['titulo'],
            contenido=testimonio['contenido'],
            autor=testimonio['autor'],
            imagen=testimonio['imagen']
        )
        print(f"Testimonio '{testimonio['titulo']}' creado correctamente.")

# Ejecutamos las funciones de poblamiento de datos
poblar_noticias()
poblar_recursos()
poblar_testimonios()
