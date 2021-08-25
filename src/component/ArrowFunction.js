import React from 'react';

/*
function ArrowFunction(){
    return(

    );
}
export default ArrowFunction;
*/
const AlertMe=(a)=>{
    alert(a)
}

const ArrowFunction=()=>{
    return(
//<h1>this is arrowfunctin</h1>
<button onClick={AlertMe.bind(this,"this is arrow function")}>click me</button>
    );
}
export default ArrowFunction;