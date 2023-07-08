import styled from 'styled-components';

export const Container = styled.footer`
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  max-width: 500px;
  width: "100%";
`;
