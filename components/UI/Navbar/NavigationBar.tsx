import React from 'react';
import Logo from '../../../assets/img/canada-cannabyss-logo.svg';

import {
  Navbar,
  NavbarWrapper,
  Brand,
  UserDiv,
  User,
} from '../../../styles/Components/UI/Navbar/Navbar';

const NavigationBar = () => {
  return (
    <Navbar>
      <NavbarWrapper>
        <Brand>
          <img src={Logo} />
          <p>
            Canada <br />
            <span>Cannabyss</span>
          </p>
          <div className='sep' />
          <h1>Reseller</h1>
        </Brand>
        <UserDiv>
          <User />
        </UserDiv>
      </NavbarWrapper>
    </Navbar>
  );
};

export default NavigationBar;
