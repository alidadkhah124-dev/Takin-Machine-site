import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Wrench,
  Home,
  Phone,
  Settings2,
} from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = currentPage === 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">

        {/* HEADER BAR */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            className="cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <Logo size="md" showText={true} />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">

            {/* HOME */}
            <button
              onClick={() => handleNavigate('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'home'
                  ? 'bg-bronze-500 text-white'
                  : 'text-gray-200 hover:bg-navy-800 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">
                صفحه اصلی
              </span>
            </button>

            {/* ENGINEERING TOOLS */}
            <button
              onClick={() => handleNavigate('tools')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'tools'
                  ? 'bg-bronze-500 text-white'
                  : 'text-gray-200 hover:bg-navy-800 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span className="font-medium">
                ابزارهای مهندسی
              </span>
            </button>

            {/* SYSTEMIZATION */}
            <button
              onClick={() => handleNavigate('systemization')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'systemization'
                  ? 'bg-bronze-500 text-white'
                  : 'text-gray-200 hover:bg-navy-800 hover:text-white'
              }`}
            >
              <Settings2 className="w-4 h-4" />
              <span className="font-medium">
                مهندسی سیستم‌های سازمانی
              </span>
            </button>

            {/* CONTACT */}
            <button
              onClick={() => handleNavigate('contact')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'contact'
                  ? 'bg-bronze-500 text-white'
                  : 'text-gray-200 hover:bg-navy-800 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">
                تماس با ما
              </span>
            </button>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'بستن منو' : 'باز کردن منو'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy-900/95 backdrop-blur-md rounded-lg mb-4 overflow-hidden shadow-lg">

            <nav className="flex flex-col p-2">

              {/* HOME */}
              <button
                onClick={() => handleNavigate('home')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'home'
                    ? 'bg-bronze-500 text-white'
                    : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">
                  صفحه اصلی
                </span>
              </button>

              {/* ENGINEERING TOOLS */}
              <button
                onClick={() => handleNavigate('tools')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'tools'
                    ? 'bg-bronze-500 text-white'
                    : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <Wrench className="w-5 h-5" />
                <span className="font-medium">
                  ابزارهای مهندسی
                </span>
              </button>

              {/* SYSTEMIZATION */}
              <button
                onClick={() => handleNavigate('systemization')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'systemization'
                    ? 'bg-bronze-500 text-white'
                    : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <Settings2 className="w-5 h-5" />
                <span className="font-medium">
                  مهندسی سیستم‌های سازمانی
                </span>
              </button>

              {/* CONTACT */}
              <button
                onClick={() => handleNavigate('contact')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'contact'
                    ? 'bg-bronze-500 text-white'
                    : 'text-gray-200 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">
                  تماس با ما
                </span>
              </button>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}