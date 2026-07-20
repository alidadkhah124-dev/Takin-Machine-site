import { useState, useEffect } from 'react';
import { Settings, Save, RefreshCw, Plus, Trash2, ChevronRight, ChevronLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { MaterialSetting, ToleranceCoefficient, ThreadCoefficient, AdminSetting } from '../types';

export function AdminPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'materials' | 'tolerances' | 'threads'>('general');

  const [adminSettings, setAdminSettings] = useState<AdminSetting[]>([]);
  const [materials, setMaterials] = useState<MaterialSetting[]>([]);
  const [tolerances, setTolerances] = useState<ToleranceCoefficient[]>([]);
  const [threads, setThreads] = useState<ThreadCoefficient[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);

      const [settingsRes, materialsRes, tolerancesRes, threadsRes] = await Promise.all([
        supabase.from('admin_settings').select('*'),
        supabase.from('material_settings').select('*').order('id'),
        supabase.from('tolerance_coefficients').select('*').order('id'),
        supabase.from('thread_coefficients').select('*').order('id'),
      ]);

      if (settingsRes.error) throw settingsRes.error;
      if (materialsRes.error) throw materialsRes.error;
      if (tolerancesRes.error) throw tolerancesRes.error;
      if (threadsRes.error) throw threadsRes.error;

      setAdminSettings(settingsRes.data || []);
      setMaterials(materialsRes.data || []);
      setTolerances(tolerancesRes.data || []);
      setThreads(threadsRes.data || []);
    } catch (err) {
      showMessage('error', 'خطا در دریافت اطلاعات');
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const updateAdminSetting = async (key: string, value: number) => {
    try {
      setSaving(key);
      const { error } = await supabase
        .from('admin_settings')
        .update({ setting_value: { value }, updated_at: new Date().toISOString() })
        .eq('setting_key', key);

      if (error) throw error;
      showMessage('success', 'تنظیمات با موفقیت ذخیره شد');
      fetchAllData();
    } catch {
      showMessage('error', 'خطا در ذخیره تنظیمات');
    } finally {
      setSaving(null);
    }
  };

  const updateMaterial = async (id: number, field: string, value: string | number) => {
    try {
      setSaving(`material-${id}`);
      const { error } = await supabase
        .from('material_settings')
        .update({ [field]: value, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      showMessage('success', 'تغییرات ذخیره شد');
    } catch {
      showMessage('error', 'خطا در ذخیره');
    } finally {
      setSaving(null);
    }
  };

  const addMaterial = async () => {
    try {
      const { error } = await supabase.from('material_settings').insert({
        material_name: 'new_material',
        material_name_fa: 'متریال جدید',
        cutting_speed: 100,
        feed_rate: 0.2,
        density: 7.85,
        cost_per_kg: 30000,
      });

      if (error) throw error;
      showMessage('success', 'متریال جدید اضافه شد');
      fetchAllData();
    } catch {
      showMessage('error', 'خطا در افزودن متریال');
    }
  };

  const deleteMaterial = async (id: number) => {
    if (!confirm('آیا از حذف این متریال مطمئن هستید؟')) return;
    try {
      const { error } = await supabase.from('material_settings').delete().eq('id', id);
      if (error) throw error;
      showMessage('success', 'متریال حذف شد');
      fetchAllData();
    } catch {
      showMessage('error', 'خطا در حذف متریال');
    }
  };

  const updateTolerance = async (id: number, value: number) => {
    try {
      setSaving(`tolerance-${id}`);
      const { error } = await supabase
        .from('tolerance_coefficients')
        .update({ coefficient: value, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      showMessage('success', 'تغییرات ذخیره شد');
    } catch {
      showMessage('error', 'خطا در ذخیره');
    } finally {
      setSaving(null);
    }
  };

  const updateThread = async (id: number, field: string, value: number) => {
    try {
      setSaving(`thread-${id}`);
      const { error } = await supabase
        .from('thread_coefficients')
        .update({ [field]: value, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      showMessage('success', 'تغییرات ذخیره شد');
    } catch {
      showMessage('error', 'خطا در ذخیره');
    } finally {
      setSaving(null);
    }
  };

  const getSettingValue = (key: string): number => {
    const setting = adminSettings.find((s) => s.setting_key === key);
    return typeof setting?.setting_value.value === 'number'
      ? setting.setting_value.value
      : parseFloat(String(setting?.setting_value.value || 0));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-bronze-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-400">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl mb-4 border border-navy-500">
              <Settings className="w-8 h-8 text-bronze-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">پنل مدیریت</h1>
            <p className="text-gray-400">مدیریت پارامترها و تنظیمات محاسبات</p>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
              }`}
            >
              {message.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertTriangle className="w-5 h-5" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { id: 'general', label: 'تنظیمات عمومی' },
              { id: 'materials', label: 'متریال‌ها' },
              { id: 'tolerances', label: 'تلرانس‌ها' },
              { id: 'threads', label: 'رزوه‌ها' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-bronze-500 text-white'
                    : 'bg-navy-800 text-gray-300 hover:bg-navy-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700">
              <h2 className="text-xl font-bold text-white mb-6">تنظیمات عمومی محاسبات</h2>

              <div className="space-y-4">
                {[
                  { key: 'machining_cost_per_minute', label: 'هزینه هر دقیقه ماشینکاری (ریال)', desc: 'نرخ ساعتی ماشینکاری' },
                  { key: 'programming_cost', label: 'هزینه برنامه‌نویسی (ریال)', desc: 'هزینه ثابت برنامه‌نویسی CNC' },
                  { key: 'overhead_cost', label: 'هزینه سربار (ریال)', desc: 'هزینه‌های ثابت و عمومی' },
                  { key: 'minimum_order_amount', label: 'حداقل مبلغ سفارش (ریال)', desc: 'کمترین مبلغ برای ثبت سفارش' },
                  { key: 'passes_per_operation', label: 'تعداد باربرداری هر پاس', desc: 'تعداد پاس‌های ماشینکاری' },
                ].map(({ key, label, desc }) => (
                  <div key={key} className="flex items-center gap-4 p-4 bg-navy-900/50 rounded-lg">
                    <div className="flex-1">
                      <label className="block text-white font-medium mb-1">{label}</label>
                      <p className="text-gray-400 text-sm">{desc}</p>
                    </div>
                    <input
                      type="number"
                      defaultValue={getSettingValue(key)}
                      onBlur={(e) => updateAdminSetting(key, parseFloat(e.target.value) || 0)}
                      className="w-40 bg-navy-700 border border-navy-600 rounded-lg px-4 py-2 text-white text-left"
                      dir="ltr"
                      disabled={saving === key}
                    />
                    {saving === key && <RefreshCw className="w-4 h-4 text-bronze-400 animate-spin" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Materials */}
          {activeTab === 'materials' && (
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl border border-navy-700 overflow-hidden">
              <div className="p-6 flex items-center justify-between border-b border-navy-700">
                <h2 className="text-xl font-bold text-white">تنظیمات متریال‌ها</h2>
                <button
                  onClick={addMaterial}
                  className="flex items-center gap-2 bg-bronze-500 text-white px-4 py-2 rounded-lg hover:bg-bronze-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  افزودن متریال
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-navy-900/50">
                    <tr>
                      <th className="text-right p-4 text-gray-400 font-medium">نام فارسی</th>
                      <th className="text-right p-4 text-gray-400 font-medium">کد متریال</th>
                      <th className="text-right p-4 text-gray-400 font-medium">سرعت برش (m/min)</th>
                      <th className="text-right p-4 text-gray-400 font-medium">فید (mm/rev)</th>
                      <th className="text-right p-4 text-gray-400 font-medium">چگالی (g/cm³)</th>
                      <th className="text-right p-4 text-gray-400 font-medium">قیمت (ریال/kg)</th>
                      <th className="p-4 text-gray-400 font-medium">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((mat) => (
                      <tr key={mat.id} className="border-t border-navy-700 hover:bg-navy-900/30">
                        <td className="p-4">
                          <input
                            type="text"
                            defaultValue={mat.material_name_fa}
                            onBlur={(e) => updateMaterial(mat.id, 'material_name_fa', e.target.value)}
                            className="bg-transparent text-white w-full"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="text"
                            defaultValue={mat.material_name}
                            onBlur={(e) => updateMaterial(mat.id, 'material_name', e.target.value)}
                            className="bg-transparent text-white w-full"
                            dir="ltr"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="number"
                            step="1"
                            defaultValue={mat.cutting_speed}
                            onBlur={(e) => updateMaterial(mat.id, 'cutting_speed', parseFloat(e.target.value) || 0)}
                            className="bg-transparent text-white w-20 text-center"
                            dir="ltr"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="number"
                            step="0.01"
                            defaultValue={mat.feed_rate}
                            onBlur={(e) => updateMaterial(mat.id, 'feed_rate', parseFloat(e.target.value) || 0)}
                            className="bg-transparent text-white w-20 text-center"
                            dir="ltr"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="number"
                            step="0.01"
                            defaultValue={mat.density}
                            onBlur={(e) => updateMaterial(mat.id, 'density', parseFloat(e.target.value) || 0)}
                            className="bg-transparent text-white w-20 text-center"
                            dir="ltr"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="number"
                            step="1000"
                            defaultValue={mat.cost_per_kg}
                            onBlur={(e) => updateMaterial(mat.id, 'cost_per_kg', parseFloat(e.target.value) || 0)}
                            className="bg-transparent text-white w-28 text-left"
                            dir="ltr"
                          />
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => deleteMaterial(mat.id)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tolerances */}
          {activeTab === 'tolerances' && (
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700">
              <h2 className="text-xl font-bold text-white mb-6">ضریب تلرانس‌ها</h2>

              <div className="space-y-3">
                {tolerances.map((tol) => (
                  <div key={tol.id} className="flex items-center gap-4 p-4 bg-navy-900/50 rounded-lg">
                    <div className="flex-1">
                      <span className="text-white font-medium">{tol.tolerance_name_fa}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="text-gray-400 text-sm">ضریب:</label>
                      <input
                        type="number"
                        step="0.01"
                        defaultValue={tol.coefficient}
                        onBlur={(e) => updateTolerance(tol.id, parseFloat(e.target.value) || 1)}
                        className="w-24 bg-navy-700 border border-navy-600 rounded-lg px-3 py-2 text-white text-center"
                        dir="ltr"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Threads */}
          {activeTab === 'threads' && (
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-6 border border-navy-700">
              <h2 className="text-xl font-bold text-white mb-6">ضریب رزوه‌ها</h2>

              <div className="space-y-3">
                {threads.map((thr) => (
                  <div key={thr.id} className="flex items-center gap-4 p-4 bg-navy-900/50 rounded-lg">
                    <div className="flex-1">
                      <span className="text-white font-medium">{thr.thread_type_fa}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <label className="text-gray-400 text-sm">ضریب:</label>
                        <input
                          type="number"
                          step="0.01"
                          defaultValue={thr.coefficient}
                          onBlur={(e) => updateThread(thr.id, 'coefficient', parseFloat(e.target.value) || 1)}
                          className="w-24 bg-navy-700 border border-navy-600 rounded-lg px-3 py-2 text-white text-center"
                          dir="ltr"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="text-gray-400 text-sm">زمان/رزوه (دقیقه):</label>
                        <input
                          type="number"
                          step="0.01"
                          defaultValue={thr.time_per_thread}
                          onBlur={(e) => updateThread(thr.id, 'time_per_thread', parseFloat(e.target.value) || 0)}
                          className="w-24 bg-navy-700 border border-navy-600 rounded-lg px-3 py-2 text-white text-center"
                          dir="ltr"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Help */}
          <div className="mt-8 p-4 bg-navy-800/30 rounded-lg border border-navy-700">
            <p className="text-gray-400 text-sm">
              <span className="text-bronze-400 font-medium">راهنما:</span> تغییرات با فشردن Enter یا کلیک خارج از فیلد ذخیره می‌شوند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
