import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .img-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .header-images {
    height: 200px;
    width: 100%;
  }
`;

const StyledForm = styled.form`
  @media (max-width: 800px) {
    width: 95%;
    h1 {
      font-size: 2rem;
    }
  }
  width: 60%;
  min-height: 500px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.075);
  background: rgba(0, 0, 0, 0.05);
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #393939;
    &:focus {
      outline: 0;
      border-color: #d0224a;
    }
  }
  textarea {
    resize: vertical;
  }
  button,
  input[type='submit'] {
    width: auto;
    background: #d0224a;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
      background: #fff;
      color: #d0224a;
      border: #d0224a;
    }
  }
  fieldset {
    height: 10px;
    display: block;
    margin-bottom: 1rem;
    background-image: linear-gradient(
      to right,
      #d0224a 0%,
      #fff 50%,
      #d0224a 100%
    );
  }
  .form-header {
    display: flex;
    justify-content: space-between;
  }
  .address-list {
    list-style-type: none;
  }
  .subheader {
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;

export { StyledContainer, StyledForm };
