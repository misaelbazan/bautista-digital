import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
