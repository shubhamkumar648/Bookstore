import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./COMPONENT/Homepage";
import Productcard from "./COMPONENT/Productcard";
import AddtoCart from "./COMPONENT/AddtoCart";
import SingleProdcard from "./COMPONENT/SingleProdcard";

function App() {

  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prodcard" element={<Productcard />} />
          <Route path="/singleProductCard/:id" element={<SingleProdcard />} />
          <Route path="/addtocart" element={<AddtoCart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
