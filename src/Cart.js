import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

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

    render() {

        const { products } = this.state;
        return (
            <div className="cart-item-list">
                { 
                products.map( (product) => {
                    return <CartItem product={product} />
                })
                }
            </div>
        )
    }
};

export default Cart;