import styled from 'styled-components';

export const Viewer = styled.div`
  div {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ViewerDiv = styled.div`
  max-height: 500px;
  width: 100%;
  overflow-y: scroll;
  img {
    width: 100%;
  }
`;
