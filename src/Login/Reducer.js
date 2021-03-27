import actions from './Action';

const initialState = {};

const Reducer = (state = initialState, {type,playload}) => {
      
    switch(type) {
        case actions.STORE_USER:
            return state;
         default:
             return state;
    }
}

export default Reducer;