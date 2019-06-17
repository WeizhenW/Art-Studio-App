import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';



//material ui
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const styles = {
    div: {
        margin: "20px auto",
        maxWidth: "80%",
    },
    paper: {
        width: "100%",
        padding: "10%",
    },
    total: {
        fontSize: "20px",
        textAlign: "right",
        marginRight: "100px",
    },
    nextPage: {
        height: "50px",
        maxWidth: "200px",
        marginBottom: "100px",
    },
}


class PurchaseSummary extends Component {

    handlePayment = () => {
        axios({
            method: 'POST',
            url: '/order',
            data: {
                name: this.props.reduxState.customerInfoReducer.name,
                street: this.props.reduxState.customerInfoReducer.street,
                city: this.props.reduxState.customerInfoReducer.city,
                zip: this.props.reduxState.customerInfoReducer.zip,
                state: this.props.reduxState.customerInfoReducer.state,
                type: this.props.reduxState.customerInfoReducer.type,
                total: this.props.reduxState.cartReducer.reduce((acc, current) => (
                    {price: Number(acc.price) + Number(current.price)}).price
                ),
            }
        })
    }
    render() {
        return(
            <div style={styles.div}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} md={4}>
                        <Paper style={styles.paper}>
                            <h3>
                                Customer Address:
                                <br />
                                {this.props.reduxState.customerInfoReducer.name}
                                <br />
                                {this.props.reduxState.customerInfoReducer.street}
                                <br />
                                {this.props.reduxState.customerInfoReducer.city}
                                <span>  </span>
                                {this.props.reduxState.customerInfoReducer.state}
                                <span>  </span>
                                {this.props.reduxState.customerInfoReducer.zip}
                                <br /><br />
                                {this.props.reduxState.customerInfoReducer.type === "express"?
                                'Express Shipping'
                                :
                                'Standard Shipping'
                                }
                            </h3>
                        </Paper>     
                    </Grid>
                    <Grid contain item xs={12} md={8}>
                        {this.props.reduxState.cartReducer.map(painting => <CartItem key={painting.id} painting={painting} />)}
                    

                <br />
                <h4 style={styles.total}>
                    Total: 
                    $ {this.props.reduxState.cartReducer.length === 0? 
                            0 
                            : 
                            this.props.reduxState.cartReducer.reduce((acc, current) => (
                                {price: Number(acc.price) + Number(current.price)})
                            ).price
                    }
                </h4>
                    </Grid>
                </Grid>
                <Link to="/"><Button onClick={this.handlePayment} variant="contained" style={styles.nextPage} color="secondary">Payment</Button></Link>

            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(PurchaseSummary);