import React from 'react';
//import React,{Component} from 'react';


function ButtonClickEvent(){
    function DoThis(a){
        alert(a);
    }
    return(
        //<button onClick={DoThis}>button from functional component</button>
        <button onClick={DoThis.bind(this,"my name is iqbal")}>button from functional component</button>

    );
}
export default ButtonClickEvent;
/*
//button click event for class component
class ButtonClickEvent extends Component{

    DoThis(){
        alert("button is clicked");
    }

    render(){
        return <div>
        
        <button onClick={this.DoThis}>button from class component</button>
        </div>
    }
}
export default ButtonClickEvent;
*/