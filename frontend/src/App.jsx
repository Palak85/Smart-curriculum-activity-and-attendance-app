import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/Login";
import AdminLayout from "./pages/AdminLayout";

import AdminDashboard from './pages/AdminDashboard';
import TeachersPage from './pages/TeachersPage';
import ClassesSections from './pages/ClassesSections';
import Students from './pages/Students';
import Curriculum from './pages/Curriculum';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root → admin dashboard */}
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />

        {/* Login (outside layout) */}
        <Route path="/login" element={<Login />} />

        {/* ALL ADMIN PAGES THAT SHARE SIDEBAR */}
        <Route element={<AdminLayout />}>

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/teacher" element={<TeachersPage />} />
          <Route path="/classes" element={<ClassesSections />} />
          <Route path="/student" element={<Students />} />
          <Route path="/curriculum" element={<Curriculum />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
