import React from 'react';
import {useRef,useEffect} from 'react';
import Input from './Input';


const Form = () => {
    const inputRef = useRef(null);

    useEffect(()=>{
        // inputRef.current.type="text";
        // inputRef.current.placeholder="type something";
        inputRef.current.focus();
        //console.log(inputRef.current.placeholder="type something");
    },[])

    return(
        <div>
            <Input ref={inputRef} type="text" placeholder="type something"/>
        </div>
    );
};
export default Form;

//when we forward reference parent to child component then use forwardRef()