import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Header = styled.header`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong{
    font-size: 24px;
  }

  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }

`;
