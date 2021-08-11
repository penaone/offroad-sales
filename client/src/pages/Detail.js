import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import Cart from '../components/Cart';
import { idbPromise } from "../utils/helpers";

import { QUERY_PRODUCTS } from "../utils/queries";
import spinner from '../assets/spinner.gif'

import { useDispatch, useSelector } from "react-redux";
import { updateProducts, removeFromCarts, addToCart, updateCartQuantity } from "../utils/store/actions";



function Detail() {
const { id } = useParams();

const [currentProduct, setCurrentProduct] = useState({})

const { loading, data } = useQuery(QUERY_PRODUCTS);

const dispatch = useDispatch();
const products = useSelector(state => state.reducer.products)
const cart = useSelector(state => state.reducer.cart)

const addToCarts = () => {
  const itemInCart = cart.find((cartItem) => cartItem._id === id)

  if (itemInCart) {
    const cartQuantity = parseInt(itemInCart.purchaseQuantity) + 1
    dispatch(updateCartQuantity(id, cartQuantity))
    // if we're updating quantity, use existing item data and increment purchaseQuantity value by one
    idbPromise('cart', 'put', {
      ...itemInCart,
      purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    });
    
  } else {
    dispatch(addToCart(currentProduct, 1))
    
    
    // if product isn't in the cart yet, add it to the current shopping cart in IndexedDB
    idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
  }
}

const removeFromCart = () => {

  dispatch(removeFromCarts(currentProduct))

  idbPromise('cart', 'delete', { ...currentProduct });
  // upon removal from cart, delete the item from IndexedDB using the `currentProduct._id` to locate what to remove
};


useEffect(() => {
  // already in global store
  if (products.length) {
    setCurrentProduct(products.find(product => product._id === id));
  } 
  // retrieved from server
  else if (data) {
    dispatch(updateProducts(data.products))
    data.products.forEach((product) => {
      idbPromise('products', 'put', product);
    });
  }
  // get cache from idb
  else if (!loading) {
    idbPromise('products', 'get').then((indexedProducts) => {
      dispatch(updateProducts(indexedProducts))
    });
  }
}, [products, data, loading, dispatch, id]);


  return (
    <>
      {currentProduct ? (
        <div className="container my-1">
          <Link to="/">
            ← Back to Products
          </Link>

          <h2>{currentProduct.name}</h2>

          <p>
            {currentProduct.description}
          </p>

          <p>
            <strong>Price:</strong>
            ${currentProduct.price}
            {" "}
            <button onClick={addToCarts}>Add to cart</button>
            <button 
  onClick={removeFromCart}
  disabled={!cart.find(p => p._id === currentProduct._id)} 
>
  Remove from Cart
</button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {
        loading ? <img src={spinner} alt="loading" /> : null
      }
      <Cart/>
    </>
  );
};

export default Detail;
