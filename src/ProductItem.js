const ProductItem = ({ product }) => {
    return (
        <div className="list-container">
            <img className="prod-img" src={product.img} alt="Image Not Loaded" />
            <p className="prod-name"> <span className="p-name">{product.productName}</span> </p>
            <p className="prod-price"><span className="price">{product.price}</span></p>
            <p className="prod-available"><span className="available">{product.available ? 'Stock In' : 'Stock Out'}</span></p>
        </div>
    )
}

export default ProductItem
