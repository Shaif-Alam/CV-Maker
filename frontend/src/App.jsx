import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Builder from './pages/Builder';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Templates from './pages/Templates';
import CvTemplates from './pages/CvTemplates';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Profile from './pages/Profile';
import { ThemeProvider } from './context/ThemeContext';

import Download from './pages/Download';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
    return (
        <ThemeProvider>
            <Router>
                {/* Routes remain the same */}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/builder" element={<Builder />} />
                    <Route path="/download" element={<ProtectedRoute><Download /></ProtectedRoute>} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/cv-templates" element={<CvTemplates />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
