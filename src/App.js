import { Route, Routes } from 'react-router';
import 'rsuite/dist/rsuite.min.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './Styles/main.scss';

function App() {
  return (
    <ProfileProvider>
      <Routes>
        <Route
          exact
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </ProfileProvider>
  );
}

export default App;
