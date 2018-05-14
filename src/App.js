import React, { Component } from 'react';
import { Loading, Button } from 'zent'
import 'zent/css/index.css';

class App extends Component {
  state = {
    on: true
  };

  render() {
    return (
      <div style={{ padding: 40 }}>
        <Button type="primary" onClick={() => { this.setState({ on: true }) }}>
          Open
        </Button>
        <Button type="danger"
          onClick={() => { this.setState({ on: false }) }}
          style={{ zIndex: 9999, position: 'relative' }}
        >
          Close
        </Button>
        <Loading float show={this.state.on} />
      </div>
    );
  }
}

export default App;
