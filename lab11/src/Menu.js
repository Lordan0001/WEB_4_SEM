import React, { Component } from 'react'

export default class
  extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0

    }
    this.plusovik = this.plusovik.bind(this);
    this.scharp = this.scharp.bind(this);
    this.pityhon = this.pityhon.bind(this);
    this.javist = this.javist.bind(this);
    this.sriptizer = this.sriptizer.bind(this);

  }
  plusovik() {
    this.setState({ count: 1 })
  }
  scharp() {
    this.setState({ count: 2 })
  }
  pityhon() {
    this.setState({ count: 3 })
  }
  javist() {
    this.setState({ count: 4 })
  }
  sriptizer() {
    this.setState({ count: 5 })
  }




  render() {
    let e;
    switch (this.state.count) {
      case 1:
        e = (<div><a  href='https://www.google.com/search?client=opera&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8'>Google</a><br/>
          <a href='https://www.rockstargames.com'>Rockstar</a><br/>
          <a href='https://ru-ru.facebook.com'>Facebook</a><br/>
          <a href='https://www.apple.com'>Apple</a><br/>
          <a href='https://ru.wikipedia.org/wiki/Accenture'>Accenture</a><br/>
          <a href='https://www.cisco.com'>Cisco Systems</a><br/>
          <a href='https://www.oracle.com/ru/index.html'>Oracle</a><br/>
        
        </div>)
        break;
      case 2:
        e = (<div><a  href='#'>Sony Interactive Entertainment</a><br/>
          <a href='#'>Tencent Games</a><br/>
          <a href='#'> Nintendo</a><br/>
          <a href='#'>Xbox Game Studios</a><br/>
          <a href='#'>Activision Blizzard</a><br/>
          <a href='#'>Electronic Arts</a><br/>
          <a href='#'>Epic Games</a><br/>
        </div>)
        break;
      case 3:
        e = (<div><a href='#'>third</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
        </div>)
        break;
      case 4:
        e = (<div><a href='#'>four</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a  href='#'>qqqq</a><br/>
          <a href='#'>qqqq</a><br/>
          <a href='#'>qqqq</a><br/>
        </div>)
        break;
      case 5:
        e = (<div><a href='#'>five</a><br/>
          <a href='#'>qqqq</a><br/>
          <a href='#'>qqqq</a><br/>
          <a href='#'>qqqq</a><br/>
          <a href='#'>qqqq</a><br/>
          <a href='#'>qqqq</a><br/>
          <a href='#'>qqqq</a><br/>
        </div>)
        break;

      default:
        e = null
        break;
    }




    return (
      <div>
        <button onClick={this.plusovik}>C++</button>
        <button onClick={this.scharp}>C#</button>
        <button onClick={this.pityhon}>Python</button>
        <button onClick={this.javist}>Java</button>
        <button onClick={this.sriptizer}>JS</button>
        {e}

      </div>
    )
  }
}
