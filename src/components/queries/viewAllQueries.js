import React from 'react';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import RowExpandableTable from '../common/rowExpandableTable';
import { fetchAllQueries } from '../../actions/queries';

class ViewAllQueries extends React.Component {
    componentDidMount() {
        this.props.fetchAllQueries();
    }
    
    render() { 
        const { queries } = this.props;
        queries.forEach(function (query) {
            let rTime = <Moment format="YYYY/MM/DD">{query.raisedTime}</Moment>;console.log('rTime: ', rTime);
            query.expand = [];
            let expandObj = {
                "fullName": query.fullName,
                "email": query.email,
                "comments": query.comments,
                "raisedTime": <Moment format="YYYY/MM/DD">{query.raisedTime}</Moment>,
                "closedTime": <Moment format="YYYY/MM/DD">{query.closedTime}</Moment>,
            };
            query.expand.push(expandObj);
        });
        
        const data = [
            {
                "id": 1,
                "fullName": "Full Name",
                "email": "email@email.com",
                "comments": "Comments 1",
                "raisedTime": "2019",
                "closedTime": "2019",
                "status": 1,
                "expand": [{
                    "fullName": "Full Name",
                    "email": "email@email.com",
                    "comments": "Comments 1",
                    "raisedTime": "2019",
                    "closedTime": "2019"
                }]
            },
            {
                "id": 2,
                "fullName": "Full Name",
                "email": "email@email.com",
                "comments": "Comments 2",
                "raisedTime": "2019",
                "closedTime": "2019",
                "status": 1
            },
            {
                "id": 3,
                "fullName": "asd",
                "email": "asd@asd.com",
                "comments": "asd",
                "raisedTime": 0.1391210318285241,
                "closedTime": 0.2164489032697705,
                "status": 1
            },
            {
                "id": 4,
                "fullName": "test",
                "email": "test@test",
                "comments": "test",
                "raisedTime": 0.05279242278640295,
                "closedTime": 0.6649749623451289,
                "status": 1
            },
            {
                "id": 5,
                "fullName": "asd",
                "email": "asd@asd",
                "comments": "asd",
                "raisedTime": 1574626526957,
                "closedTime": 1574626526957,
                "status": 1
            }
        ];
        return (
            <React.Fragment>
                <Helmet>
                    <title>Queries</title>
                </Helmet>
                <div className="list-container">
                    <RowExpandableTable data={queries} />
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        queries: state.queries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllQueries: () => dispatch(fetchAllQueries())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAllQueries);