import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;

  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  color: white;
  background-color: firebrick;
  cursor: pointer;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.03);
  }
`;
