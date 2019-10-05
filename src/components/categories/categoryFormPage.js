import React from 'react'
import { connect } from 'react-redux';
import { addNewCategory } from '../../actions/categories';
import CategoryForm from './categoryForm';

class CategoryFormPage extends React.Component {
    submit = formValues => {
        this.props.addNewCategory(formValues);
    }
    render() {
        return <CategoryForm onSubmit={this.submit} />
    }
}

const mapDispatchToProps = { addNewCategory };

// const mapDispatchToProps = dispatch => { debugger;
//     return {
//         addNewCategory: () => dispatch(addNewCategory())
//     };
// };

export default connect(null, mapDispatchToProps)(CategoryFormPage);