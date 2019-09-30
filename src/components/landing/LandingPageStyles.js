import styled from 'styled-components';

const LandingImageStyles = styled.div`
  margin: 0;
  height: 100vh;
  max-width: 100% !important;
  left: 0;
  .landing-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    p {
      color: white;
      z-index: 999;
      font-size: 5rem;
      word-spacing: 1rem;
      text-transform: uppercase;
      @media (max-width: 1080px) {
        font-size: 3.5rem;
      }
      @media (max-width: 780px) {
        display: none;
      }
    }
  }
`;

export default LandingImageStyles;
