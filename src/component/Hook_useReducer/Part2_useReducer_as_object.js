import {useReducer} from 'react';

const initialState = {
    counter: 0,
    counter2:0,
};
const reducer = (state,action) =>{
    switch(action.type){
        case "increment":
            return {...state,counter: state.counter + action.value};
        case "decrement":
            return {...state,counter: state.counter - action.value};
        case "increment2":
            return {...state,counter2: state.counter2 + action.value};
        case "decrement2":
            return {...state,counter2: state.counter2 - action.value};
        default:
            return state;
    }
}

export default function Part2_useReducer_as_object(){

    const [count,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            <div>part-2 Count - ({count.counter})</div>
            <button type="button" onClick={()=>dispatch({
                type: 'increment',
                value: 2,
            })}>Increment by 2</button>
            <button type="button" onClick={()=>dispatch({
                type: 'decrement',
                value: 1,
            })}>Decrement by 1</button>
            <div>Count - ({count.counter2})</div>
            <button type="button" onClick={() => dispatch({
                type:'increment2',
                value:10,
            })}>Increment by 10</button>
            <button type="button" onClick={()=>dispatch({
                type:"decrement2",
                value:5,
            })}>Decrement by 5</button>
        </div>
    );
};