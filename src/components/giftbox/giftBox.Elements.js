import styled from 'styled-components';

export const GiftboxWrapper = styled.div`
  height: 800px;
  width: 600px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    height: 500px;
    width: 300px;
  }
`