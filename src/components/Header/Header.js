import React, {Component} from 'react';
import './Header.css';
import { HashRouter as Router, Link, NavLink } from 'react-router-dom';

class Header extends Component {
    render() {   
        return (
            <div>
                <header>
                <Router>
                    <Link to="/"><h1>The Art Studio</h1></Link>
                        <nav>
                                <NavLink activeClassName="active" exact to="/">Home</NavLink>
                                <NavLink activeClassName="active" to="/artlist" >Art List</NavLink >
                                <NavLink activeClassName="active" to="/cart">Cart</NavLink>
                                <NavLink activeClassName="active" to="/customerinfo">Customer Information</NavLink>
                                <NavLink activeClassName="active" to="/summary">Purchase Summary</NavLink>
                            
                        </nav>
                    </Router>
                </header>
            </div>
        )
    }
}



export default (Header);