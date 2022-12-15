const Product = function(){
    const price = 0;
    return(
        <div className="w3-container">
        <div className="w3-card">
            <img className="w3-image" src="../../default_product_image.jpg" alt="Product Image"/>
            <h3>Product Title</h3>
            <p>{price}</p>
        </div>
        </div>
    );
}

export default Product;