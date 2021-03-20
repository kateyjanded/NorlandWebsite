import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import SearchBox from './components/SearchBox';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductDetailsScreen from './Screens/ProductDetailsScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SigninScreen from './Screens/SigninScreen';

function App() {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <button className="brand-button" onClick={openMenu}>&#9776;</button> *
                    <a  className="brand" href="/">Norland Health & Beauty</a>
                </div>
                <div className="srchbx">
                    <Route
                    render={({ history }) => (
                        <SearchBox history={history}></SearchBox>
                    )}
                    ></Route>
                </div>
                <div>
                    <Link to="/cart">Cart
                        {cartItems.length > 0 &&(
                            <span className="badge">{cartItems.length}</span>
                        )}
                    </Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            </header>

            <aside class="sidebar">
                <div>
                    <h1>CATEGORY</h1>
                    <button class="sidebar-close-button" onClick={closeMenu}>x</button>
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
            </aside>

            <main>
                <Route path="/signin" component={SigninScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/cart/:id?" component={CartScreen} ></Route>
                <Route path="/product/:id" component={ProductDetailsScreen} ></Route>
                <Route path="/" component={HomeScreen} exact></Route>
            </main>

            <footer className="row center">
                All right reserved.
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
