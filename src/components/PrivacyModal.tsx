import { useEffect } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_DISPLAY } from '../config/intakeConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-semibold text-blue-800">
              Global Institute of Studies (GIS)
            </p>
            <h2
              id="privacy-modal-title"
              className="mt-1 font-display text-xl font-bold tracking-tight text-slate-900"
            >
              Notis Privasi &amp; Perlindungan Data Peribadi (PDPA)
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup notis privasi"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer shrink-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-sm leading-relaxed text-slate-600">
          <div>
            <h3 className="font-display font-semibold text-slate-900">
              1. Tujuan Pengumpulan Data
            </h3>
            <p className="mt-1">
              Maklumat yang dikumpul melalui borang pertanyaan ini (Nama Penuh, Nombor Telefon dan
              E-mel) digunakan secara khusus untuk memproses pertanyaan pengambilan program Sijil
              Kemahiran Malaysia (SKM), membuat semakan awal kelayakan Pinjaman PTPK serta Elaun
              Sara Hidup, dan menghubungi anda melalui WhatsApp, panggilan telefon atau e-mel.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-slate-900">
              2. Pihak Yang Boleh Mengakses Maklumat
            </h3>
            <p className="mt-1">
              Akses kepada rekod pertanyaan dan helaian pendaftaran dihadkan sepenuhnya kepada
              pegawai pengambilan pelajar serta pentadbir sistem yang diberi kuasa di Global
              Institute of Studies. Data anda tidak akan dijual atau didedahkan kepada pihak ketiga
              yang tidak berkaitan.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-slate-900">
              3. Tempoh Simpanan Rekod
            </h3>
            <p className="mt-1">
              Data peribadi disimpan sepanjang tempoh kitaran pengambilan pelajar yang berkaitan
              atau sehingga tujuan pengumpulan selesai, selaras dengan keperluan undang-undang
              perlindungan data peribadi yang berkuat kuasa di Malaysia.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-slate-900">
              4. Hak Pembetulan atau Pemadaman Data
            </h3>
            <p className="mt-1">
              Anda berhak memohon akses, pembetulan atau pemadaman maklumat peribadi anda pada
              bila-bila masa dengan menghubungi pegawai pengambilan Global Institute of Studies
              melalui talian WhatsApp rasmi{' '}
              <span className="font-mono font-semibold text-slate-900 tabular-nums">
                {WHATSAPP_DISPLAY}
              </span>
              .
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end border-t border-slate-200 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 cursor-pointer"
          >
            Saya Faham
          </button>
        </div>
      </div>
    </div>
  );
}
