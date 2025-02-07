import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";
import { formatFriendlyDate } from "../../utils/formatDate";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/noticias/?page=${currentPage}`
        );
        setNoticias(response.data.results);
        setTotalNoticias(response.data.count);
        setLoading(false);
      } catch (error) {
        setError("Error al cargar las noticias.");
        setLoading(false);
      }
    };
    fetchNoticias();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalNoticias / itemsPerPage);

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Noticias</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Noticias</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(itemsPerPage).fill(0).map((_, index) => (
            <Skeleton key={index} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                {noticia.imagen && (
                  <img
                    src={`http://localhost:8000${noticia.imagen}`}
                    alt={noticia.titulo}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{noticia.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-4">{noticia.descripcion}</p>
                  <p className="text-sm text-gray-500">Autor: {noticia.autor}</p>
                  <small className="text-xs text-gray-400">{formatFriendlyDate(noticia.fecha_publicacion)}</small>
                </div>
              </Card>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 rounded transition ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Noticias;
