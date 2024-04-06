import { Link, useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import { useState } from "react";
import { data } from "./db";

const App = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList products={products}/>} />
          <Route path="/addproduct" element={<AddProduct products={products} setProducts={setProducts}/>} />
          <Route path="/product/:id" element={<ProductDetails products={products} setProducts={setProducts}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
