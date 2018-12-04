import React, { Component } from 'react';
import ProductItem from './ProductItem';

export class ProductList extends Component {
  renderList = () => {};

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ProductItem
            product={{
              title: 'Test',
              description:
                'test test test test test test test test test test test test test test test test test '
            }}
          />
          <ProductItem
            product={{
              title: 'Test',
              description:
                'test test test test test test test test test test test test test test test test test '
            }}
          />
          <ProductItem
            product={{
              title: 'Test',
              description:
                'test test test test test test test test test test test test test test test test test '
            }}
          />
          <ProductItem
            product={{
              title: 'Test',
              description:
                'test test test test test test test test test test test test test test test test test '
            }}
          />
          <ProductItem
            product={{
              title: 'Test',
              description:
                'test test test test test test test test test test test test test test test test test '
            }}
          />
        </div>
      </div>
    );
  }
}

export default ProductList;
