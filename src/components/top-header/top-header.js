import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './top-header.css';

export default function Header() {

  return (
    <div className="rootheader">
      <Grid>
        <Grid item xs={12}>
          <Paper className="gradient">Common Vulnerabilities and Exposures Dashboard</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
