import React from 'react';
import {
  Button, InputGroup, InputGroupAddon, Input, InputGroupText,
  InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  PopoverBody, PopoverHeader, Popover, Alert
} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

export default class BichTable extends React.PureComponent {
  state = {
    show: 0,
    popoverOpen: false,
    dropdownOpen: false,
    splitButtonOpen: false,
    result: 'Сначала пройди!',
    selectedDropdown: null,
    selectedCheckbox: null,
    visible: false
  }
  
  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit = () => {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  onDismiss = () => {
    this.setState({ visible: false });
  }

  getColor = (id) => {
    let prevColor = document.getElementById(id).style.backgroundColor;
    const color = prompt('Введите цвет', prevColor);
    document.getElementById(id).style.backgroundColor = color ? color : prevColor;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = {
      first: form.elements.login.value === 'тест',
      second: this.state.selectedCheckbox === 'left',
      third: this.state.selectedDropdown === 'upper'
    };

    let countResult = 0;
    for (const key in result) {
        const element = result[key];
        if (element) countResult++;
    }

    switch (countResult) {
      case 0:
        this.setState({
          result: 'Ну ты и долбаеб братишка, земля пухом'
        });
        break;
      case 1:
      this.setState({
        result: 'Уже получше, но треьтеклассник все еще обгоняет по развитию'
      });
        break;
      case 2:
      this.setState({
        result: 'Ебать ты Валера!'
      });
        break;
      default:
        break;
    }

    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  calculate = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = {
      a: form.elements.a.value,
      b: form.elements.b.value,
      c: form.elements.c.value,
    };

    const {a, b, c} = result;

    const p = (a + b + c) / 2;

    const Heroin = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    this.setState({
      calculateResult: Heroin,
      visible: true
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Alert className="calculateResult" isOpen={this.state.visible} toggle={this.onDismiss}>
            Герон насчитал: {this.state.calculateResult}
          </Alert>
          <img onClick={() => this.setState(state => ({
            show: state.show === 0 ? 1 : state.show === 1 ? 2 : 0
          }))} src={logo} className="App-logo" alt="logo" />
          {this.state.show === 0 ? (
          <table className="bich-table">
            <tr>
              <th id="1" onClick={() => this.getColor('1')}>Firstname</th>
              <th id="2" onClick={() => this.getColor('2')}>Lastname</th> 
              <th id="3" onClick={() => this.getColor('3')}>Age</th>
              <th id="4" onClick={() => this.getColor('4')}>Gender</th>
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
          </table>) : this.state.show === 1 ?
          (<form
            onSubmit={this.handleSubmit}
            className="registrationForm"
          >
            <h1 style={{marginBottom: '40px'}}>
              Ебануть тестик!
            </h1>
            <InputGroup>
              <InputGroupAddon addonType="prepend"> Тест </InputGroupAddon>
              <Input
                name="login"
                type="text"
                placeholder="Введите 'тест'"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input
                    onClick={() => this.setState({selectedCheckbox: 'left'})}
                    addon
                    type="checkbox"
                    aria-label="Checkbox for following text input" />
                </InputGroupText>
              </InputGroupAddon>
                <Input name="second" readOnly placeholder="Выбери только левый" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Input
                    onClick={this.setState({selectedCheckbox: 'right'})}
                    addon 
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup>
          <Input readOnly placeholder="Выбери только верхний" />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Тык!
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.setState({selectedDropdown: 'upper'})}>Верхний</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.setState({selected: 'down'})}>Нижний</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
            <br />
            <Button
              outline
              color="danger"
              size="lg"
              id="Popover1"
            >
              {this.state.popoverOpen ? 'Еще раз' : 'Подтвердить'}
            </Button>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1">
              <PopoverHeader>Результат</PopoverHeader>
              <PopoverBody>{this.state.result}</PopoverBody>
            </Popover>
          </form>) : (<form
            onSubmit={this.calculate}
            className="registrationForm"
          >
            <h1 style={{marginBottom: '40px'}}>
              Ебануть Геро(и)на!
            </h1>
            <InputGroup>
              <InputGroupAddon addonType="prepend"> a </InputGroupAddon>
              <Input
                name="a"
                type="text"
                placeholder="Введите 'a'"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend"> b </InputGroupAddon>
              <Input
                name="b"
                type="text"
                placeholder="Введите 'b'"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend"> c </InputGroupAddon>
              <Input
                name="c"
                type="text"
                placeholder="Введите 'c'"
              />
            </InputGroup>
            <br />
            <Button
              outline
              color="danger"
              size="lg"
              id="Popover1"
            >
              Посчитать
            </Button>
          </form>)}
        </header>
      </div>
    );
  }
}
