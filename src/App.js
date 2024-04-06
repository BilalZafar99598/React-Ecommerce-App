import { useState } from "react"
import { data } from './db'
import ProductItem from "./ProductItem";

const App = () => {
  const [products, setProducts] = useState(data);

  return (
    <main className="App">
      <ul className="product-list">
        {
          products.map((product) => (
            <li className="prod-list-items" key={product.id}>
              <ProductItem product={product} />
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default App
