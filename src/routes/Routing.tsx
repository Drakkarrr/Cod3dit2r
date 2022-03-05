import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { useAuth0 } from '@auth0/auth0-react';
import routes from './routes';
import ProtectedRoute from 'auth/ProtectedRoute';
import Loading from 'components/common/loading/Loading';
// import Header from 'components/common/header/Header';

const Routing: React.FC = () => {
  const styles = useStyles();

  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <Loading />;

  const IsAutenticated = () => {
    return isAuthenticated ? <Navigate to={routes.codeEditor} /> : <div>Home Here</div>;
  };

  return (
    <div className={styles.main}>
      {/* <Header /> */}
      <div className={styles.page}>
        <Routes>
          <Route path={routes.home} element={<IsAutenticated />} />
          <Route path={routes.codeEditor} element={<ProtectedRoute />} />
        </Routes>
      </div>
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
