import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects'
import Users from './components/Users'


class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [
        {
          username: "Aderito",
          age: "27",
          nationality: "Portuguese"
        },
        {
          username: "Carlos",
          age: "32",
          nationality: "Spanish"
        },
        {
          username: "Robert",
          age: "25",
          nationality: "English"
        },
      ],
      projects: [
        {
          title: "O meu primeiro projecto em react",
          category: "Web Design 1"
        },
        {
          title: "O meu segundo projecto em react",
          category: "Web Design 2"
        },
        {
          title: "O meu terceiro projecto em react",
          category: "Web Design 3"
        },
      ]
    }
  }
  render(){
    return (
      <div className="myapp">
        <Users users={this.state.users} />

        {/* The state projects is passed on to the Projects module */}
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}




export default App;
