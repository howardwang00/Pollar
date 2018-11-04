import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './DashboardView.css';

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.createNewButton = this.createNewButton.bind(this);
  }
  
  createNewButton(name) {
    return (
      <Button variant="contained" 
              color="secondary" 
              size="large" 
              fullWidth={true} 
              variant="raised">
        {name}
      </Button>
    );
  }
  render() {
    return(
      <div>
        <Grid container
              direction="row">
          <Grid container>
            <Grid item>
              DashboardView
            </Grid>
          </Grid>

          <Grid container
                direction="column">
            <Grid item>
              {this.createNewButton('+ Create New Poll')}
            </Grid>
          </Grid>

          <Grid container
                direction="row"
                alignItems="center">
            <Grid item sm>
              {this.createNewButton('MY POLLS')}
            </Grid>
            <Grid item sm>
              {this.createNewButton('BROWSE POLLS')}
            </Grid>
          </Grid>
          
          <Grid container
                direction="row">
            <Grid item sm>
              {this.createNewButton('FOLLOWED POLLS')}
            </Grid>
            <Grid item sm>
              {this.createNewButton('SEARCHED POLLS')}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DashboardView;
