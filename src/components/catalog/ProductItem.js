import React from 'react';

const ProductItem = props => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 product-item">
      <div className="card h-100">
        <a href="/">
          <img
            className="card-img-top"
            src="http://placehold.it/700x400"
            alt=""
          />
        </a>
        <div className="card-body">
          <h4 className="card-title">{props.product.title}</h4>
          <p className="card-text">{props.product.description}</p>

          <a href="/" className="btn btn-outline-success btn-sm">
            В корзину
          </a>
          <a href="/" className="btn btn-outline-primary btn-sm float-right">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
