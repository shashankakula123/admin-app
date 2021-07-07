import React, { Component } from 'react'
import App from './App';
class Topbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id="topbar"> 
            <div id="empty">
                <p>fdfsggsgd</p>
            </div>
       
       
            <div id="top-wrapper">
           <div id="left">
            <i class="fas fa-chevron-left"></i>
            <a>Blank</a>
            </div>
       
       
       <div id="right">
           <a className="boq">BOQ Total {this.props.data}/-</a>
           <a className="boq">Project Total {this.props.data2+this.props.data3}/-</a>
         <span>  <a className="boq">BOQ </a> <i class="fas fa-download "></i></span>
           
          
       
       </div>
       </div>
       
               </div>
        )
    }
}

export default Topbar
