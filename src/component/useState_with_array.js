import React from 'react';
import {useState} from 'react';

function UseState_with_array(){
    const [list,setList]=useState([1,6,3,4,5,7,8])
    /*
    const generatelist=()=>{
        setList([...list, {

            id:
            value:

        }])
    }*/
    return(
        <div>
            <ul>

                {
                    list.map((list,index) => {
                        return <li>{list}</li>
                    })
                }
            
            </ul>

            

        </div>
    );
}
export default UseState_with_array;
