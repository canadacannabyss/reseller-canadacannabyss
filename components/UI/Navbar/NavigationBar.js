import React, { useState } from 'react';
import Logo from '../../../assets/img/canada-cannabyss-logo.svg';
// import OutsideAlerter from '../../../utils/OutsideAlerter';

import UserMenu from './Tabs/UserMenu/UserMenu';

import {
  Navbar,
  NavbarWrapper,
  Brand,
  UserDiv,
  User,
} from '../../../styles/Components/UI/Navbar/Navbar';

const NavigationBar = () => {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  const onClickUserButton = () => {
    setToggleUserMenu(!toggleUserMenu);
  };

  return (
    <>
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
            <User
              onClick={() => {
                onClickUserButton();
              }}
              img='https://canada-cannabyss.s3.ca-central-1.amazonaws.com/default/users/default-user.jpg'
            />
          </UserDiv>
        </NavbarWrapper>
      </Navbar>
      {toggleUserMenu && (
      // <OutsideAlerter>
      <UserMenu handleClose={onClickUserButton} />
      // </OutsideAlerter>
      )}
    </>
  );
};

export default NavigationBar;
