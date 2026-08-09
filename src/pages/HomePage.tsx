import { useState, useEffect } from 'react';
import {
  DraftingCompass,
  RotateCcw,
  Factory,
  Cog,
  Cable,
  Anchor,
  Package,
  Zap,
  Calculator,
  ChevronLeft,
  Settings,
} from 'lucide-react';
import { LogoIcon } from '../components/Logo';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: DraftingCompass,
      title: 'دفتر فنی مهندسی',
      description: 'خدمات طراحی و مهندسی دقیق',
    },
    {
      icon: Calculator,
      title: 'طراحی و مدل‌سازی سه‌بعدی',
      description: 'مدل‌سازی CAD/CAM حرفه‌ای',
    },
    {
      icon: RotateCcw,
      title: 'مهندسی معکوس',
      description: 'بازسازی و کپی‌برداری قطعات',
    },
    {
      icon: Settings,
      title: 'طراحی تجهیزات صنعتی',
      description: 'طراحی و ساخت تجهیزات تخصصی',
    },
    {
      icon: Factory,
      title: 'ماشینکاری CNC',
      description: 'ماشینکاری دقیق با دستگاه‌های پیشرفته',
    },
    {
      icon: Package,
      title: 'ساخت قطعات صنعتی',
      description: 'تولید قطعات با کیفیت بالا',
    },
  ];

  const activities = [
    { icon: Cog, title: 'تجهیزات جابجایی مواد' },
    { icon: Cog, title: 'وینچ‌های صنعتی' },
    { icon: Zap, title: 'مگنت‌های صنعتی' },
    { icon: Cog, title: 'تجهیزات جرثقیل' },
    { icon: Cog, title: 'قلاب‌های صنعتی' },
    { icon: Factory, title: 'قطعات سفارشی صنعتی' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 pt-24">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <LogoIcon size="lg" />
            </div>

            <div className="inline-flex items-center gap-2 bg-bronze-500/20 text-bronze-300 px-4 py-2 rounded-full mb-8 border border-bronze-500/30">
              <span className="w-2 h-2 bg-bronze-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">بیش از 10 سال تجربه در صنعت</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              راهکارهای مهندسی،
              <br />
              <span className="text-bronze-400">ماشینکاری و ساخت</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              تکین ماشین مانا ارائه‌دهنده خدمات دفتر فنی مهندسی، طراحی و مدل‌سازی، مهندسی معکوس،
              ماشینکاری و ساخت قطعات و تجهیزات صنعتی می‌باشد.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('tools')}
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Calculator className="w-5 h-5" />
                ابزارهای مهندسی آنلاین
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                تماس با ما
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">خدمات ما</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              با استفاده از تجهیزات پیشرفته و تیم متخصص، خدمات متنوعی را در حوزه مهندسی و ماشینکاری ارائه می‌دهیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">حوزه‌های فعالیت</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              در زمینه‌های مختلف صنعت فعالیت داشته و محصولات متنوعی تولید می‌کنیم
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-navy-700 hover:border-bronze-500 hover:bg-navy-800 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-bronze-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-bronze-400" />
                  </div>
                  <span className="text-white text-sm font-medium">{activity.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online Tools Section */}
      <section className="py-20 bg-gradient-to-br from-bronze-500 to-bronze-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H0v-2h20V0h2v16h18v2H22v16h-2V20.5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Calculator className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ابزارهای مهندسی آنلاین
            </h2>
            <p className="text-white/90 text-lg mb-8">
              برای سهولت محاسبات فنی، ابزارهای آنلاین کاربردی طراحی کرده‌ایم
            </p>
            <button
              onClick={() => onNavigate('tools')}
              className="bg-white text-bronze-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              استفاده از ابزارها
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
