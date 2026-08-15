import {
  CheckCircle2,
  Cog,
  Factory,
  FileText,
  Gauge,
  Layers3,
  MessageCircle,
  Ruler,
  Settings,
  ShieldCheck,
  Wrench,
  ArrowLeft,
} from 'lucide-react';

import {SEO } from '../components/SEO';

interface CNCTurningPageProps {
  onNavigate: (page: string) => void;
}

export function CNCTurningPage({ onNavigate }: CNCTurningPageProps) {
  const services = [
    {
      icon: Cog,
      title: 'تراشکاری CNC',
      description:
        'ماشینکاری دقیق قطعات صنعتی و سفارشی با دستگاه تراش CNC بر اساس مشخصات فنی پروژه.',
    },
    {
      icon: FileText,
      title: 'ساخت بر اساس نقشه',
      description:
        'تولید قطعات بر اساس نقشه‌های مهندسی، ابعاد، تلرانس‌ها و الزامات فنی ارائه‌شده توسط مشتری.',
    },
    {
      icon: Wrench,
      title: 'ساخت بر اساس نمونه',
      description:
        'بررسی نمونه قطعه و اجرای فرآیند ساخت در صورت امکان‌پذیری فنی و تولیدی.',
    },
    {
      icon: Layers3,
      title: 'قطعات سفارشی',
      description:
        'ساخت انواع قطعات مکانیکی و صنعتی متناسب با نیاز پروژه و کاربرد نهایی قطعه.',
    },
  ];

  const capabilities = [
    { icon: Ruler, value: 'تا قطر ۳۵۰', label: 'تراشکاری CNC' },
    { icon: Gauge, value: '۱۰۰۰ میلی‌متر', label: 'حداکثر طول ماشینکاری' },
    { icon: Settings, value: 'CNC', label: 'فرآیند ماشینکاری' },
    { icon: Factory, value: 'صنعتی', label: 'کاربری قطعات' },
  ];

  const parts = [
    'بوش و واشر',
    'شفت و محور',
    'پین و قطعات استوانه‌ای',
    'قطعات رزوه‌دار',
    'فلنج و قطعات اتصال',
    'قطعات ماشین‌آلات صنعتی',
    'قطعات تعمیراتی',
    'قطعات سفارشی بر اساس نقشه',
  ];

  const materials = [
    'فولادهای صنعتی',
    'استنلس استیل',
    'برنج',
    'برنز و آلیاژهای مس',
    'آلومینیوم',
    'POM',
    'PTFE',
    'سایر مواد قابل ماشینکاری بر اساس پروژه',
  ];

  const process = [
    {
      number: '۰۱',
      title: 'ارسال نقشه یا مشخصات',
      description:
        'نقشه، مدل سه‌بعدی، نمونه یا مشخصات قطعه را برای بررسی اولیه ارسال کنید.',
    },
    {
      number: '۰۲',
      title: 'بررسی فنی',
      description:
        'ابعاد، جنس، پیچیدگی قطعه، تلرانس‌ها و شرایط ساخت بررسی می‌شود.',
    },
    {
      number: '۰۳',
      title: 'برآورد هزینه و زمان',
      description:
        'بر اساس مشخصات قطعه و شرایط تولید، زمان و هزینه تقریبی ساخت تعیین می‌شود.',
    },
    {
      number: '۰۴',
      title: 'ماشینکاری و کنترل',
      description:
        'پس از تأیید سفارش، قطعه ماشینکاری شده و پیش از تحویل کنترل می‌شود.',
    },
  ];

  const faqs = [
    {
      question: 'حداکثر قطر قابل ماشینکاری چقدر است؟',
      answer:
        'ظرفیت ماشینکاری مجموعه برای تراشکاری تا قطر 750 میلی‌متر است.',
    },
    {
      question: 'حداکثر طول ماشینکاری چقدر است؟',
      answer:
        'حداکثر طول ماشینکاری مستقیم مجموعه تا ۱۰۰۰ میلی‌متر است.',
    },
    {
      question: 'آیا ساخت قطعه بر اساس نقشه امکان‌پذیر است؟',
      answer:
        'بله. قطعات صنعتی را می‌توان بر اساس نقشه مهندسی، ابعاد و مشخصات فنی تولید کرد.',
    },
    {
      question: 'آیا امکان ساخت قطعه از روی نمونه وجود دارد؟',
      answer:
        'در صورت امکان‌پذیری فنی، نمونه قطعه می‌تواند برای بررسی و فرآیند ساخت مورد استفاده قرار گیرد.',
    },
    {
      question: 'قیمت تراشکاری CNC چگونه محاسبه می‌شود؟',
      answer:
        'قیمت به عواملی مانند جنس و ابعاد قطعه، پیچیدگی هندسه، زمان ماشینکاری، تیراژ و عملیات مورد نیاز بستگی دارد. برای برآورد اولیه می‌توانید از ابزار محاسبه آنلاین قیمت استفاده کنید.',
    },
    {
      question: 'خدمات تراشکاری CNC در چه شهری ارائه می‌شود؟',
      answer:
        'تکین ماشین مانا در اصفهان فعالیت می‌کند و خدمات ماشینکاری و ساخت قطعات صنعتی را برای پروژه‌های مختلف ارائه می‌دهد.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <SEO
  title="تراشکاری CNC اصفهان | ساخت قطعات صنعتی | تکین ماشین مانا"
  description="خدمات تراشکاری CNC و ساخت قطعات صنعتی در اصفهان؛ تراشکاری تا قطر ۳۵۰ میلی‌متر و طول ۱ متر، ساخت قطعات بر اساس نقشه، نمونه و مدل سه‌بعدی."
  canonical="https://takinmachinemana.ir/cnc-turning"
/>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-bronze-500/20 text-bronze-300 px-4 py-2 rounded-full mb-6 border border-bronze-500/30">
              <Cog className="w-4 h-4" />
              <span className="text-sm font-medium">
                خدمات ماشینکاری و ساخت قطعات صنعتی
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              خدمات تراشکاری CNC
              <br />
              <span className="text-bronze-400">و ساخت قطعات صنعتی</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              تکین ماشین مانا ارائه‌دهنده خدمات تراشکاری CNC و ساخت قطعات
              صنعتی و سفارشی است. قطعات بر اساس نقشه مهندسی، نمونه یا مدل
              سه‌بعدی بررسی و برای ماشینکاری آماده می‌شوند.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                درخواست ساخت قطعه
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('tools')}
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                محاسبه آنلاین قیمت
                <Gauge className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-bronze-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-bronze-600" />
                  </div>

                  <div className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
                    {item.value}
                  </div>

                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-bronze-600 font-semibold">
                تراشکاری CNC قطعات صنعتی
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-5">
                ماشینکاری دقیق برای قطعات صنعتی و سفارشی
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 text-gray-700 leading-8 space-y-5">
              <p>
                تراشکاری CNC یکی از فرآیندهای اصلی تولید قطعات مکانیکی و صنعتی
                است که امکان ساخت قطعات با ابعاد و هندسه مشخص را بر اساس نقشه و
                مشخصات فنی فراهم می‌کند. در تکین ماشین مانا، تمرکز این بخش بر
                ماشینکاری قطعات صنعتی، سفارشی و تعمیراتی است.
              </p>

              <p>
                فرآیند ساخت می‌تواند بر اساس نقشه مهندسی، مدل سه‌بعدی یا نمونه
                قطعه آغاز شود. پیش از تولید، مشخصات قطعه، جنس، ابعاد، تلرانس‌ها
                و شرایط ماشینکاری بررسی می‌شود تا روش مناسب تولید انتخاب شود.
              </p>

              <p>
                ظرفیت مستقیم تراش CNC مجموعه تا قطر ۳۵۰ میلی‌متر و طول ۱۰۰۰
                میلی‌متر است. این ظرفیت امکان ساخت طیف متنوعی از قطعات
                استوانه‌ای، بوش، شفت، پین، فلنج، قطعات رزوه‌دار و قطعات سفارشی
                را فراهم می‌کند.
              </p>

              <p>
                هدف ما فقط انجام عملیات ماشینکاری نیست؛ بلکه ارائه قطعه‌ای
                مطابق با مشخصات مورد نیاز پروژه، با توجه به کیفیت ساخت، دقت
                ابعادی و شرایط کاربرد قطعه است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              خدمات تراشکاری CNC
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              از بررسی اولیه قطعه تا ماشینکاری و آماده‌سازی برای تحویل، فرآیند
              ساخت بر اساس نیاز فنی پروژه انجام می‌شود.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parts */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-bronze-400 font-semibold">
                ساخت قطعات صنعتی
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
                چه قطعاتی قابل ساخت هستند؟
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto">
                بسته به جنس، ابعاد، هندسه و الزامات فنی، انواع قطعات مکانیکی و
                صنعتی قابل بررسی و تولید هستند.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {parts.map((part, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-navy-800/60 border border-navy-700 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-bronze-400 shrink-0" />
                  <span className="text-gray-200 text-sm md:text-base">
                    {part}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                متریال قابل ماشینکاری
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                انتخاب ابزار و شرایط ماشینکاری بر اساس جنس و مشخصات فنی قطعه
                انجام می‌شود.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm"
                >
                  <span className="font-semibold text-navy-900">
                    {material}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                فرآیند سفارش و ساخت قطعه
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                مسیر سفارش از دریافت اطلاعات قطعه تا تولید و کنترل، به‌صورت
                مرحله‌ای انجام می‌شود.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                    <div className="text-4xl font-bold text-bronze-500/30 mb-4">
                      {step.number}
                    </div>

                    <h3 className="text-lg font-bold text-navy-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-7 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20 bg-navy-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-14 h-14 text-bronze-400 mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              دقت و کنترل در فرآیند ساخت
            </h2>

            <p className="text-gray-400 leading-8 max-w-3xl mx-auto">
              کیفیت قطعه فقط به ماشینکاری وابسته نیست. بررسی نقشه، انتخاب
              فرآیند مناسب، توجه به جنس قطعه، کنترل ابعادی و بررسی نهایی، بخش
              مهمی از فرآیند تولید قطعات صنعتی است.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                سوالات متداول تراشکاری CNC
              </h2>

              <p className="text-gray-600">
                پاسخ به چند سوال متداول درباره ظرفیت و نحوه سفارش
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-navy-900">
                    <span>{faq.question}</span>
                    <span className="text-bronze-500 text-xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>

                  <p className="text-gray-600 leading-8 mt-4 pr-1">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-bronze-500 to-bronze-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-14 h-14 text-white/90 mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              برای ساخت قطعه خود با ما در ارتباط باشید
            </h2>

            <p className="text-white/90 text-lg leading-8 mb-8">
              نقشه، مدل سه‌بعدی، نمونه یا مشخصات قطعه را ارسال کنید تا امکان
              ساخت و شرایط تولید بررسی شود.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-bronze-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                تماس با ما
              </button>

              <button
                onClick={() => onNavigate('tools')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                محاسبه آنلاین قیمت
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}