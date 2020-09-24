import { call, put } from 'redux-saga/effects';

async function getOrders() {
  const res = await fetch(
    `${process.env.MAIN_API_ENDPOINT}/reseller/orders`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  const data = await res.json();
  return data;
}

export default function* asyncGetOrders() {
  try {
    const response = yield call(getOrders);

    yield put({ type: 'SUCCESS_GET_ORDERS', payload: { data: response } });
  } catch (err) {
    console.log(err);
    yield put({ type: 'FAILURE_GET_ORDERS' });
  }
}
