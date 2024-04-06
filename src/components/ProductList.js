import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
    // const [products, setProducts] = useState(data);

    return (
        <main className="App">
            <ul className="product-list">
                {
                    products.map((product) => (
                        <li className="prod-list-items" key={product.id}>
                            <div className="list-container">
                                <img className="prod-img" src={product.img} alt="Image Not Loaded" />
                                <p className="prod-name"> <span className="p-name">
                                <Link to={`product/${product.id}`}>
                                    {product.productName}
                                </Link>
                                </span> </p>
                                <p className="prod-price"><span className="price">{product.price}</span></p>
                                {/* <p className="prod-available"><span className="available">{product.stockAvailale ? 'Stock In' : <span className="out">Stock Out</span>}</span></p> */}
                                <p className="prod-available"><span>{product.stockAvailale ? <span className="stock-in">Stock In</span> : <span className="stock-out">Stock Out</span>}</span></p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default ProductList
