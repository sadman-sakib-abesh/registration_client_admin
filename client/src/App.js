import React from 'react'
import axios from 'axios'
import './App.css'
class App extends React.Component{
  
 constructor(props){
   super(props)
   this.state={
     name:"",
     email:"",
     number:"",
     batch:""
   }
 }
  
  
  

  
  
  
  add=(e)=>{
  
    
var body={
  name:this.state.name,
  email:this.state.email,
  number:this.state.number,
  batch:this.state.batch
}

    
    
    
    axios.post("http://localhost:1616/api/client",body).then(response=>{
      
      console.log("success")
      this.setState({
     name:"",
     email:"",
     number:"",
     batch:""
        
      })
      alert("form submitted")
     
    }  ).catch(err=>{
        
console.log(err)
        
        
      })
    
    
  }
  
  
  
  //adding data to state
  
  change=(event)=>{
     this.setState({[event.target.name]:event.target.value})
  }
  
  
  
  render(){
    return(<div>
    <nav id="header"><center><span id="user" class="glyphicon glyphicon-user"></span></center></nav>
    <br></br><br></br>
    <center>
    
    <div id="form">
    <br></br><br></br>
   <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.change} id="field"/><br></br><br></br>
   <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.change} id="field"/><br></br><br></br>
   <input type="number" name="number" placeholder="phone no" value={this.state.number} onChange={this.change} id="field"/><br></br><br></br>
   date of birth<br></br>
   <input type="date" name="batch" value={this.state.batch} onChange={this.change} id="field"/><br></br><br></br>
      <button onClick={this.add} id="btn-bu">submit</button>
      
      </div>
      </center>
     </div> )
    
  }
  
}
export default App