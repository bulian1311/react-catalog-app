import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 product-item">
      <div className="card h-100">
        <a href="/">
          <img
            className="card-img-top img-thumbnail"
            src={product.images[0].url}
            alt=""
          />
        </a>
        <div className="card-body d-flex flex-column">
          <h4 className="card-title">
            <a href="/"> {product.title}</a>
          </h4>
          <h5 className="">{product.price}</h5>

          <a
            href="/"
            className="btn btn-outline-primary btn-sm btn-block mt-auto"
          >
            Добавить в корзину
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
