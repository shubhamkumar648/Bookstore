import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Productcard = ({ item }) => {
  const [msg,setMsg] = useState(false)

  const dispatch = useDispatch();

  const { title, author, description, price, id } = item;

  const addtoCartItem = (item) => {
    console.log("add to cart btn");
    setMsg(true)
    dispatch(addToCart(item));

    setTimeout(() => {
      setMsg("")
  
    },2000)
  
  };


  return (
    <div className="d-flex justify-content-center">
      <div
        key={id}
        style={{
          height: "15rem",
          width: "15rem",
          borderRadius: "10%",
          border: "1px solid blue",
        }}
        className="gap-3"
      >

        <Link to={`/singleProductCard/${id}`}>
          {" "}
          <h2> {title} </h2>
        </Link>

        <p>{author}</p>
        <p>{description}</p>
        <p>${price}</p>
        {msg && <h5 style={{color: "red"}}>item is added in cart.....</h5>}

        <button onClick={() => addtoCartItem(item)}>Add to cart </button>

      </div>

    </div>
  );
};

export default Productcard;
