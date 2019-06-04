import React, { Component } from 'react'

class Operator extends Component {
    render() {
        return (
            <div>
                <select>
                    <option value="Sum">Sumar</option>
                    <option value="Subtract">Restar</option>
                    <option value="Multiply">Multiplicar</option>
                    <option value="Divide">Dividir</option>
                </select>
            </div>
        )
    }
}

export default Operator