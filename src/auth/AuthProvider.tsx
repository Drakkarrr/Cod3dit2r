import React, { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import appConfig from 'configs/appConfig';
import { useNavigate } from 'react-router-dom';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={appConfig.auth0Domain}
      clientId={appConfig.auth0ClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
