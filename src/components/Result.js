import React, { Component } from 'react'
import { connect } from 'react-redux'


class Result extends Component {

    render() {
        return (
            <div>
                resultado<p>{this.props.outcome}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Result);
