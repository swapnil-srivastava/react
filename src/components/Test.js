import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Test extends Component {
  render() {
    return (
      <div>
          <h1>Routing Test, Another Route TEST</h1>
          <Link to='/'>Home </Link>
      </div>
    );
  }
}

export default Test;