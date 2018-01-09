import React from 'react';
import {render} from 'react-dom';
import {Header} from './Header.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}


export default App;
