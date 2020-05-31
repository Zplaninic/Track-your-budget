import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        //   { id: 1, text: 'Flower', amount: -20, type: "hobby", color:"#90be6d"},
        //   { id: 2, text: 'Salary', amount: 1000, type: "salary", color:"#f9c74f"},
        //   { id: 3, text: 'Burger', amount: -10, type: "food", color:"#f94144"},
        //   { id: 4, text: 'Camera', amount: -150, type: "drink", color:"#f3722c"},
        //   { id: 5, text: 'Flower', amount: -20, type: "hobby", color:"#90be6d"},
        //   { id: 6, text: 'Rope', amount: -200, type: "hobby", color:"#90be6d"},
        //   { id: 7, text: 'Burger', amount: -10, type: "food", color:"#f94144" },
        //   { id: 8, text: 'Camera', amount: -150, type: "drink", color:"#f3722c"}
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