import React from 'react';
import axios from 'axios';
import fakeData from '../../../fakeData.js';
import HotSpotsList from './HotSpotsList.jsx';
console.log(fakeData);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSpots : []
    }
  }

  componentDidMount() {
    //code
  }

  render() {
    return (
      <div>
        <h1>HOTSPOTS!</h1>
        <div>{fakeData.map((hotSpot) => {
          return <HotSpotsList hotSpot={hotSpot}/>;
        })}</div>
      </div>
    )
  }
}

export default App;