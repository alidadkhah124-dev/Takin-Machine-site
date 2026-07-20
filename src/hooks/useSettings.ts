import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { MaterialSetting, ToleranceCoefficient, ThreadCoefficient, AdminSetting } from '../types';

export function useSettings() {
  const [materials, setMaterials] = useState<MaterialSetting[]>([]);
  const [tolerances, setTolerances] = useState<ToleranceCoefficient[]>([]);
  const [threads, setThreads] = useState<ThreadCoefficient[]>([]);
  const [adminSettings, setAdminSettings] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllSettings();
  }, []);

  const fetchAllSettings = async () => {
    try {
      setLoading(true);

      const [materialsRes, tolerancesRes, threadsRes, settingsRes] = await Promise.all([
        supabase.from('material_settings').select('*').order('id'),
        supabase.from('tolerance_coefficients').select('*').order('id'),
        supabase.from('thread_coefficients').select('*').order('id'),
        supabase.from('admin_settings').select('*'),
      ]);

      if (materialsRes.error) throw materialsRes.error;
      if (tolerancesRes.error) throw tolerancesRes.error;
      if (threadsRes.error) throw threadsRes.error;
      if (settingsRes.error) throw settingsRes.error;

      setMaterials(materialsRes.data || []);
      setTolerances(tolerancesRes.data || []);
      setThreads(threadsRes.data || []);

      const settingsMap: Record<string, number> = {};
      (settingsRes.data || []).forEach((s: AdminSetting) => {
        settingsMap[s.setting_key] = typeof s.setting_value.value === 'number'
          ? s.setting_value.value
          : parseFloat(s.setting_value.value);
      });
      setAdminSettings(settingsMap);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطا در دریافت تنظیمات');
    } finally {
      setLoading(false);
    }
  };

  return {
    materials,
    tolerances,
    threads,
    adminSettings,
    loading,
    error,
    refetch: fetchAllSettings,
  };
}
