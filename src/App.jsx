import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

export default class BichTable extends React.PureComponent {
  getColor = (id) => {
    let prevColor = document.getElementById(id).style.backgroundColor;
    const color = prompt('Введите цвет', prevColor);
    document.getElementById(id).style.backgroundColor = color ? color : prevColor;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <table className="bich-table">
            <tr>
              <th id="1" onClick={() => this.getColor('1')}>Firstname</th>
              <th id="2" onClick={() => this.getColor('2')}>Lastname</th> 
              <th id="3" onClick={() => this.getColor('3')}>Age</th>
              <th id="4" onClick={() => this.getColor('4')}>Sex</th>
            </tr>
            <tr>
              <td id="5" onClick={() => this.getColor('5')}>Jill</td>
              <td id="6" onClick={() => this.getColor('6')}>Smith</td> 
              <td id="7" onClick={() => this.getColor('7')}>50</td>
              <td id="8" onClick={() => this.getColor('8')}>Men</td>
            </tr>
            <tr>
              <td id="9"  onClick={() => this.getColor('9')}>Eve</td>
              <td id="10" onClick={() => this.getColor('10')}>Jackson</td> 
              <td id="11" onClick={() => this.getColor('11')}>94</td>
              <td id="12" onClick={() => this.getColor('12')}>Men</td>
            </tr>
            <tr>
              <td id="13" onClick={() => this.getColor('13')}>Artem</td>
              <td id="14" onClick={() => this.getColor('14')}>Balamut</td> 
              <td id="15" onClick={() => this.getColor('15')}>94</td>
              <td id="16" onClick={() => this.getColor('16')}>Women</td>
            </tr>
          </table>
        </header>
      </div>
    );
  }
}
