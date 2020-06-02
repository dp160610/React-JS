import React from 'react';
import Matter from './Components/Matter';
import './App.css';
import Header from './Components/Header.js';
import Input from './Components/Input';
const docBody = document.querySelector('body');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bgColored: false};
    this.colorBackground = this.colorBackground.bind(this);
    this.clearBackground = this.clearBackground.bind(this);
  }
  colorBackground() {
    this.setState({bgColored: true});
  }
  clearBackground(){
    this.setState({bgColored: false});
  }
  componentDidUpdate(prevProps, prevState) {
    const { bgColored } = this.state;
    const className = 'redBg';

    if(prevState.bgColored !== bgColored){
      bgColored ?
        docBody.classList.add(className) :
        docBody.classList.remove(className);
    }
  }

  render(){
  return (
    <div className="App">
      <div className="ludo">
      <Header />
      <Matter />
     
      </div>
      <Input value={this.value}/>
      <button id="theme" onClick={() => this.colorBackground()}>Theme</button>
      <button id="theme" onClick={() => this.clearBackground()}>Reset</button>
    </div>
  );
}}

export default App;
