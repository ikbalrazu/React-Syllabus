import React,{Component} from 'react';

class ReactState extends Component{

    constructor(){
        super()

        this.state={
            name:"iqbal"
        }
    }

    render(){
        return <div>

 <h1>{this.state.name}</h1>

</div>
    };
}
export default ReactState;