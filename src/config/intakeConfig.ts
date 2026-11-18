export const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

export const WHATSAPP_DISPLAY = '018-241 9234';
export const WHATSAPP_NUMBER_E164 = '60182419234';
export const LEAD_SOURCE = 'Landing Page GIS';

export interface InquiryPayload {
  nama: string;
  telefon: string;
  email: string;
  program?: string;
}

export function isGoogleScriptConfigured(): boolean {
  return (
    GOOGLE_SCRIPT_URL.startsWith('https://script.google.com/') ||
    (GOOGLE_SCRIPT_URL.startsWith('https://') &&
      !GOOGLE_SCRIPT_URL.includes('PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'))
  );
}

export function buildWhatsAppMessage(data: InquiryPayload): string {
  const lines = [
    'Salam sejahtera Pegawai Pengambilan Global Institute of Studies (GIS).',
    'Saya ingin membuat pertanyaan lanjut mengenai pengambilan program SKM.',
    '',
    `Nama Penuh: ${data.nama}`,
    `No. Telefon: ${data.telefon}`,
    `E-mel: ${data.email}`,
  ];

  if (data.program) {
    lines.push(`Program Pilihan: ${data.program}`);
  }

  lines.push('', 'Saya berminat untuk mengetahui syarat kemasukan, Pinjaman PTPK dan Elaun Sara Hidup.');
  return lines.join('\n');
}

export function buildWhatsAppUrl(data: InquiryPayload): string {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${text}`;
}

export async function submitInquiryToGoogleSheet(
  data: InquiryPayload
): Promise<{ dispatched: boolean }> {
  if (!isGoogleScriptConfigured()) {
    return { dispatched: false };
  }

  const sumber = data.program
    ? `${LEAD_SOURCE} (${data.program})`
    : LEAD_SOURCE;

  const params = new URLSearchParams();
  params.append('nama', data.nama.trim());
  params.append('telefon', data.telefon.trim());
  params.append('email', data.email.trim());
  params.append('sumber', sumber);

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: params.toString(),
  });

  return { dispatched: true };
}
