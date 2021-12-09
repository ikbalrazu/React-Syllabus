import React from 'react';
import {useEffect,useState} from 'react';

const Hooks_useEffect=()=>{
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");

    useEffect(() => {
        console.log("dependencies with count");
        const m = count
        document.title='count '+m;
    },[count])

    useEffect(()=>{
        console.log("without dependencies")
    })

    return(
        <div>
         <h1>Count {count}</h1>
         <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/> <br/>
         <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    );
};
export default Hooks_useEffect;