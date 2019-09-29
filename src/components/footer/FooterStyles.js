import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 15%; */
  /* line-height: 100px; */
  background-color: #393939;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-content {
    color: #ededed;
    text-align: center;
  }
`;

export { StyledFooter };
