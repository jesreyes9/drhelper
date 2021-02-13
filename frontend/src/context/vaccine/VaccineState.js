import {useReducer} from 'react';
import axios from 'axios'

import VaccineReducer from './vaccineReducer';
import VaccineContext from './vaccineContext';

import {
    GET_VACCINE_COUNT,
} from '../types'


const VaccineState=(props)=>{

    const count=0;

    const [state,dispatch]=useReducer(VaccineReducer,count)

    const getVaccineCount=async()=>{
        const res=await axios.get('https://dr-chrono-backend.herokuapp.com/vaccinecount')
        dispatch({
            type:GET_VACCINE_COUNT,
            payload:res.data[0].count
        })
    }

    const updateVaccineCount=async()=>{
        const res=await axios.put('https://dr-chrono-backend.herokuapp.com/vaccinecount')
        console.log(res)
    }

    return <VaccineContext.Provider value={{
        count:state,
        getVaccineCount,
        updateVaccineCount
    }}>
        {props.children}
    </VaccineContext.Provider>

}

export default VaccineState;