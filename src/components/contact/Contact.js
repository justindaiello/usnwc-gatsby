import React from 'react';
import { StyledContainer, StyledForm } from './ContactStyles';
import Img from 'gatsby-image';

const Contact = ({ data }) => {
  return (
    <StyledContainer>
      <div className="img-container">
        {data.map(image => {
          return (
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt="photo"
              key={image.node.childImageSharp.fluid.src}
              className="header-images"
            />
          );
        })}
      </div>
      <StyledForm>
        <fieldset />
        <div className="form-header">
          <h1>Contact Us</h1>
          <ul className="address-list">
            <span className="subheader">Address:</span>
            <li>U.S National Whitewater Center</li>
            <li>5000 Whitewater Center Parkway</li>
            <li>Charlotte, NC 28214</li>
          </ul>
        </div>
        <label htmlFor="Name">
          Name
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="Email">
          Email
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder="Email"
            required
          />
        </label>
        <label htmlFor="Message">
          Message
          <textarea
            id="Message"
            name="Message"
            placeholder="Enter a Message"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </StyledForm>
      <div className="img-container">
        {data.map(image => {
          return (
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt="photo"
              key={image.node.childImageSharp.fluid.src}
              className="header-images"
            />
          );
        })}
      </div>
    </StyledContainer>
  );
};

export default Contact;
