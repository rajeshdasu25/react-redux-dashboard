import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Button, Col, Row } from 'react-bootstrap';

let CategoryForm = props => {
const { handleSubmit, pristine, reset, submitting } = props
return (
<form onSubmit={handleSubmit}>
<div className="form-group">
<Row>
<Col md={3} sm={3} xs={3} className="text-right">
<label htmlFor="type" className="col-form-label">Type</label>
</Col>
<Col md={8} sm={8} xs={8}>
<Field name="type" component="input" type="text" placeholder="Type" className="form-control" />
</Col>
</Row>
</div>
<div className="form-group">
<Row>
<Col md={3} sm={3} xs={3} className="text-right">
<label htmlFor="label" className="col-form-label">Label</label>
</Col>
<Col md={8} sm={8} xs={8}>
<Field name="label" component="input" type="text" placeholder="Label" className="form-control" />
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

CategoryForm = reduxForm({
form: 'categoryForm'
})(CategoryForm)

export default CategoryForm