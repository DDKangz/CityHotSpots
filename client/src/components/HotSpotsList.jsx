import React from 'react';
import Media from 'react-bootstrap/Media';
import styled from 'styled-components';

var HotSpotsEntries = styled.div`
  box-sizing: border-box;
  letter-spacing: 1px;
  width: auto;
  margin-right: 80px;
  margin-top: 10px;
  border-bottom: 1px solid #e4e4e4;
  padding: 10px;
`;

const MainHeader = styled.h2`
  font-size: 18px;
  font-weight: 800;
  color: #484848;
  font-family: Arial, Helvetica, sans-serif;
`;

const DescriptionStyle = styled.p`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  box-sizing: border-box;
  word-wrap: break-word;
  height: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

const VoteStyle = styled.p`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

const TagsStyle = styled.p`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 19px;
  margin-bottom: 3px;
  font-family: Arial, Helvetica, sans-serif;
`;

const HotSpotsList = (props) => {
  return(
    <HotSpotsEntries>
      <Media display='inline'>
        <img
          width={64}
          height={64}
          float="left"
          className="mr-3"
          src={props.hotSpot.image}
          alt="Generic placeholder"
        />
        <Media.Body>
        <MainHeader>{props.hotSpot.name}</MainHeader>
        <VoteStyle>{props.hotSpot.votes}</VoteStyle>
        <TagsStyle>{props.hotSpot.tags}</TagsStyle>
        <DescriptionStyle>{props.hotSpot.description}</DescriptionStyle>
        </Media.Body>
      </Media>
    </HotSpotsEntries>
  )
};

export default HotSpotsList;

