import React from 'react';
import Logo from '../../../assets/img/canada-cannabyss-logo.svg';

import {
  Navbar,
  NavbarWrapper,
  Brand,
  UserDiv,
  User,
} from '../../../styles/Components/UI/Navbar/Navbar';

const NavigationBar = () => (
  <Navbar>
    <NavbarWrapper>
      <Brand>
        <img src={Logo} alt='Canada Cannabyss Reseller' />
        <p>
          Canada
          {' '}
          <br />
          <span>Cannabyss</span>
        </p>
        <div className='sep' />
        <h1>Reseller</h1>
      </Brand>
      <UserDiv>
        <User img='https://canada-cannabyss.s3.ca-central-1.amazonaws.com/default/users/default-user.jpg' />
      </UserDiv>
    </NavbarWrapper>
  </Navbar>

);

export default NavigationBar;
