import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        <h4>{product.rating} Stars ({product.numReviews} Reviews) </h4>
                    </li>
                    <li>
                    Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Satus: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </li>
                    <li>
                        <button>Add to CART</button>
                    </li>

                </ul>
            </div>
        </div>
       
    </div>
}

export default ProductScreen;