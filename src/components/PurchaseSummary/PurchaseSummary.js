import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';

class PurchaseSummary extends Component {
    render() {
        return(
            <div>
                {this.props.reduxState.customerInfoReducer.name}
                <br />
                {this.props.reduxState.customerInfoReducer.street}
                <br />
                {this.props.reduxState.customerInfoReducer.city}
                <br />
                {this.props.reduxState.customerInfoReducer.state}
                <br />
                {this.props.reduxState.customerInfoReducer.zip}
                <br />
                {this.props.reduxState.customerInfoReducer.type}

                {this.props.reduxState.cartReducer.map(painting => <CartItem key={painting.id} painting={painting} />)}

                {this.props.reduxState.cartReducer.length === 0? 
                        0 
                        : 
                        this.props.reduxState.cartReducer.reduce((acc, current) => (
                            {price: Number(acc.price) + Number(current.price)})
                        ).price
                    }
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(PurchaseSummary);