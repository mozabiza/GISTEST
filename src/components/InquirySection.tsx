import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  X,
} from 'lucide-react';
import {
  WHATSAPP_DISPLAY,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  submitInquiryToGoogleSheet,
  type InquiryPayload,
} from '../config/intakeConfig';

interface InquirySectionProps {
  selectedProgram: string | null;
  onClearProgram: () => void;
  onOpenPrivacy: () => void;
}

interface FormErrors {
  nama?: string;
  telefon?: string;
  email?: string;
  persetujuan?: string;
}

export function InquirySection({
  selectedProgram,
  onClearProgram,
  onOpenPrivacy,
}: InquirySectionProps) {
  const [nama, setNama] = useState('');
  const [telefon, setTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [persetujuan, setPersetujuan] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<InquiryPayload | null>(null);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const cleanName = nama.trim();
    const cleanPhone = telefon.trim();
    const cleanEmail = email.trim();

    if (cleanName.length < 2) {
      nextErrors.nama = 'Sila masukkan nama penuh anda (sekurang-kurangnya 2 aksara).';
    }

    const digitsOnly = cleanPhone.replace(/[\s\-+()]/g, '');
    if (!/^(0|60)?1[0-9]{8,9}$/.test(digitsOnly) && !/^[0-9]{9,13}$/.test(digitsOnly)) {
      nextErrors.telefon =
        'Sila masukkan nombor telefon Malaysia yang sah (contoh: 018-241 9234).';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      nextErrors.email = 'Sila masukkan alamat e-mel yang sah.';
    }

    if (!persetujuan) {
      nextErrors.persetujuan =
        'Sila tandakan kotak persetujuan penggunaan maklumat sebelum meneruskan.';
    }

    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const payload: InquiryPayload = {
      nama: nama.trim(),
      telefon: telefon.trim(),
      email: email.trim(),
      program: selectedProgram ?? undefined,
    };

    setIsSubmitting(true);
    try {
      await submitInquiryToGoogleSheet(payload);
    } catch {
      // Apps Script uses no-cors or may not be configured yet; still allow WhatsApp continuation
      // without falsely claiming sheet confirmation.
    } finally {
      setIsSubmitting(false);
    }

    setSubmittedData(payload);

    // Trigger anchor navigation reliably in user-gesture context without window.open/alert
    const waUrl = buildWhatsAppUrl(payload);
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    if (!submittedData) return;
    try {
      await navigator.clipboard.writeText(buildWhatsAppMessage(submittedData));
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      setCopiedMessage(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setNama('');
    setTelefon('');
    setEmail('');
    setPersetujuan(false);
    setErrors({});
    setSubmitError(null);
    setCopiedMessage(false);
  };

  return (
    <section id="borang-pertanyaan" className="border-b border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-blue-800">
              Borang Pertanyaan Pengambilan
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Mulakan semakan kemasukan &amp; pembiayaan hari ini
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Isikan maklumat asas anda di sebelah kanan. Selepas dihantar, aplikasi WhatsApp akan
              dibuka kepada talian rasmi GIS{' '}
              <span className="font-mono font-semibold text-slate-900 tabular-nums">
                {WHATSAPP_DISPLAY}
              </span>{' '}
              dengan mesej pertanyaan yang telah diisi.
            </p>

            <ol className="mt-8 space-y-5 border-t border-slate-200 pt-6">
              <li className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-sm font-semibold text-blue-800 tabular-nums">
                  01.
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Lengkapkan nama, telefon dan e-mel
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Sertakan nombor telefon aktif WhatsApp untuk memudahkan semakan pantas.
                  </p>
                </div>
              </li>

              <li className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-sm font-semibold text-blue-800 tabular-nums">
                  02.
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Sahkan persetujuan privasi maklumat
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Data anda hanya diakses oleh pegawai pengambilan diberi kuasa bagi tujuan
                    kemasukan SKM dan pembiayaan PTPK.
                  </p>
                </div>
              </li>

              <li className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-sm font-semibold text-blue-800 tabular-nums">
                  03.
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Tekan butang Hantar dalam WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    WhatsApp akan menyediakan draf mesej ke{' '}
                    <span className="font-mono font-medium text-slate-900 tabular-nums">
                      {WHATSAPP_DISPLAY}
                    </span>
                    . Anda masih perlu menekan butang <strong>Hantar</strong> di dalam WhatsApp.
                  </p>
                </div>
              </li>
            </ol>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-800" />
                <div className="text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">
                    Komitmen Perlindungan Data Peribadi
                  </p>
                  <p className="mt-1 leading-relaxed">
                    Rekod pertanyaan dikawal akses dan disimpan mengikut keperluan pengambilan.{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-900 cursor-pointer"
                    >
                      Baca Notis Privasi Penuh
                    </button>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8">
              {submittedData ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-950">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                    <div>
                      <h3 className="font-display text-base font-bold">
                        Maklumat Pertanyaan Disediakan
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-emerald-900">
                        Jika WhatsApp tidak terbuka secara automatik, klik butang di bawah untuk
                        membuka perbualan ke{' '}
                        <span className="font-mono font-semibold tabular-nums">
                          {WHATSAPP_DISPLAY}
                        </span>{' '}
                        dan pastikan anda menekan butang <strong>Hantar</strong> di dalam aplikasi
                        WhatsApp.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                      <span className="text-xs font-semibold text-slate-700">
                        Pratonton Mesej WhatsApp
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 hover:text-blue-900 cursor-pointer"
                      >
                        <Copy className="h-3.5 w-3.5" />
                        <span>{copiedMessage ? 'Mesej Disalin' : 'Salin Mesej'}</span>
                      </button>
                    </div>
                    <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700">
                      {buildWhatsAppMessage(submittedData)}
                    </pre>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-800 whitespace-nowrap"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Buka WhatsApp ({WHATSAPP_DISPLAY})</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-slate-100 cursor-pointer whitespace-nowrap"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>Hantar Pertanyaan Lain</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      Maklumat Calon Pelajar
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Semua medan bertanda wajib dilengkapkan sebelum meneruskan ke WhatsApp.
                    </p>
                  </div>

                  {selectedProgram && (
                    <div className="flex items-center justify-between gap-3 rounded-lg border border-blue-200 bg-blue-50/70 px-4 py-3 text-sm">
                      <div>
                        <span className="text-xs font-medium text-blue-800">Program Pilihan: </span>
                        <span className="font-semibold text-slate-900">{selectedProgram}</span>
                      </div>
                      <button
                        type="button"
                        onClick={onClearProgram}
                        aria-label="Keluarkan program pilihan"
                        className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-white hover:text-slate-900 cursor-pointer shrink-0"
                      >
                        <X className="h-3.5 w-3.5" />
                        <span>Tukar</span>
                      </button>
                    </div>
                  )}

                  {submitError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-sm text-red-900"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="nama"
                      className="block text-sm font-semibold text-slate-900"
                    >
                      Nama Penuh <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="nama"
                      name="nama"
                      type="text"
                      autoComplete="name"
                      required
                      value={nama}
                      onChange={(e) => {
                        setNama(e.target.value);
                        if (errors.nama) setErrors((prev) => ({ ...prev, nama: undefined }));
                      }}
                      placeholder="Contoh: Muhammad Amirul Hakim bin Razak"
                      aria-invalid={Boolean(errors.nama)}
                      aria-describedby={errors.nama ? 'nama-error' : undefined}
                      className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.nama
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-slate-300 focus:border-blue-800 focus:ring-blue-100'
                      }`}
                    />
                    {errors.nama && (
                      <p id="nama-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.nama}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="telefon"
                        className="block text-sm font-semibold text-slate-900"
                      >
                        Nombor Telefon <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={telefon}
                        onChange={(e) => {
                          setTelefon(e.target.value);
                          if (errors.telefon) setErrors((prev) => ({ ...prev, telefon: undefined }));
                        }}
                        placeholder="Contoh: 018-241 9234"
                        aria-invalid={Boolean(errors.telefon)}
                        aria-describedby={errors.telefon ? 'telefon-error' : undefined}
                        className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 font-mono text-sm text-slate-900 tabular-nums placeholder:font-sans placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.telefon
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-800 focus:ring-blue-100'
                        }`}
                      />
                      {errors.telefon && (
                        <p id="telefon-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.telefon}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-900"
                      >
                        Alamat E-mel <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="Contoh: nama@emel.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`mt-1.5 block w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-800 focus:ring-blue-100'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-700">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        id="persetujuan"
                        name="persetujuan"
                        type="checkbox"
                        checked={persetujuan}
                        onChange={(e) => {
                          setPersetujuan(e.target.checked);
                          if (errors.persetujuan) {
                            setErrors((prev) => ({ ...prev, persetujuan: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.persetujuan)}
                        aria-describedby={errors.persetujuan ? 'persetujuan-error' : undefined}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-800 focus:ring-blue-800 cursor-pointer shrink-0"
                      />
                      <span className="text-xs leading-relaxed text-slate-700">
                        Saya bersetuju membenarkan <strong>Global Institute of Studies (GIS)</strong>{' '}
                        mengumpul, menyimpan dan menggunakan nama penuh, nombor telefon serta e-mel
                        saya bagi tujuan pertanyaan pengambilan program SKM, semakan kelayakan
                        Pinjaman PTPK &amp; Elaun Sara Hidup, serta dihubungi melalui WhatsApp,
                        panggilan atau e-mel selaras dengan{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacy}
                          className="font-semibold text-blue-800 underline underline-offset-2 hover:text-blue-900 cursor-pointer"
                        >
                          Notis Privasi &amp; PDPA
                        </button>
                        .
                      </span>
                    </label>
                    {errors.persetujuan && (
                      <p id="persetujuan-error" className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-700">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.persetujuan}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-blue-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>
                      {isSubmitting
                        ? 'Menyediakan Pertanyaan...'
                        : `Hantar Pertanyaan & Buka WhatsApp (${WHATSAPP_DISPLAY})`}
                    </span>
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Selepas WhatsApp dibuka, sila tekan butang <strong>Hantar</strong> dalam
                    aplikasi WhatsApp untuk menghantar mesej kepada pegawai kami.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
