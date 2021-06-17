//Configurar todos os Reducers
import { createStore, combineReducers } from 'redux'

import numerosReducers from './reducers/numerosReducers' // Importando os Reducers

const reducers = combineReducers({
    numeros: numerosReducers
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig