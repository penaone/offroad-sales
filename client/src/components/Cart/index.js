import React, { useEffect } from "react";
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/react-hooks';

import { useDispatch, useSelector } from "react-redux";
import { addMultipleToCart, toggleCart } from "../../utils/store/actions";
import { idbPromise } from "../../utils/helpers";
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  
    const dispatch = useDispatch()
    const cart = useSelector(state=> state.reducer.cart)
    const cartOpen = useSelector(state=> state.reducer.cartOpen)
 
    
    
    
    
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
    
    useEffect(() => {
      async function getCart() {
        const carts = await idbPromise('cart', 'get');
    
        dispatch(addMultipleToCart(carts));
      };
      
      if (!cart.length) {
        getCart();
      }
    }, [cart.length, dispatch]);
    
    useEffect(() => {
      if (data) {
        stripePromise.then((res) => {
          res.redirectToCheckout({ sessionId: data.checkout.session });
        });
      }
    }, [data]);


function calculateTotal() {
    let sum = 0;
    cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2)
}

function submitCheckout() {
  const productIds = [];

  getCheckout({
    variables: { products: productIds }
  });

  cart.forEach((item) => {
    for (let i = 0; i < item.purchaseQuantity; i++) {
      productIds.push(item._id);
    }
  });
}

if (!cartOpen) {
    return (
      <div className="cart-closed" onClick={ () =>  dispatch(toggleCart())}>
        <span
          role="img"
          aria-label="trash"><i className="fa fa-shopping-cart cart-i" aria-hidden="true"></i>
          </span>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      <div className="close" onClick={ () =>  dispatch(toggleCart())}><i class="fa fa-times" aria-hidden="true"></i></div>
      <h2>Your Order</h2>
      {cart.length ? (
        <div>
          <div className="cart-item-wrapper">
            {cart.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          
          <div className="cart-bottom">
            <strong>Total: ${calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
            <button onClick={submitCheckout}>
              Checkout
            </button>
              :
            <span>(log in to check out)</span>
            }
          </div>
    </div>
  ) : (
    <h3 className="no-products">
      Your order is empty!
    </h3>
  )}
</div>
  );
};

export default Cart;