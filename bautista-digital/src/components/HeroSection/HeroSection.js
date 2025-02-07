import React from 'react';
import heroBackground from '../../assets/images/baptist-church2.jpg';

const HeroSection = () => {
    return (
        <div className='text-center text-white d-flex align-items-center justify-content-center' 
            style={{ backgroundImage: `url(${heroBackground})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='container'>
                <h1 className='display-4 fw-bold'>Bienvenidos al Ganador de Almas</h1>
                <p className='lead'>Conectando iglesias ganadoras de almas en Perú para avanzar el reino de Dios.</p>
                <a href='/noticias' className='btn btn-primary btn-lg'>Ver Noticias</a>
            </div>
        </div>
    );
};

export default HeroSection;