import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from 'components/common/loading/Loading';
import store, { persistor } from './store';

const ReduxProvider: React.FC = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
