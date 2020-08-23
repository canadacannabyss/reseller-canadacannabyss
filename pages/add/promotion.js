import Head from 'next/head';
import React from 'react';
import { FaBox, FaPlus } from 'react-icons/fa';

import { BackgroundAdd } from '../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage';
import {
  Wrapper,
  StickyDiv,
  MainGrid,
  Container,
  SideContainer,
  ContentContainer,
  TitleSearchBarAddButtonDiv,
  TitleDiv,
  Content,
  HalfGrid,
  PlusIconSign,
  Label,
  InputGroupTitle,
  Input,
  TextArea,
} from '../../styles/Pages/Add/Product';

const AddProduct = () => (
  <>
    <Head>
      <title>Add Product | Reseller - Canada Cannabyss</title>
    </Head>
    <BackgroundAdd>
      <Wrapper>
        <MainGrid className='main'>
          <Container>
            <ContentContainer>
              <Content>
                <TitleSearchBarAddButtonDiv>
                  <TitleDiv>
                    <PlusIconSign>
                      <FaBox className='mainIcon' />
                      <FaPlus className='plus' />
                    </PlusIconSign>
                    <h1>Add Products</h1>
                  </TitleDiv>
                </TitleSearchBarAddButtonDiv>
                <Label htmlFor='productName'>Product Name</Label>
                <Input id='productName' type='text' autoComplete='off' />
                <br />
                <Label>Description</Label>
                <TextArea />
              </Content>
            </ContentContainer>
          </Container>
          <Container className='pricing'>
            <ContentContainer>
              <Content>
                <InputGroupTitle>Pricing</InputGroupTitle>
                <HalfGrid>
                  <div>
                    <Label htmlFor='price'>Price</Label>
                    <br />
                    <Input
                      id='price'
                      type='number'
                      min='0'
                      step='0.1'
                      autoComplete='off'
                    />
                  </div>
                  <div>
                    <Label htmlFor='compareTo'>Compare To</Label>
                    <Input
                      id='compareTo'
                      type='number'
                      min='0'
                      step='0.1'
                      autoComplete='off'
                    />
                  </div>
                </HalfGrid>
              </Content>
            </ContentContainer>
          </Container>
          <Container className='inventory'>
            <ContentContainer>
              <Content>
                <InputGroupTitle>Inventory</InputGroupTitle>
                <HalfGrid>
                  <div>
                    <Label htmlFor='sku'>SKU (stock keeping unit)</Label>
                    <br />
                    <Input id='sku' type='text' autoComplete='off' />
                  </div>
                  <div>
                    <Label htmlFor='barcode'>
                      Barcode (ISBN, UPC, GTIN, etc.)
                    </Label>
                    <Input id='barcode' type='text' autoComplete='off' />
                  </div>
                </HalfGrid>
                <br />
                <HalfGrid>
                  <div>
                    <Label htmlFor='quantity'>Quantity</Label>
                    <br />
                    <Input id='quantity' type='number' min='1' step='1' />
                  </div>
                </HalfGrid>
              </Content>
            </ContentContainer>
          </Container>
        </MainGrid>
        <StickyDiv>
          <SideContainer className='side'>
            <ContentContainer>
              <Content>
                <TitleSearchBarAddButtonDiv>
                  <TitleDiv>
                    <h2>Organization</h2>
                  </TitleDiv>
                </TitleSearchBarAddButtonDiv>
                <Label htmlFor='category'>Category</Label>
                <Input id='category' type='text' autoComplete='off' />
                <br />
                <Label htmlFor='tags'>Tags</Label>
                <Input id='tags' type='text' autoComplete='off' />
              </Content>
            </ContentContainer>
          </SideContainer>
        </StickyDiv>
      </Wrapper>
    </BackgroundAdd>
  </>
);

AddProduct.getInitialProps = async () => {
  const repos = await fetch('https://api.github.com/users/Davi-Silva/repos');

  const data = await repos.json();
  return {
    repos: data,
  };
};

export default AddProduct;
