import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Wrench,
  Home,
  Phone,
  ChevronDown,
  Settings2,
} from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { id: 'home', label: 'صفحه اصلی', icon: Home },
  { id: 'tools', label: 'ابزارهای مهندسی', icon: Wrench },
  { id: 'contact', label: 'تماس با ما', icon: Phone },
];

const engineeringItems = [
  {
    id: 'calculator',
    label: 'ماشین‌حساب مهندسی',
  },
  {
    id: 'systemization',
    label: 'مهندسی سیستم‌های سازمانی',
  },
];

  const handleSystemization = () => {
    onNavigate('systemization');
    setIsToolsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div
            className="cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Logo size="md" showText={true} />
          </div>

          {/* DESKTOP NAV */}
<nav className="hidden md:flex items-center gap-1">

  {/* HOME */}
  <button
    onClick={() => onNavigate('home')}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      currentPage === 'home'
        ? 'bg-bronze-500 text-white'
        : isScrolled
          ? 'text-gray-200 hover:bg-navy-800 hover:text-white'
          : 'text-gray-200 hover:bg-white/10 hover:text-white'
    }`}
  >
    <Home className="w-4 h-4" />
    <span className="font-medium">
      صفحه اصلی
    </span>
  </button>

  {/* ENGINEERING TOOLS */}
  <button
    onClick={() => onNavigate('tools')}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      currentPage === 'tools'
        ? 'bg-bronze-500 text-white'
        : isScrolled
          ? 'text-gray-200 hover:bg-navy-800 hover:text-white'
          : 'text-gray-200 hover:bg-white/10 hover:text-white'
    }`}
  >
    <Wrench className="w-4 h-4" />
    <span className="font-medium">
      ابزارهای مهندسی
    </span>
  </button>

  {/* SYSTEMIZATION */}
  <button
    onClick={() => {
      onNavigate('systemization');
      setIsMenuOpen(false);
    }}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      currentPage === 'systemization'
        ? 'bg-bronze-500 text-white'
        : isScrolled
          ? 'text-gray-200 hover:bg-navy-800 hover:text-white'
          : 'text-gray-200 hover:bg-white/10 hover:text-white'
    }`}
  >
    <Settings2 className="w-4 h-4" />
    <span className="font-medium">
      مهندسی سیستم‌های سازمانی
    </span>
  </button>

  {/* CONTACT */}
  <button
    onClick={() => onNavigate('contact')}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
      currentPage === 'contact'
        ? 'bg-bronze-500 text-white'
        : isScrolled
          ? 'text-gray-200 hover:bg-navy-800 hover:text-white'
          : 'text-gray-200 hover:bg-white/10 hover:text-white'
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
  <div className="md:hidden bg-navy-900/95 backdrop-blur-md rounded-lg mb-4 overflow-hidden">

    <nav className="flex flex-col p-2">

      {/* HOME */}
      <button
        onClick={() => {
          onNavigate('home');
          setIsMenuOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
          currentPage === 'home'
            ? 'bg-bronze-500 text-white'
            : 'text-gray-200 hover:bg-navy-800'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="font-medium">
          صفحه اصلی
        </span>
      </button>

      {/* ENGINEERING TOOLS */}
      <button
        onClick={() => {
          onNavigate('tools');
          setIsMenuOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
          currentPage === 'tools'
            ? 'bg-bronze-500 text-white'
            : 'text-gray-200 hover:bg-navy-800'
        }`}
      >
        <Wrench className="w-5 h-5" />
        <span className="font-medium">
          ابزارهای مهندسی
        </span>
      </button>

      {/* SYSTEMIZATION */}
      <button
        onClick={() => {
          onNavigate('systemization');
          setIsMenuOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
          currentPage === 'systemization'
            ? 'bg-bronze-500 text-white'
            : 'text-gray-200 hover:bg-navy-800'
        }`}
      >
        <Settings2 className="w-5 h-5" />
        <span className="font-medium">
          مهندسی سیستم‌های سازمانی
        </span>
      </button>

      {/* CONTACT */}
      <button
        onClick={() => {
          onNavigate('contact');
          setIsMenuOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
          currentPage === 'contact'
            ? 'bg-bronze-500 text-white'
            : 'text-gray-200 hover:bg-navy-800'
        }`}
      >
        <Phone className="w-5 h-

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
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
          <div className="md:hidden bg-navy-900/95 backdrop-blur-md rounded-lg mb-4 overflow-hidden">

            <nav className="flex flex-col p-2">

              {/* HOME */}
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'home'
                    ? 'bg-bronze-500 text-white'
                    : 'text-gray-200 hover:bg-navy-800'
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">
                  صفحه اصلی
                </span>
              </button>

              {/* TOOLS */}
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-200 hover:bg-navy-800 transition-all"
              >

                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5" />

                  <span className="font-medium">
                    ابزارهای مهندسی
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isToolsOpen ? 'rotate-180' : ''
                  }`}
                />

              </button>

              {/* MOBILE TOOLS SUBMENU */}
              {isToolsOpen && (
                <div className="mr-4 border-r border-white/10">

                  <button
                    onClick={() => {
                      onNavigate('calculator');
                      setIsMenuOpen(false);
                      setIsToolsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-navy-800 rounded-lg"
                  >
                    <Wrench className="w-4 h-4 text-bronze-400" />

                    <span>
                      ماشین‌حساب مهندسی
                    </span>
                  </button>

                  <button
                    onClick={handleSystemization}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-navy-800 rounded-lg"
                  >
                    <Settings2 className="w-4 h-4 text-bronze-400" />

                    <span>
                      مهندسی سیستم‌های سازمانی
                    </span>
                  </button>

                </div>
              )}

              {/* CONTACT */}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'contact'
                    ? 'bg-bronze-500 text-white'
                    : 'text-gray-200 hover:bg-navy-800'
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