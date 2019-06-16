import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const styles = {
    price: {
        textAlign: "right",
    },
    button: {
        justifyContent: 'center',
    }
}

class ArtItem extends Component {
    handleAddToCart = () => {
        this.props.dispatch({
            type: 'ADD_TO_CART',
            payload: this.props.painting,
        })
    }
    render() {
        return (
            
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardHeader title={this.props.painting.name} />
                        <CardMedia
                            component="img"
                            height="300px"
                            image={this.props.painting['image_path']}
                        />
                        <CardContent>
                            {this.props.painting.description}
                        </CardContent>
                        <CardContent style={styles.price}>
                            Price: ${this.props.painting.price}
                        </CardContent>
                        <CardActions style={styles.button}>
                            <Button variant="outlined" color="primary" onClick={this.handleAddToCart}>Add</Button>
                        </CardActions>
                    </Card>
                </Grid>
        
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ArtItem);