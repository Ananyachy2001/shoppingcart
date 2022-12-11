import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);


    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = parseFloat(total + product.price * product.quantity);
        shipping = parseFloat(shipping + product.shipping);
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h4>Order Summary</h4>

            <p>Select Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;