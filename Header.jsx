import React from 'react';
import styles from'./style.css';

export class Header extends React.Component {
    constructor() {
      super();
      console.log('From Header Constructor')
      console.log(this.state)
      this.state = {fromHeader: true};
      console.log(this.state)
    }
    render() {
        // console.log(styles)
        const x = 5;
        const style = {color: 'red', 'fontSize': 20, 'backgroundColor': 'blue'};
        return (
            <div className="abc">
                <p style={{color: 'red', 'fontSize': 20, 'backgroundColor': 'blue'}}>This is header: {x}</p>
                <p style={style}>This is header: {x}</p>
            </div>
        );
    }
}


//export Header;
