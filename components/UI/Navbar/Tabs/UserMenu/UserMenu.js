import React from 'react';
import Link from 'next/link';

import { Container, LinkTo } from '../../../../../styles/Components/UI/Navbar/Tabs/UserMenu/UserMenu';

const UserMenu = () => (
  <Container>
    <Link href='/account' as='/account'>
      <LinkTo>
        Account
      </LinkTo>
    </Link>
    <Link href='' as=''>
      <LinkTo>
        Sign out
      </LinkTo>
    </Link>
  </Container>
);

export default UserMenu;
