import React, { Component } from "react";

class App extends Component { 
  state = {
    time: this.getTime()
  }

  getTime (){
    const currentTime = new Date();
    return ({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      secunds: currentTime.getSeconds(),
    })
  }

  setTime = () => {
    const time = this.getTime()
    this.setState({
      time: time
    })
  }

  componentDidMount() {
    setInterval (this.setTime, 1000)
  }

  render() {
    const { hours, minutes, secunds} = this.state.time
    return (
      <>        
        {hours} : {minutes} : {secunds}
      </>
    )
  }
}

export default App;
