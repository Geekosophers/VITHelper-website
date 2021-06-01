import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Redirect to="/placements" />
      ) : (
          window.location.pathname=="/"?(
            <Component {...props} />
          ) : (
            <div>
              <Header />
              <Component {...props} />
            </div>
          )
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
