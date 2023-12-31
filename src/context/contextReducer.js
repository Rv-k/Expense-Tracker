import transitions from "@material-ui/core/styles/transitions";

//Reducer => a function that takes in the old state, and an action => new state...
const transations = [
    { id: 1, },
    { id: 2, },
]
const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        default:
            return state;
    }
}

export default contextReducer;