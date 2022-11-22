import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
export const StyledInput = styled.input`
  border-radius: 50px;
  border: none;
  background-color: #e883f7;
  padding: 5px;

  &:focus {
    outline: 1px solid black;
  }
`;
export const StyledButton = styled.button`
  background: firebrick;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 50px;
  color: white;
  border: none;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.03);
  }
`;
