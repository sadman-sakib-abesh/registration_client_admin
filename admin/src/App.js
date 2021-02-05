//admin 

import React from 'react';
import './App.css';
import ReactTable from './react-table'
import "./react-table/react-table.css"
import axios from "axios"

class App extends React.Component{
  
  
  
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get("http://localhost:1616/api/admin")
    .then(response=>{
      this.setState({
        data:response.data
      })
    })
    .catch(error=>{
      console.log(error)
    })
    
    
  }
  
  
  
  render(){
const columns = [{
       Header:'Id',
      accessor:'id'
        },{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Email',  
       accessor: 'email'  
       },{
      Header:"Phone no",
      accessor:"number"
       },{
         Header:"Date of birth",
         accessor:"batch"
       }
       ]  
  return (
    <div className="App">
    <br></br><br></br><center>
    <div id="form">
    <nav id="header"><center>admin</center></nav><br></br>
<ReactTable  
            data={this.state.data}  
            columns={columns}  
            defaultPageSize = {2}  
            pageSizeOptions = {[2,4, 6]}  
         />  
         </div></center>
         
    </div>
  );
  }
}

export default App;
