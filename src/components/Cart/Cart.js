import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';

//router
import { Link } from 'react-router-dom';

class Cart extends Component {

    
    render() {
        return(
            <div>
                {this.props.reduxState.cartReducer.map(painting => <CartItem key={painting.id} painting={painting} />)}
                <h4>
                    Total: 
                    {this.props.reduxState.cartReducer.length === 0? 
                        0 
                        : 
                        this.props.reduxState.cartReducer.reduce((acc, current) => (
                            {price: Number(acc.price) + Number(current.price)})
                        ).price
                    }
                </h4>
                <Link to="/customerinfo"><button>Next Step</button></Link>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Cart);