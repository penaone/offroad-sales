import React, { useEffect }from "react";
import { useQuery } from '@apollo/react-hooks';

import { idbPromise } from "../utils/helpers";


import { QUERY_PRODUCTS} from "../utils/queries";


import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../utils/store/actions";


import Cart from '../components/Cart';
import MenuCard from '../components/MenuCard';
import pdfMenu from '../assets/pdf/pdfMenu.pdf';
var buttonStyle = {
  margin: '10px 10px 10px 0'
};



const Menu = () => {
  const state = useSelector(state => state.reducer)
  // const { currentCategory } = state;
 


  const dispatch = useDispatch();
const { loading, data } = useQuery(QUERY_PRODUCTS);


useEffect(() => {
  if(data) {
    dispatch(updateProducts(data.products))
    
    data.products.forEach((product) => {
      idbPromise('products', 'put', product);
    });
  } else if (!loading) {
    idbPromise('products', 'get').then((products) => {
      dispatch(updateProducts(products))
    });
  }
}, [data, loading, dispatch]);

// function filterProducts() {
//   if (!currentCategory) {
//     console.log(state.products)
//     return state.products;
//   }
  
//   return state.products.filter(product => product.category._id === currentCategory);
// }
function filterBreakfast() {
  
  return state.products.filter(product => product.description === 'Breakfast');
}
function filterLunch() {
 
  
  return state.products.filter(product => product.description === 'Lunch');
}
function filterDessert() {
  
  return state.products.filter(product => product.description === 'Dessert');
}
  return (
    <section>
      <Cart />
        <h1 className="content-title">Our Menu</h1>
        <div className="download-menu">
          <p>or, you may <a style={buttonStyle} href={pdfMenu} download>print our menu</a></p>
        </div>
        
        <p className="sub-content-title">- Breakfast -</p>
        
        {state.products.length ? (
         <div className="menu-wrapper">
            {filterBreakfast().map(product => (
                <MenuCard
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3 className="no-products">You haven't added any products yet!</h3>
      )}


          {/* {state.map(bmenu => (
              <MenuCard
              id={bmenu.id}
              name={bmenu.name}
              price={bmenu.price}
              image={bmenu.image}
          />
          ))} */}
      

        <p className="sub-content-title">- Lunch/Dinner -</p>
        {state.products.length ? (
         <div className="menu-wrapper">
            {filterLunch().map(product => (
                <MenuCard
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3 className="no-products">You haven't added any products yet!</h3>
      )}
        

        <p className="sub-content-title">- Dessert- </p>
        {state.products.length ? (
         <div className="menu-wrapper">
            {filterDessert().map(product => (
                <MenuCard
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
            ))}
        </div>
      ) : (
        <h3 className="no-products">You haven't added any products yet!</h3>
      )}
    </section>
  );
};

export default Menu;