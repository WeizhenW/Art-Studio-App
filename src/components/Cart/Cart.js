import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';

class Cart extends Component {
    render() {
        return(
            <div>
                {this.props.reduxState.cartReducer.map(painting => <CartItem key={painting.id} painting={painting} />)}

            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Cart);