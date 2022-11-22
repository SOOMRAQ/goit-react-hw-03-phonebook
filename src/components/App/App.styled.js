import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
  overflow: auto;
  width: 400px;
  padding: 40px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 50px;
  transition: background-color 400ms ease;
  &:hover {
    background-color: lightblue;
  }
`;
