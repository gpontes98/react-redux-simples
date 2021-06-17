import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionTypes'

// Action Creator
// Retorna uma action contendo o atributo type e payload
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}