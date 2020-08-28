import _ from 'lodash';
import React, { Component } from 'react';
import redirect from './redirect';

export const withResellerAuth = (C) => class AuthComponent extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const state = store.getState();
    const userInfo = state.user;
    if (_.isEmpty(userInfo.data)) {
      redirect(props.ctx, '/');
    } else if (!userInfo.data.isReseller) {
      redirect(props.ctx, '/');
    }
    console.log('userInfo:', userInfo);
    return { isServer, asPath, userInfo };
  }

  render() {
    return <C {...this.props} />;
  }
};
