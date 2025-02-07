import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatFriendlyDate } from "../../utils/formatDate";
import Skeleton from "../ui/Skeleton";

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
      <div className="container py-5">
        <h1 className="text-danger">Noticias</h1>
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Noticias</h2>

      {loading ? (
        <div className="row">
          {Array(itemsPerPage).fill(0).map((_, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-3 mb-4">
              <Skeleton className="h-40 w-100" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="row">
            {noticias.map((noticia) => (
              <div key={noticia.id} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="card shadow-sm h-100">
                  {noticia.imagen && (
                    <img
                      src={`http://localhost:8000${noticia.imagen}`}
                      alt={noticia.titulo}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{noticia.titulo}</h5>
                    <p className="card-text text-muted flex-grow-1">{noticia.descripcion}</p>
                    <div className="mt-auto">
                      <p className="small text-secondary">Autor: {noticia.autor}</p>
                      <small className="text-muted">{formatFriendlyDate(noticia.fecha_publicacion)}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default Noticias;
