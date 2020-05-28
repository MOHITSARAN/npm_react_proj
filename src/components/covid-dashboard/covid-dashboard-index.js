import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import TableLoader from './content-loader-table';
import ChartLoader from './content-loader-chart';
import Paper from '@material-ui/core/Paper';
import Header from '../top-header/top-header';
import {MDBDataTable } from 'mdbreact';
import PieChart from './charts/pie-chart';
import getData from './fetch-data';
import TimeSeriesUS from './charts/time-series-us';
import TimeSeriesCanada from './charts/time-series-canada';
import TimeSeriesIndia from './charts/time-series-india';

class CovidDashboard extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      title: 'Corona - Covid 19 Live Dashboard',
      items: [],
      canada:'Canada',
      usa:'USA',
      india:'India',
    };
  }
 componentDidMount() {
    this._isMounted = true;
    getData("https://coronavirus-19-api.herokuapp.com/countries").then((result) => {

      let rows = [];
      result.forEach(item => rows.push({
        country: item.country,
        cases: item.cases,
        deaths: item.deaths,
        recovered: item.recovered,
        todayCases: item.todayCases,
        todayDeaths: item.todayDeaths,
        active: item.active,
        critical: item.critical,
      }));

      if (this._isMounted) {
        this.setState({
          items: { 
            columns: [
            {
              label: 'Country',
              field: 'country',
              sort: 'asc',
              width: 150
            },{
              label: 'Cases',
              field: 'cases',
              sort: 'asc',
              width: 150
            },{
              label: 'Deaths',
              field: 'deaths',
              sort: 'asc',
              width: 150
            },{
              label: 'Recovered',
              field: 'recovered',
              sort: 'asc',
              width: 150
            },{
              label: 'Today Cases',
              field: 'todayCases',
              sort: 'asc',
              width: 150
            },{
              label: 'todayDeaths',
              field: 'todayDeaths',
              sort: 'asc',
              width: 150
            },{
              label: 'Active',
              field: 'active',
              sort: 'asc',
              width: 150
            },{
              label: 'Critical',
              field: 'critical',
              sort: 'asc',
              width: 150
            }], 
            rows: rows,
          },
          isLoaded: true,
        });
       }
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
      const { error, isLoaded, items } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return (
          <Row>
            <Col md={12}>
              <Header title= {this.state.title}/>
               <Row>
                 <Col md={4}>
                 <Card>
                    <Card.Body>
                      <ChartLoader/> 
                    </Card.Body>
                  </Card>
                 </Col>
                 <Col md={4}>
                   <Card>
                      <Card.Body>
                        <ChartLoader/>
                      </Card.Body>
                    </Card>
                 </Col>
                 <Col md={4}>
                  <Card>
                    <Card.Body>
                      <ChartLoader/>
                    </Card.Body>
                  </Card>
                 </Col>
              </Row>
              <br />
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
      				  	<PieChart name={this.state.usa}/>
      				  </Card.Body>
      				</Card>
           	 </Col>
           	 <Col md={4}>
	           	 <Card>
        				  <Card.Body>
        				  	<PieChart name={this.state.canada}/>
        				  </Card.Body>
        				</Card>
           	 </Col>
           	 <Col md={4}>
           	  <Card>
      				  <Card.Body>
      				  	<PieChart name={this.state.india}/>
      				  </Card.Body>
      				</Card>
           	 </Col>
           	</Row>
           	<br />
           	<Row>
	           	<Col md={12}>
	           	  <Card>
      					  <Card.Body>
      					  	<TimeSeriesUS name={this.state.usa}/>
      					  </Card.Body>
      					</Card>
		           	<br />
	           	 </Col>
	           	 <Col md={6}>
	           	  <Card>
      					  <Card.Body>
      					  	<TimeSeriesCanada name={this.state.canada}/>
      					  </Card.Body>
      					</Card>
	           	 </Col>
	           	 <Col md={6}>
	           	  <Card>
      					  <Card.Body>
      					  	<TimeSeriesIndia name={this.state.india}/>
      					  </Card.Body>
  					   </Card>
	           	 </Col>
           	</Row>
           	<br />
           	<Row>
	          <Col md={12}>
	            <Paper className="x_panel">
	              <MDBDataTable data={items} entriesOptions={[5, 20, 25, 50]} entries={25} small />
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