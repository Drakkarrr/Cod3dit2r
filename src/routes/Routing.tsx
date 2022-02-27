import React from 'react';
import routes from './routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import ProtectedRoute from 'auth/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';
import Home from 'components/views/Home';

const Routing: React.FC = () => {
  const styles = useStyles();
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <Loading />;

  return (
    <div className={styles.main}>
      <div>Header</div>
      <h2>asdasdasdasd</h2>

      {/* <div className={styles.page}>
        <Routes>
          <Route path={routes.codeEditor} element={<ProtectedRoute />} />
          <Route path={routes.home} element={<routes.home />}>
            {isAuthenticated ? <Navigate to={routes.codeEditor} /> : <Home />}
          </Route>
        </Routes>
      </div> */}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default Routing;
