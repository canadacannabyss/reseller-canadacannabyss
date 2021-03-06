import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f1f1f1;
  width: 1200px;
  margin: 0 auto;
  min-height: 768px;
  padding: 0 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 250px 250px 1fr;
  grid-template-areas: 
  'a a b c'
  'a a b c'
  'd d e e';
  .sales {
    grid-area: a;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      background-color: #f1f1f1;
    }
  }
  .graphs {
    grid-area: b;
  }
  .alerts {
    grid-area: c;
  }
  .messages {
    grid-area: d;
  }
  .settings {
    grid-area: e;
  }
  @media (max-width: 1460px) {
    width: 100%;
    padding: 0;
  }
  @media(max-width: 991px) {
    padding: 20px 0;
    grid-template-areas: 
    'a a a a'
    'a a a a'
    'b b c c'
    'd d e e';
  }
  @media(max-width: 768px) {
    grid-template-areas: 
      'a a a a'
      'a a a a'
      'b b c c'
      'd d e e'
    ;
    min-height: 1000px;
  } 
  @media(max-width: 680px) {
    grid-template-areas: 
      'a a a a'
      'a a a a'
      'b b c c'
      'd d e e'
    ;
    min-height: 800px;
  } 
  @media(max-width: 550px) {
    grid-template-areas: 
      'a a a a'
      'a a a a'
      'b b b b'
      'c c c c'
      'd d d d'
      'e e e e'
    ;
    min-height: 1350px;
  } 
  @media(max-width: 1199px) {
    grid-gap: 10px;
  }  
`;

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  background: #fff;
  /* width: 100%; */
  border-radius: 4px;
  padding: 7px 14px;
  @media (max-width: 991px) {
    border-radius: 0px;
  }
`;

const ContainerTitle = styled.h2`
  color: #18840f;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 440px) {
    font-size: 16px;
  }
`;

export {
  Wrapper, Container, ContainerTitle
};
