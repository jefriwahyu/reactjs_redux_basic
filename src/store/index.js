import { createStore } from 'redux';

const initialState = {
    count : 10
};

const reducer =(state = initialState , action) => {
    console.log("reducer berjalan", action);
    switch(action.type){
        case "INCREMENT" :
            return Object.assign({}, state , { count : state.count + 1 });
        case "DECREMENT" :
            return Object.assign({}, state , { count : state.count - 1 });
            default:
        
    }

    return state;
}

const store = createStore(reducer);

export default store;