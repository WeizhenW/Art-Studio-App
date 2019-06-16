import React, { Component } from 'react';
import { connect } from 'react-redux';

//router
import { Link } from 'react-router-dom';

class CustomerInfo extends Component {

    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_CUSTOMER_INFO',
            payload: {
                [propertyName]: event.target.value,
            }
        })
    }
    render() {
        return(
            <div>
                <input onChange={this.handleChangeFor('name')} placeholder="customer name" />
                <input onChange={this.handleChangeFor('street')} placeholder="street" />
                <input onChange={this.handleChangeFor('city')} placeholder="city" />
                <input onChange={this.handleChangeFor('state')} placeholder="state" />
                <input onChange={this.handleChangeFor('zip')} placeholder="zip" />
            
                <Link to="/summary"><button>Next Step</button></Link> 

            </div>
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(CustomerInfo);