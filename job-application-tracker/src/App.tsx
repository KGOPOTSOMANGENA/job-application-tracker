import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';           
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';      
import Dashboard from './pages/Dashboard';        
import ProtectedRoute from './routes/ProtectedRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />                   
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;



