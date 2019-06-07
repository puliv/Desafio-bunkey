import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css';



class Result extends Component {

    render() {
        return (
            <div className="calculator result">
                Resultado: <p className="calculator">{this.props.reducer.outcome}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Result);
