import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import TableLoader from './content-loader';
import Paper from '@material-ui/core/Paper';
import Header from '../top-header/top-header';
import {MDBDataTable } from 'mdbreact';
import PieChart from './charts/pie-chart';
import TimeSeriesChart from './charts/time-series-chart';

class CovidDashboard extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      title: 'Corona - Covid 19 Live Dashboard',
      canada:'Canada',
      usa:'USA',
      india:'India',
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
           	<Row>
           	 <Col md={4}>
           	 <Card>
				  <Card.Body>
				  	<PieChart url={this.state.usa}/>
				  </Card.Body>
				</Card>
           	 </Col>
           	 <Col md={4}>
	           	 <Card>
				  <Card.Body>
				  	<PieChart url={this.state.canada}/>
				  </Card.Body>
				</Card>
           	 </Col>
           	 <Col md={4}>
           	  <Card>
				  <Card.Body>
				  	<PieChart url={this.state.india}/>
				  </Card.Body>
				</Card>
           	 </Col>
           	</Row>
           	<br />
           	<Row>
	           	<Col md={12}>
	           	  <Card>
					  <Card.Body>
					  	<TimeSeriesChart url={this.state.usa}/>
					  </Card.Body>
					</Card>
		           	<br />
	           	 </Col>
	           	 <Col md={6}>
	           	  <Card>
					  <Card.Body>
					  	<TimeSeriesChart url={this.state.canada}/>
					  </Card.Body>
					</Card>
	           	 </Col>
	           	 <Col md={6}>
	           	  <Card>
					  <Card.Body>
					  	<TimeSeriesChart url={this.state.india}/>
					  </Card.Body>
					</Card>
	           	 </Col>
           	</Row>
           	<br />
           	<Row>
	          <Col md={12}>
	            <Paper className="x_panel">
	              <MDBDataTable entriesOptions={[5, 20, 25]} entries={20} small />
	            </Paper>
	          </Col>
	        </Row>
          </Col>
        </Row>
    );
   }
  }
}

export default CovidDashboard;