import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import MuiTextField from 'material-ui/TextField';

class TextField extends Component {
  constructor(props){
    super(props);
    console.log('constructor');
  }
  
  // Mounting
  componentWillMount(){
    console.log('componentWillMount');
  }

  render(){
    console.log('render');

    return(
      <div>
        <MuiTextField
          style={{border:'2px solid red'}}
          {...this.props}
        />
      </div>
    );
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  // Updating
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  // Unmounting
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
}

export default TextField;