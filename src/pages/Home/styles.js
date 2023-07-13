import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color:#f2f2f2;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary.main};
  height: 70px;
  position: static;
`;

// export const Header = styled.header`
//  display:flex;
//  align-items: center;
//  justify-content: space-between;
//  margin-top: 32px;
//
//  strong{
//    font-size: 24px;
//  }
//
//  a {
//    font-size: 16px;
//    color: ${({ theme }) => theme.colors.primary.main};
//    text-decoration: none;
//    font-weight: bold;
//    border: 2px solid ${({ theme }) => theme.colors.primary.main};
//    padding: 8px 16px;
//    border-radius: 4px;
//    transition: all 0.2s ease-in;
//
//    &:hover {
//      background: ${({ theme }) => theme.colors.primary.main};
//      color: #fff;
//    }
//  }
//
// `;
// Não sei qualé a do styling do Header aqui? Mas deixa ai né.
