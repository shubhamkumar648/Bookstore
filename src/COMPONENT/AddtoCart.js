import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart,decrementCardItem,incrementCardItem } from "../redux/cartSlice";
import { useNavigate } from "react-router";

const AddtoCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.cart);

  const Deletecarditem = (item) => {
    dispatch(deleteCart(item));
  };

  return (
    <>
    <div className="d-flex  justify-content-between p-3">
    <h2>Add to cartss</h2>
    <button onClick={() => navigate("/")}>Go back </button>

    </div>
 
    <hr />
    <div style={{ display: "flex", justifyContent: "center" , alignItems: 'center', flexWrap: "wrap", gap: "10px"}}>
        
      {cartItems.map((item) => {
        return (
          <>
            <div
              key={item.id}
              style={{
                width: "15rem",
                padding: "10px",
                borderRadius: "10%",
                border: "1px solid blue",

              }}
              className="gap-3"
            >
              <h2>{item.title} </h2>
              <p>{item.author}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
              {/* <p>Qunatity: <button onClick={() => dispatch(incrementCardItem(item.id))}>+</button>{item.quantity}
              <button onClick={() =>  dispatch(decrementCardItem(item.id))}>-</button></p> */}
              <button onClick={() => Deletecarditem(item)}>Remove from Cart </button>
            </div>
          </>
        );
      })}
      {cartItems.length <=0 && <h3>No item added yet...</h3>}
    </div>
    </>
  );
};

export default AddtoCart;
