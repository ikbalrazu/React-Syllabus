import logo from './logo.svg';
import './App.css';
import React from 'react';
import FunctionalComponent from './component/FunctionalComponent';
import ClassComponent from './component/ClassComponent';
import ButtonClickEvent from './component/ButtonClickEvent';
import BootstrapComponent from './component/BootstrapComponent';
import ArrowFunction from './component/ArrowFunction';
import ReactState from './component/ReactState';
import ReactDOMRender from './component/reactDOM_render';
import findDOMNODE from './component/findDOMNODE';

import Hook_useSTATE from './component/Hook_useState';
import UseState_with_object from './component/useState_with_object';
import UseState_with_array from './component/useState_with_array';

function App() {
  return (
    <div className="App">
      
      {/* <ButtonClickEvent></ButtonClickEvent>
      <FunctionalComponent name="functional component i am iqbal" age="i am 24 years old"></FunctionalComponent>
      <FunctionalComponent name="functional component i am riaz" age="i am 22 years old"></FunctionalComponent>
      <BootstrapComponent></BootstrapComponent>
      <ArrowFunction/> 

      <ReactDOMRender/>
      <ReactState></ReactState>
      <ClassComponent name="class component i am iqbal" age="i am 24 years old"></ClassComponent>
      <ClassComponent name="class component i am iqbal" age="i am 24 years old"></ClassComponent> 

      <Hook_useSTATE></Hook_useSTATE> 
      <UseState_with_object/> */}
      <UseState_with_array/>

      
    </div>
  );
}

export default App;
