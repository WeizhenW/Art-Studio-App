import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>                    
                        <Link to="/artlist">My Art List</Link>
                    </li>
                    <li>                    
                        <Link to="/blogs">My Blog</Link>
                    </li>

                </ul>
              
            </div>
        )
    }
}

export default Home;