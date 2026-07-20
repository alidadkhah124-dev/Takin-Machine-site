import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { LogoIcon } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon size="sm" />
              <div>
                <h3 className="text-lg font-bold text-white">تکین ماشین مانا</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ارائه‌دهنده خدمات دفتر فنی مهندسی، طراحی و مدل‌سازی، مهندسی معکوس، ماشینکاری و ساخت قطعات و تجهیزات صنعتی
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">دسترسی سریع</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onNavigate('home')}
                className="text-gray-400 hover:text-bronze-400 transition-colors text-right"
              >
                صفحه اصلی
              </button>
              <button
                onClick={() => onNavigate('tools')}
                className="text-gray-400 hover:text-bronze-400 transition-colors text-right"
              >
                ابزارهای مهندسی آنلاین
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-gray-400 hover:text-bronze-400 transition-colors text-right"
              >
                تماس با ما
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">تماس با ما</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <div className="flex flex-col">
                  <span dir="ltr">۰۹۱۳۲۳۲۸۲۹۲</span>
                  <span dir="ltr" className="text-sm">۰۳۱-۴۲۲۲۶۸۰۳</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="w-4 h-4" />
                <span dir="ltr">۰۹۱۳۲۳۲۸۲۹۲</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>اصفهان، خیابان حکیم، فرزانه صنعتگران ۳۷</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>تمامی حقوق این وب‌سایت متعلق به شرکت تکین ماشین مانا می‌باشد.</p>
        </div>
      </div>
    </footer>
  );
}
