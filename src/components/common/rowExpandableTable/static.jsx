import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './rowExpandableTableStyles.scss';

const isExpandableRow = () => { return true }; 

const secondLevelExpand = (row) => {
  return(<BSTable data={ row.expand } />);
};

class BSTable extends React.Component {
  render() { 
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data } >
          <TableHeaderColumn dataField='skuNumber' isKey={ true }>SKU Number</TableHeaderColumn>
          <TableHeaderColumn dataField='skuDesc'>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='skuOrderQty'>Order Quantity</TableHeaderColumn>
          <TableHeaderColumn dataField='skuColor'>Color</TableHeaderColumn>
          <TableHeaderColumn dataField='skuSize'>Size</TableHeaderColumn>
          <TableHeaderColumn dataField='skuInnerPack'>Inner Pack</TableHeaderColumn>
          <TableHeaderColumn dataField='skuOuterPack'>Outer Pack</TableHeaderColumn>
          <TableHeaderColumn dataField='skuAllocStatus'>Alloc. Status</TableHeaderColumn>
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
      <BootstrapTable data={ row.expand }
        expandableRow={ isExpandableRow }
        expandComponent={ secondLevelExpand }
        expandColumnOptions={ { expandColumnVisible: true } }>
        <TableHeaderColumn dataField='styleColor' isKey={ true }>Style/Color</TableHeaderColumn>
        <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
        <TableHeaderColumn dataField='orderQty'>Order Quantity</TableHeaderColumn>
      </BootstrapTable>
    );
  }

  render() {
    /*const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
    };*/
    
    return (
      <div className="expandableTableContainer">
        <BootstrapTable data={ this.props.data }
          /*options={ options }*/
          expandableRow={ isExpandableRow }
          expandComponent={ this.expandComponent }
          expandColumnOptions={ { expandColumnVisible: true } }>
          {/*this.props.data && this.props.data.map((data) => {console.log('data: ', Object.keys(data));
            return <TableHeaderColumn dataField={Object.keys(data)} key={Object.keys(data)}>{Object.keys(data)}</TableHeaderColumn>
          })*/}
          <TableHeaderColumn dataField='poNumber' isKey={ true }>PO Number</TableHeaderColumn>
          <TableHeaderColumn dataField='newStore'>New Store</TableHeaderColumn>
          <TableHeaderColumn dataField='ds'>DS</TableHeaderColumn>
          <TableHeaderColumn dataField='department'>Dept</TableHeaderColumn>
          <TableHeaderColumn dataField='vendor'>Vendor</TableHeaderColumn>
          <TableHeaderColumn dataField='inDcDate'>IN DC Date</TableHeaderColumn>
          <TableHeaderColumn dataField='shipDate'>Ship Date</TableHeaderColumn>
          <TableHeaderColumn dataField='otbDate'>OTB</TableHeaderColumn>
          <TableHeaderColumn dataField='poType'>PO Type</TableHeaderColumn>
          <TableHeaderColumn dataField='poStatus'>PO Status</TableHeaderColumn>
          <TableHeaderColumn dataField='package'>Package</TableHeaderColumn>
          <TableHeaderColumn dataField='deliveryStrategy'>Delivery Strategy</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}