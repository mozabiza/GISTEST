export type ProgramCluster = 'Semua' | 'Pengurusan & IT' | 'Hospitaliti & Pendidikan' | 'Teknikal';

export interface SkmProgram {
  id: string;
  index: string;
  title: string;
  nossCode: string;
  level: string;
  duration: string;
  cluster: Exclude<ProgramCluster, 'Semua'>;
  summary: string;
  competencies: string[];
  careerPaths: string;
}

export const SKM_PROGRAMS: SkmProgram[] = [
  {
    id: 'pengurusan-pejabat',
    index: '01',
    title: 'Pengurusan Pejabat & Pentadbiran',
    nossCode: 'FB-024-2:2012 · FB-024-3:2012',
    level: 'SKM Tahap 2 & 3',
    duration: '12–15 Bulan',
    cluster: 'Pengurusan & IT',
    summary:
      'Latihan menyeluruh dalam operasi pentadbiran korporat, pengurusan dokumen digital, penyelarasan mesyuarat serta komunikasi profesional pejabat.',
    competencies: [
      'Pentadbiran rekod, fail dan penyediaan laporan pengurusan',
      'Pengendalian perisian pejabat, penjadualan dan urusan kaunter korporat',
      'Penyeliaan operasi harian pejabat dan sokongan sumber manusia',
    ],
    careerPaths: 'Pembantu Tadbir, Kerani Kanan Operasi, Penyelaras Pejabat, Setiausaha Jabatan',
  },
  {
    id: 'sistem-komputer',
    index: '02',
    title: 'Operasi Sistem Komputer & Rangkaian',
    nossCode: 'IT-020-3:2013',
    level: 'SKM Tahap 3',
    duration: '15 Bulan',
    cluster: 'Pengurusan & IT',
    summary:
      'Fokus praktikal terhadap pemasangan perkakasan, konfigurasi sistem operasi pelayan, keselamatan asas rangkaian serta penyelenggaraan infrastruktur IT.',
    competencies: [
      'Pemasangan, diagnosis kerosakan dan naik taraf perkakasan komputer',
      'Konfigurasi rangkaian LAN/WLAN, penghala dan perkongsian pelayan',
      'Sokongan teknikal meja bantuan dan keselamatan sistem organisasi',
    ],
    careerPaths: 'Juruteknik Sistem Komputer, Pegawai Sokongan IT, Pentadbir Rangkaian Junior',
  },
  {
    id: 'perakaunan-kewangan',
    index: '03',
    title: 'Perakaunan & Pengurusan Kewangan',
    nossCode: 'FB-100-3:2012',
    level: 'SKM Tahap 3',
    duration: '15 Bulan',
    cluster: 'Pengurusan & IT',
    summary:
      'Kemahiran penyediaan lejar am, akaun belum terima dan belum bayar, penyata kewangan bulanan serta penggunaan perisian perakaunan berkomputer.',
    competencies: [
      'Pengurusan akaun lejar, penyelarasan bank dan kawalan tunai runcit',
      'Penyediaan penyata untung rugi, kunci kira-kira dan rekod cukai asas',
      'Pengoperasian sistem perakaunan berkomputer untuk perusahaan kecil dan korporat',
    ],
    careerPaths: 'Pembantu Akaun, Kerani Kewangan, Pegawai Gaji & Lejar, Eksekutif Akaun Junior',
  },
  {
    id: 'penyediaan-makanan',
    index: '04',
    title: 'Penyediaan & Pembuatan Makanan',
    nossCode: 'HT-012-2:2012 · HT-012-3:2012',
    level: 'SKM Tahap 2 & 3',
    duration: '12–18 Bulan',
    cluster: 'Hospitaliti & Pendidikan',
    summary:
      'Latihan dapur komersial merangkumi teknik masakan tempatan dan antarabangsa, piawaian kebersihan makanan HACCP serta pengurusan kos dapur.',
    competencies: [
      'Teknik penyediaan bahan, pemotongan dan kaedah masakan komersial',
      'Pematuhan keselamatan makanan, sanitasi dapur dan kawalan kualiti hidangan',
      'Perancangan menu, pengiraan kos resepi dan penyeliaan operasi dapur',
    ],
    careerPaths: 'Tukang Masak Komersial, Demi Chef, Penyelia Dapur Hotel & Katering',
  },
  {
    id: 'pendidikan-awal-kanak-kanak',
    index: '05',
    title: 'Pendidikan & Asuhan Awal Kanak-Kanak',
    nossCode: 'T982-001-3:2017',
    level: 'SKM Tahap 3',
    duration: '15 Bulan',
    cluster: 'Hospitaliti & Pendidikan',
    summary:
      'Persediaan profesional untuk mendidik, mengasuh dan merancang aktiviti perkembangan holistik kanak-kanak di taska dan tadika berdaftar.',
    competencies: [
      'Perancangan aktiviti pembelajaran berasaskan bermain dan perkembangan kognitif',
      'Penjagaan keselamatan, pemakanan seimbang dan kesihatan kanak-kanak',
      'Pengurusan persekitaran taska dan komunikasi berkesan bersama ibu bapa',
    ],
    careerPaths: 'Pendidik Awal Kanak-Kanak, Pengasuh Taska Bertauliah, Penyelia Pusat Asuhan',
  },
  {
    id: 'pemasangan-elektrik',
    index: '06',
    title: 'Pemasangan & Penyelenggaraan Elektrik',
    nossCode: 'EE-320-2:2012 · EE-320-3:2012',
    level: 'SKM Tahap 2 & 3',
    duration: '12–18 Bulan',
    cluster: 'Teknikal',
    summary:
      'Latihan bengkel elektrik satu fasa dan tiga fasa termasuk pendawaian bangunan, pengujian litar, penyelenggaraan motor dan keselamatan voltan rendah.',
    competencies: [
      'Pendawaian elektrik satu fasa dan tiga fasa mengikut piawaian keselamatan',
      'Pemasangan papan agihan, sistem pembumian dan pengujian rintangan penebatan',
      'Penyelenggaraan mesin elektrik asas, kawalan motor dan pengesanan kerosakan',
    ],
    careerPaths: 'Juruteknik Elektrik, Pendawai Elektrik Industri, Juruteknik Penyelenggaraan Bangunan',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'apa-itu-skm',
    question: 'Apakah pengiktirafan Sijil Kemahiran Malaysia (SKM)?',
    answer:
      'Sijil Kemahiran Malaysia (SKM) adalah kelayakan rasmi di bawah Jabatan Pembangunan Kemahiran (JPK), Kementerian Sumber Manusia. Kurikulum memberi penekanan kepada latihan amali berteraskan industri bagi mempersiapkan graduan memasuki pasaran kerja atau menyambung pengajian ke tahap lebih tinggi.',
  },
  {
    id: 'siapa-layak-ptpk',
    question: 'Siapakah yang layak memohon Pinjaman PTPK dan Elaun Sara Hidup?',
    answer:
      'Calon warganegara Malaysia berumur 16 hingga 35 tahun yang memenuhi syarat kemasukan program SKM layak dipertimbangkan untuk Pinjaman Latihan Kemahiran PTPK beserta Elaun Sara Hidup bulanan tertakluk kepada kelulusan pihak Perbadanan Tabung Pembangunan Kemahiran (PTPK).',
  },
  {
    id: 'proses-whatsapp',
    question: 'Mengapa WhatsApp dibuka selepas saya menghantar borang pertanyaan?',
    answer:
      'Borang ini menghantar maklumat pertanyaan anda terus ke rekod pengambilan kami dan menyediakan mesej WhatsApp rasmi kepada pegawai pengambilan di talian 018-241 9234. Anda hanya perlu menekan butang Hantar di dalam aplikasi WhatsApp untuk memulakan semakan kelayakan dengan segera.',
  },
  {
    id: 'perlindungan-data',
    question: 'Bagaimana maklumat peribadi saya dilindungi selepas penghantaran?',
    answer:
      'Nama, nombor telefon dan e-mel anda digunakan semata-mata untuk tujuan penyelarasan pertanyaan pengambilan SKM dan bantuan permohonan pembiayaan oleh pegawai diberi kuasa di Global Institute of Studies selaras dengan prinsip Akta Perlindungan Data Peribadi 2010 (PDPA).',
  },
];
