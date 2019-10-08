import React from 'react';
import axios from 'axios';
import fakeData from '../../../fakeData.js';
import CityHotSpotsForm from './CityForm.jsx';
import styled from 'styled-components';

const MainHeader = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: red;
  font-family: Arial, Helvetica, sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'form',
    }
  }

  // componentDidMount() {
    //code
  // }


  render() {
    return (
      <div>
        <MainHeader>HOTSPOTS!</MainHeader>
        <CityHotSpotsForm />
      </div>
    )
  }
}

export default App;