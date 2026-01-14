import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import NotFound from './pages/NotFound';
import JobDetails from './pages/JobDetails';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-job"
        element={
          <ProtectedRoute>
            <AddJob />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <EditJob />
          </ProtectedRoute>
        }
      />

      {/* Job details are public */}
      <Route path="/jobs/:id" element={<JobDetails />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

