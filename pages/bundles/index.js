import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import {
  FaBoxes, FaSearch, FaPlus,
} from 'react-icons/fa';
import Sidebar from '../../components/UI/Sidebar/Sidebar';
import BundleList from '../../components/UI/List/Bundles/BundleList';

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
} from '../../styles/Pages/Bundles/Bundles';

const bundles = [
  {
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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
    bundleName: 'First Bundle',
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

const Bundles = () => (
  <>
    <Head>
      <title>Bundles | Reseller - Canada Cannabyss</title>
    </Head>
    <PageContainer>
      <Sidebar />
      <Background>
        <Container>
          <ContentContainer>
            <Content>
              <TitleSearchBarAddButtonDiv>
                <TitleDiv>
                  <FaBoxes />
                  <h1>Bundles</h1>
                </TitleDiv>
                <SearchBarAddButtonDiv>
                  <SearchBar>
                    <input />
                    <button type='button'>
                      <FaSearch />
                    </button>
                  </SearchBar>
                  <Link href='/bundles/add' as='/bundles/add'>
                    <AddProductLink>
                      <FaPlus />
                    </AddProductLink>
                  </Link>
                </SearchBarAddButtonDiv>
              </TitleSearchBarAddButtonDiv>
              <BundleList bundles={bundles} />
            </Content>
          </ContentContainer>
        </Container>
      </Background>
    </PageContainer>
  </>
);

Bundles.getInitialProps = async () => {
  const repos = await fetch('https://api.github.com/users/Davi-Silva/repos');

  const data = await repos.json();
  return {
    repos: data,
  };
};

export default Bundles;
