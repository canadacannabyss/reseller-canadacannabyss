import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {
  FaBox, FaSearch, FaPlus,
} from 'react-icons/fa';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import ProductList from '../../components/UI/List/Products/ProductList';

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
} from '../../styles/Pages/Products/Products';

const products = [
  {
    productName: 'First Product',
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
    productName: 'First Product',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: true,
    slug: 'first-product',
  },
  {
    productName: 'First Product',
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
    productName: 'First Product',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: true,
    slug: 'first-product',
  },
  {
    productName: 'First Product',
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
    productName: 'First Product',
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
    productName: 'First Product',
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
    productName: 'First Product',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: true,
    slug: 'first-product',
  },
  {
    productName: 'First Product',
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
    productName: 'First Product',
    prices: {
      price: 32.65,
      compareTo: 40.00,
    },
    createdOn: 'December 30, 2019',
    updatedOn: 'December 31, 2019',
    featured: true,
    slug: 'first-product',
  },

];

const Products = () => (
  <>
    <Head>
      <title>Products | Reseller - Canada Cannabyss</title>
    </Head>
    <PageContainer>
      <Sidebar />
      <Background>
        <Container>
          <ContentContainer>
            <Content>
              <TitleSearchBarAddButtonDiv>
                <TitleDiv>
                  <FaBox />
                  <h1>Products</h1>
                </TitleDiv>
                <SearchBarAddButtonDiv>
                  <SearchBar>
                    <input />
                    <button type='button'>
                      <FaSearch />
                    </button>
                  </SearchBar>
                  <Link href='/product/add' as='/product/add'>
                    <AddProductLink>
                      <FaPlus />
                    </AddProductLink>
                  </Link>
                </SearchBarAddButtonDiv>
              </TitleSearchBarAddButtonDiv>
              <ProductList products={products} />
            </Content>
          </ContentContainer>
        </Container>
      </Background>
    </PageContainer>
  </>
);

Products.getInitialProps = async () => {
  const repos = await fetch('https://api.github.com/users/Davi-Silva/repos');

  const data = await repos.json();
  return {
    repos: data,
  };
};

export default Products;
