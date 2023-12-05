import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ListItem = styled.li`
  // &:not(:first-child) {
  //   border-top: 1px solid ${p => p.theme.colors.black};
  // }
  display: block;
  box-sizing: border-box;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[2]}px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 10px;
`;
