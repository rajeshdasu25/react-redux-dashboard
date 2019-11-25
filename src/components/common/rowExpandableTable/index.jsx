import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './rowExpandableTableStyles.scss';
import { Row, Col } from 'react-bootstrap';

const isExpandableRow = (row) => {
    if (row.hasOwnProperty('expand')) return true;
    else return false;
};

const isDataSort = (row) => {
    // if (row.hasOwnProperty('expand')) return true;
    // else return false;
    return true;
};

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true
};

const cellEdit = {
    mode: 'click'
};

const secondLevelExpand = (row) => {
  return(<BSTable data={ row.expand } />);
};

class BSTable extends React.Component {
  render() { 
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data } >
          <TableHeaderColumn dataField='skuNumber' isKey={ true } dataSort={isDataSort}>SKU Number</TableHeaderColumn>
          <TableHeaderColumn dataField='skuDesc' dataSort={isDataSort}>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='skuOrderQty' dataSort={isDataSort}>Order Quantity</TableHeaderColumn>
          <TableHeaderColumn dataField='skuColor' dataSort={isDataSort}>Color</TableHeaderColumn>
          <TableHeaderColumn dataField='skuSize' dataSort={isDataSort}>Size</TableHeaderColumn>
          <TableHeaderColumn dataField='skuInnerPack' dataSort={isDataSort}>Inner Pack</TableHeaderColumn>
          <TableHeaderColumn dataField='skuOuterPack' dataSort={isDataSort}>Outer Pack</TableHeaderColumn>
          <TableHeaderColumn dataField='skuAllocStatus' dataSort={isDataSort}>Alloc. Status</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}

export default class ExpandRow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  expandComponent(row) { 
    return (
      <>
        <Row>
          <Col md={3} xs={6} sm={12}>Full Name</Col>
          <Col md={3} xs={6} sm={12}>{row.fullName}</Col>
          <Col md={3} xs={6} sm={12}>Raised Time</Col>
          <Col md={3} xs={6} sm={12}>{row.raisedTime}</Col>
        </Row>
        <Row>
          <Col md={3} xs={6} sm={12}>Email</Col>
          <Col md={3} xs={6} sm={12}>{row.email}</Col>
          <Col md={3} xs={6} sm={12}>Closed Time</Col>
          <Col md={3} xs={6} sm={12}>{row.closedTime}</Col>
        </Row>
      </>
    );
  }

  render() {
    /*const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
    };*/ console.log('props: ', this.props);
    
    return (
      <div className="expandableTableContainer">
        <BootstrapTable data={ this.props.data }
          /*options={ options }*/
          expandableRow={ isExpandableRow }
          expandComponent={ this.expandComponent }
          expandColumnOptions={ { expandColumnVisible: true } }
          /*selectRow={selectRow}
          cellEdit={cellEdit}*/>
          <TableHeaderColumn dataField='id' isKey={ true } dataSort={isDataSort}>Id</TableHeaderColumn>
          <TableHeaderColumn dataField='fullName' dataSort={isDataSort}>fullName</TableHeaderColumn>
          <TableHeaderColumn dataField='comments' dataSort={isDataSort}>comments</TableHeaderColumn>
          <TableHeaderColumn dataField='status' dataSort={isDataSort}>status</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}