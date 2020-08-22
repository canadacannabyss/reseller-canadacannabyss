import styled from 'styled-components';

const Navbar = styled.nav`
  height: 64px;
  width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
`;

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
  img {
    height: 45px;
    width: 45px;
  }
  p {
    color: rgb(24, 132, 15);
    line-height: 15px;
    span {
      color: #b01129;
      font-weight: 900;
    }
  }
  .sep {
    content: '';
    background-color: #b01129;
    width: 2px;
    height: 18px;
    display: block;
    position: relative;
    margin: 0 6px 0 12px;
  }
  h1 {
    font-size: 20px;
    color: #b01129;
  }
  @media (max-width: 578px) {
    p {
      display: none;
    }
  }
`;

const UserDiv = styled.div`
  margin-right: 5px;
  display: flex;
  height: 100%;
  align-items: center;
`;

const User = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-image: ${(props) => `url('${props.img}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50px;
`;

export {
  Navbar, NavbarWrapper, Brand, UserDiv, User,
};
