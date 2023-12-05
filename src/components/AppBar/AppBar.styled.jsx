import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const TitleItem = styled(NavLink)`
  color: ${p => p.theme.colors.primary};
  text-decoration: none;
  border-radius: 4px;
  font-size: ${p => p.theme.fontSizes.l};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const SettingsButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
