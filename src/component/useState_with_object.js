import React from 'react';
import {useState} from 'react';

function UseState_with_object(){
    const [info,setInfo]=useState({
        name:"",
        id:""
    })
    return(
        <div>
            <form>
                <label>Name</label>
                <input value={info.name} onChange={(event)=>setInfo({...info,name:event.target.value})}/> <br></br> <br></br>
                <label>Id</label>
                <input value={info.id} onChange={(event)=>setInfo({...info,id:event.target.value})}/>
            </form>
            <p>Your name is {info.name} </p>
            <p>Your id is {info.id}</p>

        </div>
    );
}
export default UseState_with_object;