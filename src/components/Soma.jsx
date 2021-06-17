import React from 'react'
import { connect } from 'react-redux'

import Card from './Card/'

function Soma(props) {
    return (
        <Card title="Soma" blue>
            <div>
                <span>
                    Resultado:
                    <strong>{props.min + props.max}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) { 
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Soma) //Método para conectar o estado global com a propriedade do componente