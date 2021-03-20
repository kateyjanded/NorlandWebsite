import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {products, loading, error} = productList;
    
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])
    return (
        <div className="row top2">
            {
                loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                :
                (
                    <>
                        <div className="col">
                            <div className="card newcard">
                                <h1 className="hd">CATEGORY</h1>
                                <ul>
                                    <li><a href="/">Health & Beauty</a></li>
                                    <li><Link to="/">Beauty & Personal Care</Link></li>
                                    <li><Link to="/">Health Care</Link></li>
                                    <li><Link to="/">Medical Supplies & Equipment</Link></li>
                                    <li><Link to="/">Oral Care</Link></li>
                                    <li><Link to="/">Sexual Wellness</Link></li>
                                    <li><Link to="/">Sports Nutrition</Link></li>
                                    <li><Link to="/">Vision Care</Link></li>
                                    <li><Link to="/">Vitamins & Dietary Supplements</Link></li>
                                    <li><Link to="/">Wellness & Relaxation</Link></li>
                                    <li><Link to="/">GENDER</Link></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-2 row center card backColor">
                            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                            <div className="row center">
                                {products.map((product) => (
                                    <Product key={product._id} product={product}></Product>
                                ))}
                            </div>
                        </div>
                    </>
                )
            }  
        </div>
    );
}