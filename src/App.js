import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        message:'Hi I\'m Donald Trump!'
      }
  }
  render() {
    return (
      <div className="container">
        <div id="quote-box">
          <div id="header">
              <div id="info">
                  <div id="profile-img">
                      <img src='https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg'/>
                  </div>
                  <div id="user-info">
                  <a id="user-handle" href="https://twitter.com/realDonaldTrump"><p><strong>Donald J. Trump</strong></p></a>
                      <p style={{color:'#8695a1'}}>@realDonaldTrump</p>
                  </div>
              </div>
              <div id="retweet">
                  <button id="retweet-button"><strong>New Quote!</strong></button>
              </div>
          </div>
          <div id="body">
                  <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
