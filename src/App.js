import './App.css';
import React, { Component } from 'react';
//import PostList from './API/PostList';
import PostForm from './API/PostForm';

class App extends Component {

  render(){

    return (
      <div className="App">
        <h3>GOOD MORNING</h3>
        {/*<PostList />*/}
        <PostForm />
      </div>
    );
  }
}

export default App;
