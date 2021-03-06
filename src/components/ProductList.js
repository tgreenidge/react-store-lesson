import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = {};
  render() {
    const productList = this.props.productList;
    console.log('this.props', this.props);
    const productComponents = productList.map((product, index) => {
      return (
        <Product
          productName={product.productName}
          description={product.description}
          price={product.price}
          key={index}
        />
      );
    });
    return <div>{productComponents}</div>;
  }
}

export default ProductList;
