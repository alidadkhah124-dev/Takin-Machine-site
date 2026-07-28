import { useNavigate } from 'react-router-dom';

export function ToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-navy-900 mb-8 text-center">
          ابزارهای مهندسی تکین ماشین مانا
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <button
  onClick={() => navigate('/calculator')}
  className="p-6 bg-gradient-to-br from-navy-800 to-bronze-600 text-white rounded-2xl shadow-xl text-right hover:shadow-2xl transition border-2 border-bronze-400"
>
  <h2 className="text-xl font-bold mb-2">
    🔧 محاسبه قیمت تراشکاری CNC
  </h2>
  <p>
    محاسبه وزن، زمان ماشینکاری و قیمت تقریبی قطعه
  </p>
</button>


          <button
            className="p-6 bg-white rounded-2xl shadow-lg text-right hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">
              ⚙️ محاسبه قیمت فرزکاری CNC
            </h2>
            <p>
              محاسبه هزینه عملیات فرز CNC
            </p>
          </button>


          <button
            className="p-6 bg-white rounded-2xl shadow-lg text-right hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">
              🔄 تبدیل واحدها
            </h2>
            <p>
              تبدیل طول، وزن، فشار و واحدهای مهندسی
            </p>
          </button>


          <button
            disabled
            className="p-6 bg-gray-200 rounded-2xl text-right"
          >
            <h2 className="text-xl font-bold mb-2">
              📐 ابزارهای مهندسی دیگر
            </h2>
            <p>
              به‌زودی فعال می‌شود
            </p>
          </button>

        </div>

      </div>
    </div>
  );
}