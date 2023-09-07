import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { bookData } from '../bookdata';

export const Header = ({setSerachField,searchField}) => {
    const cartItems = useSelector((state) => {
        return state.cart.cart;
      });

      console.log(cartItems.length);

  return (
    <div>
          <div
        className="headerComponent"
        style={{
          border: "1px solid black",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
       <Link to="/"> <h1>Book store</h1></Link> 
        <input
          placeholder="search By Name"
          style={{ height: "20px", marginTop: "30px" }}
          value={searchField}
          onChange={(e) => setSerachField(e.target.value)}
        />
        <Link to="/addtocart">
          <button
            style={{
              height: "10px",
              backgroundColor: "blue",
              marginTop: "15px",
              height: "2rem",
              color: "white",
            }}
          >
            Cart item{cartItems.length}
            
          </button>
        </Link>
      </div>
    </div>
  )
}
