import React, { useEffect, useState } from 'react';
import Skeleton from '../ui/Skeleton';
import axios from 'axios';
import { formatFriendlyDate } from '../../utils/formatDate';
import { FaFileAlt } from 'react-icons/fa'; // Importamos un icono de archivo

const Recursos = () => {
  const [recursos, setRecursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/recursos/')
      .then(response => {
        setRecursos(response.data.results || response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Hubo un error al cargar los recursos', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-4">Recursos</h2>
      {loading ? (
        <Skeleton className="h-40" />
      ) : (
        recursos.length > 0 ? (
          recursos.map(recurso => (
            <div key={recurso.id} className="card mb-4 shadow-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{recurso.titulo}</h3>
                <p>{recurso.descripcion}</p>
                <small className="text-gray-500">{formatFriendlyDate(recurso.fecha_publicacion)}</small>
              </div>
              <div className="flex flex-col items-center">
                <a 
                  href={recurso.archivo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center text-blue-500 hover:text-blue-700"
                >
                  <FaFileAlt className="text-4xl mb-1" /> {/* Icono de archivo */}
                  <span className="text-sm">Haz clic para ver</span> {/* Texto adicional */}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron recursos disponibles.</p>
        )
      )}
    </div>
  );
};

export default Recursos;
