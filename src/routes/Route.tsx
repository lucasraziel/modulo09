import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import { store } from '~/store';

interface Props extends RouteProps {
  isPrivate: boolean
}

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: Props) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" push />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          {Component && (
            <Component {...props} />
          )}

        </Layout>
      )}
    />
  );
}

RouteWrapper.defaultProps = {
  isPrivate: false,
};
