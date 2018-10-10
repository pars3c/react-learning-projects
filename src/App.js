import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Cars(data){
  return "The brand of the car is: " + data.brand + " and the model is: " + data.model;
};

const data = {
  brand: 'Fiat',
  model: 'Punto',
};

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, wsorld!'
);


class Hello extends Component {
  render() {
    return (
      element
    );
  }
}

export default Hello;
