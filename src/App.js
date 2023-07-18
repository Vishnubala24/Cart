import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';

class App extends React.Component {
  
    constructor() {
      super();
      this.state = {
          products: [
              {
                  id: 1,
                  price: 12999,
                  title: 'Phone',
                  qty: 1,
                  img: 'https://m.economictimes.com/thumb/msid-93747525,width-1200,height-900,resizemode-4,imgsize-45376/iphone-14-max-iphone-14-pro-max-see-which-apple-phones-demand-scaling-new-heights.jpg'
              },
              {
                  id: 2,
                  price: 899,
                  title: 'Watch',
                  qty: 1,
                  img: 'https://m.economictimes.com/thumb/msid-93747525,width-1200,height-900,resizemode-4,imgsize-45376/iphone-14-max-iphone-14-pro-max-see-which-apple-phones-demand-scaling-new-heights.jpg'
              },{
                  id: 3,
                  price: 9999,
                  title: 'Laptop',
                  qty: 1,
                  img: 'https://m.economictimes.com/thumb/msid-93747525,width-1200,height-900,resizemode-4,imgsize-45376/iphone-14-max-iphone-14-pro-max-see-which-apple-phones-demand-scaling-new-heights.jpg'
              },
          ]
      }
  }

  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;

      this.setState({ products: products});
  }

  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty <=0 )
          return;

      products[index].qty -= 1;

      this.setState({ products: products});
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter(item => item.id !== id);
      this.setState({products: items});
  }

  getCount = () =>{
    let count = 0;
    const {products} = this.state;

    products.forEach( (product) => count += product.qty);

    return count;
  }

  getTotal = () =>{
    let total = 0;
    const {products} = this.state;

    products.forEach( (product) => total += product.price * product.qty);

    return total;
  }

  render() {
        return (
        <div className="App">
          <NavBar 
            count={this.getCount()}
          />
          <Cart 
            products={this.state.products}
            handleIncreaseQuantity={this.handleIncreaseQuantity}   
            handleDecreaseQuantity={this.handleDecreaseQuantity} 
            handleDeleteProduct={this.handleDeleteProduct}
          />
          <div style={styles.textStyle}>TOTAL: {this.getTotal()}</div>
        </div>
      );
    }
}

const styles = {
  textStyle: {
      fontWeight: 'bold',
      marginTop: 20,
      marginLeft: 400
  }
}

export default App;
