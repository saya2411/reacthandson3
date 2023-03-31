import React, { Component } from 'react'

export class Display extends Component {
  // eslint-disable-next-line
    constructor(props){
        super(props);
        // console.log(props)
    } 
    // --for props
  render() {
    return (
      <>
        <h1>EMPLOYEE DATA</h1>
        <div className='details'>
        {
          this.props.value.map((item,index)=>{
              console.log(item.name);
              return (
                <div className='details-entered'>
                  <h1 key={index}>Name:{item.name} | Department:{item.dept} | Rating:{item.rate}</h1>
                </div>
              )
          })
        }
        </div>
        <button onClick ={this.props.toggleFun} className='submit'>Go Back</button>
      </>
    )
  }
}

export default Display

