import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtItem extends Component {

    render() {
        return(
            <div>
                <li>{this.props.painting.name} - {this.props.painting.price}</li>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ArtItem);