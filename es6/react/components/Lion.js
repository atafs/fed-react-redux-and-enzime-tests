import React, { Component } from 'react';

class Lion extends Component {
    //add state to the component (local)
    constructor() {
        super();

        //add props
        this.state = {
            name: 'Mufasa',
            size: 'Large'
        };
    }

    render() {
        return (
            <div>
                <h2>Rooaar!!</h2>
            </div>
        )
    }
}

export default Lion;