import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Test extends Component {
  render() {
  
    const { match } = this.props;
  
    return (
      <div>
          <h1>Routing Test, Another Route TEST </h1>
          <span>Route Params = {match.params.id}</span><br/>
          <Link style={{ textDecoration: 'none' }} to='/'>Home </Link>
      </div>
    );
  }
}

export default Test;