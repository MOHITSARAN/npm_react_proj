import React from "react";
import { Row, Col } from 'react-bootstrap';
import TableLoader from './content-loader';
import Paper from '@material-ui/core/Paper';
import Header from '../top-header/top-header';

class OwapsTop extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      title: 'Owaps Top-10 Dashboard',
    };
  }
 componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
      const { error, isLoaded } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return (
          <Row>
            <Col md={12}>
              <Header title= {this.state.title}/>
              <Paper className="x_panel">
                 <TableLoader/> 
              </Paper>
            </Col>
          </Row>
        )
      } else {
        return (
        <Row>
          <Col md={12}>
            <Header title= {this.state.title}/>
           	
          </Col>
        </Row>
    );
   }
  }
}

export default OwapsTop;