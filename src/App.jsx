import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx"
import Game from "./components/Game.jsx";

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentScore: 0,
      bestScore: 0,
    };
    this.handleScore = this.handleScore.bind(this);
    this.checkBestScore = this.checkBestScore.bind(this);
  }

 

  handleScore(increment){
    if(increment){
      this.setState ({
        currentScore: this.state.currentScore + 1,
      });
      this.checkBestScore(this.state.currentScore + 1);
    }else {
      this.setState({
        currentScore: 0,
      });
    }
  }

  checkBestScore(currentScore){
    if (currentScore > this.state.bestScore){
      this.setState ({
        bestScore: currentScore,
      })
    }
  }

  render() {
    const { currentScore, bestScore } = this.state;
    let className = "center no-display";
    if ((currentScore === bestScore) && (bestScore > 0)){
      className = 'center display';
    } else {
      className = 'center no-display';
    }
    return (
      <div className="App">
        <Header currentScore={currentScore} bestScore={bestScore} />
        <Game currentScore={currentScore} handleScore={this.handleScore} />
      </div>
    );
  }
}

export default App;