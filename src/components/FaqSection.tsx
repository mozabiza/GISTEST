import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/skmPrograms';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="soalan-lazim" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <p className="text-sm font-medium text-blue-800">Soalan Lazim</p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            style={{ textWrap: 'balance' }}
          >
            Maklumat penting sebelum membuat permohonan
          </h2>
        </div>

        <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="px-6 py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-blue-800 tabular-nums">
                      0{idx + 1}.
                    </span>
                    <span className="font-display text-base font-semibold text-slate-900">
                      {item.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
