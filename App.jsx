import React from 'react';
import {render} from 'react-dom';
import {Header} from './Header.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        console.log(this.state);
        this.state = {anELement: 5}
        console.log(this.state)
        this.state = {anELement2: 5}
        console.log(this.state)
        this.state.anELement2 = '9';
        console.log(this.state)
        return (
            <div>
                <h3>{this.state.anELement2}</h3>
                <Header />
            </div>
        );
    }
}


export default App;
