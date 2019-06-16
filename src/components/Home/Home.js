import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//material ui
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
    card: {
        maxWidth: "75%",
        margin: "60px auto",
    }
}

class Home extends Component {
    render() {
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card style={styles.card}>
                            <CardHeader
                                title="My Art List"
                            />
                            <CardMedia
                                component="img"
                                image="images/cards/boat.jpg"
                                title="boat"
                            />
                            <CardActions disableSpacing>
                                <Link to="/artlist">
                                    <Button size="small">Enter</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card style={styles.card}>
                            <CardHeader
                                title="My Blogs"
                            />
                            <CardMedia
                                component="img"
                                image="images/cards/blogs.png"
                                title="blogs"
                            />
                            <CardActions disableSpacing>
                                <Link to="/blogs">
                                    <Button size="small">Enter</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default Home;