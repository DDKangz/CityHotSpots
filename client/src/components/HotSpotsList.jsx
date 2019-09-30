import React from 'react';

const HotSpotsList = (props) => {
  // console.log(props.hotSpot.name);
  return(
      <div>
        <div>{props.hotSpot.name}</div>
        <div>{props.hotSpot.description}</div>
        <div>{props.hotSpot.tags}</div>
        <div>{props.hotSpot.votes}</div>
        <div>{props.hotSpot.image}</div>
      </div>
  )
};

export default HotSpotsList;

