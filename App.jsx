import React from 'react';
import {render} from 'react-dom';
import {Header} from './Header.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props.name);
        console.log(this.state);
        this.state = {anELement: 5}
        console.log(this.state)
        this.state = {anELement2: 5}
        console.log(this.state)
        this.state.anELement2 = '9';
        console.log(this.state)
        return (
            <div>
                <Header propBool={true} />
            </div>
        );
    }
}

App.defaultProps = {name: 'N/A'}

export default App;
