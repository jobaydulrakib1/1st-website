import { createStore } from 'redux';

// Initial state
const initialState = {
    user: null,
    theme: 'light',
    isAuthenticated: false,
};

// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { 
                ...state, 
                user: action.payload, 
                isAuthenticated: true 
            };
        case 'LOGOUT':
            return { 
                ...state, 
                user: null, 
                isAuthenticated: false 
            };
        case 'TOGGLE_THEME':
            return { 
                ...state, 
                theme: state.theme === 'light' ? 'dark' : 'light' 
            };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
