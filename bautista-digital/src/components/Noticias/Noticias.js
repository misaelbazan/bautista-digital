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
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Noticias</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Noticias</h2>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(itemsPerPage).fill(0).map((_, index) => (
            <Skeleton key={index} className="h-40 w-full" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Added responsive grid */}
            {noticias.map((noticia) => (
              <div key={noticia.id} className="w-full"> {/* Added w-full to contain card within column */}
                <Card className="shadow-lg rounded-lg overflow-hidden h-full"> {/* Added h-full to ensure consistent card height if needed */}
                  {noticia.imagen && (
                    <img
                      src={`http://localhost:8000${noticia.imagen}`}
                      alt={noticia.titulo}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4 flex flex-col h-full"> {/* Added flex flex-col and h-full for content alignment */}
                    <h3 className="text-xl font-semibold mb-2">{noticia.titulo}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{noticia.descripcion}</p> {/* Added flex-grow to push footer to bottom */}
                    <div className="mt-auto"> {/* Added mt-auto to push footer to bottom */}
                      <p className="text-sm text-gray-500">Autor: {noticia.autor}</p>
                      <small>{formatFriendlyDate(noticia.fecha_publicacion)}</small>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
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