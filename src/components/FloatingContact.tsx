import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function FloatingContact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const whatsappNumbers = [
  { number: '09222515671', title: 'مدیر فروش' },
  { number: '09393092493', title: 'مدیر تولید' },
];

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/98${number.substring(1)}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      alert('لطفاً نام، شماره تماس و پیام خود را وارد کنید.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_778wqyi',
        'template_abgdpw3',
        {
          name: formData.name,
          phone: formData.phone,
          email: '',
          subject: 'پیام از پشتیبانی آنلاین سایت',
          message: formData.message,
        },
        {
          publicKey: '-StDVTqF0_ZyQ-H3X',
        }
      );

      console.log('EmailJS SUCCESS:', result);

      setSubmitted(true);

      setFormData({
        name: '',
        phone: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
        setChatOpen(false);
      }, 5000);

    } catch (error) {
      console.error('EmailJS ERROR:', error);
      alert('ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* پشتیبانی آنلاین - پایین سمت چپ */}
      <div className="fixed bottom-6 left-6 z-50">

        {chatOpen && (
          <div className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-2xl border border-gray-200 w-[340px] max-w-[calc(100vw-32px)] overflow-hidden">

            <div className="bg-navy-900 text-white p-4 flex items-center justify-between">
              <div>
                <div className="font-bold">
                  پشتیبانی آنلاین
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  پیام خود را برای ما ارسال کنید
                </div>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">

              {submitted ? (
                <div className="text-center py-8">

                  <div className="text-green-500 text-4xl mb-3">
                    ✓
                  </div>

                  <p className="font-bold text-gray-800 mb-2">
                    پیام شما ارسال شد
                  </p>

                  <p className="text-sm text-gray-500">
                    اطلاعات شما دریافت شد و در اولین فرصت با شما تماس خواهیم گرفت.
                  </p>

                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    لطفاً ابتدا نام و شماره تماس خود را وارد کنید.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">

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
                      placeholder="نام و نام خانوادگی"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5"
                    />

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
                      placeholder="شماره تماس"
                      dir="ltr"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5"
                    />

                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="پیام خود را بنویسید..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full py-3 rounded-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        'در حال ارسال...'
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" />
                          ارسال پیام
                        </span>
                      )}
                    </button>

                  </form>
                </>
              )}

            </div>
          </div>
        )}

        <button
          onClick={() => {
            setChatOpen(!chatOpen);
            setMenuOpen(false);
          }}
          className="h-14 px-5 rounded-full bg-navy-900 text-white shadow-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          title="پشتیبانی آنلاین"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-medium whitespace-nowrap">
            پشتیبانی آنلاین
          </span>
        </button>

      </div>


      {/* واتساپ - پایین سمت راست */}
      <div className="fixed bottom-6 right-6 z-50">

        {menuOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 w-64">

            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-navy-900">
                ارتباط در واتساپ
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">

              {whatsappNumbers.map((item) => (
  <button
    key={item.number}
    onClick={() => openWhatsApp(item.number)}
    className="w-full flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition"
  >
    <MessageCircle className="w-5 h-5 text-green-600" />

    <div className="flex flex-col items-start">
      <span className="text-gray-800 font-bold">
        {item.title}
      </span>

      <span
        dir="ltr"
        className="text-sm text-gray-600"
      >
        {item.number}
      </span>
    </div>
  </button>
))}

            </div>
          </div>
        )}

        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setChatOpen(false);
          }}
          className="h-14 px-5 rounded-full bg-green-500 text-white shadow-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          title="واتساپ"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="font-medium whitespace-nowrap">
            واتساپ
          </span>
        </button>

      </div>
    </>
  );
}