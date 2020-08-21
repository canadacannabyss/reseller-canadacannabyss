import styled from 'styled-components';

const SidebarContainer = styled.div`
  height: 100%;
  ${(props) => (props.toggleSidebar ? 'position: sticky;' : 'position: unset;')}
  top: 0;
  ${(props) => (props.toggleSidebar ? 'width: 250px;' : 'width: 0px;')}
  background: #fff;
  transition: all 0.2s ease-in-out;
  .current {
    background: #18840f33;
  }
  @media(max-width: 1199px) {
    position: absolute;
    top: 64px;
    height: 100%;
    ${(props) => (props.toggleSidebar ? 'transform: translate(0px);' : 'transform: translate(-250px);')}
  }
  @media(max-width: 1199px) {
    /* z-index: 9;
    position: ;
  top: 0; */
  }
`;

const SidebarLink = styled.a`
  /* width: 100%; */
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border: none;
  cursor: pointer;
  padding: 0 15px;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &:active {
    background: #18840f66;
  }
  &:hover {
    background: #18840f33;
    svg {
      color: #18840f;
    }
    p {
      color: #18840f;
    }
  }
  svg {
    font-size: 21px;
    margin-right: 10px;
    color: #656565;
    transition: all 0.2s ease-in-out;
  }
  p {
    font-size: 16px;
    color: #656565;
    transition: all 0.2s ease-in-out;
    ${(props) => (props.toggleSidebar ? 'width: 150px;' : 'width: 0px;')}
    overflow-x: hidden;
  }
`;

const ToggleSidebarButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 3px;
  position: absolute;
  ${(props) => (props.toggleSidebar ? 'left: 203px;' : 'left: 0px;')}
  background: #d1e6cf;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999999999999999;
  transition: all 0.2s ease-in-out;
  @media(max-width: 1199px) {
    ${(props) => (props.toggleSidebar ? 'left: 250px' : 'left: 0px;')}
  }
  &:focus {
    outline: none;
  }
  &:hover {
    svg {
      transform: rotate(45deg) scale(1.2);
    }
  }
  &:active {
    svg {
      transform: rotate(45deg) scale(0.9);
    }
  }
  svg {
    font-size: 19px;
    transform: rotate(45deg);
    color: #18840f;
    transition: all 0.2s ease-in-out;
  }
`;

export { SidebarContainer, SidebarLink, ToggleSidebarButton };
