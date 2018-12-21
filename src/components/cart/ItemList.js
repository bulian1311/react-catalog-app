import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

export class ItemList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item => {
          return <Item key={item.product._id} item={item} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.cart.items };
};

export default connect(mapStateToProps)(ItemList);
