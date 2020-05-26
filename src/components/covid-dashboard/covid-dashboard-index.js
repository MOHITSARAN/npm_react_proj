import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import TableLoader from './content-loader';
import Paper from '@material-ui/core/Paper';
import Header from '../top-header/top-header';

class CovidDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      title: 'Corona - Covid 19 Live Dashboard'
    };
  }

  componentDidMount() {
    
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
           	 <Col md={{ span: 4, offset: 0 }}>
           	 <Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Card.Link href="#">Card Link</Card.Link>
				    <Card.Link href="#">Another Link</Card.Link>
				  </Card.Body>
				</Card>
           	 </Col>
           	 <Col md={4}>
	           	 <Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Card.Link href="#">Card Link</Card.Link>
				    <Card.Link href="#">Another Link</Card.Link>
				  </Card.Body>
				</Card>
           	 </Col>
           	 <Col md={4}>
           	  <Card style={{ width: '18rem' }}>
				  <Card.Body>
				    <Card.Title>Card Title</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
				    <Card.Text>
				      Some quick example text to build on the card title and make up the bulk of
				      the card's content.
				    </Card.Text>
				    <Card.Link href="#">Card Link</Card.Link>
				    <Card.Link href="#">Another Link</Card.Link>
				  </Card.Body>
				</Card>
           	 </Col>
           	</Row>
          </Col>
        </Row>
    );
   }
  }
}

export default CovidDashboard;