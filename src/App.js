import React, { Component } from 'react';
import AddTask from './AddTask.js'; 

class App extends Component{

  state = {
    tasks: [{
      title: "task 1",
      id: 1
    },
    {
      title: "task 2",
      id: 1
    },
    {
      title: "task 3",
      id: 1
    }  
    ]
  };

  render () {
    return (
      <div className="App">
        <AddTask/>
      </div>
    );
  }
}

export default App;
