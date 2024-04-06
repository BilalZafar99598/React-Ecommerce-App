import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(prod => (prod.id).toString() === id);

  const handleDelete = (pid) => {
      setProducts(products.filter((product)=> product.id !== pid));
      navigate('/')
  }

  return (
    <main className="Product-Details">
      <div className="list-container">
        <img className="prod-img" src={product.img} alt="Image Not Loaded" />
        <p className="prod-name"> <span className="p-name"> {product.productName} </span> </p>
        <p className="prod-price"><span className="price">{product.price}</span></p>
        <p className="prod-available"><span className="available">{product.available ? 'Stock In' : 'Stock Out'}</span></p>
        <button className='btn-delete' onClick={() => handleDelete(product.id)}>Delete Product</button>
      </div>
    </main>
  )
}

export default ProductDetails
