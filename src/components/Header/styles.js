import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 250px;

  img {
    height: 100%;
    width: 100%;
    max-width: 200px;
    max-height: 200px;
    cursor: pointer;
  }
`;
