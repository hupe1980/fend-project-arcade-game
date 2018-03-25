import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid blue;
  background-color: white;
  color: blue;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export default Button;
