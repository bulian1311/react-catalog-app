import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 product-item">
      <div className="card h-100">
        <Link to={{ pathname: '/details', state: { product } }}>
          <img
            style={{ height: 150, objectFit: 'cover' }}
            className="card-img-top mh-50"
            src={product.images[0].url}
            alt=""
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={{ pathname: '/details', state: { product } }}>
              {product.title}
            </Link>
          </h5>
          <h5 className="">{`${product.price} ₽`}</h5>

          <div className="btn btn-outline-primary btn-sm mt-auto">
            <i className="fas fa-cart-plus fa-lg mr-2" />
            <b>В корзину</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
