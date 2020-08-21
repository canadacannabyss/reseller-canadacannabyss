import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {
  FaTags, FaSearch, FaPlus,
} from 'react-icons/fa';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import PromotionList from '../../components/UI/List/Promotions/PromotionList';

import {
  PageContainer,
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
} from '../../styles/Pages/Promotions/Promotions';

const promotions = [
  {
    promotionName: 'First Promotion',
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
    promotionName: 'First Promotion',
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
    promotionName: 'First Promotion',
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
    promotionName: 'First Promotion',
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
    promotionName: 'First Promotion',
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
    promotionName: 'First Promotion',
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
    promotionName: 'First Promotion',
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
    promotionName: 'First Promotion',
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
    <PageContainer>
      <Sidebar />
      <Background>
        <Container>
          <ContentContainer>
            <Content>
              <TitleSearchBarAddButtonDiv>
                <TitleDiv>
                  <FaTags />
                  <h1>Promotions</h1>
                </TitleDiv>
                <SearchBarAddButtonDiv>
                  <SearchBar>
                    <input />
                    <button type='button'>
                      <FaSearch />
                    </button>
                  </SearchBar>
                  <Link href='/promotions/add' as='/promotions/add'>
                    <AddProductLink>
                      <FaPlus />
                    </AddProductLink>
                  </Link>
                </SearchBarAddButtonDiv>
              </TitleSearchBarAddButtonDiv>
              <PromotionList promotions={promotions} />
            </Content>
          </ContentContainer>
        </Container>
      </Background>
    </PageContainer>
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
