import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import SearchBox from './components/SearchBox';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductDetailsScreen from './Screens/ProductDetailsScreen';
import NotificationScreen from './Screens/NotificationScreen';
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
        <div className="container">
            {/* <header className="row mt-5">
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
            </header> */}
            <header className="space-between">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
  <a class="navbar-brand navbar-outline-light p-3 font-weight-bolder" href="/">Norland Health & Beauty</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
  <form class="form-inline my-2 w-50 mr-auto my-lg-0">
      <input class="form-control w-50 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
    <ul class="navbar-nav mr-auto  float-right">
      <li class="nav-item h5 font-weight-bolder my-2">
        <Link to="/" >Home</Link>
      </li>
      <li class="nav-item h5 font-weight-bolder my-2">
        <Link to="/cart" >Cart {cartItems.length > 0 &&(
                            <span className="badge badge-light">{cartItems.length}</span>
                        )}</Link>
      </li>
      <li class="nav-item h5 font-weight-bolder my-2">
        <Link to="/signin">Sign In</Link>
      </li>
      <li class="nav-item h5 font-weight-bolder my-2">
        <Link to="/notification">Notification</Link>
      </li>
    </ul>
  {/*   <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
            </header>

             {/* <aside class="sidebar">
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
            </aside> */}

            <main className="mt-5 pt-5">
                <Route path="/signin" component={SigninScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/cart/:id?" component={CartScreen} ></Route>
                <Route path="/product/:id" component={ProductDetailsScreen} ></Route>
                <Route path="/checkout" component={ProductDetailsScreen} ></Route>
                <Route path="/notification" component={NotificationScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
            </main>

            <footer className="rows center fixed-bottom">
                All right reserved.
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
