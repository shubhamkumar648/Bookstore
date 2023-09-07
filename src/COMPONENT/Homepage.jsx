import React, { useState } from "react";

// import axios from 'axios';
import { bookData } from "../bookdata";
import { Link } from "react-router-dom";
import Productcard from "./Productcard";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "./Header";
import { sortByprice } from "../redux/cartSlice";

import { sortBypriceutils } from "../Utils/sortBypriceutils";


const Homepage = () => {
  const [searchField, setSerachField] = useState("");
  const [displayData, setDisplayData] = useState(bookData);

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => {
    return state.cart.bookCart;
  });
  console.log(cartItems, "cartOne..");
   
  const searchProduct = displayData.filter((item) =>
    item.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const filterBycategory = () => {
    const result = bookData.filter((item) => item.category === "Fiction");
    setDisplayData(result);
  };

  const filterBycategory1 = () => {
    const result = bookData.filter((item) => item.category === "Non Fiction");
    setDisplayData(result);
  };

  const filterBycategoryAll = () => {
    const result = bookData.filter((item) => item.category);
    setDisplayData(result);
  };

const handleSortChange = (itemvalue) => {
  console.log(itemvalue,"itemvalue")
   dispatch(sortByprice(itemvalue))
}





sortBypriceutils(cartItems ,searchProduct)
  return (
    <div>
      <Header searchField={searchField} setSerachField={setSerachField} />
      <div className="d-flex justify-content-between p-1">
        <div className="filterCategoryContainer d-flex ">
        <p style={{ color: "red" }}>Filter By category: </p>
        <h5
          className="psudo"
           onClick={filterBycategory}

          style={{ cursor: "pointer" }}
        >
          Fictions
        </h5>
        <h5
          className="mx-3 psudo"
           onClick={filterBycategory1}

          style={{ cursor: "pointer" }}
        >
          Non Fiction{" "}
        </h5>
        <h5
          className="mx-3 psudo"
           onClick={filterBycategoryAll}

          style={{ cursor: "pointer" }}
        >
          All{" "}
        </h5>
        </div>
        <div className="sortContainer d-flex">
      <h5 style={{ color: "red" }}>Sort By Price: </h5>

        <select className = "rounded"  value={cartItems.price} onChange={e => handleSortChange(e.target.value)}>
        <option value="">Sort by</option>
        <option value="priceLowToHigh">Price:  High to low </option>
        <option value="priceHighToLow">Price: low  to High</option>
      </select>

      <div>
        <input type="radio"  />
        <input  type="radio"/>
      </div>
      </div>
      </div>
   
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          flexWrap: "wrap",
          padding: "5px",
        }}
      >
        {searchProduct.map((item) => {
          return (
            <div style={{ marginLeft: "2rem", marginTop: "4px" }}>
              <Productcard key={item.id} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
