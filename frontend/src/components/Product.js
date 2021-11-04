import React from 'react';
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;
    return (
        <div className="cardsize shadow border p-2"  key={product._id}>
            <a href={`/product/${product._id}`}>
                <img className="medium h-50" 
                src={product.image} 
                alt={product.name} />
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h4>{product.name}</h4>
                </a>
                <div className="price">₦ {product.price}</div>
            </div>
                <button href={`/product/${product._id}`} className="btn-warning btn text-white font-weight-bolder align-bottom border-radius form-control">Add To Cart</button>
        </div>
    )
};