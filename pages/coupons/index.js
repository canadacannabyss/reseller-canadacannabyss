import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {
  FaPercent, FaSearch, FaPlus,
} from 'react-icons/fa';
import CouponList from '../../components/UI/List/Coupons/CouponList';

import {
  Background,
} from '../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage';
import {
  Container,
  ContentContainer,
  SearchBarAddButtonDiv,
  TitleSearchBarAddButtonDiv,
  SearchBar,
  AddProductLink,
  TitleDiv,
  Content,
} from '../../styles/Pages/Coupons/Coupons';

const coupons = [
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },
  {
    couponName: 'First Coupon',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: false,
    slug: 'first-product',
  },

];

const Promotions = () => (
  <>
    <Head>
      <title>Promotions | Reseller - Canada Cannabyss</title>
    </Head>
    <Background>
      <Container>
        <ContentContainer>
          <Content>
            <TitleSearchBarAddButtonDiv>
              <TitleDiv>
                <FaPercent />
                <h1>Coupons</h1>
              </TitleDiv>
              <SearchBarAddButtonDiv>
                <SearchBar>
                  <input />
                  <button type='button'>
                    <FaSearch />
                  </button>
                </SearchBar>
                <Link href='/coupons/add' as='/coupons/add'>
                  <AddProductLink>
                    <FaPlus />
                  </AddProductLink>
                </Link>
              </SearchBarAddButtonDiv>
            </TitleSearchBarAddButtonDiv>
            <CouponList coupons={coupons} />
          </Content>
        </ContentContainer>
      </Container>
    </Background>
  </>
);

Promotions.getInitialProps = async () => {
  const repos = await fetch('https://api.github.com/users/Davi-Silva/repos');

  const data = await repos.json();
  return {
    repos: data,
  };
};

export default Promotions;
