import React, { Component } from 'react'

class Operator extends Component {

    handleSelect = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <select onClick={this.handleSelect}>
                    <option value='+' >Sumar</option>
                    <option value='-' >Restar</option>
                    <option value='*' >Multiplicar</option>
                    <option value='/' >Dividir</option>
                </select>
            </div>
        )
    }
}

export default Operator