import React, { Component } from 'react'
import Display from './Display'

export default class Com extends Component {

  state={
    name : '',
    dept: '',
    rate: ' ',
    clicked : true,
    data: []
  }

  handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  toggleFun =()=>{
    this.setState({clicked : !this.state.clicked})
  } 
  
  handleSubmit=()=>{
    const ObjData = {
      name: this.state.name,
      dept: this.state.dept,
      rate: this.state.rate
    }

    const arr = this.state.data;
    arr.push(ObjData)

    this.setState({
      data:this.state.data,
      clicked: false
    }) 

    // console.log(this.state.data)
  
  }
  render() {
    return (
      <>
       {this.state.clicked ?
         <>  
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div className='name'> Name :
            <input type="text" className='nameround' placeholder='enter name' name='name' onChange={this.handleChange}/>
          </div>
          <br />
          <div className='dept'> Department :
            <input type="text" className='deptround' placeholder='enter department' name='dept' onChange={this.handleChange}/>
          </div>
          <br />
          <div className='rating'> Rating :
            <input type="number" className='rateround' placeholder='enter rating' name='rate' onChange={this.handleChange}/>
          </div>
          <br />
          <br />
          <br />
          <button className='submit' onClick={this.handleSubmit}> Submit</button>
        </> 
        :
        <Display value={this.state.data} toggleFun = {this.toggleFun}/>
      }
      </>
    )
  }
}
