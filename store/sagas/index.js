import { all, takeLatest } from 'redux-saga/effects';

import LoginAdminUserApi from './user/loginAdminUser';
import LoginUserApi from './user/loginUser';
import FetchLoginUserApi from './user/fetchLoginUser';
import FetchLoginAdminUserApi from './user/fetchLoginAdminUser';
import FetchLoginResellerUserApi from './user/fetchLoginResellerUser';
import LoginUserProviderApi from './user/loginUserProvider';
import LogoutUserApi from './user/logoutUser';
import RefreshUserData from './user/refreshUserData';
import RegisterAdminUserApi from './user/registerAdminUser';

export default function* root() {
  yield all([
    takeLatest('REQUEST_REGISTER_ADMIN_USER', RegisterAdminUserApi),
    takeLatest('REQUEST_LOGIN_ADMIN_USER', LoginAdminUserApi),
    takeLatest('REQUEST_LOGIN_USER', LoginUserApi),
    takeLatest('REQUEST_FETCH_LOGIN_USER', FetchLoginUserApi),
    takeLatest('REQUEST_FETCH_LOGIN_ADMIN_USER', FetchLoginAdminUserApi),
    takeLatest('REQUEST_FETCH_LOGIN_RESELLER_USER', FetchLoginResellerUserApi),
    takeLatest('REQUEST_LOGIN_USER_PROVIDER', LoginUserProviderApi),
    takeLatest('REQUEST_LOGOUT_USER', LogoutUserApi),
    takeLatest('REQUEST_REFRESH_USER_DATA', RefreshUserData)
  ]);
}
