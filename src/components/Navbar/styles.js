import styled from 'styled-components';

export const NavMain = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
`;

export const NavMenu = styled.div`

   a {
    margin-right: 3rem;
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .primary-button {
    padding: 16px 16px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 60px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.2s;

    &:hover {
      background-color: rgb(234, 234, 234);
    }

    .navbar-cart-icon {
      font-size: 20px;
    }

    .navbar-menu-container svg{
      font-size: 20px;
      cursor: pointer;
    }

  }

`;
