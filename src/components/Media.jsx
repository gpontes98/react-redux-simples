import React from 'react'
import { connect } from 'react-redux'

import Card from './Card/'

function Media(props) {
    return (
        <Card title="Média" green>
            <div>
                <span>
                    Resultado:
                    <strong>{(props.min + props.max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) { //Mapeando o estado para propriedade
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media) //Método para conectar o estado global com a propriedade do componente