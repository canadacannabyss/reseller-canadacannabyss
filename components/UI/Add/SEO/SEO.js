import React from 'react';
import PropTypes from 'prop-types';
import {
  PreviewDescription,
  PreviewTitle,
  PreviewURL,
  SEOPreview,
} from '../../../../styles/Components/UI/Add/SEO';

import {
  ContentContainer,
  Container,
  Content,
  InputGroupTitle,
  Label,
  Input,
  TextArea,
} from '../../../../styles/Pages/Add/Product';

const SEO = (props) => {
  const {
    title,
    slug,
    description,
    onChangeSeoTitle,
    onChangeSeoSlug,
    onChangeSeoDescription,
  } = props;

  return (
    <Container className='seo'>
      <ContentContainer>
        <Content>
          <InputGroupTitle>Search engine listing preview</InputGroupTitle>
          <SEOPreview>
            <PreviewTitle>{`${title} - Canada Cannabyss`}</PreviewTitle>
            <PreviewURL>{`https://canadacannabyss.com/product/${slug}`}</PreviewURL>
            <PreviewDescription>{description}</PreviewDescription>
          </SEOPreview>
          <Label htmlFor='title'>Title</Label>
          <Input id='title' type='text' autoComplete='off' />
          <br />
          <Label htmlFor='slug'>Slug</Label>
          <Input id='slug' type='text' autoComplete='off' />
          <br />
          <Label htmlFor='seoDescription'>Title</Label>
          <TextArea id='seoDescription' type='text' autoComplete='off' />
        </Content>
      </ContentContainer>
    </Container>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChangeSeoTitle: PropTypes.func.isRequired,
  onChangeSeoSlug: PropTypes.func.isRequired,
  onChangeSeoDescription: PropTypes.func.isRequired,
};

export default SEO;
