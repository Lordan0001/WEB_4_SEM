import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Time: 0
    };
      this.nowTime = this.nowTime.bind(this);

  }
  nowTime(){
    this.setState(state=>({
      Time: new Date().toLocaleTimeString()
    }))



  }


  render() {
    return (
      
        
      <div>
        <div>
          <button className='firstButton'  onClick={this.nowTime}>nowTime</button>

      

            



          <h1>Time: {this.state.Time}</h1>

        </div>
        {/* <h1>qwerty {new Date().toLocaleTimeString()}</h1> */}
      </div>
    )
  }
}
