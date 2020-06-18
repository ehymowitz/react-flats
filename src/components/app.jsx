import React, { Component } from 'react';

import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedFlat: flat[0],
      flats
    };
  }

  selectFlat = (i) => {
    this.setState({ selectedFlat: flat[i] });
  }

  render() {
    return(
      <div>
        <FlatList
          flats = {flats}
          selectedFlat = {this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
      </div>
    );
  }
}

export default App;
