import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20, type: "hobby"},
          { id: 2, text: 'Salary', amount: 1000, type: "salary"},
          { id: 3, text: 'Burger', amount: -10, type: "food" },
          { id: 4, text: 'Camera', amount: -150, type: "drink" },
          { id: 5, text: 'Flower', amount: -20, type: "hobby"},
          { id: 6, text: 'Rope', amount: -200, type: "hobby"},
          { id: 7, text: 'Burger', amount: -10, type: "food" },
          { id: 8, text: 'Camera', amount: -150, type: "drink" }
        ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ( {children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(id) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)

}