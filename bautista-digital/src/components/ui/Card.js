import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
};

export default Card;
