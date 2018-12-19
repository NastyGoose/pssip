/* eslint-disable */
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import logo from './logo.svg';
import './App.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { SketchPicker } from 'react-color';
import {
  Button, InputGroup, InputGroupAddon, Input,
} from 'reactstrap';

const cellFormatter = (cell, row) => {
    return (
      <div style={{ background:`${cell}`, padding: '10px'}}>
        { cell }
      </div>
    );
  }

const styleFactory = (cellValue, cell, row) => {
  return {
    padding: '0'
  };
};

const columns = [{
  dataField: 'col1',
  text: 'Column 1',
  style: styleFactory,
  formatter: cellFormatter
}, {
  dataField: 'col2',
  text: 'Column 2',
  style: styleFactory,
  formatter: cellFormatter
}, {
  dataField: 'col3',
  text: 'Column 3',
  style: styleFactory,
  formatter: cellFormatter
}, {
  dataField: 'col4',
  text: 'Column 4',
  style: styleFactory,
  formatter: cellFormatter
}];

const products = [{
  col1: 'rgba(71, 78, 165, 0.51)',
  col2: 'rgba(71, 78, 165, 0.51)',
  col3: 'rgba(71, 78, 165, 0.51)',
  col4: 'rgba(71, 78, 165, 0.51)',
}, {
  col1: 'rgba(165, 71, 71, 0.51)',
  col2: 'rgba(165, 71, 71, 0.51)',
  col3: 'rgba(165, 71, 71, 0.51)',
  col4: 'rgba(165, 71, 71, 0.51)',
}, {
  col1: 'rgba(71, 78, 165, 0.51)',
  col2: 'rgba(71, 78, 165, 0.51)',
  col3: 'rgba(71, 78, 165, 0.51)',
  col4: 'rgba(71, 78, 165, 0.51)',
}, {
  col1: 'rgba(165, 71, 71, 0.51)',
  col2: 'rgba(165, 71, 71, 0.51)',
  col3: 'rgba(165, 71, 71, 0.51)',
  col4: 'rgba(165, 71, 71, 0.51)',
}];

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        striped
        hover
        classes="foo"
        cellEdit={cellEditFactory({
          mode: 'click',
          autoSelectText: true
        })}
      />
      
    </header>
  </div>

);

export default App;
