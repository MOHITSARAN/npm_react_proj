import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider';
import './owaps-top-index.css';

const Sidebar = props => (
    <List disablePadding dense>
      <ListItem button onClick={() => props.getDetails('Injection')}>
        <ListItemText>Injection</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Broken Authentication')}>
        <ListItemText>Broken Authentication</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Sensitive Data Exposure')}>
        <ListItemText>Sensitive Data Exposure</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('XML External Entities (XXE)')}>
        <ListItemText>XML External Entities (XXE)</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Broken Access Control')}>
        <ListItemText>Broken Access Control</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Security Misconfiguration')}>
        <ListItemText>Security Misconfiguration</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Cross-Site Scripting XSS')}>
        <ListItemText>Cross-Site Scripting XSS</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Insecure Deserialization')}>
        <ListItemText>Insecure Deserialization</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Using Components with Known Vulnerabilities')}>
        <ListItemText>Using Components with Known Vulnerabilities</ListItemText>
      </ListItem>
      <Divider />

      <ListItem button onClick={() => props.getDetails('Insufficient Logging & Monitoring')}>
        <ListItemText>Insufficient Logging & Monitoring</ListItemText>
      </ListItem>
    </List>
)

export default Sidebar