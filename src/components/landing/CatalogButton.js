import { Link } from 'react-router-dom';
import React from 'react';

const CatalogButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <Link className="btn btn-primary btn-lg mt-5" to="/catalog">
        Перейти в каталог
      </Link>
    </div>
  );
};

export default CatalogButton;
