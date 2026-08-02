import { useState, useEffect } from 'react';
import { Calculator, Plus, Trash2, AlertTriangle, Send, Phone, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useSettings } from '../hooks/useSettings';
import { useAuth } from '../contexts/AuthContext';
import type { MachiningStep, InternalStep, CalculationResult } from '../types';
import emailjs from '@emailjs/browser';

interface CalculatorPageProps {
  onNavigate: (page: string) => void;
}

export function CalculatorPage({ onNavigate }: CalculatorPageProps) {
  const { materials, tolerances, threads, adminSettings, loading, error } = useSettings();
  const { isAdmin } = useAuth();

  const [crossSectionType, setCrossSectionType] = useState<'round' | 'hex'>('round');
  const [material, setMaterial] = useState('CK45');
  const [weightMethod, setWeightMethod] = useState<'direct' | 'calculate'>('calculate');
  const [directWeight, setDirectWeight] = useState(0);
  const [rawDiameter, setRawDiameter] = useState(0);
  const [rawLength, setRawLength] = useState(0);
  const [rawInnerDiameter, setRawInnerDiameter] = useState(0);

  const[isFinalSending,setIsFinalSending]=useState(false);
  const [sendDrawing, setSendDrawing] = useState(false)
  const [showFinalInquiry, setShowFinalInquiry] = useState(false);

  const [steps, setSteps] = useState<MachiningStep[]>([
    { diameter: 0, length: 0, tolerance: 'free', threadType: 'none', threadSize: '', threadPitch: '', threadLength: 0 },
  ]);

  const [hasInternalMachining, setHasInternalMachining] = useState(false);
  const [internalSteps, setInternalSteps] = useState<InternalStep[]>([
    { diameter: 0, length: 0, tolerance: 'free' },
  ]);

  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [IsSending, setIsSending] = useState(false)

  const[customerName,setCustomerName]=useState('');
  const[companyName,setCompanyName]=useState('');
  const[phoneNumber,setPhoneNumer]=useState('');
  const[customerDescription,setCustomerDescription]=useState('');
  


  const addStep = () => {
    setSteps([...steps, { diameter: 0, length: 0, tolerance: 'free', threadType: 'none', threadSize: '', threadPitch: '', threadLength: 0 }]);
  };

  const removeStep = (index: number) => {
    if (steps.length > 1) {
      setSteps(steps.filter((_, i) => i !== index));
    }
  };

  const updateStep = (index: number, field: keyof MachiningStep, value: string | number) => {
    const newSteps = [...steps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setSteps(newSteps);
  };

  const addInternalStep = () => {
    setInternalSteps([...internalSteps, { diameter: 0, length: 0, tolerance: 'free' }]);
  };

  const removeInternalStep = (index: number) => {
    if (internalSteps.length > 1) {
      setInternalSteps(internalSteps.filter((_, i) => i !== index));
    }
  };

  const updateInternalStep = (index: number, field: keyof InternalStep, value: string | number) => {
    const newSteps = [...internalSteps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setInternalSteps(newSteps);
  };

  const sendInquiry = async () => {
  if (IsSending) return;
  if (!result) return;

  setIsSending(true);

  const details = `
استعلام جدید از سایت تکین ماشین مانا

==============================

شناسه کاربر:
${getUserId()}

تاریخ و ساعت:
${new Date().toLocaleString('fa-IR')}

------------------------------

جنس متریال:
${material}

تعداد:
${quantity}

روش محاسبه:
${weightMethod}

قطر خام:
${rawDiameter} میلی‌متر

طول خام:
${rawLength} میلی‌متر

وزن متریال خام:
${formatNumber(result.rawWeight, 2)} کیلوگرم

وزن قطعه نهایی:
${formatNumber(result.finalWeight, 2)} کیلوگرم

زمان ماشینکاری:
${formatNumber(result.machiningTime, 1)} دقیقه

قیمت تقریبی:
${formatCurrency(result.totalCost)}

==============================

این ایمیل به صورت خودکار از سایت تکین ماشین مانا ارسال شده است.
`;

  try {
    await emailjs.send(
      'service_778wqyi',
      'template_abgdpw3',
      {
        subject: 'استعلام جدید سایت',
        message: details,
      },
      {
        publicKey: '-StDVTqF0_ZyQ-H3X',
      }
    );

    setIsSending(false);

    alert('درخواست شما با موفقیت ارسال شد.');

  } catch (error) {
    setIsSending(false);
    console.error(error);
    alert('ارسال درخواست انجام نشد.');
  }
};


const sendCustomerInquiry = async () => {
  if (!customerName || !phoneNumber) {
    alert('لطفاً نام و شماره تماس را وارد کنید');
    return;
  }

  const details = `
استعلام جدید از سایت تکین ماشین مانا

----------------------
شناسه کاربر:
${getUserId()}

نام مشتری:
${customerName}

نام شرکت:
${companyName}

شماره تماس:
${phoneNumber}

توضیحات:
${customerDescription}

----------------------

اطلاعات قطعه:

جنس:
${material}

تعداد:
${quantity}

وزن خام:
${result ? formatNumber(result.rawWeight, 2) : '-'} کیلوگرم

وزن نهایی:
${result ? formatNumber(result.finalWeight, 2) : '-'} کیلوگرم

قیمت تقریبی:
${result ? formatCurrency(result.totalCost) : '-'}

نوع درخواست:
${sendDrawing ? 'ارسال نقشه' : 'استعلام نهایی'}

----------------------

ارسال شده از سایت تکین ماشین مانا
`;

  try {
    await emailjs.send(
      'service_778wqyi',
      'template_abgdpw3',
      {
        subject: 'استعلام جدید سایت',
        message: details,
      },
      {
        publicKey: '-StDVTqF0_ZyQ-H3X',
      }
    );

    alert('درخواست شما با موفقیت ارسال شد');

    setShowFinalInquiry(false);

  } catch (error) {
    console.error(error);
    alert('ارسال درخواست ناموفق بود');
  }
};


  const calculateCost = () => {
    if (!materials.length || !tolerances.length || !threads.length) return;

    const mat = materials.find(m => m.material_name === material) || materials[0];
    console.log(mat);
    const machiningCostPerMinute = adminSettings['machining_cost_per_minute'] || 120000;
    const programmingCost = adminSettings['programming_cost'] || 500000;
    const overheadCost = adminSettings['overhead_cost'] || 200000;
    const passesPerOperation = adminSettings['passes_per_operation'] || 3;

    let rawWeight = 0;
    let finalWeight = 0;



    if (weightMethod === 'direct') {
      rawWeight = directWeight;

      // حجم قطعه نهایی بیرونی
      let finalVolume = steps.reduce((sum, step) => {
        if (step.diameter > 0 && step.length > 0) {
          const radius = step.diameter / 2000;
          return sum + (Math.PI * radius * radius * (step.length / 1000));
        }
        return sum;
      }, 0);

      // کم کردن حجم داخل تراشی
      if (hasInternalMachining) {
        const internalVolume = internalSteps.reduce((sum, step) => {
          if (step.diameter > 0 && step.length > 0) {
            const radius = step.diameter / 2000;
            return sum + (Math.PI * radius * radius * (step.length / 1000));
          }
          return sum;
        }, 0);

        finalVolume -= internalVolume;
      }

      finalWeight = Math.max(0, finalVolume * mat.density * 1000);

    } else {

      // وزن خام از ابعاد
      const radius = rawDiameter / 2000;
      const length = rawLength / 1000;

      let rawVolume = Math.PI * radius * radius * length;

      // کم کردن سوراخ داخلی خام
      if (rawInnerDiameter > 0) {
        const innerRadius = rawInnerDiameter / 2000;
        const innerVolume = Math.PI * innerRadius * innerRadius * length;
        rawVolume = rawVolume - innerVolume;
      }

      rawWeight = rawVolume * mat.density * 1000;


      // وزن قطعه نهایی از پله‌ها
      let finalVolume = steps.reduce((sum, step) => {
        if (step.diameter > 0 && step.length > 0) {
          const stepRadius = step.diameter / 2000;
          return sum + (Math.PI * stepRadius * stepRadius * (step.length / 1000));
        }
        return sum;
      }, 0);


      // کم کردن حجم داخل تراشی
      if (hasInternalMachining) {
        const internalVolume = internalSteps.reduce((sum, step) => {
          if (step.diameter > 0 && step.length > 0) {
            const innerRadius = step.diameter / 2000;
            return sum + (Math.PI * innerRadius * innerRadius * (step.length / 1000));
          }
          return sum;
        }, 0);

        finalVolume -= internalVolume;
      }

      finalWeight = Math.max(0, finalVolume * mat.density * 1000);
    }

    let totalMachiningTime = 0;
    let toleranceCoefficient = 1;

    steps.forEach(step => {
      if (step.diameter > 0 && step.length > 0) {

        // قطر خام برای محاسبه دور
        const rpm = (mat.cutting_speed * 1000) / (Math.PI * rawDiameter);

        // سرعت حرکت ابزار mm/min
        const feedSpeed = rpm * mat.feed_rate;

        // زمان تراش طولی بر حسب دقیقه
        const cuttingTime = step.length / feedSpeed;

        // تعداد پاس بر اساس عمق بار 1.5 میلیمتر
        const diameterReduction = rawDiameter - step.diameter;
        const passesNeeded = Math.max(1, Math.ceil(diameterReduction / 3));

        totalMachiningTime += cuttingTime * passesNeeded;
      }

      const tol = tolerances.find(t => t.tolerance_name === step.tolerance);
      if (tol) {
        toleranceCoefficient = Math.max(toleranceCoefficient, tol.coefficient);
      }
    });

    // زمان کف تراشی
    let facingTime = 0;

    if (rawLength > 0) {

      const finalLength = steps.reduce((sum, step) => {
        return sum + step.length;
      }, 0);

      const facingAllowance = rawLength - finalLength;

      if (facingAllowance > 0) {

        // دور بر اساس قطر خام
        const rpm = (mat.cutting_speed * 1000) / (Math.PI * rawDiameter);

        // سرعت پیشروی ابزار
        const feedSpeed = rpm * mat.feed_rate;

        // هر کف تراشی با عمق بار 1.5 میلیمتر
        const passesNeeded = Math.ceil(facingAllowance / 1.5);

        // زمان یک پاس کف تراشی (حرکت شعاعی)
        const facingTimePerPass = rawDiameter / feedSpeed;

        facingTime = facingTimePerPass * passesNeeded;
      }
    }

    totalMachiningTime += facingTime;
    let threadCost = 0;
    steps.forEach(step => {
      if (step.threadType !== 'none' && step.threadLength > 0) {
        const thread = threads.find(t => t.thread_type === step.threadType);
        if (thread) {
          threadCost += thread.time_per_thread * step.threadLength * step.diameter / 100 * machiningCostPerMinute;
        }
      }
    });

    let internalMachiningTime = 0;

    internalSteps.forEach(step => {
      if (step.diameter > 0 && step.length > 0) {

        // دور بر اساس قطر داخلی خام
        const rpm = (mat.cutting_speed * 1000) / (Math.PI * rawInnerDiameter);

        // سرعت پیشروی ابزار
        const feedSpeed = rpm * mat.feed_rate;

        // زمان تراش طولی
        const cuttingTime = step.length / feedSpeed;

        // تعداد پاس بر اساس اختلاف قطر داخلی
        const diameterReduction = step.diameter - rawInnerDiameter;

        const passesNeeded = Math.max(1, Math.ceil(Math.abs(diameterReduction) / 3));

        internalMachiningTime += cuttingTime * passesNeeded;
      }
    });

    let quantityCoefficient = 1;

    if (quantity > 1000) quantityCoefficient = 0.87;
    else if (quantity > 500) quantityCoefficient = 0.90;
    else if (quantity > 100) quantityCoefficient = 0.93;
    else if (quantity > 50) quantityCoefficient = 0.97;
    else if (quantity > 10) quantityCoefficient = 0.99;

    totalMachiningTime +=
      internalMachiningTime;
    const machiningCost =
      Number(totalMachiningTime) *
      Number(machiningCostPerMinute) *
      Number(toleranceCoefficient) *
      Number(mat.machining_coefficient || 1) *
      quantityCoefficient;
    console.log("time:", totalMachiningTime, "min:", machiningCostPerMinute, "tol:", toleranceCoefficient);
    const internalMachiningCost = 0;

    const materialCost = rawWeight * mat.cost_per_kg;

    const totalCost =
      (
        (machiningCost || 0) +
        (threadCost || 0) +
        (internalMachiningCost || 0)
      ) * quantity
      + (programmingCost || 0)
      + (overheadCost || 0);

    setResult({
      rawWeight,
      finalWeight,
      materialCost,
      machiningTime: totalMachiningTime,
      machiningCost,
      toleranceCost: machiningCost * (toleranceCoefficient - 1),
      threadCost,
      internalMachiningCost,
      programmingCost,
      overheadCost,
      totalCost,
    });
  };

  const getUserId = () => {
    let userId = localStorage.getItem('tekin_user_id');

    if (!userId) {
      userId = 'TM-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      localStorage.setItem('tekin_user_id', userId);
    }

    return userId;
  };

  const formatNumber = (num: number, decimals: number = 0) => {
    return num.toLocaleString('fa-IR', { maximumFractionDigits: decimals });
  };

  const formatCurrency = (num: number) => {
    const rounded =
      Math.round(num / 1000) * 1000;
    return rounded.toLocaleString('fa-IR') + ' ریال';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-bronze-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bronze-400 to-bronze-600 rounded-2xl mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2"محاسبه قیمت تراشکاری</h1>
            <p className="text-gray-600">برآورد اولیه قیمت ماشینکاری قطعات تراشکاری</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Material Section */}
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center text-navy-700 font-bold">۱</span>
                مشخصات متریال خام
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع مقطع</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="crossSection"
                        checked={crossSectionType === 'round'}
                        onChange={() => setCrossSectionType('round')}
                        className="w-4 h-4 text-bronze-500"
                      />
                      <span>گرد</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-not--allowed opacity-50">
                      <input
                        type="radio"
                        name="crossSection"
                        disabled
                        className="w-4 h-4 text-gray-400"
                      />
                      <span>شش‌پر(به زودی)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">جنس</label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white"
                  >
                    {materials.map((mat) => (
                      <option key={mat.material_name} value={mat.material_name}>
                        {mat.material_name_fa}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">روش تعیین وزن</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="weightMethod"
                        checked={weightMethod === 'calculate'}
                        onChange={() => setWeightMethod('calculate')}
                        className="w-4 h-4 text-bronze-500"
                      />
                      <span>محاسبه از روی ابعاد</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="weightMethod"
                        checked={weightMethod === 'direct'}
                        onChange={() => setWeightMethod('direct')}
                        className="w-4 h-4 text-bronze-500"
                      />
                      <span>ورود مستقیم وزن</span>
                    </label>
                  </div>
                </div>

                {weightMethod === 'direct' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">وزن خام (کیلوگرم)</label>
                    <input
                      type="number"
                      value={directWeight}
                      onChange={(e) => setDirectWeight(parseFloat(e.target.value) || 0)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                      step="0.1"
                      min="0"
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        قطر یا آچارخور (میلی‌متر)
                      </label>
                      <input
                        type="number"
                        value={rawDiameter}
                        onChange={(e) => setRawDiameter(parseFloat(e.target.value) || 0)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                        step="0.1"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">طول خام (میلی‌متر)</label>
                      <input
                        type="number"
                        value={rawLength}
                        onChange={(e) => setRawLength(parseFloat(e.target.value) || 0)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                        step="0.1"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">قطر داخلی خام (میلی‌متر)</label>
                      <input
                        type="number"
                        value={rawInnerDiameter}
                        onChange={(e) => setRawInnerDiameter(parseFloat(e.target.value) || 0)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                        step="0.1"
                        min="0"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Machining Steps Section */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                  <span className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center text-navy-700 font-bold">۲</span>
                  مشخصات قطعه نهایی
                </h2>
                <button
                  onClick={addStep}
                  className="flex items-center gap-2 text-bronze-600 hover:text-bronze-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">افزودن پله</span>
                </button>
              </div>

              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-navy-700">پله {index + 1}</span>
                      {steps.length > 1 && (
                        <button
                          onClick={() => removeStep(index)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">قطر (mm)</label>
                        <input
                          type="number"
                          value={step.diameter}
                          onChange={(e) => updateStep(index, 'diameter', parseFloat(e.target.value) || 0)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          step="0.1"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">طول (mm)</label>
                        <input
                          type="number"
                          value={step.length}
                          onChange={(e) => updateStep(index, 'length', parseFloat(e.target.value) || 0)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                          step="0.1"
                          min="0"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">تلرانس</label>
                        <select
                          value={step.tolerance}
                          onChange={(e) => updateStep(index, 'tolerance', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                        >
                          {tolerances.map((tol) => (
                            <option key={tol.tolerance_name} value={tol.tolerance_name}>
                              {tol.tolerance_name_fa}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">رزوه</label>
                        <select
                          value={step.threadType}
                          onChange={(e) => updateStep(index, 'threadType', e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                        >
                          {threads.map((thr) => (
                            <option key={thr.thread_type} value={thr.thread_type}>
                              {thr.thread_type_fa}
                            </option>
                          ))}
                        </select>
                      </div>

                      {step.threadType !== 'none' && (
                        <div className="col-span-2 md:col-span-4 grid grid-cols-3 gap-3 mt-2 pt-3 border-t border-gray-300">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">سایز رزوه</label>
                            <input
                              type="text"
                              value={step.threadSize}
                              onChange={(e) => updateStep(index, 'threadSize', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                              placeholder="M10, 1/2 inch"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">گام رزوه</label>
                            <input
                              type="text"
                              value={step.threadPitch}
                              onChange={(e) => updateStep(index, 'threadPitch', e.target.value)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                              placeholder="1.5"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">طول رزوه (mm)</label>
                            <input
                              type="number"
                              value={step.threadLength}
                              onChange={(e) => updateStep(index, 'threadLength', parseFloat(e.target.value) || 0)}
                              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                              step="0.1"
                              min="0"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Machining Section */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                  <span className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center text-navy-700 font-bold">۳</span>
                  داخل تراشی
                </h2>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasInternalMachining}
                    onChange={(e) => setHasInternalMachining(e.target.checked)}
                    className="w-5 h-5 text-bronze-500 rounded"
                  />
                  <span className="font-medium">قطعه دارای داخل تراشی است</span>
                </label>
              </div>

              {hasInternalMachining && (
                <div className="space-y-4">
                  <div className="flex items-center justify-end">
                    <button
                      onClick={addInternalStep}
                      className="flex items-center gap-2 text-bronze-600 hover:text-bronze-700 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                      <span className="font-medium">افزودن پله داخلی</span>
                    </button>
                  </div>

                  {internalSteps.map((step, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-navy-700">پله داخلی {index + 1}</span>
                        {internalSteps.length > 1 && (
                          <button
                            onClick={() => removeInternalStep(index)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">قطر داخلی (mm)</label>
                          <input
                            type="number"
                            value={step.diameter}
                            onChange={(e) => updateInternalStep(index, 'diameter', parseFloat(e.target.value) || 0)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            step="0.1"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">طول (mm)</label>
                          <input
                            type="number"
                            value={step.length}
                            onChange={(e) => updateInternalStep(index, 'length', parseFloat(e.target.value) || 0)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            step="0.1"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">تلرانس</label>
                          <select
                            value={step.tolerance}
                            onChange={(e) => updateInternalStep(index, 'tolerance', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                          >
                            {tolerances.map((tol) => (
                              <option key={tol.tolerance_name} value={tol.tolerance_name}>
                                {tol.tolerance_name_fa}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Info Section */}
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-navy-100 rounded-lg flex items-center justify-center text-navy-700 font-bold">۴</span>
                اطلاعات سفارش
              </h2>

              <div className="max-w-xs">
                <label className="block text-sm font-medium text-gray-700 mb-2">تعداد قطعه</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
                  min="1"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <div className="p-6 bg-gray-50">
              <button
                onClick={calculateCost}
                className="w-full bg-gradient-to-l from-bronze-500 to-bronze-600 text-white py-4 rounded-xl font-bold text-lg hover:from-bronze-600 hover:to-bronze-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                محاسبه قیمت
              </button>
            </div>
          </div>

          {/* Results - Public View */}
          {result && (
            <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-l from-navy-800 to-navy-900 text-white">
                <h2 className="text-xl font-bold mb-4">نتیجه محاسبات</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-gray-300 text-sm mb-1">وزن متریال خام</p>
                    <p className="text-2xl font-bold">{formatNumber(result.rawWeight, 2)} کیلوگرم</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-gray-300 text-sm mb-1">وزن قطعه نهایی</p>
                    <p className="text-2xl font-bold">{formatNumber(result.finalWeight, 2)} کیلوگرم</p>
                  </div>
                  <div className="bg-bronze-500 rounded-xl p-4">
                    <p className="text-bronze-100 text-sm mb-1">قیمت تقریبی ماشینکاری</p>
                    <p className="text-2xl font-bold">{formatCurrency(result.totalCost)}</p>
                  </div>
                </div>
              </div>

              {/* Admin-only details */}
              {isAdmin && (
                <div className="p-6">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-navy-700 hover:text-navy-900 transition-colors mb-4"
                  >
                    {showDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    <span className="font-medium">{showDetails ? 'مخفی کردن جزئیات (فقط مدیر)' : 'نمایش جزئیات محاسبات (فقط مدیر)'}</span>
                  </button>

                  {showDetails && (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">هزینه متریال</span>
                        <span className="font-medium">{formatCurrency(result.materialCost)}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">هزینه ماشینکاری ({formatNumber(result.machiningTime, 1)} دقیقه)</span>
                        <span className="font-medium">{formatCurrency(result.machiningCost)}</span>
                      </div>
                      {result.threadCost > 0 && (
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">هزینه رزوه‌کاری</span>
                          <span className="font-medium">{formatCurrency(result.threadCost)}</span>
                        </div>
                      )}
                      {result.internalMachiningCost > 0 && (
                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">هزینه داخل تراشی</span>
                          <span className="font-medium">{formatCurrency(result.internalMachiningCost)}</span>
                        </div>
                      )}
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">هزینه برنامه‌نویسی</span>
                        <span className="font-medium">{formatCurrency(result.programmingCost)}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">هزینه سربار</span>
                        <span className="font-medium">{formatCurrency(result.overheadCost)}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">هزینه تلرانس</span>
                        <span className="font-medium">{result.toleranceCost > 0 ? formatCurrency(result.toleranceCost) : '-'}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <button
                  onClick={sendInquiry}
                  disabled={IsSending}
                  className="w-full bg-gradient-to-l from-bronze-500 to-bronze-600 text-white py-4 rounded-xl font-bold text-lg hover:from-bronze-600 hover:to-bronze-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {IsSending ? 'در حال ارسال...' : 'کارشناسی مجدد اطلاعات'}
                </button>
              </div>

              {/* Warning - Always visible */}
              <div className="p-4 bg-amber-50 border-t border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-amber-800 text-sm leading-relaxed">
                    قیمت نمایش داده شده صرفاً برآورد اولیه بوده و قیمت نهایی پس از بررسی نقشه و شرایط ساخت اعلام خواهد شد.
                  </p>
                </div>
              </div>
            {/* Action Buttons */}
<div className="p-6 bg-gray-50 flex flex-col sm:flex-row gap-3">

  <button
    onClick={() => {
      setSendDrawing(false);
      setShowFinalInquiry(true);
    }}
    className="btn-primary flex-1 flex items-center justify-center gap-2"
  >
    <Phone className="w-5 h-5" />
    درخواست استعلام نهایی
  </button>

  <button
    onClick={() => {
      setSendDrawing(true);
      setShowFinalInquiry(true);
    }}
    className="btn-secondary flex-1 flex items-center justify-center gap-2"
  >
    <Send className="w-5 h-5" />
    ارسال نقشه
  </button>

</div>

{/* Final Inquiry Form */}
{showFinalInquiry && (
  <div className="p-6 bg-white border-t border-gray-200">
    <h3 className="text-xl font-bold text-navy-900 mb-4">
      {sendDrawing ? 'ارسال نقشه' : 'درخواست استعلام نهایی'}
    </h3>

    <div className="space-y-4">

  <div>
    <label className="block text-sm font-medium mb-1">
      نام و نام خانوادگی
    </label>
    <input
      type="text"
      value={customerName}
      onChange={(e) =>
        setCustomerName(e.target.value)}
      className="w-full border rounded-lg px-4 py-2"
      placeholder="نام خود را وارد کنید"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      نام شرکت
    </label>
    <input
      type="text"
      value={companyName}
      onChange={(e) =>
        setCompanyName(e.target.value)}
      className="w-full border rounded-lg px-4 py-2"
      placeholder="نام شرکت شما"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      شماره تماس
    </label>
    <input
      type="text"
      value={phoneNumber}
      onChange={(e) =>
        setPhoneNumer(e.target.value)}
      className="w-full border rounded-lg px-4 py-2"
      placeholder="شماره تماس"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">
      توضیحات
    </label>
    <textarea
    value={customerDescription}
      onChange={(e) =>
        setCustomerDescription(e.target.value)}
      className="w-full border rounded-lg px-4 py-2"
      rows={4}
      placeholder="توضیحات تکمیلی..."
    />
  </div>

  <button
  onClick={sendCustomerInquiry}
  disabled={IsSending}
  className="w-full bg-gradient-to-l from-bronze-500 to-bronze-600 text-white py-3 rounded-xl font-bold disabled:opacity-60"
>
  {IsSending ? 'در حال ارسال...' : 'ارسال درخواست'}
</button>

</div>
  </div>
)}

</div>
)}
</div>
</div>
</div>
);
}