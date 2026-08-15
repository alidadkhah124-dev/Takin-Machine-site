import { useState, useEffect } from 'react';
import {
  DraftingCompass,
  RotateCcw,
  Factory,
  Cog,
  Package,
  Zap,
  Calculator,
  ChevronLeft,
  Settings,
} from 'lucide-react';
import { Logo } from '../components/Logo';

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
    description:
      'ماشینکاری دقیق قطعات صنعتی و سفارشی با تمرکز بر تراشکاری CNC بر اساس نقشه و مشخصات فنی پروژه.',
    link: '/cnc-turning',
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

      {/* HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 pt-24">

          <div
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >

            {/* LOGO */}
            <div className="flex justify-center mb-8">
              <Logo size="lg" showText={false} />
            </div>

            {/* EXPERIENCE */}
            <div className="inline-flex items-center gap-2 bg-bronze-500/20 text-bronze-300 px-4 py-2 rounded-full mb-8 border border-bronze-500/30">
              <span className="w-2 h-2 bg-bronze-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                بیش از ۱۰ سال تجربه در صنعت
              </span>
            </div>

            {/* MAIN H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              راهکارهای مهندسی،
              <br />
              <span className="text-bronze-400">
                ماشینکاری و ساخت قطعات صنعتی
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              تکین ماشین مانا ارائه‌دهنده خدمات مهندسی، طراحی و مدل‌سازی،
              مهندسی معکوس، ماشینکاری CNC و ساخت قطعات و تجهیزات صنعتی است.
              ما تلاش می‌کنیم هر پروژه را بر اساس نیاز واقعی، نقشه فنی و
              شرایط اجرایی آن بررسی و اجرا کنیم.
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


      {/* INTRODUCTION */}
      <section className="py-16 bg-white">

        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center">

            <span className="text-bronze-500 font-semibold">
              تکین ماشین مانا
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
              خدمات مهندسی و ماشینکاری برای قطعات و تجهیزات صنعتی
            </h2>

            <p className="text-gray-600 text-lg leading-9">
              در پروژه‌های صنعتی، کیفیت قطعه تنها به ماشینکاری محدود نمی‌شود.
              بررسی نقشه، انتخاب روش ساخت، شناخت متریال، دقت مورد نیاز و
              کنترل فرآیند نیز بخش مهمی از نتیجه نهایی هستند. تکین ماشین مانا
              با تمرکز بر خدمات مهندسی، ماشینکاری CNC و ساخت قطعات صنعتی،
              پروژه‌ها را از مرحله بررسی فنی تا ساخت دنبال می‌کند.
            </p>

          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="py-20 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              خدمات مهندسی و صنعتی
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-8">
              مجموعه‌ای از خدمات مهندسی، طراحی، ماشینکاری و ساخت برای پاسخ به
              نیازهای مختلف پروژه‌های صنعتی.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => {
  const Icon = service.icon;

  const ServiceCard = (
    <div
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-navy-900 mb-2">
        {service.title}
      </h3>

      <p className="text-gray-600">
        {service.description}
      </p>

      {'link' in service && service.link && (
        <div className="mt-4 text-bronze-600 font-semibold text-sm flex items-center gap-2">
          مشاهده خدمات تراشکاری
          <span>←</span>
        </div>
      )}
    </div>
  );

  return service.link ? (
    <a
      key={index}
      href={service.link}
      className="block h-full"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {ServiceCard}
    </a>
  ) : (
    <div key={index} className="h-full">
      {ServiceCard}
    </div>
  );
})}

          </div>

        </div>
      </section>


      {/* CNC TURNING */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto">

            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div>

                <span className="text-bronze-500 font-semibold">
                  CNC TURNING
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
                  تراشکاری CNC دقیق برای قطعات صنعتی
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  خدمات تراشکاری CNC تکین ماشین مانا برای ساخت قطعات دوار،
                  بوش، شفت، پین، واشر و قطعات سفارشی صنعتی بر اساس نقشه یا
                  نمونه ارائه می‌شود.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  امکان تراشکاری قطعات تا قطر ۳۵۰ میلی‌متر و طول ۱ متر وجود
                  دارد و پیش از ساخت، شرایط قطعه، جنس متریال، ابعاد و دقت
                  مورد نیاز بررسی می‌شود.
                </p>

                <button
                  onClick={() => onNavigate('cnc-turning')}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  مشاهده خدمات تراشکاری CNC
                  <ChevronLeft className="w-5 h-5" />
                </button>

              </div>

              <div className="bg-navy-900 rounded-2xl p-8 shadow-xl">

                <div className="grid grid-cols-2 gap-5">

                  <div className="bg-navy-800 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-bronze-400">
                      ۳۵۰
                    </div>
                    <div className="text-gray-300 mt-2">
                      حداکثر قطر تراشکاری
                    </div>
                  </div>

                  <div className="bg-navy-800 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-bronze-400">
                      ۱۰۰۰
                    </div>
                    <div className="text-gray-300 mt-2">
                      طول قطعه تا میلی‌متر
                    </div>
                  </div>

                  <div className="bg-navy-800 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-bronze-400">
                      CNC
                    </div>
                    <div className="text-gray-300 mt-2">
                      ماشینکاری دقیق
                    </div>
                  </div>

                  <div className="bg-navy-800 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-bronze-400">
                      صنعتی
                    </div>
                    <div className="text-gray-300 mt-2">
                      ساخت سفارشی
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ACTIVITIES */}
      <section className="py-20 bg-navy-900">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              حوزه‌های فعالیت
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto leading-8">
              فعالیت در حوزه‌های مختلف ساخت، ماشینکاری و تجهیزات صنعتی بر
              اساس نیاز پروژه و مشخصات فنی مورد نظر.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

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

                  <span className="text-white text-sm font-medium">
                    {activity.title}
                  </span>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ONLINE TOOLS */}
      <section className="py-20 bg-gradient-to-br from-bronze-500 to-bronze-600 relative overflow-hidden">

        <div className="absolute inset-0 opacity-20">

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H0v-2h20V0h2v16h18v2H22v16h-2V20.5z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

        </div>

        <div className="container mx-auto px-4 relative">

          <div className="max-w-3xl mx-auto text-center">

            <Calculator className="w-16 h-16 text-white/80 mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ابزارهای مهندسی آنلاین
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-8">
              برای سهولت محاسبات فنی، ابزارهای آنلاین کاربردی طراحی کرده‌ایم.
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


      {/* FINAL CTA */}
      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-5">
              برای ساخت قطعه یا پروژه صنعتی خود صحبت کنیم
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              اگر نقشه، مدل سه‌بعدی، نمونه قطعه یا اطلاعات اولیه پروژه را
              دارید، می‌توانید برای بررسی و دریافت اطلاعات بیشتر با ما
              تماس بگیرید.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              تماس با تکین ماشین مانا
              <ChevronLeft className="w-5 h-5" />
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}