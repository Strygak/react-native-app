import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from './styles';

export default class AndroidApp extends Component {

  constructor(props) {
    super(props);
    this.state = {text: 0, text2: '', operator: ''};
    this.result = this.result;
    this.equals = this.equals;
    this.inputDigit = this.inputDigit;
    this.deleteSymbol = this.deleteSymbol;
  }

  equals = () => {

    if (this.state.text === 0) {
      return;
    }

    switch (this.state.operator) {
      case '+': 
        this.setState({text: parseInt(this.state.text) + parseInt(this.state.text2)});
        break;
      case '-':
        this.setState({text: parseInt(this.state.text) - parseInt(this.state.text2)});
        break;
      case 'x':
        this.setState({text: parseInt(this.state.text) * parseInt(this.state.text2)});
        break;
      case '/':
        this.setState({text: parseInt(this.state.text) / parseInt(this.state.text2)});
        break;
      default:
    }
  }

  result(operator) {

    if (!this.state.operator) {
      this.setState({operator: operator});
    }

    if (this.state.text === 0 || this.state.text.slice(-1) === '.') {
      return;
    }

    if (this.state.text.indexOf(operator) !== -1) {

      if (this.state.operator) {
        return;
      }
      else if (this.state.operator !== operator) {
        this.setState({text: this.state.text.substring(this.state.text.length - 1, 0)});
      }

      this.setState({text: parseInt(this.state.text) + parseInt(this.state.text2) + operator});
    }
    else {
      this.setState({text: this.state.text + operator});
    }
  }

  inputDigit(digit) {

    if ((this.state.text === 0 || this.state.text2 == '0') && digit === 0) {
      return;
    }
    
    this.state.operator ? this.setState({text: this.state.text + digit, text2: digit}) : 
      this.setState({text: this.state.text + digit + ''});
  }

  deleteSymbol = () => {
    if (this.state.text === 0) {
      return;
    }
    this.setState({text: this.state.text.length < 2 ? 0 : 
      this.state.text.substring(this.state.text.length - 1, 0), text2: ''});
  }

  render() {
    return (
      <View style={Styles.container}>

        <View style={Styles.textWrapper}>
          <Text style={Styles.text}>{this.state.text}</Text>
        </View>
        <View style={Styles.keyboard}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[Styles.button, Styles.operationButton, Styles.deleteButton]} 
              onPress={() => this.setState({text: 0, text2: '', operator: ''})}>
              <Text style={Styles.default}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[Styles.button, Styles.operationButton, Styles.deleteButton]} onPress={this.deleteSymbol}>
              <Text style={Styles.default}>DEL</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(7)}>
              <Text style={Styles.default}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(8)}>
              <Text style={Styles.default}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(9)}>
              <Text style={Styles.default}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.button, Styles.operationButton]} onPress={() => this.result('/')}>
              <Text style={Styles.default}>/</Text>
            </TouchableOpacity>

          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(4)}>
              <Text style={Styles.default}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(5)}>
              <Text style={Styles.default}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(6)}>
              <Text style={Styles.default}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.button, Styles.operationButton]} onPress={() => this.result('x')}>
              <Text style={Styles.default}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(1)}>
              <Text style={Styles.default}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(2)}>
              <Text style={Styles.default}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(3)}>
              <Text style={Styles.default}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.button, Styles.operationButton]} onPress={() => this.result('-')}>
              <Text style={Styles.default}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit('.')}>
              <Text style={Styles.default}>.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={() => this.inputDigit(0)}>
              <Text style={Styles.default}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.button} onPress={this.equals}>
              <Text style={Styles.default}>=</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[Styles.button, Styles.operationButton]} onPress={() => this.result('+')}>
              <Text style={Styles.default}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}