import React, { Component } from 'react';
import AddTask from './AddTask'; 
import Task from './Task'
import Grid from '@material-ui/core/Grid';

class App extends Component{

  state = {
    tasks: [{
      title: "task 1",
      id: 1
    },
    {
      title: "task 2",
      id: 2
    },
    {
      title: "task 3",
      id: 3
    }  
    ]
  };

  render () {
    return (
      <div className="App">
        <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: '25vh' }}>
        {this.state.tasks.map(t=>{
          return <Task value={t} id={t.id}/>;
        })}
        </Grid>
        <AddTask/>
      </div>
    );
  }
}

export default App;
