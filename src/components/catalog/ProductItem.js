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
          <h4 className="card-title">
            <a href="/"> {props.product.title}</a>
          </h4>
          <h5 className="float-right">{props.product.price}</h5>
          <br />
          <br />
          <a href="/" className="btn btn-outline-success btn-sm">
            Добавить в корзину
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
