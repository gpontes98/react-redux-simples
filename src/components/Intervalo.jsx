import React from 'react'
import { connect } from 'react-redux'

import './Intervalo.css'
import Card from './Card/'

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosActions.js'

function Intervalo(props) {
    return (
        <Card title="Intervalo" red>
            <div className="intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={props.min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={props.max} onChange={e => props.alterarMaximo(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // Action Creator -> action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo) //Método para conectar o estado global com a propriedade do componente