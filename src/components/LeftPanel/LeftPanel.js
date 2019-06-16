import React, { Component } from 'react';
import { connect } from 'react-redux';

//router
import { Link as RouterLink } from 'react-router-dom';

//material ui
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';


const styles = {
    avatar: {
        marginTop: 50,
        justify: "center",
        width: 200,
        height: 200,
    },
    ul: {
        marginTop: 50,
        color: "grey",
    }
    
}

class LeftPanel extends Component {

    render() {
        return (
                    <Grid container  item xs={12} md={3}>
                        <Avatar
                            style={styles.avatar}
                            src="images/cards/logo.jpeg"
                            alt="logo"
                        />
                       
                        
                        {/* <ul>
                            <li>
                                <Link to="/artlist" component={RouterLink}>
                                    Art List
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" component={RouterLink}>
                                    Cart
                                 </Link>
                            </li>
                            <li>
                                <Link to="/customerinfo" component={RouterLink}>
                                    Customer Information
                                </Link>
                            </li>
                            <li>
                                <Link to="summary" component={RouterLink}>
                                    Purchase Summary
                                </Link>
                            </li>
                        </ul> */}
                    </Grid>          
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(LeftPanel);