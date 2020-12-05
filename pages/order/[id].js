import React, { useState, useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaSortAmountDownAlt } from "react-icons/fa";
import _ from "lodash";
import { Background } from "../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage";
import {
  Wrapper,
  Container,
  ContentContainer,
  SearchBarAddButtonDiv,
  TitleSearchBarAddButtonDiv,
  SearchBar,
  TitleDiv,
  Content,
} from "../../styles/Pages/Orders/Orders";
import {
  StickyDiv,
  MainGrid,
  SubmitButton,
  LoadingSpinner,
  Loading,
  Warning,
  Label,
  Input,
  HalfGrid,
  P,
  GroupSpan,
  Select,
  PlusIconSign,
  SendTrackingNumberButton,
  SentMessage,
} from "../../styles/Pages/Add/Product";
import { getOrder } from "../../store/actions/order/order";
import OrderedItemsList from "../../components/UI/List/Order/OrderedItemsList";
import PaymentReceiptViewer from "../../components/UI/Viewer/PaymentReceipt/PaymentReceipt";
import TrackingNumber from "../../components/UI/Viewer/TrackingNumber/TrackingNumber";
import DateFormatter from "../../utils/dateFormatter";
import WithAuth from "../../components/UI/withAuth/withAuth";

const mapStateToProps = (state) => {
  const { order } = state;
  return { order };
};

const Order = (props) => {
  const { order } = props;

  const [items, setItems] = useState([]);

  const [orderId, setOrderId] = useState({});

  const [shippingGeolocation, setShippinggeolocation] = useState({});
  const [trackingNumberSent, setTrackingNumberSent] = useState(false);
  const [orderPlaceEmailSent, setOrderPlaceEmailSent] = useState(false);

  const dateFormatter = new DateFormatter();

  const sendFinishedOrder = async () => {
    setOrderPlaceEmailSent(false);
    const res = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/customers/order/send/finished-order/start`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: order.data._id }),
      }
    );
    const data = await res.json();
    if (data.ok) {
      setOrderPlaceEmailSent(true);
    }
  };

  const sendTrackingNumberToCustomer = async () => {
    setTrackingNumberSent(false);
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/reseller/orders/send/tracking-number/start`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: order.data._id }),
      }
    );
    const data = await response.json();
    if (data.ok) {
      setTrackingNumberSent(true);
    }
  };

  const fetchShippingGeolocation = async (orderID) => {
    console.log("orderID:", orderID);
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/orders/${orderID}/coordinates`,
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setShippinggeolocation(data);
  };

  useEffect(() => {
    if (
      !_.isEmpty(order.data) &&
      order.fetched &&
      !order.loading &&
      !order.error
    ) {
      setOrderId(order.data._id);
      // fetchShippingGeolocation(order.data._id);
    }
  }, [order]);

  const removeElementFromArray = (arr, element) => {
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const handleGetElement = (el) => {
    const element = el;
    if (!items.includes(element.id)) {
      setItems((pOnBundle) => pOnBundle.concat(element.id));
      element.style.backgroundColor = "#18840f";
      element.style.border = "1px solid #18840f";
      element.querySelector(".name").style.color = "#fff";
      element.querySelector(".items-detail").style.display = "block";
      element.querySelector(".empty").style.display = "block";
    } else {
      setItems(removeElementFromArray(items, element.id));
      element.style.backgroundColor = "#efefef";
      element.style.border = "1px solid #efefef";
      element.querySelector(".name").style.color = "#18840f";
      element.querySelector(".items-detail").style.display = "none";
      element.querySelector(".empty").style.display = "none";
    }
  };

  return (
    <WithAuth>
      <Head>
        <title>{`Order: ${orderId} | Reseller - Canada Cannabyss`}</title>
      </Head>
      <Background>
        <Wrapper>
          <MainGrid>
            <Container>
              <ContentContainer>
                <Content>
                  <TitleSearchBarAddButtonDiv>
                    <TitleDiv>
                      <PlusIconSign>
                        <FaSortAmountDownAlt className="mainIcon" />
                      </PlusIconSign>
                      <h1>Order</h1>
                    </TitleDiv>
                  </TitleSearchBarAddButtonDiv>
                  <HalfGrid>
                    <div>
                      <Label for="orderId">Order ID</Label>
                      {!_.isEmpty(order.data) &&
                        order.fetched &&
                        !order.loading &&
                        !order.error && <P>{order.data._id}</P>}
                    </div>
                    <div>
                      <Label>Order Status</Label>
                      <P>
                        {!_.isEmpty(order.data) &&
                          order.fetched &&
                          !order.loading &&
                          !order.error && (
                            <>
                              {order.data.canceled ? "Canceled" : "Fulfilled"}
                            </>
                          )}
                      </P>
                    </div>
                  </HalfGrid>
                  <br />
                  <HalfGrid>
                    <div>
                      <Label>Purchased At</Label>
                      <P>
                        {!_.isEmpty(order.data) &&
                          order.fetched &&
                          !order.loading &&
                          !order.error && (
                            <>
                              {dateFormatter.formatDateFullDate(
                                order.data.purchasedAt
                              )}
                            </>
                          )}
                      </P>
                    </div>
                    <div />
                  </HalfGrid>
                  <br />
                  <GroupSpan>Shipping information</GroupSpan>
                  <HalfGrid>
                    <div>
                      <Label>Shipping Status</Label>
                      <P>
                        {!_.isEmpty(order.data) &&
                          order.fetched &&
                          !order.loading &&
                          !order.error && (
                            <>
                              {order.data.shipping.status.shipped
                                ? "Shipped"
                                : "Processing order"}
                            </>
                          )}
                      </P>
                    </div>
                    <div>
                      <Label htmlFor="shippingAddress">Shipping Address</Label>
                      {!_.isEmpty(order.data) &&
                        order.fetched &&
                        !order.loading &&
                        !order.error && (
                          <P id="shippingAddress">
                            {`${order.data.shippingAddress.addressLine1}, ${order.data.shippingAddress.city}, ${order.data.shippingAddress.provinceState}, ${order.data.shippingAddress.country}`}
                          </P>
                        )}
                    </div>
                  </HalfGrid>
                  <br />
                  <HalfGrid>
                    <div>
                      <Label>Shipped at</Label>
                      <P>
                        {!_.isEmpty(order.data) &&
                          order.fetched &&
                          !order.loading &&
                          !order.error && (
                            <>
                              {order.data.shipping.status.when ? (
                                <>
                                  {dateFormatter.formatDateFullDate(
                                    order.data.shipping.status.when
                                  )}
                                </>
                              ) : (
                                "Not Shipped yet"
                              )}
                            </>
                          )}
                      </P>
                    </div>
                    {!_.isEmpty(order.data) &&
                      order.fetched &&
                      !order.loading &&
                      !order.error && (
                        <>
                          {order.data.coupon ? (
                            <div>
                              <Label>Coupon applied</Label>
                              <Status>{order.data.coupon.couponName}</Status>
                            </div>
                          ) : (
                            <div />
                          )}
                        </>
                      )}
                  </HalfGrid>
                  <br />
                  <GroupSpan>Billing information</GroupSpan>
                  <Label>Billing Address</Label>
                  <P id="shippingAddress">
                    {!_.isEmpty(order.data) &&
                      order.fetched &&
                      !order.loading &&
                      !order.error && (
                        <>
                          {`${order.data.billingAddress.addressLine1}, ${order.data.billingAddress.city}, ${order.data.billingAddress.provinceState}, ${order.data.billingAddress.country}`}
                        </>
                      )}
                  </P>
                  <br />
                  <GroupSpan>Payment information</GroupSpan>
                  <HalfGrid>
                    <div>
                      <Label>Payment Method</Label>
                      {!_.isEmpty(order.data) &&
                        order.fetched &&
                        !order.loading &&
                        !order.error && (
                          <>
                            {order.data.paymentMethod.cryptocurrency.symbol !==
                              null &&
                              order.data.paymentMethod.cryptocurrency
                                .address !== null && <P>Cryptocurrency</P>}
                            {order.data.paymentMethod.eTransfer.isETransfer && (
                              <P>e-Transfer</P>
                            )}
                          </>
                        )}
                    </div>
                    <div>
                      {!_.isEmpty(order.data) &&
                        order.fetched &&
                        !order.loading &&
                        !order.error && (
                          <>
                            {order.data.paymentMethod.cryptocurrency.symbol !==
                              null &&
                              order.data.paymentMethod.cryptocurrency.name !==
                                null &&
                              order.data.paymentMethod.cryptocurrency
                                .address !== null &&
                              order.data.paymentMethod.cryptocurrency.logo && (
                                <>
                                  <Label>Cryptocurrency</Label>
                                  <P className="cryptoLogoSymbolName">
                                    <img
                                      src={
                                        order.data.paymentMethod.cryptocurrency
                                          .logo
                                      }
                                      alt={`${order.data.paymentMethod.cryptocurrency.symbol} logo`}
                                    />
                                    {`${order.data.paymentMethod.cryptocurrency.symbol} - ${order.data.paymentMethod.cryptocurrency.name}`}
                                  </P>
                                </>
                              )}
                            {order.data.paymentMethod.eTransfer.isETransfer && (
                              <>
                                <Label>Customer Email</Label>
                                <P>{order.data.customer.email}</P>
                              </>
                            )}
                          </>
                        )}
                    </div>
                  </HalfGrid>

                  {!_.isEmpty(order.data) &&
                    order.fetched &&
                    !order.loading &&
                    !order.error && (
                      <>
                        {order.data.paymentMethod.cryptocurrency.symbol !==
                          null &&
                          order.data.paymentMethod.cryptocurrency.name !==
                            null &&
                          order.data.paymentMethod.cryptocurrency.address !==
                            null &&
                          order.data.paymentMethod.cryptocurrency.logo && (
                            <>
                              <br />
                              <HalfGrid>
                                <div>
                                  <Label>
                                    {`Customer ${order.data.paymentMethod.cryptocurrency.name} Wallet`}
                                  </Label>
                                  <P>
                                    {
                                      order.data.paymentMethod.cryptocurrency
                                        .customerAddress
                                    }
                                  </P>
                                </div>
                                <div>
                                  <Label>
                                    {`Company ${order.data.paymentMethod.cryptocurrency.name} Wallet`}
                                  </Label>
                                  <P>
                                    {
                                      order.data.paymentMethod.cryptocurrency
                                        .companyAddress
                                    }
                                  </P>
                                </div>
                              </HalfGrid>
                            </>
                          )}
                      </>
                    )}

                  {!_.isEmpty(order.data) &&
                    order.fetched &&
                    !order.loading &&
                    !order.error && (
                      <>
                        {order.data.paymentMethod.eTransfer.recipient !==
                          null && (
                          <>
                            <br />
                            <HalfGrid>
                              <div>
                                <Label>Recipient</Label>
                                <P>
                                  {order.data.paymentMethod.eTransfer.recipient}
                                </P>
                              </div>
                              <div></div>
                            </HalfGrid>
                          </>
                        )}
                      </>
                    )}
                  <br />
                  <HalfGrid>
                    <div>
                      <Label>Payment Status</Label>
                      {!_.isEmpty(order.data) &&
                        order.fetched &&
                        !order.loading &&
                        !order.error && (
                          <P>{order.data.paid ? "Paid" : "Pending"}</P>
                        )}
                    </div>
                    <div>
                      <Label>Total</Label>
                      {!_.isEmpty(order.data) &&
                        order.fetched &&
                        !order.loading &&
                        !order.error && <P>C$ {order.data.total}</P>}
                    </div>
                  </HalfGrid>
                  {!_.isEmpty(order.data) &&
                    order.fetched &&
                    !order.loading &&
                    !order.error && (
                      <>
                        {order.data.paymentMethod.cryptocurrency.symbol !==
                          null &&
                          order.data.paymentMethod.cryptocurrency.name !==
                            null &&
                          order.data.paymentMethod.cryptocurrency.address !==
                            null &&
                          order.data.paymentMethod.cryptocurrency.logo &&
                          order.data.totalInCryptocurrency !== null && (
                            <>
                              <br />
                              <HalfGrid>
                                <div>
                                  <Label>
                                    Total in{" "}
                                    {
                                      order.data.paymentMethod.cryptocurrency
                                        .symbol
                                    }
                                  </Label>
                                  <P>{order.data.totalInCryptocurrency}</P>
                                </div>
                                <div />
                              </HalfGrid>
                            </>
                          )}
                        <HalfGrid>
                          <div>
                            <SendTrackingNumberButton
                              onClick={() => {
                                sendFinishedOrder();
                              }}
                            >
                              Send placed order email to customer
                            </SendTrackingNumberButton>
                          </div>
                          <div>
                            {orderPlaceEmailSent && (
                              <>
                                <br />
                                <SentMessage>
                                  Placed order email sent to customer
                                </SentMessage>
                              </>
                            )}
                          </div>
                        </HalfGrid>
                      </>
                    )}
                </Content>
              </ContentContainer>
            </Container>
            {!_.isEmpty(order.data) &&
              order.fetched &&
              !order.loading &&
              !order.error && (
                <>
                  <OrderedItemsList
                    title="Purchased Items"
                    products={order.data.cart.items}
                    handleGetElement={handleGetElement}
                  />
                  <PaymentReceiptViewer
                    paymentReceipt={order.data.paymentReceipt}
                  />
                  {order.data.tracking.number !== null &&
                    order.data.tracking.postalService !== null && (
                      <TrackingNumber
                        tracking={order.data.tracking}
                        sendTrackingNumberToCustomer={
                          sendTrackingNumberToCustomer
                        }
                        trackingNumberSent={trackingNumberSent}
                      />
                    )}
                </>
              )}
          </MainGrid>
        </Wrapper>
      </Background>
    </WithAuth>
  );
};

Order.propTypes = {
  order: PropTypes.string.isRequired,
};

Order.getInitialProps = async ({ ctx }) => {
  const { asPath, store } = ctx;

  const orderId = asPath.substring(7, asPath.length);

  store.dispatch(getOrder(orderId));
};

export default connect(mapStateToProps)(Order);
