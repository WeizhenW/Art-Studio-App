import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtItem extends Component {
    handleAddToCart = () => {
        this.props.dispatch({
            type: 'ADD_TO_CART',
            payload: this.props.painting,
        })
    }
    render() {
        return(
            <div>
                <li>
                {this.props.painting.name} - 
                {this.props.painting.description} -
                {this.props.painting.price}
                <button onClick={this.handleAddToCart}>Add</button>
                </li>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ArtItem);