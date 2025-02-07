import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-dark text-white py-4'>
            <div className='container text-center'>
                <p className='mb-2'>El Ganador de Almas</p>
                <p>
                    <a href='/contacto' className='text-white mx-2'>Contáctanos</a>
                    <a href='/privacidad' className='text-white mx-2'>Política de privacidad</a>
                </p>
                <p className='small'>Conectando iglesias, compartiendo el evangelio.</p>
            </div>
        </footer>
    );
};

export default Footer;
