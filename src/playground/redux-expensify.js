import { createStore, combineReducer } from 'redux';

const demoState = {
    expenses: [{
        id: 'Bubba',
        description: 'pay me',
        note: 'Ok',
        amount: 54500, 
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //Date or Amount
        startDate: undefined,
        endDate: undefined
    }
};

