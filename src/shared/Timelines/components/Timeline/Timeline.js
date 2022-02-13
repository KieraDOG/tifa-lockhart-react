import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 16px 20px;
  border-radius: 4px;
  box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.1);
  border-left: 2px solid #377e98;
  margin-left: -5px;

  &::before {
    content: "";
    width: 48px;
    border-bottom: 2px solid #377e98;
    position: absolute;
    left: -48px;
    top: 8px;
  }

  &::after {
    content: "";
    position: absolute;
    left: -52px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 2px solid #377e98;
    top: 2px;
    background: white;
  }
`;

const Title = styled.h4`
  margin: 0 0 8px;
`;

const Meta = styled.div`
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

const Year = styled.span`
  color: #377e98;
`;

const Divider = styled.i`
  border-right: 1px solid #dadada;
`;

const Subtitle = styled.span`
  color: #49515d;
`;

const Description = styled.div`
  line-height: 1.75;
`;

const Timeline = ({
  title,
  year,
  subtitle,
  description,
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Meta>
      <Year>{year}</Year>
      &nbsp;
      <Divider />
      &nbsp;
      <Subtitle>{subtitle}</Subtitle>
    </Meta>
    <Description>{description}</Description>
  </Wrapper>
);

export default Timeline;
