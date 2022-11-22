import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  white-space: nowrap;
  column-gap: 10px;
  row-gap: 25px;
`;
export const StyledItem = styled.li`
  flex-basis: calc(50% - 10px);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledButton = styled.button`
  background: firebrick;
  padding: 10px 20px;
  border-radius: 50px;
  color: white;
  border: none;
  cursor: pointer;

  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.03);
  }
`;
