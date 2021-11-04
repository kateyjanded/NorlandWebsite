import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {products, loading, error} = productList;
    
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])
    return (
        <div >
            {
                loading ? (<LoadingBox></LoadingBox>)
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                :
                (
                    <>
                        <div className="row">
                        <div className="col-md-3 h5 sidebar bg-white shadow">
                                <ul>
                                    <li className ><a href="/">Health & Beauty</a></li>
                                    <li><Link  to="/">Beauty & Personal Care</Link></li>
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
                            <div className="col-md-9 d-flex flex-wrap">
                                {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                                <div className=" d-flex flex-wrap">
                                    {products.map((product) => (
                                        <Product key={product._id} product={product}></Product>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }  
        </div>
    );
}