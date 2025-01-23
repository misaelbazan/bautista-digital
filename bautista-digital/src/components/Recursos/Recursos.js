import React from 'react';

const Recursos = () => {
    const recursos = [
        { titulo: "Estudio bíblico: Evangelismo apostólico", categoria: "Estudios Bíblicos" },
        { titulo: "Biografía de David Livingstone", categoria: "Literatura Evangelística" },
        { titulo: "Prédicas recomendadas", categoria: "Recomendaciones" },
    ];

    return (
        <div className='container py-5'>
            <h2 className='text-center mb-4'>Recursos Recomendados</h2>
            <div className='row'>
                {recursos.map((recurso, index) => (
                    <div className='col-md-4 mb-4' key={index}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{recurso.titulo}</h5>
                                <p><strong>Categoría:</strong> {recurso.categoria}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recursos;
