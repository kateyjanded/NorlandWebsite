import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductDetailsScreen(props) {
    const productDetails = useSelector(state => state.productDetails);
    const [qty, setQty] = useState(1);
    const {product, loading, error} = productDetails;
    const productId = props.match.params.id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);


    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    return (
        <div className="hm">
            {
                loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                :
                (
            <div>
                <Link className="h5" to="/">Back to Home Page</Link>
                <div className="row top2">
                    <div className="col-sm-3">
                        <img className="large border border-radius" src={product.image} alt={product.name}></img>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <h3>Price: ₦ {product.price}</h3>
                            </li>
                            <li>
                                <h3>Description:</h3>
                                <p className="h5">{product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="rows">
                                        <div>Price</div>
                                        <div className="price">₦ {product.price}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="rows">
                                        <div>Status</div>
                                        <div>
                                            {
                                            product.countInStock > 0 ? (<span className="success">In Stock</span>)
                                            : 
                                            (<span className="error">Unavailable</span>)
                                            }
                                        </div>
                                    </div>
                                </li>
                                {
                                    product.countInStock > 0 && (
                                        <>
                                            <li>
                                                <div className="rows">
                                                    <div>Qty</div>
                                                    <div>
                                                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                        )
                                                                    )}
                                                                </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                                            </li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
                )
            }   
        </div>
        
    )
};