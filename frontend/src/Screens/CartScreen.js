import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
        props.history.push(`/cart`);
    };

    const checkoutHandler = () => {
        props.history.push("/checkout?redirect=shipping");
    }
    return (
        <div className=" container">
        <h1>Shopping Cart</h1>
        <div className="row">
        <table className="table col-sm-9">
            <div className="row">
                <h2 className="col-sm-4">Items</h2>
                <h2 className="col-sm-4">Quantity</h2>
                <h2 className="col-sm-4">Price</h2>
            </div>
  <tbody>
      <tr>
      {error && <MessageBox variant="danger">{error}</MessageBox>}
                {cartItems.length === 0
                ? <MessageBox>Cart is empty. <Link to="/"><b>Go Shopping</b></Link></MessageBox>
                : (
                    <ul>
                        {
                            cartItems.map((item) => (
                                <li key={item.product}>
                                    <td  key="0"  className="col-sm-4">
                                        <img src={item.image} alt={item.name} className="small"/>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                    </td>
                                    <td key="1"  className="col-sm-4">
                                            <select value={item.qty} onChange={(e) => dispatch(addToCart((item.product), Number(e.target.value)))}>
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))}
                                            </select>
                                    </td>
                                    <td  key="2"  className="col-sm-4 h4 text-danger">
                                            ₦ {item.price}
                                    </td>
                                    <td  className="col-sm-4">
                                            <button type="button" className="btn btn-warning " id={item.product} onClick={() => removeFromCartHandler(item.product)}>
                                                Delete
                                            </button>
                                    </td>
                                </li>
                            ))
                        }
                    </ul>
                  )
                }
  </tr>
                
    
  </tbody>
</table>
            <div className="col-sm-3 top3">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                               <h2> : ₦ {cartItems.reduce((a,c) => a+c.price * c.qty, 0)}</h2>
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        
    )
};