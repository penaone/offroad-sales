import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { idbPromise } from "../../utils/helpers";

import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity, addToCart } from "../../utils/store/actions";

function ProductItem(item) {
  const dispatch = useDispatch();
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;


  const cart = useSelector(state=> state.reducer.cart)

  const addToCarts = (e) => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      const cartItem = itemInCart.purchaseQuantity + 1
      dispatch(updateCartQuantity(_id, cartItem ))
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch(addToCart(item, 1));
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCarts}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
