import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaHome, FaBox, FaBoxes, FaTags, FaPercent, FaSortAmountDownAlt, FaListUl, FaPlus,
} from 'react-icons/fa';
import {
  SidebarContainer,
  SidebarLink,
  ToggleSidebarButton,
} from '../../../styles/Components/UI/Sidebar/Sidebar';

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const onClickToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <>
      <ToggleSidebarButton
        toggleSidebar={toggleSidebar}
        onClick={() => {
          onClickToggleSidebar();
        }}
      >
        <FaPlus />
      </ToggleSidebarButton>
      <SidebarContainer toggleSidebar={toggleSidebar}>
        <Link href='/dashboard' as='/dashboard'>
          <SidebarLink toggleSidebar={toggleSidebar}>
            <FaHome />
            <p>Dashboard</p>
          </SidebarLink>
        </Link>
        <Link href='/products' as='/products'>
          <SidebarLink toggleSidebar={toggleSidebar}>
            <FaBox />
            <p>Products</p>
          </SidebarLink>
        </Link>
        <Link href='/bundles' as='/bundles'>
          <SidebarLink toggleSidebar={toggleSidebar}>
            <FaBoxes />
            <p>Bundles</p>
          </SidebarLink>
        </Link>
        <Link href='/promotions' as='/promotions'>
          <SidebarLink toggleSidebar={toggleSidebar}>
            <FaTags />
            <p>Promotions</p>
          </SidebarLink>
        </Link>
        <Link href='/coupons' as='/coupons'>
          <SidebarLink toggleSidebar={toggleSidebar}>
            <FaPercent />
            <p>Coupons</p>
          </SidebarLink>
        </Link>
        <Link href='/categories' as='/categories'>
          <SidebarLink toggleSidebar={toggleSidebar}>
            <FaListUl />
            <p>Categories</p>
          </SidebarLink>
        </Link>
        <Link href='/orders' as='/orders'>
          <SidebarLink toggleSidebar={toggleSidebar}>
            <FaSortAmountDownAlt />
            <p>Orders</p>
          </SidebarLink>
        </Link>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
