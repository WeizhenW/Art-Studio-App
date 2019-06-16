import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';

//router
import { Link } from 'react-router-dom';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';


const styles={
    table: {
        maxWidth: "80%",
        margin: "20px auto",
    },
    nextPage: {
        height: "50px",
        maxWidth: "200px",
        marginBottom: "100px",
    },
    total: {
        fontSize: "20px",
        textAlign: "right",
        marginRight: "150px",
    }
}
class Cart extends Component {

    
    render() {
        return(
            <div>
                <Table style={styles.table}>
                    <TableHead>
                        <TableCell>Art Image</TableCell>
                        <TableCell>Art Name</TableCell>
                        <TableCell>Art Description</TableCell>
                        <TableCell>Art Price</TableCell>
                    </TableHead>
                    <TableBody>                
                    {this.props.reduxState.cartReducer.map(painting => <CartItem key={painting.id} painting={painting} />)}
                    </TableBody>
                </Table>
                <h4 style={styles.total}>
                    Total: $
                    {this.props.reduxState.cartReducer.length === 0? 
                        0 
                        : 
                        this.props.reduxState.cartReducer.reduce((acc, current) => (
                            {price: Number(acc.price) + Number(current.price)})
                        ).price
                    }
                </h4>
                <Link to="/customerinfo"><Button variant="contained" style={styles.nextPage} color="secondary">Go to Checkout</Button></Link>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Cart);