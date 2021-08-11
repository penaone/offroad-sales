import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";


function OrderHistory() {
  
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">
          ← Back to Products
          </Link>

        {user ? (
          <>
            <h2>Order History for {user.firstName} {user.lastName}</h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    
                    <div key={index} className="card px-1 py-1">
                      <Link to="/">
                      <div className="menu-wrapper">
                      <h3>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
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
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
                      </Link>
                     
                    </div>
                    
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

      </div>

    </>)

};

export default OrderHistory;
