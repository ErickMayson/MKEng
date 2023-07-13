import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color:#f2f2f2;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;

  .contenttext{
    text-align: center;
    color: #000000;
    font-size: 16px;
    width: 500px;
  }

  img {
    border-radius: 5px;
    width: 500px;
  }

`;

export const Title = styled.div`
  margin-top: 32px;
  text-align: center;
  justify-content:center;
  font-size: 32px;
  font-weight: bold;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary.main};
  display: flex;
  width: 600px;
  padding: 12px;
  color:  ${({ theme }) => theme.colors.primary.main}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
