import React from "react";
import { idbPromise } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { removeFromCarts, updateCartQuantity } from "../../utils/store/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  // const cart = useSelector(state => state.reducer.cart)
    const removeFromCart = item => {
      dispatch(removeFromCarts(item));
      idbPromise('cart', 'delete', { ...item });
    };

const onChange = (e) => {
    const value = e.target.value;
  
    if (value <= 0) {
      dispatch(removeFromCarts(item));
        
        idbPromise('cart', 'delete', { ...item });
      } else {
      dispatch(updateCartQuantity(item._id,value));
    
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img
          src={`${item.image}`}
          alt=""
        />
      </div>
      <div className="cart-item-body">
        <div className="cart-item-name">
          <p>{item.name}, ( ${item.price}/each )</p>
        </div>
        <div className="cart-right">
          <span>{`Qty:`} </span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
            />
          <span 
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            >
            Remove
            </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;