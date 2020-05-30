import React from 'react';
import Matter from './Components/Matter';
import './App.css';
import Header from './Components/Header';
import Input from './Components/Input';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div className="ludo">
      <Header />
      <Matter />
      </div>
      <Input value={this.value}/>
    </div>
  );
}}

export default App;
