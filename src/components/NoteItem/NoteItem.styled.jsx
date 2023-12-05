import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px 0;
`;

export const Text = styled.p`
  flex-grow: 1;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: ${p => p.theme.fontSizes.m};
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: ${p => p.theme.colors.button};

  :hover {
    background-color: ${p => p.theme.colors.backgroundButton};
  }
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
