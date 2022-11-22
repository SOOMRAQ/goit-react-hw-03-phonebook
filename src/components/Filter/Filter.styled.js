import styled from '@emotion/styled';

export const StyledInput = styled.input`
  border-radius: 50px;
  border: none;
  background-color: steelblue;
  padding: 5px 10px;
  color: white;
  font-family: inherit;

  &:focus {
    outline: 1px solid black;
  }

  &::placeholder {
    font-family: 'Cinzel', serif;
    font-size: 10px;
  }
`;
