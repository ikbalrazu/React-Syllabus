import React, {Component} from 'react';
import ReactDOM from 'react-dom'; //npm install react react-dom


class ReactDOMRender extends Component{


    myfun(){

        //container
        var container = document.getElementById("msg")
    
        //element
        var element = <h1>this is from render method</h1>
        
        //callback
        ReactDOM.render(element,container,);
    
    }



    render(){
        return(
        <div>
            <button onClick={this.myfun}>change</button>
            <h1 id="msg">This is iqbal</h1>
        </div>
        );
       
    }
}
export default ReactDOMRender;