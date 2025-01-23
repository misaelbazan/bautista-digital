import React from "react";

const Noticias = () => {
    const noticias = [
        {
            categoria: "Campamentos",
            titulo: "Campamento de Jóvenes en Lima 2025: Despojémonos",
            descripcion: "Joven, conformate a la imagen de Cristo"
        },
        {
            categoria: "Evangelismo",
            titulo: "Campaña evangelística en La Victoria",
            descripcion: "Gran campaña en la Iglesia Bautista Metropolitana.",
        },
    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Noticias</h2>
            <div className="row">
                {noticias.map((noticia, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{noticia.titulo}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{noticia.categoria}</h6>
                                <p className="card-text">{noticia.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Noticias;