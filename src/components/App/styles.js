import styled from 'styled-components';
// O width ocupa 500px em uma tela maior que 500px, caso a tela seja menor, no caso de um celular
// Ele ocupara toda tela por causa do width 100%

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
  background-color: ${({ theme }) => theme.colors.primary.main};
`;
