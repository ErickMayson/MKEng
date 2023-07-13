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

    &:hover {
      color: rgba(0, 0, 0, 1);
      transition: 0.5s;

    }
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
    transition: 0.4 s;
    max-width: 300px;

    &:hover {
      background-color: rgb(0, 0, 0, 1);
      color: #fff;
      transition: 0.4s;
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
