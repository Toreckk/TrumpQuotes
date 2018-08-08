import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        message:'When Mexico sends its people, they\'re not sending their best. They\'re sending people that have lots of problems...they\'re bringing drugs, they\'re bringing crime. They\'re rapists.'
      }
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then( results  => results.json())
      .then(jsondata => {this.setState({
        message: jsondata.message
      });});
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
                  <a  href="https://twitter.com/realDonaldTrump"><p id="author"><strong>Donald J. Trump</strong></p></a>
                      <p style={{color:'#8695a1'}}>@realDonaldTrump</p>
                  </div>
              </div>
              <div id="new-quote-div" >
                <button id="new-quote" onClick={this.handleClick}><strong>New Quote!</strong></button>
                
              </div>
          </div>
          <div id="message-area">
                  <p id="text">{this.state.message}</p>
          </div>
          <div id="footer">
            <a id="tweet-quote" target="blank" href={'https://twitter.com/intent/tweet?text=' + encodeURIComponent("\"" + this.state.message + "\" -" + this.state.author)}><i className="fas fa-retweet"></i></a>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
