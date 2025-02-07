import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatFriendlyDate } from '../../utils/formatDate';
import { FaFileAlt } from 'react-icons/fa';

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
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>Recursos</h2>
            <div className='row'>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    recursos.length > 0 ? (
                        recursos.map(recurso => (
                            <div key={recurso.id} className='col-md-4 mb-4'>
                                <div className='card shadow-sm p-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{recurso.titulo}</h5>
                                        <p className='card-text'>{recurso.descripcion}</p>
                                        <small className='text-muted'>{formatFriendlyDate(recurso.fecha_publicacion)}</small>
                                        <div className='text-center mt-3'>
                                            <a href={recurso.archivo} target='_blank' rel='noopener noreferrer' className='btn btn-outline-primary'>
                                                <FaFileAlt className='me-2' /> Ver archivo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center'>No hay recursos disponibles.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Recursos;
