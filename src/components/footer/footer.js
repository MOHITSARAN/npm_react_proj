import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Paper className="rootfooter" elevation={1}>
        <Typography className="footerFontSize"  component="h3">
          Powered by ISG | Hosted in GCP
        </Typography>
      </Paper>
    </footer>
  );
}