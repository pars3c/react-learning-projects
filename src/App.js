import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';


function User(data){
  return ": " + data.brand + " and the model is: " + data.model;
};

const data = {
  brand: 'Fiat',
  model: 'Punto',
};

const element = React.createElement(
  'p',
  {className: 'greeting'},
  User(data)
);

class ProfileViewer extends Component {
  render(){
    return (
      <Row>
      <Col sm="6" md="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6" md="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    );
  }
}


class Hello extends Component {
  render() {
    return (
      element
    );
  }
}

export default ProfileViewer;
