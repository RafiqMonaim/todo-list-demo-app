import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from'@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
export class AddTask extends Component{


    render() { 
            return(
                <div>
                  <Grid container justify="center" alignItems="center">
                    <TextField label="Task" varien="outlined" >
                    </TextField>
                    <Button variant="contained" color="secondary">Add!</Button>
                    </Grid>       
                </div>
            );
    }


}

export default AddTask; 