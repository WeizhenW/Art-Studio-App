import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ArtItem from '../ArtItem/ArtItem';

//router
import { Link } from 'react-router-dom';

//material ui
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

const styles = {
    grid: {
        maxWidth: '90%',
        margin: "20px auto",
    }
}

class ArtList extends Component {

    refreshList = () => {
        axios({
            method: 'GET',
            url: '/painting'
        }).then(
            response => {
                this.props.dispatch({
                    type: 'SET_PAINTING_LIST',
                    payload: response.data,
                })

            }
        )
    }

    componentDidMount() {
        this.refreshList();
    }
    render() {
        return(
            <div>
                <Grid container style={styles.grid} spacing={3}>
                        {this.props.reduxState.paintingListReducer.map( painting => <ArtItem key={painting.id} painting={painting} />)}
                </Grid>                
                <br />
                {this.props.reduxState.cartReducer.length === 0? 
                        0 
                        : 
                        this.props.reduxState.cartReducer.reduce((acc, current) => (
                            {price: Number(acc.price) + Number(current.price)})
                        ).price
                    }

                <Link to="/cart"><button>Next Step</button></Link> 

            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ArtList);