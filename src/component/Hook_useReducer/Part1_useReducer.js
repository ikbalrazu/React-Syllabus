//useReducer use here alternative of useState
import { useReducer} from "react";

const initialState = 0;
const reducer = (state,action) =>{
    switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default:
            return state;
    }
}

export default function Part1_useReducer(){
    const [count,dispatch] = useReducer(reducer, initialState); // useReducer fuction initialize with two argument reducer and initialstate.
                                                            // here reducer function return two arguments state and action
                                                            //and finally useReducer return two things count or value and dispatch
    return(
        <div>
            <div>Count - ({count})</div>
            <button type="button" onClick={()=> dispatch('increment')}>Increment</button>
            <button type="button" onClick={()=> dispatch('decrement')}>Decrement</button>

        </div>
    );
};
