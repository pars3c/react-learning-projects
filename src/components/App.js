import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from './AgeStats';
import './App.css'
class App extends Component {
    constructor(){
        super();
        this.state = {
            newDate: '',
            birthDay: '1991-07-23',
        }
    }
    changeBirthday() {
        console.log(this.state);
        this.setState({ birthDay: this.state.newDate })
    }
    render(){
        return (
            
            <div className="App">
                <Form inline>
                    <h2>Please type in your birthday</h2>
                    <FormControl 
                    type='date'
                    onChange={ event => this.setState({ newDate: event.target.value }) }
                    ></FormControl>
                    {' '}
                    <Button
                    onClick={() => this.changeBirthday()}
                    >Submit</Button>

                    <AgeStats date={this.state.birthDay}/>
                </Form>
            </div>

        )

    }

}

export default App;