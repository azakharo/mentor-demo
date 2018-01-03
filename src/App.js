import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import task from './call-profile/task'
import CallProfilePage from './call-profile'

class App extends Component {
  render() {
      const media = {
          url: process.env.PUBLIC_URL + '/talk.mp3',
          originalName: 'talk.mp3'
      };

    return (
      <div className="App">
        <CallProfilePage media={media} task={task}></CallProfilePage>
      </div>
    );
  }
}

export default App;
