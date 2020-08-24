import Head from 'next/head';
import React, { useState } from 'react';
import {
  FaBox, FaPlus,
} from 'react-icons/fa';

import {
  BackgroundAdd,
} from '../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage';
import Pricing from '../../components/UI/Add/Pricing/Pricing';
import Inventory from '../../components/UI/Add/Inventory/Inventory';
import Shipping from '../../components/UI/Add/Shipping/Shipping';
import Variants from '../../components/UI/Add/Variants/Variants';
import SEO from '../../components/UI/Add/SEO/SEO';
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
  PlusIconSign,
  Label,
  Input,
  TextArea,
} from '../../styles/Pages/Add/Product';

const AddProduct = () => {
  const [taxableProduct, setTaxableProduct] = useState(false);
  const [allowPurchaseOutOfStock, setAllowPurchaseOutOfStock] = useState(false);
  const [physicalProduct, setPhysicalProduct] = useState(false);
  const [variants, setVariants] = useState([]);
  const [variantsOptionNames, setVariantsOptionNames] = useState([]);
  const [seoTitle, setSeoTitle] = useState('');
  const [seoSlug, setSeoSlug] = useState('');
  const [seoDescription, setSeoDescription] = useState('');

  const handleCheckTaxableProduct = () => {
    setTaxableProduct(!taxableProduct);
  };

  const handleCheckAllowPurchaseOutOfStock = () => {
    setAllowPurchaseOutOfStock(!allowPurchaseOutOfStock);
  };

  const handleCheckPhysicalProduct = () => {
    setPhysicalProduct(!physicalProduct);
  };

  const handleGetVariants = (variantsArray) => {
    setVariants(variantsArray);
  };

  const handleGetVariantsOptionNames = (variantsOptionNamesArray) => {
    setVariantsOptionNames(variantsOptionNamesArray);
  };

  const onChangeSeoTitle = (e) => {
    setSeoTitle(e.target.value);
  };

  const onChangeSeoSlug = (e) => {
    setSeoSlug(slugify(e.target.value.toLowerCase()));
  };

  const onChangeSeoDescription = (e) => {
    setSeoDescription(e.target.value);
  };

  return (
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
            <Pricing
              taxableProduct={taxableProduct}
              handleCheckTaxableProduct={handleCheckTaxableProduct}
            />
            <Inventory
              allowPurchaseOutOfStock={allowPurchaseOutOfStock}
              handleCheckAllowPurchaseOutOfStock={handleCheckAllowPurchaseOutOfStock}
            />
            <Shipping
              physicalProduct={physicalProduct}
              handleCheckPhysicalProduct={handleCheckPhysicalProduct}
            />
            <Variants
              handleGetVariants={handleGetVariants}
              handleGetVariantsOptionNames={handleGetVariantsOptionNames}
            />
            <SEO
              onChangeSeoTitle={onChangeSeoTitle}
              onChangeSeoSlug={onChangeSeoSlug}
              onChangeSeoDescription={onChangeSeoDescription}
              title={seoTitle}
              slug={seoSlug}
              description={seoDescription}
            />
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
};

AddProduct.getInitialProps = async () => {
  const repos = await fetch('https://api.github.com/users/Davi-Silva/repos');

  const data = await repos.json();
  return {
    repos: data,
  };
};

export default AddProduct;
