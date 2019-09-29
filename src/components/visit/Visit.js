import React from 'react';
import {
  MarkdownContainer,
  StyledContainer,
  StyledList,
  StyledLink,
} from './VisitStyles';
import { TiDocumentText } from 'react-icons/ti';
import {
  FaMapSigns,
  FaMapMarkedAlt,
  FaBed,
  FaHamburger,
  FaClock,
} from 'react-icons/fa';

const Visit = props => {
  return (
    <StyledContainer>
      <MarkdownContainer dangerouslySetInnerHTML={{ __html: props.html }} />
      <StyledList>
        <li>
          <TiDocumentText className="icon" />
          <StyledLink to="/visit">Waiver</StyledLink>
        </li>
        <li>
          <FaMapMarkedAlt className="icon" />
          <StyledLink to="/visit">Maps</StyledLink>
        </li>
        <li>
          <FaMapSigns className="icon" />
          <StyledLink to="/visit">Directions</StyledLink>
        </li>
        <li>
          <FaBed className="icon" />
          <StyledLink to="/visit">Accommodations</StyledLink>
        </li>
        <li>
          <FaHamburger className="icon" />
          <StyledLink to="/visit">Food & Beverage</StyledLink>
        </li>
        <li>
          <FaClock className="icon" />
          <StyledLink to="/visit">Hours</StyledLink>
        </li>
      </StyledList>
    </StyledContainer>
  );
};

export default Visit;
