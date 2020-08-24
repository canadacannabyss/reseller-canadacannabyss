import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ContentContainer,
  Content,
  HalfGrid,
  Label,
  InputGroupTitle,
  Input,
} from '../../../../styles/Pages/Add/Product';
import TaxableProductCheckbox from '../../Buttons/Checkbox/TaxableProductCheckbox';

const Pricing = (props) => {
  const { handleCheckTaxableProduct, taxableProduct } = props;

  return (
    <Container className='pricing'>
      <ContentContainer>
        <Content>
          <InputGroupTitle>Pricing</InputGroupTitle>
          <HalfGrid>
            <div>
              <Label htmlFor='price'>Price</Label>
              <br />
              <Input id='price' type='number' min='0' step='0.1' autoComplete='off' />
            </div>
            <div>
              <Label htmlFor='compareTo'>Compare To</Label>
              <Input id='compareTo' type='number' min='0' step='0.1' autoComplete='off' />
            </div>
          </HalfGrid>
          <br />
          <TaxableProductCheckbox
            handleCheckTaxableProduct={handleCheckTaxableProduct}
            taxableProduct={taxableProduct}
          />
        </Content>
      </ContentContainer>
    </Container>
  );
};

Pricing.propTypes = {
  handleCheckTaxableProduct: PropTypes.func.isRequired,
  taxableProduct: PropTypes.bool.isRequired,
};

export default Pricing;
