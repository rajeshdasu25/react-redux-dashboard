import React from 'react'
import CategoryForm from './categoryForm';

class CategoryFormPage extends React.Component {
submit = values => {
console.log(values)
}
render() {
return <CategoryForm onSubmit={this.submit} />
}
}

export default CategoryFormPage;