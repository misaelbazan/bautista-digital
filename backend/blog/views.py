from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .models import Noticia, Recurso, Testimonio
from .serializers import NoticiaSerializer, RecursoSerializer, TestimonioSerializer

class NoticiaListView(APIView):
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['categoria', 'autor']  # Filtrar por categoría y autor
    search_fields = ['titulo', 'descripcion', 'autor']  # Buscar por título, descripción y autor

    def get(self, request):
        try:
            noticias = Noticia.objects.all().order_by('-fecha_publicacion')
            paginator = PageNumberPagination()
            paginator.page_size = 10  # 10 noticias por página
            result_page = paginator.paginate_queryset(noticias, request)
            serializer = NoticiaSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        serializer = NoticiaSerializer(data=request.data)
        if serializer.is_valid():
            # Validación adicional para evitar duplicados de slug
            if Noticia.objects.filter(slug=serializer.validated_data['slug']).exists():
                return Response({'error': 'El slug ya existe'}, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NoticiaDetailView(APIView):
    def get(self, request, pk):
        try:
            noticia = Noticia.objects.get(pk=pk)
            serializer = NoticiaSerializer(noticia)
            return Response(serializer.data)
        except Noticia.DoesNotExist:
            return Response({'error': 'Noticia no encontrada'}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            noticia = Noticia.objects.get(pk=pk)
            serializer = NoticiaSerializer(noticia, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Noticia.DoesNotExist:
            return Response({'error': 'Noticia no encontrada'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            noticia = Noticia.objects.get(pk=pk)
            noticia.delete()
            return Response({'message': 'Noticia eliminada'}, status=status.HTTP_204_NO_CONTENT)
        except Noticia.DoesNotExist:
            return Response({'error': 'Noticia no encontrada'}, status=status.HTTP_404_NOT_FOUND)

class RecursoListView(APIView):
    def get(self, request):
        try:
            recursos = Recurso.objects.all()
            paginator = PageNumberPagination()
            paginator.page_size = 10  # 10 recursos por página
            result_page = paginator.paginate_queryset(recursos, request)
            serializer = RecursoSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class TestimonioListView(APIView):
    def get(self, request):
        try:
            testimonios = Testimonio.objects.all()
            paginator = PageNumberPagination()
            paginator.page_size = 10  # 10 testimonios por página
            result_page = paginator.paginate_queryset(testimonios, request)
            serializer = TestimonioSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
