import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 product-item">
      <div className="card h-100">
        <a href="/">
          <img
            style={{ height: 150, objectFit: 'cover' }}
            className="card-img-top mh-50"
            src={product.images[0].url}
            alt=""
          />
        </a>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <a href="/"> {product.title}</a>
          </h5>
          <h5 className="">{product.price}</h5>

          <div className="btn btn-outline-primary btn-sm mt-auto">
            <b>В корзину</b>
            <i className="fas fa-cart-plus fa-lg ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
