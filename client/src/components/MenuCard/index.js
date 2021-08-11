
import { idbPromise } from "../../utils/helpers";

import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity, addToCart } from "../../utils/store/actions";

function MenuCard(props) {
    const dispatch = useDispatch();
  const {
    image,
    name,
    _id,
    price
  } = props;


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
      dispatch(addToCart(props, 1));
      idbPromise('cart', 'put', { ...props, purchaseQuantity: 1 });
    }
  }
    return (
        <div className="menu-card-wrapper">
            <div className="menu-card">
                <div className="menu-item-img">
                    <img src={image} alt={name}/>
                </div>
                <div className="menu-item-body">
                    <div className="menu-item-title">
                        <p>{name}</p>
                    </div>
                    <div className="menu-item-price">
                        <p>{price}</p>
                    </div>
                    <div className="menu-item-link">
                        <button onClick={addToCarts} >Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;