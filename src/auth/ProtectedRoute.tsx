import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';
import React, { PropsWithChildren, ComponentType } from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute: React.FC = (props: PropsWithChildren<{ [key: string]: any }>) => {
  const { children, ...args } = props;
  return (
    <Route
      element={withAuthenticationRequired(children as ComponentType, { onRedirecting: () => <Loading /> })}
      {...args}
    />
  );
};

export default ProtectedRoute;
