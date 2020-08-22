import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Background } from '../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage';
import {
  Container,
  Title,
  UserDiv,
  User,
  ResellerName,
  UserFlex,
  ResellerInfo,
  JoinDate,
  CreditDiv,
  Credit,
  MenusGrid,
  Menu,
} from '../../styles/Pages/Account/Account';

const Account = () => (
  <>
    <Head>
      <title>Account | Reseller - Canada Cannabyss</title>
    </Head>
    <Background>
      <Container>
        <Title>Account</Title>
        <UserFlex>
          <UserDiv>
            <User
              img='https://canada-cannabyss.s3.ca-central-1.amazonaws.com/default/users/default-user.jpg'
            />
            <ResellerInfo>
              <ResellerName>Reseller Name</ResellerName>
              <JoinDate>Since March 4, 2020</JoinDate>
            </ResellerInfo>
          </UserDiv>
          <CreditDiv>
            <Credit>
              Credits
              <span id='colon'>:</span>
              <span>45</span>
            </Credit>
          </CreditDiv>
        </UserFlex>
        <MenusGrid>
          <Menu>
            <h3>Billings & Shipping</h3>
            <ul>
              <li>
                <Link href='/account/billing' as='/account/billing'>
                  <a>Billing List</a>
                </Link>
              </li>
              <li>
                <Link href='/account/shipping' as='/account/shipping'>
                  <a>Shipping List</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Payments</h3>
            <ul>
              <li>
                {/* <Link
                  href='/account/payment/credit-card'
                  as='/account/credit-card'
                > */}
                <a className='disabled'>Credit Card</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href='/account/payment/cryptocurrency' as='/account/payment/cryptocurrency'> */}
                <a className='disabled'>Cryptocurrency</a>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link href='/account/payment/e-transfer' as='/account/payment/e-transfer'> */}
                <a className='disabled'>e-Tranfer</a>
                {/* </Link> */}
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Orders</h3>
            <ul>
              <li>
                <Link href='/account/orders' as='/account/orders'>
                  <a>Orders</a>
                </Link>
              </li>
              <li>
                {/* <Link href='/account/returns' as='/account/returns'> */}
                <a className='disabled'>Returns</a>
                {/* </Link> */}
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Miscellaneous</h3>
            <ul>
              <li>
                <Link href='/account/reviews' as='/account/reviews'>
                  <a>Reviews</a>
                </Link>
              </li>
              <li>
                <Link href='/account/invite' as='/account/invite'>
                  <a>Invite friend</a>
                </Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <h3>Support</h3>
            <ul>
              <li>
                {/* <Link href='/account/orders' as='/account/orders'> */}
                <a className='disabled'>Message support</a>
                {/* </Link> */}
              </li>
            </ul>
          </Menu>
        </MenusGrid>
      </Container>
    </Background>
  </>
);

export default Account;
