import { useState } from 'react';
import { Lock, Mail, AlertTriangle, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon } from '../components/Logo';

interface AdminLoginPageProps {
  onNavigateHome: () => void;
}

export function AdminLoginPage({ onNavigateHome }: AdminLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError('ایمیل یا رمز عبور اشتباه است');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <LogoIcon size="lg" className="mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">ورود به پنل مدیریت</h1>
          <p className="text-gray-400 text-sm">تکین ماشین مانا</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700">
          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-red-300 text-sm">{error}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">ایمیل</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-navy-900/50 border border-navy-600 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:border-bronze-500 transition-colors"
                  placeholder="admin@example.com"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">رمز عبور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-navy-900/50 border border-navy-600 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:border-bronze-500 transition-colors"
                  placeholder="رمز عبور"
                  dir="ltr"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-l from-bronze-500 to-bronze-600 text-white py-3 rounded-lg font-medium hover:from-bronze-600 hover:to-bronze-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                در حال ورود...
              </>
            ) : (
              'ورود'
            )}
          </button>

          <button
            type="button"
            onClick={onNavigateHome}
            className="w-full mt-3 text-gray-400 hover:text-gray-300 text-sm transition-colors"
          >
            بازگشت به صفحه اصلی
          </button>
        </form>
      </div>
    </div>
  );
}
