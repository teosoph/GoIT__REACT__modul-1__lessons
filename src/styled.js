import styled, { css } from 'styled-components';

const primaryColor = 'palevioletred';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${({ primary }) =>
    primary &&
    css`
      background: ${primaryColor};
      color: white;
    `}
`;
