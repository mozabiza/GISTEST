import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER_E164 } from '../config/intakeConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export function Footer({ onOpenPrivacy }: FooterProps) {
  return (
    <footer className="bg-white py-12 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-slate-900">
              Global Institute of Studies
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Pengambilan Sijil Kemahiran Malaysia (SKM) · Pembiayaan Pinjaman PTPK &amp; Elaun Sara
              Hidup
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <a href="#program-skm" className="hover:text-slate-900 transition-colors">
              Program SKM
            </a>
            <a href="#pembiayaan" className="hover:text-slate-900 transition-colors">
              Pembiayaan
            </a>
            <a href="#borang-pertanyaan" className="hover:text-slate-900 transition-colors">
              Borang Pertanyaan
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER_E164}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono tabular-nums text-emerald-800 hover:underline"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-blue-800 hover:underline cursor-pointer"
            >
              Notis Privasi (PDPA)
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Global Institute of Studies. Hak cipta terpelihara.
          </p>
          <p>
            Permohonan Pinjaman PTPK dan Elaun Sara Hidup tertakluk kepada syarat kelayakan semasa.
          </p>
        </div>
      </div>
    </footer>
  );
}
