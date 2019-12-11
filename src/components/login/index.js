import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Card, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { login } from '../../actions/auth';

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        login: {
          username: '',
          password: ''
        },
        error: {
          username: null,
          password: null
        },
        message: {
          success: null,
          failure: null
        }
      };
    }
  
    handleInputChange = event => { 
      this.setState({ login: { ...this.state.login, [event.target.id]: event.target.value} });
    }
  
    handleSubmit = event => {
      const { login, message } = this.state;
      if (login.username === '') {
        this.setState({ error: { username: 'Please enter your Username..!!!'} });
      } else if (login.password === '') {
        this.setState({ error: { password: 'Please enter your Password..!!!'} });
      } else {
        this.setState({ error: {
          username: null,
          password: null
        }});
        this.props.login(login, message);
      }
      event.preventDefault();
    };

    render() {
        const { login, error, message } = this.state;

        return (
            <React.Fragment>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <Row>
                    <Col md={12} sm={12} xs={12} className="vertical-horizontal-center">
                        <Card className="info">
                            <Card.Header><h5>Login</h5></Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group as={Row} controlId="messageText">
                                        <Col sm={12}>
                                            {message.success && <Form.Text className="text-alert">{message.success}</Form.Text>}
                                            {message.failure && <Form.Text className="text-danger">{message.failure}</Form.Text>}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="username">
                                        <Col sm={12}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                value={login.username}
                                                onChange={e => this.handleInputChange(e)}
                                            />
                                            {error.username && <Form.Text className="text-danger">{error.username}</Form.Text>}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="password">
                                        <Col sm={12}>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={login.password}
                                                onChange={e => this.handleInputChange(e)}
                                            />
                                            {error.password && <Form.Text className="text-danger">{error.password}</Form.Text>}
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="loginForm">
                                        <Col sm={12}>
                                            <Button variant="primary" type="submit">Signin</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        //users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);