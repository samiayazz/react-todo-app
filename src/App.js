import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            text: 'Hello, world!'
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='App'>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
}

export default App;