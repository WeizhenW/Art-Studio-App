import React, { Component } from 'react';
import './Header.css';
import { HashRouter as Router, Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Art Studio</h1>
                    <nav>
                        <Router>
                            <Link to="/">Home</Link>
                            <Link to="/artlist" component={Link}>Art List</Link>
                            <Link to="/cart">Cart</Link>
                            <Link to="/customerinfo">Customer Information</Link>
                            <Link to="/summary">Purchase Summary</Link>
                        </Router>
                        
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;