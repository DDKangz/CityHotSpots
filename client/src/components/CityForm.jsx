import React from 'react';
import HotSpotsList from './HotSpotsList.jsx';
import NotFound from './NotFound.jsx';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

class CityHotSpotsForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputCity: '',
      inputTags: 'All',
      hotSpots: [],
      page: 'form'
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  submitForm(event) {
    event.preventDefault();
    axios.get(`/hotspots/${this.state.inputCity}/${this.state.inputTags}`)
    .then(res => {
      const hotSpots = res.data;
      console.log(hotSpots.length);
      this.setState({hotSpots})
      if(hotSpots.length === 0) {
        this.setState({
          page: 'notFound'
        })
      } else {
        this.setState({
          page: 'list'
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render () {
    var form = (
      <form onSubmit={this.submitForm} >
        <Form.Group>
          <Form.Label>Enter Your City: </Form.Label>
          <Form.Control type="text" name="inputCity" value={this.state.inputCity} onChange={this.handleChange} required></Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label>Filter By Options: </Form.Label>
        <Form.Control as="select" name="inputTags" value={this.state.inputTags} onChange={this.handleChange}>
          <option value='All'>All</option>
          <option value='Events'>Events</option>
          <option value='Food'>Foods</option>
          <option value='Sites'>Sites</option>
          <option value='Clubs'>Clubs</option>
          <option value='Bars'>Bars</option>
        </Form.Control>
        </Form.Group>
        <button>Find HOTSPOTS!</button>
      </form>
    )
    
    var notFound = (<NotFound city={this.state}/>);

    var list = (<div>{this.state.hotSpots.map((hotSpot) => {
      return <HotSpotsList hotSpot={hotSpot}/>;
    })}</div>);

    if(this.state.page === 'form') {
      return form;
    } else if (this.state.page === 'list') {
      return list;
    } else if(this.state.page === 'notFound') {
      return notFound;
    }
  }
}

export default CityHotSpotsForm;