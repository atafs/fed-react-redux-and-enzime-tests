import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import '../style/app.css';

class App extends Component {
    constructor(){
        super();

        this.state = {
            text: ''
        }
    }
    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl className='form-control'  onChange={ event => this.setState({ text: event.target.value}) }/>
                    <Button onClick={() => console.log(this.state)} >Submit</Button>
                </Form>
            </div>
            
        )
    }
}

export const color = 'blue';
export const number = 22;

export default App;