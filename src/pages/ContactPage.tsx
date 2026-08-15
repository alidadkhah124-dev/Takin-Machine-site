import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_778wqyi',
        'template_abgdpw3',
        formData,
        {
          publicKey: '-StDVTqF0_ZyQ-H3X',
        }
      );

      setSubmitted(true);

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 10000);
    } catch (error) {
      console.error('Email error:', error);
      alert('ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'شماره همراه',
      value: '۰۹۱۳۲۳۲۸۲۹۲',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Phone,
      title: 'تلفن ثابت',
      value: '۰۳۱-۴۲۲۲۶۸۰۳',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: MessageCircle,
      title: 'واتساپ',
      value: '۰۹۱۳۲۳۲۸۲۹۲',
      color: 'bg-emerald-100 text-emerald-600',
      link: 'https://wa.me/989132328292',
    },
    {
      icon: Mail,
      title: 'ایمیل',
      value: 'takin.machine.mana@gmail.com',
      color: 'bg-red-100 text-red-600',
      link: 'mailto:takin.machine.mana@gmail.com',
    },
    {
      icon: Instagram,
      title: 'اینستاگرام',
      value: '@takin_machin_mana',
      color: 'bg-pink-100 text-pink-600',
      link: 'https://www.instagram.com/takin_machin_mana/',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Ali Dadkhah',
      color: 'bg-blue-100 text-blue-700',
      link: 'https://www.linkedin.com/in/ali-dadkhah-62a087223/',
    },
    {
      icon: MapPin,
      title: 'آدرس',
      value: 'اصفهان، خیابان حکیم، فرزانه صنعتگران ۳۷',
      color: 'bg-bronze-100 text-bronze-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              تماس با ما
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              برای دریافت مشاوره، استعلام قیمت یا ارسال نقشه‌های فنی با ما در تماس باشید
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;

              const cardContent = (
                <>
                  <div
                    className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-navy-900 mb-2">
                    {info.title}
                  </h3>

                  <p className="text-gray-600 break-words" dir="ltr">
                    {info.value}
                  </p>
                </>
              );

              return info.link ? (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('mailto:') ? undefined : '_blank'}
                  rel={
                    info.link.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* Working Hours */}
          <div className="bg-gradient-to-l from-navy-800 to-navy-900 rounded-2xl p-6 mb-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6" />

              <h2 className="text-xl font-bold">
                ساعات کاری
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex justify-between">
                <span>شنبه - چهارشنبه</span>
                <span className="text-white font-medium">
                  ۸:۰۰ - ۱۷:۰۰
                </span>
              </div>

              <div className="flex justify-between">
                <span>پنجشنبه</span>
                <span className="text-white font-medium">
                  ۸:۰۰ - ۱۳:۰۰
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Send className="w-6 h-6 text-bronze-500" />

                <h2 className="text-xl font-bold text-navy-900">
                  فرم تماس
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6">

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />

                  <span className="text-green-700">
                    پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    نام و نام خانوادگی
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    شماره تماس
                  </label>

                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    placeholder="09123456789"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ایمیل (اختیاری)
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    موضوع
                  </label>

                  <select
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="inquiry">استعلام قیمت</option>
                    <option value="drawing">ارسال نقشه</option>
                    <option value="consultation">مشاوره فنی</option>
                    <option value="partnership">همکاری</option>
                    <option value="other">سایر موارد</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  پیام
                </label>

                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    در حال ارسال...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    ارسال پیام
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />

              <p>
                اصفهان، خیابان حکیم، فرزانه صنعتگران ۳۷
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}