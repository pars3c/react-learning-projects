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
            showStats: false,
        }
    }
    changeBirthday() {
        console.log(this.state);
        this.setState({ birthDay: this.state.newDate })
        this.setState({ showStats: true })
    }
    render(){
        return (
            
            <div className="App">
                <Form >
                    <h2>Please type in your birthday</h2>
                    <FormControl 
                    type='date'
                    onChange={ event => this.setState({ newDate: event.target.value }) }
                    ></FormControl>
                    {' '}
                    <Button
                    onClick={() => this.changeBirthday()}
                    >Submit</Button>
                    {
                        this.state.showStats ? 
                            <AgeStats date={this.state.birthDay}/>
                        :
                        <div></div>
                    }

                    
                </Form>
            </div>

        )

    }

}

export default App;