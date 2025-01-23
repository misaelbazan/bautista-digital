import React from 'react';
import { Link } from 'react-router-dom';
import BillygPreaching from '../../assets/images/billyg-preaching.jpg'; 
import BillyPreaching from '../../assets/images/billy-preaching.jpg';
import RecursosComic from '../../assets/images/recursos-comic.jpg';

const SectionSummary = () => {
    return (
        <div className='container text-center py-5'>
            <h2 className='display-4 fw-bold mb-4'>Explora nuestro blog</h2>
            <div className='row'>
                <div className='col-md-4 mb-4'>
                    <div className='card'>
                        <img src={BillyPreaching} alt="Noticias" className='card-img-top'
                        style={{ backgroundSize: "cover", height: "12em"}}/>
                        <div className='card-body'>
                            <h5 className='card-title'>Noticias Locales</h5>
                            <p className='card-text'>Mantente informado sobre eventos, conferencias, campamentos y más.</p>
                            <Link to="/noticias" className='btn btn-primary btn lg'>Ver Noticias</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card'>
                        <img src={RecursosComic} alt='Recursos' className='card-img-top'
                        style={{ backgroundSize: "cover", height: "12em" }}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>Recursos</h5>
                            <p className='card-text'>Accede a estudios y literatura evangelística, y más materiales útiles.</p>
                            <a href='/recursos' className='btn btn-primary'>Ver Recursos</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-4'>
                    <div className='card'>
                        <img src={BillygPreaching} alt='Testimonios' 
                            className='card-img-top' 
                            style={{ backgroundSize: "cover", height: "12em" }} />
                        <div className='card-body'>
                            <h5 className='card-title'>Testimonios</h5>
                            <p className='card-text'>Lee historias reales de fe, conversión y avivamientos en el Perú y el mundo</p>
                            <a href='/testimonios' className='btn btn-primary'>Descubrir Testimonios</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSummary;