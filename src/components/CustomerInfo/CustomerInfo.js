import React, { Component } from 'react';
import { connect } from 'react-redux';

//router
import { Link } from 'react-router-dom';

//material ui
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
    container: {
        // display: "flex",
        // flexWrap: "wrap",
        maxWidth: "90%",
        margin: "0 auto",
    },
    formControl: {
        width: 300,
        margin: "30px 20px",
    },
    nextPage: {
        height: "50px",
        maxWidth: "200px",
        marginBottom: "100px",
    },
    
}
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
        return (
            <>
                <Grid container style={styles.container} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <FormControl style={styles.formControl}>
                            <InputLabel htmlFor="name" >Customer Name</InputLabel>
                            <OutlinedInput
                                id="id"
                                value={this.props.reduxState.customerInfoReducer.name}
                                onChange={this.handleChangeFor('name')} />
                        </FormControl>
                        <FormControl style={styles.formControl} >
                            <InputLabel htmlFor="street"  >Street Address</InputLabel>
                            <OutlinedInput
                                id="street"
                                value={this.props.reduxState.customerInfoReducer.street}
                                onChange={this.handleChangeFor('street')} />
                        </FormControl>
                        <FormControl style={styles.formControl} >
                            <InputLabel htmlFor="city" >City</InputLabel>
                            <OutlinedInput
                                id="city"
                                value={this.props.reduxState.customerInfoReducer.city}
                                onChange={this.handleChangeFor('city')} />
                        </FormControl>
                        <FormControl style={styles.formControl}>
                            <InputLabel htmlFor="state" >State</InputLabel>
                            <OutlinedInput
                                id="state"
                                value={this.props.reduxState.customerInfoReducer.state}
                                onChange={this.handleChangeFor('state')} />
                        </FormControl>
                        <FormControl style={styles.formControl}>
                            <InputLabel htmlFor="zip" >Zip Code</InputLabel>
                            <OutlinedInput
                                id="zip"
                                value={this.props.reduxState.customerInfoReducer.zip}
                                onChange={this.handleChangeFor('zip')} />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FormControl component="fieldset" style={styles.formControl}>
                            {/* <FormLabel component="legend">Shipping Method:</FormLabel> */}
                            <RadioGroup
                                aria-label="Shipping"
                                name="type"
                                onChange={this.handleChangeFor('type')}
                            >
                                <FormControlLabel value="standard" control={<Radio />} label="Standard Shipping" />
                                <FormControlLabel value="express" control={<Radio />} label="Express Shipping" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <br />
                <Link to="/summary"><Button variant="contained" style={styles.nextPage} color="secondary">Next Step</Button></Link>
            </>
        )
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(CustomerInfo);