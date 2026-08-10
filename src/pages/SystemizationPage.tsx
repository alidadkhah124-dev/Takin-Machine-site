import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './SystemizationPage.css';

const sections = [
  {
    id: 1,
    title: 'ساختار و وابستگی به افراد',
    content: (
      <>
        <p className="section-intro">
          یک مجموعه زمانی واقعاً سیستماتیک است که اجرای کارها فقط به حضور چند
          فرد باتجربه وابسته نباشد.
        </p>

        <div className="highlight">
          تجربه افراد ارزشمند است؛ اما نباید تنها محل نگهداری دانش سازمان باشد.
        </div>

        <p>
          فرآیندها، مسئولیت‌ها، گردش اطلاعات و روش انجام کار باید به شکلی
          طراحی شوند که سازمان بتواند حتی در زمان جابه‌جایی یا غیبت افراد،
          عملکرد قابل پیش‌بینی خود را حفظ کند.
        </p>

        <div className="item-grid">
          <div className="item">
            <strong>مسئولیت‌ها</strong>
            <p>
              مشخص بودن اینکه هر فعالیت در چه مرحله‌ای، توسط چه کسی و با چه
              سطح اختیاری انجام می‌شود.
            </p>
          </div>

          <div className="item">
            <strong>دانش سازمانی</strong>
            <p>
              تبدیل تجربه افراد به روش، دستورالعمل و اطلاعات قابل استفاده
              برای مجموعه.
            </p>
          </div>

          <div className="item">
            <strong>تداوم عملیات</strong>
            <p>
              کاهش وابستگی عملیات به یک فرد خاص و ایجاد امکان جایگزینی
              منطقی نیروها.
            </p>
          </div>
        </div>
      </>
    ),
  },

  {
    id: 2,
    title: 'فرآیند و جریان واقعی کار',
    content: (
      <>
        <p className="section-intro">
          بسیاری از مشکلات مجموعه‌ها از جایی شروع می‌شود که کار در ذهن افراد
          جریان دارد، نه در یک فرآیند مشخص.
        </p>

        <p>
          سفارش، خرید، تولید، کنترل کیفیت، انبار، تحویل و پیگیری مشتری باید
          بخشی از یک جریان مشخص باشند. هر مرحله باید ورودی، خروجی، مسئول و
          نقطه کنترل مشخص داشته باشد.
        </p>

        <div className="process">
          <div className="process-step">
            <span>01</span>
            <div>
              <strong>ورودی</strong>
              <p>اطلاعات، سفارش، مواد یا درخواست وارد فرآیند می‌شود.</p>
            </div>
          </div>

          <div className="process-step">
            <span>02</span>
            <div>
              <strong>اجرا</strong>
              <p>فعالیت طبق روش مشخص و توسط مسئول مشخص انجام می‌شود.</p>
            </div>
          </div>

          <div className="process-step">
            <span>03</span>
            <div>
              <strong>کنترل</strong>
              <p>نتیجه با معیار مشخص بررسی و ثبت می‌شود.</p>
            </div>
          </div>

          <div className="process-step">
            <span>04</span>
            <div>
              <strong>خروجی</strong>
              <p>نتیجه به مرحله بعد منتقل می‌شود و اطلاعات آن باقی می‌ماند.</p>
            </div>
          </div>
        </div>
      </>
    ),
  },

  {
    id: 3,
    title: 'اطلاعات، ثبت و کنترل',
    content: (
      <>
        <p className="section-intro">
          چیزی که ثبت نمی‌شود، قابل اندازه‌گیری و قابل مدیریت نیست.
        </p>

        <p>
          اطلاعات تولید، توقفات، ضایعات، خرید، موجودی، عملکرد افراد و وضعیت
          سفارش‌ها باید از حالت اطلاعات پراکنده خارج شوند و به داده قابل
          استفاده برای تصمیم‌گیری تبدیل شوند.
        </p>

        <div className="item-grid">
          <div className="item">
            <strong>ثبت اطلاعات</strong>
            <p>اطلاعات در زمان مناسب و توسط مسئول مشخص ثبت می‌شود.</p>
          </div>

          <div className="item">
            <strong>ردیابی</strong>
            <p>سابقه اتفاقات و تغییرات قابل بررسی و پیگیری است.</p>
          </div>

          <div className="item">
            <strong>گزارش‌گیری</strong>
            <p>مدیر برای تصمیم‌گیری مجبور به جمع‌آوری دستی اطلاعات نیست.</p>
          </div>
        </div>
      </>
    ),
  },

  {
    id: 4,
    title: 'طراحی ابزار و اجرای سیستم',
    content: (
      <>
        <p className="section-intro">
          سیستم زمانی ارزش دارد که در عملیات واقعی مجموعه قابل استفاده باشد.
        </p>

        <p>
          پس از شناخت فرآیندها، ساختار مناسب برای ثبت، کنترل و گردش اطلاعات
          طراحی می‌شود. بسته به نیاز مجموعه، این ساختار می‌تواند با ابزارهای
          موجود اجرا شود یا به صورت یک راهکار نرم‌افزاری اختصاصی توسعه پیدا
          کند.
        </p>

        <div className="highlight">
          هدف، ساخت یک ابزار زیبا نیست؛ هدف ایجاد یک سیستم قابل استفاده،
          قابل کنترل و قابل توسعه است.
        </div>
      </>
    ),
  },
];

const questions = [
  {
    id: 1,
    text: 'اگر فردی که بیشترین تجربه را در یک بخش دارد فردا در مجموعه نباشد، کار آن بخش بدون وابستگی به او ادامه پیدا می‌کند؟',
    options: [
      'بله، فرآیند کاملاً مشخص است',
      'تا حدودی؛ بیشتر به تجربه افراد وابسته است',
      'خیر؛ باید از فرد قبلی سؤال شود',
      'بسته به نوع کار متفاوت است',
    ],
  },

  {
    id: 2,
    text: 'وقتی یک سفارش، خرابی دستگاه یا مشکل تولید پیش می‌آید، مشخص است چه کسی باید تصمیم بگیرد یا موضوع معمولاً بین چند نفر دست‌به‌دست می‌شود؟',
    options: [
      'مسئول تصمیم‌گیری کاملاً مشخص است',
      'معمولاً مشخص است اما استثنا زیاد داریم',
      'باید از مدیر یا چند نفر سؤال شود',
      'اغلب موردی تصمیم‌گیری می‌شود',
    ],
  },

  {
    id: 3,
    text: 'برای اینکه بدانید امروز واقعاً چقدر تولید شده، چقدر توقف داشته‌اید و علت توقف چه بوده، اطلاعات آماده و قابل اتکایی دارید؟',
    options: [
      'بله، گزارش منظم داریم',
      'اطلاعات داریم ولی پراکنده است',
      'باید از چند نفر جمع‌آوری شود',
      'معمولاً دقیق نمی‌دانیم',
    ],
  },

  {
    id: 4,
    text: 'وقتی یک قطعه یا محصول با مشکل مواجه می‌شود، علت آن ثبت و قابل پیگیری است یا معمولاً مشکل همان‌جا برطرف می‌شود و پرونده‌اش بسته می‌شود؟',
    options: [
      'علت و اقدام اصلاحی ثبت می‌شود',
      'گاهی ثبت می‌شود',
      'بیشتر شفاهی پیگیری می‌شود',
      'معمولاً فقط مشکل را برطرف می‌کنیم',
    ],
  },

  {
    id: 5,
    text: 'آیا قبل از اینکه کمبود یک ماده، ابزار یا قطعه، کار را متوقف کند متوجه آن می‌شوید؟',
    options: [
      'بله، موجودی و نیاز کنترل می‌شود',
      'تا حدودی',
      'معمولاً هنگام نیاز متوجه می‌شویم',
      'چند بار باعث توقف کار شده است',
    ],
  },

  {
    id: 6,
    text: 'اگر بخواهید عملکرد یک واحد یا یک نفر را با عدد و اطلاعات واقعی بررسی کنید، گزارش مشخصی دارید؟',
    options: [
      'بله، شاخص و گزارش مشخص داریم',
      'بعضی موارد را اندازه‌گیری می‌کنیم',
      'بیشتر بر اساس تجربه و مشاهده است',
      'گزارش مشخصی نداریم',
    ],
  },

  {
    id: 7,
    text: 'اگر قرار باشد فقط یک مورد از مشکلات فعلی مجموعه همین ماه حل شود، کدام مورد بیشترین اثر را روی تولید، هزینه یا کنترل مجموعه خواهد داشت؟',
    options: [
      'کنترل و برنامه‌ریزی تولید',
      'وابستگی به افراد و نیروهای کلیدی',
      'ثبت اطلاعات و گزارش‌گیری',
      'خرید، موجودی و تأمین',
    ],
  },
];

export default function SystemizationPage() {
  const [openSection, setOpenSection] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showForm, setShowForm] = useState(false);

  const completedQuestions = Object.keys(answers).length;

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: answer,
    }));
  };

  const handleStartAssessment = () => {
    document
      .getElementById('system-intro')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  const companyName =
    formData.get('companyName')?.toString().trim() || '';

  const contactName =
    formData.get('contactName')?.toString().trim() || '';

  const phone =
    formData.get('phone')?.toString().trim() || '';

  const industry =
    formData.get('industry')?.toString().trim() || '';

  const mainProblem =
    formData.get('mainProblem')?.toString().trim() || '';

  const answersText = questions
    .map(
      (question) =>
        `${question.id}. ${question.text}\nپاسخ: ${
          answers[question.id] || 'پاسخ داده نشده'
        }`
    )
    .join('\n\n');

  const weakAnswers = Object.values(answers).filter(
    (answer) =>
      answer.includes('باید') ||
      answer.includes('معمولاً') ||
      answer.includes('پراکنده') ||
      answer.includes('شفاهی') ||
      answer.includes('نمی‌دانیم') ||
      answer.includes('نداریم')
  ).length;

  let assessmentSummary = 'وضعیت نسبتاً مناسب';

  if (weakAnswers >= 5) {
    assessmentSummary = 'نیاز بالا به سیستم‌سازی';
  } else if (weakAnswers >= 3) {
    assessmentSummary = 'نیاز قابل توجه به سیستم‌سازی';
  } else if (weakAnswers >= 1) {
    assessmentSummary = 'وجود برخی نقاط قابل بهبود';
  }

  const details = `
درخواست جدید سیستم‌سازی از سایت تکین ماشین مانا

━━━━━━━━━━━━━━━━━━

اطلاعات مجموعه

نام مجموعه:
${companyName}

نام و سمت:
${contactName}

شماره تماس:
${phone}

حوزه فعالیت:
${industry || '-'}

مهم‌ترین مسئله مجموعه:
${mainProblem || '-'}

━━━━━━━━━━━━━━━━━━

جمع‌بندی ارزیابی:

${assessmentSummary}

${completedQuestions} از ${questions.length} سؤال پاسخ داده شده

━━━━━━━━━━━━━━━━━━

پاسخ‌های مشتری:

${answersText}

━━━━━━━━━━━━━━━━━━

ارسال شده از صفحه مهندسی سیستم‌های سازمانی
سایت تکین ماشین مانا
`;

  try {
    const response = await emailjs.send(
      'service_778wqyi',
      'template_obg5u5k',
      {
        company_name: companyName,
        contact_name: contactName,
        phone: phone,
        industry: industry || '-',
        main_problem: mainProblem || '-',
        assessment_summary: assessmentSummary,
        answers: answersText,
        message: details,
      },
      {
        publicKey: '-StDVTqF0_ZyQ-H3X',
      }
    );

    console.log('EmailJS response:', response);

    alert('درخواست شما با موفقیت ارسال شد');

    form.reset();
    setShowForm(false);

  } catch (error) {
    console.error('EmailJS Error:', error);
    alert('ارسال درخواست ناموفق بود');
  }
};

  const handleOpenForm = () => {
    setShowForm(true);

    setTimeout(() => {
      document
        .getElementById('system-form')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="system-page">

      {/* HERO */}

      <section className="system-hero">

        <div className="hero-content">

          <div className="eyebrow">
            ORGANIZATIONAL SYSTEM ENGINEERING
          </div>

          <h1>
            مهندسی
            <span>سیستم‌های سازمانی</span>
          </h1>

          <p>
            طراحی ساختاری برای تبدیل فرآیندهای پراکنده، وابستگی به افراد و
            اطلاعات غیرقابل‌کنترل، به یک سیستم قابل اجرا، قابل اندازه‌گیری و
            قابل توسعه.
          </p>

          <button
            className="primary-button"
            onClick={handleStartAssessment}
          >
            بررسی ساختار سیستم
            <span>↓</span>
          </button>

        </div>

        <div className="hero-diagram">

          <div className="diagram-core">
            SYSTEM
          </div>

          <div className="diagram-node node-1">
            PROCESS
          </div>

          <div className="diagram-node node-2">
            DATA
          </div>

          <div className="diagram-node node-3">
            CONTROL
          </div>

          <div className="diagram-node node-4">
            PEOPLE
          </div>

          <div className="diagram-line line-1" />
          <div className="diagram-line line-2" />
          <div className="diagram-line line-3" />
          <div className="diagram-line line-4" />

        </div>

      </section>

      {/* INTRO */}

      <section
        id="system-intro"
        className="system-intro"
      >

        <div className="section-number">
          01 / SYSTEM ARCHITECTURE
        </div>

        <h2>
          سیستم‌سازی از شناخت واقعی عملیات شروع می‌شود.
        </h2>

        <p>
          طراحی سیستم سازمانی بدون شناخت فرآیندهای واقعی، فقط ایجاد مجموعه‌ای
          از فرم‌ها و دستورالعمل‌هاست. ابتدا باید مشخص شود کار در مجموعه
          واقعاً چگونه انجام می‌شود؛ اطلاعات از کجا وارد می‌شوند، چه کسی
          تصمیم می‌گیرد، کجا کنترل انجام می‌شود و چه چیزی در پایان باقی
          می‌ماند.
        </p>

      </section>

      {/* PROGRESSIVE CONTENT */}

      <section className="system-sections">

        {sections.map((section, index) => {

          const isOpen = openSection === index;

          return (
            <article
              key={section.id}
              className={`system-card ${isOpen ? 'is-open' : ''}`}
            >

              <button
                className="card-header"
                onClick={() =>
                  setOpenSection(isOpen ? -1 : index)
                }
              >

                <span>
                  0{section.id}
                </span>

                <h2>
                  {section.title}
                </h2>

              </button>

              {isOpen && (
                <div className="card-body">

                  {section.content}

                  {index < sections.length - 1 && (
                    <button
                      className="next-button"
                      onClick={() =>
                        setOpenSection(index + 1)
                      }
                    >
                      ادامه بررسی
                      <span>←</span>
                    </button>
                  )}

                </div>
              )}

            </article>
          );
        })}

      </section>

      {/* QUESTIONS */}

      <section className="questions-section">

        <div className="section-number">
          05 / OPERATIONAL ASSESSMENT
        </div>

        <h2>
          حالا مجموعه را از زاویه عملیات بررسی کنید.
        </h2>

        <p className="questions-intro">
          پاسخ درست یا غلطی وجود ندارد. هدف این بخش، مشخص کردن نقاطی است که
          ممکن است در عملیات روزمره مجموعه وجود داشته باشند اما به دلیل عادی
          شدن، دیگر به چشم نیایند.
        </p>

        <div className="questions">

          {questions.map((question) => (

            <div
              className="question"
              key={question.id}
            >

              <span>
                0{question.id}
              </span>

              <div className="question-content">

                <p>
                  {question.text}
                </p>

                <div className="question-options">

                  {question.options.map((option) => (

                    <button
                      type="button"
                      key={option}
                      className={
                        answers[question.id] === option
                          ? 'question-option selected'
                          : 'question-option'
                      }
                      onClick={() =>
                        handleAnswer(
                          question.id,
                          option
                        )
                      }
                    >

                      <span className="option-marker">
                        {answers[question.id] === option
                          ? '✓'
                          : ''}
                      </span>

                      <span>
                        {option}
                      </span>

                    </button>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="assessment-status">

          <span>
            {completedQuestions} از {questions.length} مورد بررسی شده
          </span>

          {completedQuestions === questions.length && (
            <span className="assessment-ready">
              ارزیابی تکمیل شد
            </span>
          )}

        </div>

        {completedQuestions === questions.length && (

          <button
            type="button"
            className="primary-button final-button"
            onClick={handleOpenForm}
          >
            دریافت بررسی اولیه مجموعه
            <span>←</span>
          </button>

        )}

      </section>

      {/* FORM */}

      {showForm && (

        <section
          id="system-form"
          className="system-form-section"
        >

          <div className="section-number">
            06 / INITIAL SYSTEM REVIEW
          </div>

          <div className="form-heading">

            <div>

              <h2>
                حالا می‌توانیم درباره
                <span> مجموعه شما </span>
                صحبت کنیم.
              </h2>

              <p>
                پاسخ‌هایی که در ارزیابی ثبت کردید، تصویر اولیه‌ای از وضعیت
                عملیاتی مجموعه ایجاد می‌کند. اطلاعات زیر برای بررسی دقیق‌تر
                ساختار، فرآیندها و نقاط قابل بهبود استفاده خواهد شد.
              </p>

            </div>

            <div className="assessment-summary">

              <span>
                ASSESSMENT
              </span>

              <strong>
                {completedQuestions} / {questions.length}
              </strong>

              <small>
                موارد بررسی شده
              </small>

            </div>

          </div>

          <div className="form-divider" />

          <div className="form-layout">

            <div className="form-description">

              <h3>
                بررسی از کجا شروع می‌شود؟
              </h3>

              <p>
                ابتدا وضعیت موجود و نحوه واقعی انجام کارها بررسی می‌شود؛ سپس
                ساختار مناسب برای ثبت اطلاعات، کنترل فرآیندها، گردش کار و
                گزارش‌گیری متناسب با نیاز مجموعه طراحی خواهد شد.
              </p>

              <p>
                در صورت نیاز، این ساختار می‌تواند به ابزارهای اجرایی و
                نرم‌افزار اختصاصی متناسب با فرآیندهای مجموعه نیز تبدیل شود.
              </p>

              <div className="form-points">

                <div>
                  <span>01</span>
                  شناخت وضعیت موجود
                </div>

                <div>
                  <span>02</span>
                  شناسایی نقاط قابل بهبود
                </div>

                <div>
                  <span>03</span>
                  طراحی ساختار مناسب
                </div>

                <div>
                  <span>04</span>
                  انتخاب ابزار اجرای سیستم
                </div>

              </div>

            </div>

            <form
  className="system-form"
  onSubmit={handleSubmit}
>

              <div className="form-field">

                <label>
                  نام مجموعه
                </label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="مثلاً: شرکت ..."
                  required
                />

              </div>

              <div className="form-field">

                <label>
                  نام و سمت
                </label>

                <input
                  type="text"
                  name="contactName"
                  placeholder="نام و مسئولیت شما در مجموعه"
                  required
                />

              </div>

              <div className="form-field">

                <label>
                  شماره تماس
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="شماره تماس"
                  required
                />

              </div>

              <div className="form-field">

                <label>
                  حوزه فعالیت
                </label>

                <input
                  type="text"
                  name="industry"
                  placeholder="تولید، بازرگانی، خدمات و..."
                />

              </div>

              <div className="form-field full">

                <label>
                  مهم‌ترین مسئله مجموعه
                </label>

                <textarea name="mainProblem"
                  rows={5}
                  placeholder="اگر بخواهید فقط یک مشکل یا ضعف در مجموعه را برای ما توضیح دهید، چه موردی را مطرح می‌کنید؟"
                />

              </div>

              <div className="form-submit-area">

                <div>
                  <span className="secure-mark">
                    ●
                  </span>

                  اطلاعات این فرم صرفاً برای بررسی اولیه درخواست استفاده
                  می‌شود.
                </div>

                <button
                  type="submit"
                  className="primary-button"
                >
                  ارسال درخواست بررسی
                  <span>←</span>
                </button>

              </div>

            </form>

          </div>

        </section>

      )}

    </div>
  );
}