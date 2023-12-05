import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.primary};
  }
`;
