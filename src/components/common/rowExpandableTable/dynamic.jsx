import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import _ from 'lodash';
import './rowExpandableTableStyles.scss';

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
    return (<BSTable data={row.expand} />);
};

class BSTable extends React.Component {
    render() {
        if (this.props.data) {
            return (
                <BootstrapTable 
                    data={this.props.data} 
                    selectRow={selectRow}
                    cellEdit={cellEdit}>
                    <TableHeaderColumn dataField='skuNumber' isKey={true} dataSort={isDataSort}>SKU Number</TableHeaderColumn>
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
            <BootstrapTable data={row.expand}
                expandableRow={isExpandableRow}
                expandComponent={secondLevelExpand}
                expandColumnOptions={{ expandColumnVisible: true }}
                selectRow={selectRow}
                cellEdit={cellEdit}>
                <TableHeaderColumn dataField='styleColor' isKey={true} dataSort={isDataSort}>Style/Color</TableHeaderColumn>
                <TableHeaderColumn dataField='description' dataSort={isDataSort}>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='orderQty' dataSort={isDataSort}>Order Quantity</TableHeaderColumn>
            </BootstrapTable>
        );
    }

    render() {
        const tableData = this.props.data; //console.log('tableData: ', tableData);

        let tableHeaders = tableData && tableData.map((data) => { debugger;
            //console.log('data: ', Object.keys(data));
            Object.keys(data).map((keyVal, index) => {
                // console.log('index: ', index, '; keyVal: ', keyVal);
                // console.log('col desc:', _.upperCase(keyVal));
                const colDesc = _.upperCase(keyVal);
                if (keyVal !== 'expand') {
                    return (<TableHeaderColumn 
                                dataField={keyVal} 
                                isKey={index === 0 ? true : false}
                                key={Math.random()} 
                                dataSort={ true }
                            >{colDesc}</TableHeaderColumn>);
                }
            });
        }); console.log('tableHeaders: ', tableHeaders);

        return (
            <div className="expandableTableContainer">
                <BootstrapTable data={tableData}
                    expandableRow={isExpandableRow}
                    expandComponent={this.expandComponent}
                    expandColumnOptions={{ expandColumnVisible: true }}
                    selectRow={selectRow}
                    cellEdit={ cellEdit }>
                    {/*tableData && tableData.map((data) => {
                        console.log('data: ', Object.keys(data));
                        Object.keys(data).map((keyVal, index) => {
                            console.log('index: ', index, '; keyVal: ', keyVal);
                            console.log('col desc:', _.upperCase(keyVal));
                            const isKey = (index === 1) ? true : false;
                            const colDesc = _.upperCase(keyVal);
                            return <TableHeaderColumn dataField={keyVal} isKey={isKey} key={Math.random()}>{colDesc}</TableHeaderColumn>
                        });
                    })*/}
                    {/*<TableHeaderColumn dataField='poNumber' isKey={true} dataSort={true}>PO Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='newStore' dataSort={true}>New Store</TableHeaderColumn>
                    <TableHeaderColumn dataField='ds' dataSort={true}>DS</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn autoValue={true} dataField='_id' isKey={true} hidden={true}>Id</TableHeaderColumn>*/}
                    {/*<TableHeaderColumn dataField='poNumber' isKey={true} dataSort={isDataSort}>PO Number</TableHeaderColumn>
                    <TableHeaderColumn dataField='newStore' dataSort={isDataSort}>New Store</TableHeaderColumn>
                <TableHeaderColumn dataField='ds' dataSort={isDataSort}>DS</TableHeaderColumn>*/}
                    {tableHeaders}
                </BootstrapTable>
            </div>
        );
    }
}