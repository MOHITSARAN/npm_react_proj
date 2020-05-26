import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './top-header.css';

const Header = props => {

  return (
    <div className="rootheader">
      <Grid>
        <Grid item xs={12}>
          <Paper className="gradient">{props.title}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
