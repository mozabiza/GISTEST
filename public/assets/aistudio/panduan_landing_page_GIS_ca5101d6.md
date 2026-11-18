# Landing Page Pengambilan SKM — Global Institute of Studies

## Perubahan
- Borang pertanyaan mengumpul nama penuh, nombor telefon dan e-mel.
- Checkbox persetujuan penggunaan maklumat disertakan.
- WhatsApp dibuka dengan mesej yang telah diisi kepada **018-241 9234**. Pengguna masih perlu menekan butang **Hantar** dalam WhatsApp.
- Bahagian pembiayaan dikemas kini kepada **Pinjaman PTPK** dan **Elaun Sara Hidup** sahaja.
- Senarai enam program SKM sedia ada dikekalkan.

## Sambungan Google Sheets (`mohamadzaim20@gmail.com`)

Alamat e-mel sahaja tidak memberi laman web akses kepada Google Sheet. Pemilik akaun perlu mengaktifkan sambungan ini.

### 1. Cipta helaian
1. Log masuk ke Google menggunakan `mohamadzaim20@gmail.com`.
2. Cipta Google Sheet, contohnya `Pertanyaan Pengambilan SKM GIS`.
3. Namakan tab pertama `Leads`.
4. Baris tajuk: `Tarikh & Masa | Nama | Telefon | E-mel | Sumber`.

### 2. Tambah Google Apps Script
Dalam Google Sheet, pilih **Extensions → Apps Script**, kemudian tampal:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  if (!sheet) throw new Error('Tab Leads tidak ditemui.');
  const p = e && e.parameter ? e.parameter : {};
  const nama = (p.nama || '').trim();
  const telefon = (p.telefon || '').trim();
  const email = (p.email || '').trim();
  const sumber = (p.sumber || 'Landing Page GIS').trim();
  if (!nama || !telefon || !email) throw new Error('Maklumat wajib tidak lengkap.');
  sheet.appendRow([new Date(), nama, telefon, email, sumber]);
  return ContentService.createTextOutput(JSON.stringify({status:'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3. Terbitkan sebagai Web App
1. Klik **Deploy → New deployment** dan pilih **Web app**.
2. Pilih **Execute as: Me**.
3. Tetapkan akses mengikut polisi organisasi. Akses `Anyone` membolehkan hantaran awam; lindungi helaian dan pantau rekod.
4. Klik **Deploy**, lengkapkan kebenaran Google dan salin URL yang berakhir dengan `/exec`.

### 4. Masukkan URL ke laman web
Dalam fail `landing_page_GIS_borang_pengambilan.html`, cari:

```javascript
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
```

Gantikan teks contoh dengan URL `/exec` sebenar daripada Apps Script. Simpan dan terbitkan semula laman web.

## Ujian wajib
- Hantar rekod ujian dan pastikan ia muncul dalam tab `Leads`.
- Sahkan WhatsApp membuka nombor `0182419234` dengan nama, telefon dan e-mel.
- Pengguna perlu menekan butang Hantar di WhatsApp.
- Uji di telefon dan komputer.

**Nota teknikal:** Permintaan ke Apps Script menggunakan `no-cors`, jadi pelayar tidak dapat membaca respons terperinci. Kejayaan simpanan mesti disahkan dengan menyemak Google Sheet. Jangan anggap rekod berjaya disimpan sebelum ujian dibuat.

## Privasi
Terangkan tujuan pengumpulan data, pihak yang boleh mengakses, tempoh simpanan dan cara meminta pembetulan atau pemadaman. Hadkan akses Google Sheet kepada pegawai yang diberi kuasa dan patuhi undang-undang perlindungan data peribadi yang terpakai di Malaysia.

## Fail
- HTML: `landing_page_GIS_borang_pengambilan.html`
- Markdown: panduan ini
- WhatsApp GIS: **018-241 9234**
- Akaun pemilik Google Sheet: **mohamadzaim20@gmail.com**
