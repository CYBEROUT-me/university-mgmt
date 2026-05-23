import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GradesPage from './pages/GradesPage';
import SchedulePage from './pages/SchedulePage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
