import React, { useReducer, createContext } from "react";

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 125.22, category: "Clothes", type: "Expense", date: "2023-05-08", id: "8ff93902-89f6-4d24-9862-0a34ebcbd554" }, { amount: 200, category: "Bills", type: "Expense", date: "2023-05-08", id: "41b4a45e-97a9-4e7b-911d-e80fcb89f8b8" }, { amount: 1000, category: "Salary", type: "Income", date: "2023-05-08", id: "26769636-d512-4392-9d81-464f6fef6b78" }, { amount: 5000, category: "Business", type: "Income", date: "2023-05-09", id: "1a3e152d-608d-4117-ac82-eeab0c6cd264" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) => { dispatch({ type: 'DELETE_TRANSACTION', payload: id }); }
    const addTransaction = (transaction) => { dispatch({ type: 'ADD_TRANSACTION', payload: transaction }) }

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense'? acc - currVal.amount : acc + currVal.amount, 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>

            {children}
        </ExpenseTrackerContext.Provider>
    );
}