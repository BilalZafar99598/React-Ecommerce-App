import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ products, setProducts }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const id = String(products.length + 1);
    
    const myProduct = {
        id:id,
        productName,
        stockAvailale: false,
        price,
        img:image
    }

    const handleSubmit = () => {
        console.log(myProduct);
        setProducts([...products, myProduct]);
        localStorage.setItem('addproduct', JSON.stringify(myProduct));
        setProductName('');
        setPrice('');
        navigate('/');
    }

  return (
    <main>
        <h2>Add New Product</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="Product Name">Product Name</label>
            <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <br /><br />
            <label htmlFor="Price">Price</label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <br /><br />
            <label htmlFor="Image">Image</label>
            <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <br />
            <button onClick={() => handleSubmit()}>Add Product</button>
        </form>
    </main>
  )
}

export default AddProduct