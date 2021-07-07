import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Topbar from './topbar';
import Main from './main';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boq1:"0",
      boq2:"0",
      boq3:"",
    }
    this.handleBoq=this.handleBoq.bind(this)
    this.handleBoq2=this.handleBoq2.bind(this)
    this.handleBoq3=this.handleBoq3.bind(this)
  }

  handleBoq(item){
    this.setState({boq1:item})
  }
  handleBoq2(item){
    this.setState({boq2:item})
  }
  handleBoq3(item){
    this.setState({boq3:item})
  
  }

  render() {
    return (
      <div className="App">
      <Topbar data={this.state.boq1} data2={this.state.boq2} data3={this.state.boq3}/>
      <Main data={this.handleBoq} data2={this.handleBoq2} data3={this.handleBoq3}  />
     
    </div>
    )
  }
}

export default App;