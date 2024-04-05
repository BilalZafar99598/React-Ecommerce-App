import { useState } from "react"
import { data } from './db'
const App = () => {
  const [products, setProducts] = useState(data);

  return (
    <main className="App">
      <ul className="product-list">
        {
          products.map((product) => (
            <li className="prod-list-items">
              <div className="list-container">
                <img className="prod-img" src={product.img} alt="Image Not Loaded" />
                <p className="prod-name">{product.productName}</p>
                <p className="prod-price"><span className="price">{product.price}</span></p>
                <p className="prod-available"><span className="available">{product.available ? 'Stock In' : 'Stock Out'}</span></p>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default App
