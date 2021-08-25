import React from 'react';
import {useState} from 'react';


function Hook_useSTATE(){
    const [name,setName]=useState({
        country:"bangladesh"
    })

    const [count,setCount]=useState(0);
    /*
    function change(){
        setName({
            country:"india"
        })
    }
    */
    const change=()=>{
        setName({
            country:"america"
        })
    }
    const Count=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <button onClick={change}>change</button>
            <h1>{name.country}</h1>
            <button onClick={Count}>count</button>
            <h1>{count}</h1>

        </div>
    );
}
export default Hook_useSTATE;