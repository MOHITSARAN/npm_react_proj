import React from "react";
import { Row, Col } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Header from '../top-header/top-header';
import Sidebar from './sidebar';
import './owaps-top-index.css';

class OwapsTop extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      title: 'Owaps Top-10 Dashboard',
      details:''
    };
  }
  
  getDetails = (val) => {
    this.setState({
      details: val
    })
  }

 componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
      const { error, isLoaded, details } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return (
          <Row>
            <Col md={12}>
              <Header title= {this.state.title}/>
              <Paper className="x_panel">
              </Paper>
            </Col>
          </Row>
        )
      } else {
        return (
        <Row>
          <Col md={12}>
            <Header title= {this.state.title}/>
               <div className="main-section">
                <div className="sidebar">
           	      <Sidebar getDetails= {this.getDetails}/>
                 </div>
                 <div className="body-container">
                  <h1>{details}</h1>
                 </div>
               </div>
          </Col>
        </Row>
    );
   }
  }
}

export default OwapsTop;