import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Row } from 'react-bootstrap';

let UserForm = props => {
    const { handleSubmit, reset, /*pristine, submitting*/ } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Row>
                    <Col md={3} sm={3} xs={3} className="text-right">
                        <label htmlFor="username" className="col-form-label">Username</label>
                    </Col>
                    <Col md={8} sm={8} xs={8}>
                        <Field name="username" component="input" type="text" placeholder="Username" className="form-control" />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col md={3} sm={3} xs={3} className="text-right">
                        <label htmlFor="password" className="col-form-label">Password</label>
                    </Col>
                    <Col md={8} sm={8} xs={8}>
                        <Field name="password" component="input" type="password" placeholder="Password" className="form-control" />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col md={3} sm={3} xs={3} className="text-right">
                        <label htmlFor="first_name" className="col-form-label">First Name</label>
                    </Col>
                    <Col md={8} sm={8} xs={8}>
                        <Field name="first_name" component="input" type="text" placeholder="First Name" className="form-control" />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col md={3} sm={3} xs={3} className="text-right">
                        <label htmlFor="last_name" className="col-form-label">Last Name</label>
                    </Col>
                    <Col md={8} sm={8} xs={8}>
                        <Field name="last_name" component="input" type="text" placeholder="Last Name" className="form-control" />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col md={3} sm={3} xs={3} className="text-right">
                        <label htmlFor="email" className="col-form-label">Email</label>
                    </Col>
                    <Col md={8} sm={8} xs={8}>
                        <Field name="email" component="input" type="text" placeholder="Email" className="form-control" />
                    </Col>
                </Row>
            </div>
            <div className="form-group">
                <Row>
                    <Col md={11} sm={11} xs={11} className="text-right">
                        <Button type="submit" variant="primary" className="formBtns" /*disabled={pristine || submitting}*/>Submit</Button>
                        <Button type="button" variant="secondary" className="formBtns" /*disabled={pristine || submitting}*/ onClick={reset}>Clear</Button>
                    </Col>
                </Row>
            </div>
        </form>
    )
}

UserForm = reduxForm({
    form: 'userForm'
})(UserForm)

export default UserForm