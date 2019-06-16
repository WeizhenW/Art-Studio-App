import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
                <h2>Art List</h2>

                {/* {this.props.reduxState.paintingListReducer.map( paint => <ArtItem />)} */}
                {JSON.stringify(this.props.reduxState.paintingListReducer, null, 2)}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ArtList);