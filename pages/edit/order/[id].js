import _ from "lodash";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { FaSortAmountDownAlt, FaPen } from "react-icons/fa";
import PropTypes from "prop-types";
import {
  categoriesArrayToString,
  tagsArrayToString,
} from "../../../utils/arrayMethods";
import {
  slugifyString,
  categoriesToArray,
  tagsToArray,
  editCategoriesToArray,
  editTagsToArray,
} from "../../../utils/stringMethods";
import {
  Wrapper,
  Container,
  ContentContainer,
  SearchBarAddButtonDiv,
  TitleSearchBarAddButtonDiv,
  SearchBar,
  TitleDiv,
  Content,
} from "../../../styles/Pages/Orders/Orders";
import {
  StickyDiv,
  MainGrid,
  PlusIconSign,
  SubmitButton,
  LoadingSpinner,
  Loading,
  Warning,
  Label,
  Input,
  GroupSpan,
  HalfGrid,
  P,
  Select,
} from "../../../styles/Pages/Add/Product";
import { Background } from "../../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage";
import { getOrder } from "../../../store/actions/order/order";
import { getPostalServices } from "../../../store/actions/postalServices/postalServices";
import OrderedItemsList from "../../../components/UI/List/Order/OrderedItemsList";
import PaymentReceiptViewer from "../../../components/UI/Viewer/PaymentReceipt/PaymentReceipt";
import TrackingNumber from "../../../components/UI/Edit/TrackingNumber/TrackingNumber";
import DateFormatter from "../../../utils/dateFormatter";
import WithAuth from "../../../components/UI/withAuth/withAuth";

const mapStateToProps = (state) => {
  const { order, postalServices } = state;

  return {
    order,
    postalServices,
  };
};

const EditOrder = (props) => {
  const { order, postalServices } = props;

  const [items, setItems] = useState([]);

  const [shipped, setShipped] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [paid, setPaid] = useState(false);

  const [trackingNumber, setTrackingNumber] = useState("");
  const [postalService, setPostalService] = useState("-");

  const dateFormatter = new DateFormatter();

  const editOrder = async (product) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/reseller/orders/update/${order.data._id}`,
      {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    if (
      !_.isEmpty(order.data) &&
      order.fetched &&
      !order.loading &&
      !order.error
    ) {
      setShipped(order.data.shipping.status.shipped);
      setPaid(order.data.paid);
      if (
        order.data.tracking.number !== null &&
        order.data.tracking.postalService !== null
      ) {
        setTrackingNumber(order.data.tracking.number);
        setPostalService(order.data.tracking.postalService._id);
      }
    }
  }, [order]);

  const onChangeShipped = (e) => {
    if (e.target.value === "true") {
      setShipped(true);
    } else if (e.target.value === "false") {
      setShipped(false);
    }
  };

  const onChangeOrderStatus = (e) => {
    if (e.target.value === "true") {
      setCanceled(true);
    } else if (e.target.value === "false") {
      setCanceled(false);
    }
  };

  const onChangePaid = (e) => {
    if (e.target.value === "true") {
      setPaid(true);
    } else if (e.target.value === "false") {
      setPaid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderObj = {
      shipped,
      paid,
      canceled,
      trackingNumber,
      postalService,
    };
    const res = await editOrder(orderObj);
    if (res.ok) {
      Router.push("/orders");
    }
  };

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

  const handleTrackingNumber = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleSelectPostalService = (e) => {
    setPostalService(e.target.value);
  };

  return (
    <WithAuth>
      <Head>
        <title>Edit Order | Reseller - Canada Cannabyss</title>
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
                        <FaPen className="plus" />
                      </PlusIconSign>
                      <h1>Edit Order</h1>
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
                      <Select onChange={onChangeOrderStatus}>
                        {!_.isEmpty(order.data) &&
                          order.fetched &&
                          !order.loading &&
                          !order.error && (
                            <>
                              {order.data.canceled ? (
                                <>
                                  <option value={true}>Canceled</option>
                                  <option value={false}>Fulfilled</option>
                                </>
                              ) : (
                                <>
                                  <option value={false}>Fulfilled</option>
                                  <option value={true}>Canceled</option>
                                </>
                              )}
                            </>
                          )}
                      </Select>
                    </div>
                  </HalfGrid>
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
                      <Select onChange={onChangeShipped}>
                        {!_.isEmpty(order.data) &&
                          order.fetched &&
                          !order.loading &&
                          !order.error && (
                            <>
                              {order.data.shipping.status.shipped ? (
                                <>
                                  <option value={true}>Shipped</option>
                                  <option value={false}>
                                    Processing order
                                  </option>
                                </>
                              ) : (
                                <>
                                  <option value={false}>
                                    Processing order
                                  </option>
                                  <option value={true}>Shipped</option>
                                </>
                              )}
                            </>
                          )}
                      </Select>
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
                              <P>{order.data.coupon.couponName}</P>
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
                      <Select onChange={onChangePaid}>
                        {!_.isEmpty(order.data) &&
                          order.fetched &&
                          !order.loading &&
                          !order.error && (
                            <>
                              {order.data.paid ? (
                                <>
                                  <option value={true}>Paid</option>
                                  <option value={false}>Pending</option>
                                </>
                              ) : (
                                <>
                                  <option value={false}>Pending</option>
                                  <option value={true}>Paid</option>
                                </>
                              )}
                            </>
                          )}
                      </Select>
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
                  <TrackingNumber
                    trackingNumber={trackingNumber}
                    handleTrackingNumber={handleTrackingNumber}
                    postalServices={postalServices}
                    handleSelectPostalService={handleSelectPostalService}
                  />
                </>
              )}
          </MainGrid>
        </Wrapper>
        <SubmitButton
          type="button"
          onClick={handleSubmit}
          style={{
            marginBottom: "15px",
          }}
        >
          Update Order
        </SubmitButton>
      </Background>
    </WithAuth>
  );
};

EditOrder.getInitialProps = async ({ ctx }) => {
  const { store, asPath } = ctx;

  const orderId = asPath.substring(12, asPath.length);

  store.dispatch(getOrder(orderId));
  store.dispatch(getPostalServices());
};

EditOrder.propTypes = {
  order: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(EditOrder);
