import React, { Component } from 'react';
import { connect } from 'react-redux';

//router
import { Link as RouterLink } from 'react-router-dom';

//material ui
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    avatar: {        
        margin: "50px  auto",
        width: 200,
        height: 200,
    },
    ul: {
        marginTop: 50,
        color: "grey",
    },
    paper: {
        marginTop: 0,
        marginRight: 30,
    },
    typography: {
        marginTop: 30,
        padding: 10,
    }

}

class LeftPanel extends Component {

    render() {
        return (
            <Grid container item xs={12} md={3}>                
                <Paper style={styles.paper}>
                    <Avatar
                        style={styles.avatar}
                        src="images/cards/logo.jpeg"
                        alt="logo"
                    />

                    <br />

                    <Typography style={styles.typography} variant="h5" component="h3">
                        About me:
                    </Typography>
                    <Typography style={styles.typography} component="p">
                    I was a chemistry student. After working in industry for a while, I struggle with myself for a really long time. 
                    <br />
                    I try to get my mind straight and I finally realized that I want to create in terms of painting and drawing. Although I know that I start it late, I want to keep moving forward. Even just a little bit everyday. 
                    <br />
                    I welcome you all to visit my website where I share my thoughts and tips for art and crafts. 
                    <br />
                    Thank you very much~

                    </Typography>
                </Paper>


            </Grid>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(LeftPanel);