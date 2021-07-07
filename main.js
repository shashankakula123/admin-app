
import React, { Component } from 'react'

class Main extends Component {
    constructor(props) {
        super(props)
         
        this.state = {
            showHide:false,
            showHide2:false,
            unitValue:"",
            plus:false,
            sum:"0",
            sum2:"0",
            vendor:false,
            mile:false,
            room:false,
            work:false,
            material:false,
            sum4:"0",
            sum3:"0",
            sum5:"0",
            sum6:"0",
        }
    }
    handleVendor(){
        this.setState({vendor:true})
    }
    handleMilestones(){
        this.setState({mile:true})
    }
    handleRoom(){
        this.setState({room:true})
    }
    
    handlePlus(){
        this.setState({plus:true})
    }
handleSum(e){
    this.setState({sum:this.state.sum+e.target.value})
}
handleSum2(e){
    this.setState({sum4:this.state.sum4+e.target.value})
}

handleSum3(e){
    this.setState({sum5:this.state.sum5+e.target.value})
}
    handleClick(){
        this.setState({showHide:true})
    }
   
    handleChange(e){
        this.setState({
            unitValue:e.target.value
        })
    }
     handleDelete(){
        this.setState({showHide:false})
     }
     handleMul(e){
         this.setState({sum2:this.state.sum* e.target.value})
         this.props.data(this.state.sum* e.target.value)
     }

     handleMul2(e){
        this.setState({sum3:this.state.sum4* e.target.value})
        this.props.data2(this.state.sum4* e.target.value)
    }
    handleMul3(e){
        this.setState({sum6:this.state.sum5* e.target.value})
        this.props.data3(this.state.sum5* e.target.value)
    }
     handleSubmit(){
         window.confirm('Are you sure u want to submit');
     }
     handleMaterial(){
         this.setState({plus:false})
     }
    render() {
        
        return (
            <div id="main-wrapper">
            <div id="small"><a style={{'visibility':'hidden'}}>fasf</a></div>
            <div id="main">


            
         
             
   
   
             <div className="container">
   
   
   
                <div className="root-1">
           
   
                    <h3 className="heading">Add Units</h3>
                      <p className="room">Room1</p>
                      <input  className="inputs" type="text" onBlur={this.handleChange.bind(this)}/>
                         <span className="delete">
                             <div className="unit-name">
                             <a>Unit</a>
                               <a> name</a></div>
   
   
                                <i class="fas fa-trash" onClick={this.handleDelete.bind(this)}></i>
                             
                             </span>
                             <p className="add-component" onClick={this.handleClick.bind(this)} >Add Components(s)</p>

{/* //second input */}
<br/>
{this.state.room?
<>
                             <input  className="inputs" type="text" onBlur={this.handleChange.bind(this)}/>
                         <span className="delete">
                             <div className="unit-name">
                             <a>Unit</a>
                               <a> name</a></div>
   
   
                                <i class="fas fa-trash" onClick={this.handleDelete.bind(this)}></i>
                             
                             </span>


                             <p className="add-component" onClick={this.handleClick.bind(this)} >Add Components(s)</p>
</>
:""}
                        </div>
                       
   
                        <i class="fas fa-plus" style={{'color':'#757375'}} onClick={this.handleRoom.bind(this)}></i>
   
   
   
   {/* 
   room2 */}
   
   <p className="room">Room2</p>
                      <input  className="inputs" type="text" />
                         <span className="delete">
                             <div className="unit-name">
                             <a>Unit</a>
                               <a> name</a></div>
   
   
                                <i class="fas fa-trash"></i>
                             
                             </span>
                             <p className="add-component">Add Components(s)</p>
   
   <i class="fas fa-plus" style={{'color':'#757375'}}></i>
                       
                      
   
   
   
   {/* room3 */}
   
   
   <p className="room">Room3</p>
                      <input  className="inputs" type="text" />
                         <span className="delete">
                             <div className="unit-name">
                             <a>Unit</a>
                               <a> name</a></div>
   
   
                                <i class="fas fa-trash"></i>
                             
                             </span>
                             <p className="add-component">Add Components(s)</p>
   
   <i class="fas fa-plus" style={{'color':'#757375'}}></i>
   
   <br/>
   <br/>
   <button id="save">SAVE</button>
   <br/>
   <br/>
   <button id="start"> Start Work</button>
   
   
   
   
   
   
   
   
                        </div>
                      {/* //container2 */}





         {
         
         
         this.state.showHide?
             <div className="container-2">
   
   <div className="root-1">


       <h3 className="heading"> {this.state.unitValue} Add Components</h3>
       
       
             <div id="upload"> 
          <p>Uploade Drawings/3D</p>
          <i class="fas fa-upload"></i>
               </div>

           <input type="text" style={{'width':'220px','height':'70px','margin-top':'10px','border-radius':'5px','backgroundColor':'#D1D0D1','border':'1px solid #ccc'}}/>


{/* calculator */}
<div className="calculator">
<div>
<input type="text" placeholder="Quantity"  className="quantity" onBlur={this.handleSum.bind(this)}  />
</div>
<div>
<input type="text" placeholder="Rate"  className="quantity"  onBlur={this.handleMul.bind(this)}  />
</div>
<div>
<input type="text" placeholder="Units"  className="quantity"  />
</div>
</div>

{/* rupees */}


<div className="rupee">
    <div>
<span style={{'font-size':'11px'}}><i class="fas fa-rupee-sign"></i></span><a style={{'font-size':'11px'}}  >{this.state.sum2}</a>
</div>
<p className="add-component-1" onClick={this.handleVendor.bind(this)}>Add Vendors/Material</p>


    </div>
    <i class="fas fa-plus" style={{'color':'#757375'}}></i>


       </div>

           </div>:""
      
}


{/* container-3 */}

{this.state.vendor?

<div id="container-3">
<h3 className="heading">Component-1</h3>

<div id="work">
<a onClick={  this.handlePlus.bind(this) }  style={{'cursor':'pointer'}}>Work</a>
<a onClick={this.handleMaterial.bind(this)}  style={{'cursor':'pointer'}}>Material</a>
</div>



<i class="fas fa-plus" style={{'color':'#757375','margin-top':'20px'}} onClick={  this.handlePlus.bind(this)  } ></i>


{this.state.plus?
<>
<div className="work-type">
    <h5>Work Type </h5>
    <select style={{'font-size':'10px','width':'100px','height':'20px'}} >
    <option value="only Work">only Work</option>
    </select>
</div>

<div className="work-type">
    <h5>Vendor  Category </h5>
    <select style={{'font-size':'10px','width':'100px','height':'20px'}} >
    <option value="Carpentor">Carpentor</option>
    </select>
</div>

{/* heading */}

<input type="text" id="boxing" placeholder="Heading"/>


<input type="text" id="add-desc" placeholder="Add Description"/>

 


{/* calculator-2 */}




 <div className="calculator-2">
<div>
<input type="text" placeholder="Quantity"  className="quantity-2" onBlur={this.handleSum2.bind(this)} />
</div>
<div>
<input type="text" placeholder="Rate"  className="quantity-2" onBlur={this.handleMul2.bind(this)} />
</div>
<div>
<input type="text" placeholder="Units"  className="quantity-2"  />
</div>
</div>

{/* rupees */}

<div className="rupee">
<span style={{'font-size':'11px'}}><i class="fas fa-rupee-sign"></i></span><a style={{'font-size':'11px'}}>{this.state.sum3}</a>
<p className="add-component" onClick={this.handleMilestones.bind(this)}>Add milestones</p>


    </div>
    <i class="fas fa-plus" style={{'color':'#757375'}}></i>


</>: <><div className="calculator">


<select className="quantity-m">
    <option value="Carpenter"> Carpenter</option>
</select>


<input type="text" placeholder="item"  className="quantity-m"  />

<input type="text" placeholder="specification"  className="quantity-m"  />

</div>
<div className="calculator">


<select className="quantity-m">
    <option value="Plywood"> Plywood</option>
</select>


<input type="text" placeholder="Quantity"  className="quantity-m"  onBlur={this.handleSum3.bind(this)}  />

<input type="text" placeholder="Rate"  className="quantity-m" onBlur={this.handleMul3.bind(this)} />

</div>
<div className="rupee-1">
<span style={{'font-size':'11px'}}><i class="fas fa-rupee-sign"></i></span><a style={{'font-size':'11px'}}>{this.state.sum6}</a>



    </div>
    <i class="fas fa-plus" style={{'color':'#757375'}}></i>

</>
    }
    </div>:""
}
    {/* end of contaniner-3 */}
  

  {/* container-4 */}

  {this.state.mile?

  <div className="container-4">
<h3 className="heading">Vendor-1 Milestones</h3>


<div className="vendor">
<input type="text" placeholder="Milestone"  className="quantity-3"  />
<input type="text" placeholder="%"  className="quantity-4"  />

<i class="fas fa-times" onClick={ this.handleSubmit.bind(this)}></i>
</div>
<br/>
<div className="vendor">
<input type="text" placeholder="Milestone"  className="quantity-3"  />
<input type="text" placeholder="%"  className="quantity-4"  />
<i class="fas fa-times" onClick={ this.handleSubmit.bind(this)}></i>
</div>


<i class="fas fa-plus" style={{'color':'#757375'}} ></i>

</div>:""

// endof container 4


}

   </div>
   </div>
            
        )
    }
}

export default Main