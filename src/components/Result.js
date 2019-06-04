import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div>
                resultado es: <p>{this.props.reducer}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Result);
