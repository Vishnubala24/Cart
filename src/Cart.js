import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {

    const { products, handleIncreaseQuantity,  handleDecreaseQuantity, handleDeleteProduct} = props;
    return (
        <div className="cart-item-list">
            { 
                products.map( (product) => {
                    return <CartItem 
                                product={product} 
                                key={product.id}
                                onIncreaseQty={handleIncreaseQuantity}   
                                onDecreaseQty={handleDecreaseQuantity} 
                                onDeleteProduct={handleDeleteProduct}
                            />
                })
            }
        </div>
    )
};

export default Cart;