import styled from '@emotion/styled';

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const StyledItem = styled.li`
  flex-basis: calc(50% - 30px);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  border: 1px dashed steelblue;
  border-radius: 50px;
  padding-left: 10px;
  padding-right: 5px;
`;
