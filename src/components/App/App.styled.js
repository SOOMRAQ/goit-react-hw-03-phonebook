import styled from '@emotion/styled';
import background from '../../images/notebook.png';

export const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 360px;
  margin: 0 auto;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  transition: background-color 400ms ease;
`;
