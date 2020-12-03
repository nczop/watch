import React, { Component } from "react";
import Word from './Word'



class App extends Component { 

  state = {
    words: [],
    isLoaded: false,
  }

  componentDidMount () {
    setTimeout(this.fetchData, 3000)    
  }

  fetchData = () => {
    fetch('data/words.json')
    .then(response => response.json() )
    .then(data => {
      this.setState({
        words:data.words,
        isLoaded: true
      })
    })
  }
    
  render() {    
    const words = this.state.words.map(word => 
    <Word key={word.id} en={word.en} pl={word.pl}/>)
    return (
      <div>    
      {this.state.isLoaded ? words : "wczytuje dane"}
      </div>
    )
  }
}

export default App;
