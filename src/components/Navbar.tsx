import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigateToForm: () => void;
}

export function Navbar({ onNavigateToForm }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleCtaClick = () => {
    setMobileOpen(false);
    onNavigateToForm();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#atas"
          className="font-display text-base font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
        >
          Global Institute of Studies
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            href="#program-skm"
            className="hover:text-slate-900 hover:underline hover:underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Program SKM
          </a>
          <a
            href="#pembiayaan"
            className="hover:text-slate-900 hover:underline hover:underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Pembiayaan
          </a>
          <a
            href="#borang-pertanyaan"
            className="hover:text-slate-900 hover:underline hover:underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Pertanyaan
          </a>
          <a
            href="#soalan-lazim"
            className="hover:text-slate-900 hover:underline hover:underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Soalan Lazim
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-blue-800 px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Mohon Sekarang
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav aria-label="Menu mudah alih" className="flex flex-col gap-3">
            <a
              href="#program-skm"
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Program SKM
            </a>
            <a
              href="#pembiayaan"
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Pembiayaan
            </a>
            <a
              href="#borang-pertanyaan"
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Pertanyaan
            </a>
            <a
              href="#soalan-lazim"
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Soalan Lazim
            </a>
            <button
              type="button"
              onClick={handleCtaClick}
              className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-blue-800 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-900 cursor-pointer"
            >
              Mohon Sekarang
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
