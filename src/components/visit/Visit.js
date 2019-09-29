import React from 'react';
import { StyledContainer } from './VisitStyles';

const Visit = props => {
  return <StyledContainer dangerouslySetInnerHTML={{ __html: props.html }} />;
};

export default Visit;
