import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  min-width: 100vw;
  min-height: 90vh;

  aside{
    margin: 3% 1% 0 0;
    display: flex;
    justify-content: flex-end;
    width:40%;
  }
  main{
    margin: 3% 2% 0 0;
    width: 100%;
  }

  @media(max-width: 652px){
    flex-direction: column;

    aside{
      display: block;
      width: 100%;
    }

  }
`;
