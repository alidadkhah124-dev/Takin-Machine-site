import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth, AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { AdminLoginPage } from './pages/AdminLoginPage';

import{ToolsPage} from './pages/ToolsPage';

function MainLayout({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path === '' || path === 'home') {
      setCurrentPage('home');
    } else if (path === 'tools') {
      setCurrentPage('tools');
    } else if (path === 'contact') {
      setCurrentPage('contact');
    } else if (path === 'admin') {
      setCurrentPage('admin');
    }
  }, [location.pathname]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-vazir flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{children}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

function HomePageWrapper() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <HomePage onNavigate={(page) => navigate(page === 'home' ? '/' : `/${page}`)} />
    </MainLayout>
  );
}

function ToolsPageWrapper() {
  return (
    <MainLayout>
      <ToolsPage />
    </MainLayout>
  );
}

function ContactPageWrapper() {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <ContactPage />
    </MainLayout>
  );
}

function CalculatorPageWrapper() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <CalculatorPage 
        onNavigate={(page) => navigate(page === 'home' ? '/' : `/${page}`)}
      />
    </MainLayout>
  );
}

function ProtectedAdminRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/admin/login', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-bronze-500 border-t-transparent"></div>
      </div>
    );
  }

  return user ? <>{children}</> : null;
}

function AdminPageWrapper() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-navy-800 border-b border-navy-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors">
            بازگشت به سایت
          </button>
          <button onClick={handleLogout} className="text-bronze-400 hover:text-bronze-300 transition-colors">
            خروج از پنل
          </button>
        </div>
      </div>
      <AdminPage />
    </div>
  );
}

function AdminLoginPageWrapper() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/admin', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-bronze-500 border-t-transparent"></div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return <AdminLoginPage onNavigateHome={() => navigate('/')} />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/tools" element={<ToolsPageWrapper />} />
          <Route path="/calculator" element={<CalculatorPageWrapper />} />
          <Route path="/contact" element={<ContactPageWrapper />} />
          <Route path="/admin/login" element={<AdminLoginPageWrapper />} />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminPageWrapper />
              </ProtectedAdminRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
