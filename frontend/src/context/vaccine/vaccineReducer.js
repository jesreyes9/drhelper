import {
    GET_VACCINE_COUNT,
} from '../types'

const vaccineReducer=(state,action)=>{
    switch(action.type){
        case GET_VACCINE_COUNT:{
            return action.payload;
        }

        default:return state;
    }
}

export default vaccineReducer;