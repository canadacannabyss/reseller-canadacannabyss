import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  Container,
  ContentContainer,
  Content,
  InputGroupTitle,
  Label,
  HalfGrid,
  P,
  SentMessage,
  SendTrackingNumberButton
} from '../../../../styles/Pages/Add/Product';

const TrackingNumber = (props) => {
  const { tracking, sendTrackingNumberToCustomer, trackingNumberSent } = props;

  return (
    <Container>
      <ContentContainer>
        <Content>
          <InputGroupTitle>Tracking Number</InputGroupTitle>
          <HalfGrid>
            <div>
              <Label htmlFor='trackingNumber'>Tracking Number</Label>
              <P>{tracking.number}</P>
            </div>
            <div>
              <Label>Postal Service</Label>
              <P>{tracking.postalService.name}</P>
            </div>
          </HalfGrid>
          <HalfGrid>
            <div>
              <SendTrackingNumberButton
                onClick={() => {
                  sendTrackingNumberToCustomer();
                }}
              >
                Send tracking number to customer
              </SendTrackingNumberButton>
            </div>
            <div>
              {trackingNumberSent && (
                <>
                  <br />
                  <SentMessage>Tracking number sent to customer</SentMessage>
                </>
              )}
            </div>
          </HalfGrid>
        </Content>
      </ContentContainer>
    </Container>
  );
};

TrackingNumber.propTypes = {
  tracking: PropTypes.shape().isRequired
};

export default TrackingNumber;
