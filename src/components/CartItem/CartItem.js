import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartItem extends Component {
    
    render() {
        return(
            <div>
                <li>
                {this.props.painting.name} - 
                {this.props.painting.description} -
                {this.props.painting.price}
                </li>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(CartItem);