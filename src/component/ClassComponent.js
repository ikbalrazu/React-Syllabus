import React,{Component} from 'react';

class ClassComponent extends Component{
    render(){
        return <h1>{this.props.name} {this.props.age}</h1>
    }

}
export default ClassComponent; 