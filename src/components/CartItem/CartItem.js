import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { height } from '@material-ui/system';

class CartItem extends Component {
    
    render() {
        return(
            
                <TableRow>
                    <TableCell>
                        <img src={this.props.painting['image_path'] } height="100px"/>
                    </TableCell>
                    <TableCell>                
                        {this.props.painting.name}
                    </TableCell>
                    <TableCell>
                        {this.props.painting.description}
                    </TableCell>
                    <TableCell>
                        $ {this.props.painting.price}
                    </TableCell>
                </TableRow>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(CartItem);