import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: solid 1px #212121;
  border-radius: 10%;

  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[7]}px;
`;

export const Field = styled.input`
  flex-grow: 1;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px;
  font: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};

  :focus {
    outline-color: ${p => p.theme.colors.primary};
  }
`;

export const Textarea = styled.input`
  flex-grow: 1;
  width: 300px;
  height: 150px;
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[3]}px;
  font: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};

  :focus {
    outline-color: ${p => p.theme.colors.primary};
  }
`;

export const Button = styled.button`
  display: inline-flex;
  padding: ${p => p.theme.space[3]}px 16px;
  border-radius: ${p => p.theme.space[2]}px;
  border: none;
  cursor: pointer;
  font: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  background-color: ${p => p.theme.colors.backgroundButton};

  :hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
