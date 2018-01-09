import React from 'react';
import styles from'./style.css';
import PropTypes from 'prop-types'
export class Header extends React.Component {
constructor(props) {
    super(props);
      console.log('From Header Constructor')
      this.setStateHandler = this.setStateHandler.bind(this)
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.state = {data: 'hj'}
    }

    forceUpdateHandler() {
          this.forceUpdate();
     };
    setStateHandler() {
      this.setState({data: 'true'})
    }

    render() {

        const x = 5;
        const style = {color: 'red', 'fontSize': 20, 'backgroundColor': 'blue'};
        return (
            <div className="abc">
               <button onClick = {this.forceUpdateHandler}>SET STATE</button>
                <p style={{color: 'red', 'fontSize': 20, 'backgroundColor': 'blue'}}>This is header: {x}</p>
                <p style={style}>{this.state.data} {Math.random()}</p>
            </div>
        );
    }
}

Header.propTypes = {
   name: PropTypes.string,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
};

Header.defaultProps = {
   name: 'N/A'
}

//export Header;
