import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatFriendlyDate } from '../../utils/formatDate';

const Testimonios = () => {
  const [testimonios, setTestimonios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/testimonios/')
      .then(response => {
        setTestimonios(response.data.results || response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los testimonios', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Testimonios</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        testimonios.length > 0 ? (
          <div className="row">
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card shadow-sm">
                  {testimonio.imagen && (
                    <img src={`http://localhost:8000${testimonio.imagen}`} alt={testimonio.titulo} className="card-img-top" />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{testimonio.titulo}</h5>
                    <p className="card-text flex-grow-1">{testimonio.contenido}</p>
                    <p className="text-muted mb-1"><small>Autor: {testimonio.autor || "Anónimo"}</small></p>
                    <p className="text-muted"><small>{formatFriendlyDate(testimonio.fecha_publicacion)}</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No hay testimonios disponibles.</p>
        )
      )}
    </div>
  );
};

export default Testimonios;
