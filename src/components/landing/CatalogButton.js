import { Link } from 'react-router-dom';
import React from 'react';

const CatalogButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <Link className="btn btn-outline-dark btn-lg" to="/catalog">
        Перейти в каталог
      </Link>
    </div>
  );
};

export default CatalogButton;
