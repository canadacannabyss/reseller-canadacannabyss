import React from 'react';
import Link from 'next/link';

import { Container, LinkTo, SignOut } from '../../../../../styles/Components/UI/Navbar/Tabs/UserMenu/UserMenu';

const UserMenu = () => (
  <Container>
    <Link href='/account' as='/account'>
      <LinkTo>
        Account
      </LinkTo>
    </Link>
    <SignOut>
      Sign out
    </SignOut>
  </Container>
);

export default UserMenu;
