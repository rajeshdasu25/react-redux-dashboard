import React from 'react';
import { Card, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faMailBulk, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import GoogleMap from './common/GoogleMap.js';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: {
        fullName: '',
        email: '',
        comments: ''
      },
      error: {
        fullName: null,
        email: null,
        comments: null
      }
    };
  }

  handleInputChange = event => {
    this.setState({ query: { ...this.state.query, [event.target.id]: event.target.value} });
  }

  handleSubmit = event => {
    const { query } = this.state;
    if (query.fullName === '') {
      this.setState({ error: { fullName: 'Please enter your Name..!!!'} });
    } else if (query.email === '') {
      this.setState({ error: { email: 'Please enter your Email..!!!'} });
    } else if (query.comments === '') {
      this.setState({ error: { comments: 'Please enter your Query..!!!'} });
    } else {
      //send the values to the backend
      //also reset both nameError and ageError here
    }
    event.preventDefault();
  };

  render() {
    const { query, error } = this.state;
    
    return (
      <React.Fragment>
        <Helmet>
          <title>Contact</title>
        </Helmet>
        {/* <div className="list-container">
          <Row>
            <Col md={12} sm={12} xs={12}>
              <GoogleMap />
            </Col>
          </Row>
        </div> */}
        <Row>
          <Col md={8} sm={12} xs={12}>
            <Card>
              <Card.Header><h5>Get in Touch</h5></Card.Header>
              <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row} controlId="fullName">
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={query.fullName}
                        onChange={e => this.handleInputChange(e)}
                      />
                      {error.fullName && <Form.Text className="text-danger">{error.fullName}</Form.Text>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Your email address">
                    <Col sm={10}>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={query.email}
                        onChange={e => this.handleInputChange(e)} 
                      />
                      {error.email && <Form.Text className="text-danger">{error.email}</Form.Text>}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="comments">
                    <Col sm={10}>
                      <FormControl
                        as="textarea" aria-label="With textarea"
                        placeholder="Message"
                        value={query.comments}
                        onChange={e => this.handleInputChange(e)} 
                      />
                      {error.comments && <Form.Text className="text-danger">{error.comments}</Form.Text>}
                    </Col>
                  </Form.Group><Form.Group as={Row} controlId="contactFormQuery">
                    <Col sm={10}>
                      <Button variant="primary" type="submit">Submit</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} xs={12}>
          <Card>
              <Card.Header><h5>Contact Us</h5></Card.Header>
              <Card.Body>
                <Row className="contact-row">
                  <Col md={2} sm={2} xs={2}><FontAwesomeIcon icon={faAddressBook} /></Col>
                  <Col md={10} sm={10} xs={10}>
                    <Row>
                      <Col md={10} sm={10} xs={10}>4257  Drainer Avenue</Col>
                    </Row>
                    <Row>
                      <Col md={10} sm={10} xs={10}>Panama City, FL, 32405</Col>
                    </Row>                    
                  </Col>
                </Row>
                <Row className="contact-row">
                  <Col md={2} sm={2} xs={2}><FontAwesomeIcon icon={faMobile} /></Col>
                  <Col md={10} sm={10} xs={10}>
                    <Row>
                      <Col md={10} sm={10} xs={10}>850-658-9350</Col>
                    </Row>                  
                  </Col>
                </Row>
                <Row className="contact-row">
                  <Col md={2} sm={2} xs={2}><FontAwesomeIcon icon={faMailBulk} /></Col>
                  <Col md={10} sm={10} xs={10}>
                    <Row>
                      <Col md={10} sm={10} xs={10}>info@reactdashboard.com</Col>
                    </Row>                  
                  </Col>
                </Row>
                <Row className="contact-row">
                  <Col md={10} sm={10} xs={10}>
                    <div className="brand-icon-container">
                      <div><FontAwesomeIcon icon={faFacebook} color="blue" /></div>
                      <div><FontAwesomeIcon icon={faLinkedin} color="blue" /></div>
                      <div><FontAwesomeIcon icon={faTwitter} color="green" /></div>
                      <div><FontAwesomeIcon icon={faInstagram} color="red" /></div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;