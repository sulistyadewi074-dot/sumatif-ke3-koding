import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian & Alur Kerja Sederhana Kecerdasan Artifisial (AI)',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram alur kerja kecerdasan artifisial berikut ini!\n\nKecerdasan Artifisial (Artificial Intelligence atau AI) pada dasarnya bekerja dengan memproses data masukan melalui sebuah model yang telah dilatih untuk menghasilkan keputusan atau prediksi.\n\nBerdasarkan diagram tersebut, pengertian paling tepat dari Kecerdasan Artifisial (AI) secara sederhana adalah...',
    imageSvg: `<svg viewBox="0 0 520 170" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradInput" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#1d4ed8" />
        </linearGradient>
        <linearGradient id="gradModel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" />
          <stop offset="100%" stop-color="#6d28d9" />
        </linearGradient>
        <linearGradient id="gradOutput" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
      </defs>
      <rect width="520" height="170" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      
      <!-- Kotak 1: Input Data -->
      <rect x="25" y="35" width="130" height="100" rx="10" fill="url(#gradInput)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
      <circle cx="90" cy="65" r="16" fill="rgba(255,255,255,0.2)"/>
      <text x="90" y="70" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">📥</text>
      <text x="90" y="98" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">1. INPUT DATA</text>
      <text x="90" y="115" font-size="9" fill="#e0e7ff" text-anchor="middle">(Teks, Gambar, Suara)</text>

      <!-- Panah 1 -->
      <path d="M 165 85 L 185 85" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      <polygon points="190,85 182,80 182,90" fill="#64748b"/>

      <!-- Kotak 2: Model AI & Pola -->
      <rect x="195" y="35" width="130" height="100" rx="10" fill="url(#gradModel)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
      <circle cx="260" cy="65" r="16" fill="rgba(255,255,255,0.2)"/>
      <text x="260" y="70" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">🧠</text>
      <text x="260" y="98" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">2. PROSES MODEL AI</text>
      <text x="260" y="115" font-size="9" fill="#f3e8ff" text-anchor="middle">(Kenali Pola & Latihan)</text>

      <!-- Panah 2 -->
      <path d="M 335 85 L 355 85" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      <polygon points="360,85 352,80 352,90" fill="#64748b"/>

      <!-- Kotak 3: Output -->
      <rect x="365" y="35" width="130" height="100" rx="10" fill="url(#gradOutput)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))"/>
      <circle cx="430" cy="65" r="16" fill="rgba(255,255,255,0.2)"/>
      <text x="430" y="70" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">🎯</text>
      <text x="430" y="98" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">3. OUTPUT PREDIKSI</text>
      <text x="430" y="115" font-size="9" fill="#d1fae5" text-anchor="middle">(Jawaban & Keputusan)</text>

      <!-- Label Top Banner -->
      <rect x="160" y="10" width="200" height="20" rx="6" fill="#ede9fe" stroke="#c4b5fd" stroke-width="1"/>
      <text x="260" y="24" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">Siklus Kerja Sistem AI Sederhana</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Kemampuan sistem komputer atau mesin untuk meniru kecerdasan manusia dalam belajar dari data, mengenali pola, dan mengambil keputusan' },
      { id: 'B', text: 'Komputer yang hanya bisa menyala jika dihubungkan dengan kabel jaringan internet berkecepatan tinggi' },
      { id: 'C', text: 'Robot dari besi yang memiliki perasaan, emosi, dan kesadaran hidup seperti manusia sejati' },
      { id: 'D', text: 'Mesin fotokopi otomatis yang menduplikasi lembar kertas ujian tanpa perlu listrik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kecerdasan Artifisial (AI) adalah bidang ilmu komputer yang bertujuan membuat perangkat komputer atau program cerdas yang mampu meniru cara berpikir dan belajar manusia, seperti mengenali pola data, memecahkan masalah, dan membuat keputusan.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Cara Kerja AI - Peran Data Latih (Training Dataset)',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar simulasi komputer yang sedang dilatih mengenali hewan berikut!\n\nSebuah program komputer diberi ribuan gambar kucing dan ribuan gambar anjing yang telah diberi label nama. Setelah melihat pola telinga, hidung, dan kumis dari ribuan gambar tersebut, komputer akhirnya dapat menebak foto hewan baru yang belum pernah dilihat sebelumnya.\n\nKumpulan ribuan contoh gambar yang digunakan untuk melatih komputer tersebut dinamakan...',
    imageSvg: `<svg viewBox="0 0 500 170" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="170" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Kolom Foto Kucing -->
      <rect x="25" y="25" width="135" height="120" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="92" y="48" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">1.000 Foto Kucing 🐱</text>
      <rect x="40" y="58" width="45" height="40" rx="4" fill="#dbeafe"/>
      <rect x="95" y="58" width="45" height="40" rx="4" fill="#dbeafe"/>
      <rect x="40" y="102" width="45" height="35" rx="4" fill="#dbeafe"/>
      <rect x="95" y="102" width="45" height="35" rx="4" fill="#dbeafe"/>
      <text x="92" y="85" font-size="18" text-anchor="middle">🐾</text>

      <!-- Tanda Tambah -->
      <text x="175" y="90" font-size="20" font-weight="bold" fill="#64748b" text-anchor="middle">+</text>

      <!-- Kolom Foto Anjing -->
      <rect x="195" y="25" width="135" height="120" rx="8" fill="#fef3c7" stroke="#fde68a" stroke-width="1.5"/>
      <text x="262" y="48" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">1.000 Foto Anjing 🐶</text>
      <rect x="210" y="58" width="45" height="40" rx="4" fill="#fef9c3"/>
      <rect x="265" y="58" width="45" height="40" rx="4" fill="#fef9c3"/>
      <rect x="210" y="102" width="45" height="35" rx="4" fill="#fef9c3"/>
      <rect x="265" y="102" width="45" height="35" rx="4" fill="#fef9c3"/>
      <text x="262" y="85" font-size="18" text-anchor="middle">🦴</text>

      <!-- Panah ke Model Komputer -->
      <path d="M 340 85 L 365 85" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
      <polygon points="370,85 362,80 362,90" fill="#3b82f6"/>

      <!-- Layar Komputer AI Cerdas -->
      <rect x="375" y="25" width="105" height="120" rx="8" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
      <rect x="385" y="35" width="85" height="75" rx="4" fill="#0f172a"/>
      <text x="427" y="60" font-size="10" fill="#38bdf8" text-anchor="middle" font-weight="bold">PELATIHAN AI</text>
      <text x="427" y="78" font-size="8" fill="#94a3b8" text-anchor="middle">Deteksi Pola:</text>
      <text x="427" y="93" font-size="9" fill="#4ade80" text-anchor="middle" font-weight="bold">"Ini Kucing! (98%)"</text>
      <rect x="417" y="118" width="20" height="20" fill="#334155"/>
      <rect x="402" y="138" width="50" height="4" rx="2" fill="#475569"/>
    </svg>`,
    options: [
      { id: 'A', text: 'Data pelatihan (training dataset)' },
      { id: 'B', text: 'Perangkat keras monitor (hardware)' },
      { id: 'C', text: 'Kabel jaringan serat optik' },
      { id: 'D', text: 'Tombol keyboard pintasan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Data pelatihan (training dataset) adalah kumpulan data (seperti gambar, rekaman audio, atau teks) yang dimasukkan ke dalam algoritma AI agar komputer dapat belajar mengenali pola dan ciri-ciri dari setiap objek.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Perbedaan Komputer Tradisional vs Kecerdasan Artifisial',
    difficulty: 'Sedang',
    text: 'Perhatikan perbandingan dua cara kerja komputasi berikut!\n\n1. Program Konvensional: Manusia menulis aturan kode baris per baris secara kaku. Jika ada situasi baru yang tidak ditulis pembuat kode, komputer akan bingung dan gagal.\n2. Program Berbasis AI: Komputer diberikan banyak contoh data, lalu komputer mempelajari sendiri rumus dan polanya.\n\nPerbedaan mendasar yang membuat AI istimewa dibandingkan program komputer biasa adalah...',
    imageSvg: `<svg viewBox="0 0 520 160" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="520" height="160" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Sisi Kiri: Komputer Konvensional -->
      <rect x="25" y="20" width="220" height="120" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="25" y="20" width="220" height="28" rx="8" fill="#f1f5f9"/>
      <text x="135" y="38" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Program Konvensional</text>
      <text x="40" y="68" font-size="10" fill="#334155">1. Terima Aturan Manual (If/Else)</text>
      <text x="40" y="86" font-size="10" fill="#334155">2. Ikuti instruksi tanpa bisa belajar</text>
      <text x="40" y="104" font-size="10" fill="#334155">3. Tidak bisa mengenali contoh baru</text>
      <text x="40" y="125" font-size="9" font-weight="bold" fill="#dc2626">⚙️ Aturan kaku buatan manusia</text>

      <!-- Sisi Kanan: Sistem AI -->
      <rect x="275" y="20" width="220" height="120" rx="10" fill="#ffffff" stroke="#6366f1" stroke-width="2"/>
      <rect x="275" y="20" width="220" height="28" rx="8" fill="#e0e7ff"/>
      <text x="385" y="38" font-size="11" font-weight="bold" fill="#4338ca" text-anchor="middle">Sistem AI (Machine Learning)</text>
      <text x="290" y="68" font-size="10" fill="#334155">1. Diberi data contoh dalam jumlah besar</text>
      <text x="290" y="86" font-size="10" fill="#334155">2. Belajar menemukan pola sendiri</text>
      <text x="290" y="104" font-size="10" fill="#334155">3. Mampu memprediksi data baru</text>
      <text x="290" y="125" font-size="9" font-weight="bold" fill="#16a34a">💡 Mampu belajar mandiri dari data</text>
    </svg>`,
    options: [
      { id: 'A', text: 'AI memiliki kemampuan untuk belajar dari contoh data dan memperbaiki ketepatannya tanpa harus diprogram ulang aturan per aturannya' },
      { id: 'B', text: 'AI tidak membutuhkan aliran daya listrik sama sekali untuk bekerja' },
      { id: 'C', text: 'Program komputer konvensional selalu lebih pintar daripada AI dalam mengenali wajah manusia' },
      { id: 'D', text: 'AI hanya bisa memproses teks berbahasa Inggris dan tidak bisa memproses suara atau gambar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Perbedaan kunci AI dibanding program komputer biasa adalah kemampuan belajar (machine learning) secara otomatis dari pola data, sehingga dapat mengenali situasi atau data baru tanpa harus ditulis aturan kodenya satu per satu oleh manusia.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Cara Kerja AI - Pengenalan Pola Suara (Voice Recognition)',
    difficulty: 'Sedang',
    text: 'Saat kamu berkata kepada asisten virtual di smartphone: "Halo, ingatkan aku belajar Koding jam 4 sore", smartphone tersebut dapat memahami kata-katamu dan langsung mengatur alarm jadwal belajar.\n\nTeknologi kecerdasan artifisial yang bertugas mengubah gelombang suara manusia menjadi teks digital dan memahami maksud perintah tersebut adalah...',
    imageSvg: `<svg viewBox="0 0 500 150" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="150" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Ikon Manusia Berbicara -->
      <circle cx="65" cy="75" r="28" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="65" y="82" font-size="24" text-anchor="middle">🗣️</text>
      <text x="65" y="122" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">Suara Siswa</text>

      <!-- Gelombang Suara -->
      <path d="M 105 75 Q 115 50 125 75 T 145 75 T 165 75" fill="none" stroke="#3b82f6" stroke-width="3"/>
      <path d="M 105 75 Q 115 60 125 75 T 145 75 T 165 75" fill="none" stroke="#93c5fd" stroke-width="2"/>

      <!-- Kotak Proses AI -->
      <rect x="180" y="30" width="160" height="90" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="260" y="52" font-size="11" font-weight="bold" fill="#6d28d9" text-anchor="middle">Model Speech-to-Text</text>
      <rect x="195" y="62" width="130" height="24" rx="4" fill="#ede9fe"/>
      <text x="260" y="78" font-size="9" fill="#4c1d95" text-anchor="middle">Ekstraksi Pola Frekuensi</text>
      <text x="260" y="105" font-size="8" fill="#6b7280" text-anchor="middle">Cocokkan Fonem Bahasa</text>

      <!-- Panah ke Smartphone -->
      <path d="M 350 75 L 380 75" stroke="#8b5cf6" stroke-width="3" stroke-linecap="round"/>
      <polygon points="385,75 377,70 377,80" fill="#8b5cf6"/>

      <!-- Smartphone Aksi -->
      <rect x="395" y="25" width="80" height="100" rx="10" fill="#1e293b"/>
      <rect x="403" y="35" width="64" height="75" rx="4" fill="#0f172a"/>
      <text x="435" y="55" font-size="14" text-anchor="middle">⏰</text>
      <text x="435" y="72" font-size="8" fill="#38bdf8" text-anchor="middle" font-weight="bold">Alarm Diatur!</text>
      <text x="435" y="85" font-size="7" fill="#94a3b8" text-anchor="middle">16:00 - Koding</text>
      <circle cx="435" cy="118" r="3" fill="#64748b"/>
    </svg>`,
    options: [
      { id: 'A', text: 'Pengenalan suara (Speech Recognition) dan Pemrosesan Bahasa Alami (NLP)' },
      { id: 'B', text: 'Antivirus komputer pembersih file sampah' },
      { id: 'C', text: 'Perangkat pendingin kipas prosesor komputer' },
      { id: 'D', text: 'Pengatur kecerahan layar monitor otomatis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Asisten suara memanfaatkan teknologi Speech Recognition (pengenalan suara) untuk mengubah gelombang suara menjadi teks dan NLP (Natural Language Processing) untuk memahami makna perintah manusia.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Dampak Positif Kecerdasan Artifisial dalam Pembelajaran',
    difficulty: 'Sedang',
    text: 'Perhatikan infografis pemanfaatan AI dalam dunia pendidikan berikut!\n\nSaat ini banyak aplikasi bimbingan belajar berbasis AI yang dapat menganalisis materi mana yang belum dipahami siswa, lalu memberikan latihan soal khusus sesuai kecepatan belajar siswa tersebut secara personal.\n\nHal tersebut membuktikan dampak positif utama kecerdasan artifisial bagi siswa sekolah dasar, yaitu...',
    imageSvg: `<svg viewBox="0 0 500 150" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="150" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Kartu 1: Belajar Personal -->
      <rect x="25" y="25" width="135" height="105" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5"/>
      <circle cx="92" cy="52" r="16" fill="#10b981"/>
      <text x="92" y="57" font-size="14" fill="#ffffff" text-anchor="middle">🎯</text>
      <text x="92" y="80" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Belajar Personalisasi</text>
      <text x="92" y="98" font-size="8" fill="#047857" text-anchor="middle">Menyesuaikan dengan</text>
      <text x="92" y="110" font-size="8" fill="#047857" text-anchor="middle">kemampuan tiap siswa</text>

      <!-- Kartu 2: Terjemah Bahasa -->
      <rect x="182" y="25" width="135" height="105" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <circle cx="249" cy="52" r="16" fill="#3b82f6"/>
      <text x="249" y="57" font-size="14" fill="#ffffff" text-anchor="middle">🌐</text>
      <text x="249" y="80" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Penerjemah Cepat</text>
      <text x="249" y="98" font-size="8" fill="#1d4ed8" text-anchor="middle">Memahami bahasa asing</text>
      <text x="249" y="110" font-size="8" fill="#1d4ed8" text-anchor="middle">dalam hitungan detik</text>

      <!-- Kartu 3: Umpan Balik Cepat -->
      <rect x="340" y="25" width="135" height="105" rx="8" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5"/>
      <circle cx="407" cy="52" r="16" fill="#8b5cf6"/>
      <text x="407" y="57" font-size="14" fill="#ffffff" text-anchor="middle">⚡</text>
      <text x="407" y="80" font-size="10" font-weight="bold" fill="#5b21b6" text-anchor="middle">Umpan Balik Instan</text>
      <text x="407" y="98" font-size="8" fill="#6d28d9" text-anchor="middle">Koreksi kesalahan latihan</text>
      <text x="407" y="110" font-size="8" fill="#6d28d9" text-anchor="middle">secara langsung & ramah</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Membantu proses belajar mandiri siswa dengan materi latihan yang sesuai kebutuhan tanpa menggantikan peran guru' },
      { id: 'B', text: 'Membuat siswa tidak perlu membaca buku pelajaran lagi sama sekali selamanya' },
      { id: 'C', text: 'Membuat siswa tidak perlu bersekolah lagi karena semua digantikan oleh robot komputer' },
      { id: 'D', text: 'Menghapuskan kebutuhan manusia untuk belajar berhitung dan membaca' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dampak positif AI dalam pembelajaran adalah menyediakan media belajar adaptif (tutor pribadi) yang membantu siswa memahami materi sesuai kecepatannya, memberikan umpan balik cepat, serta memperkaya wawasan belajar.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Dampak Negatif AI - Manipulasi Konten (Deepfake & Hoaks)',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi bahaya rekayasa video digital berikut!\n\nSaat ini ada teknologi AI yang mampu meniru wajah dan suara seseorang dalam video sehingga orang tersebut terlihat seolah-olah mengatakan hal buruk yang sebenarnya tidak pernah ia ucapkan. Teknologi rekayasa video tiruan ini dinamakan "Deepfake".\n\nAlasan utama mengapa teknologi Deepfake tergolong dampak negatif dan berbahaya bagi masyarakat adalah...',
    imageSvg: `<svg viewBox="0 0 500 160" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="160" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Tokoh Asli -->
      <rect x="30" y="25" width="180" height="110" rx="10" fill="#ffffff" stroke="#22c55e" stroke-width="2"/>
      <circle cx="120" cy="65" r="24" fill="#dcfce7"/>
      <text x="120" y="73" font-size="20" text-anchor="middle">🧑</text>
      <text x="120" y="105" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Manusia Asli (Fakta)</text>
      <text x="120" y="122" font-size="9" fill="#166534" text-anchor="middle">"Mari kita hidup damai"</text>

      <!-- Simbol VS / Rekayasa AI -->
      <circle cx="250" cy="80" r="18" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="250" y="85" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">VS</text>

      <!-- Video Palsu Deepfake -->
      <rect x="290" y="25" width="180" height="110" rx="10" fill="#ffffff" stroke="#ef4444" stroke-width="2"/>
      <circle cx="380" cy="65" r="24" fill="#fee2e2"/>
      <text x="380" y="73" font-size="20" text-anchor="middle">🎭</text>
      <text x="380" y="105" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Video Palsu (Deepfake)</text>
      <text x="380" y="122" font-size="9" fill="#991b1b" text-anchor="middle">Fitnah / Hoaks Buatan AI</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Dapat disalahgunakan untuk menyebarkan berita bohong (hoaks), fitnah, dan menipu masyarakat' },
      { id: 'B', text: 'Membuat ukuran file video di komputer menjadi lebih hemat memori' },
      { id: 'C', text: 'Membuat rekaman kamera menjadi lebih jernih dan bebas buram' },
      { id: 'D', text: 'Mempercepat kecepatan sinyal Wi-Fi di rumah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Deepfake sangat berbahaya karena dapat digunakan oleh oknum tidak bertanggung jawab untuk menyebarkan fitnah, penipuan identitas, dan kabar bohong (hoaks) yang dapat merusak nama baik serta memicu pertikaian.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Tantangan Kecerdasan Artifisial - Masalah Bias Data',
    difficulty: 'Sukar',
    text: 'Sebuah sekolah membuat sistem AI pengenal profesi kesehatan. Namun saat diuji, ketika sistem melihat gambar dokter laki-laki langsung dijawab "Dokter", tetapi saat melihat gambar dokter perempuan dijawab "Bukan Dokter".\n\nSetelah diperiksa, ternyata pembuat sistem hanya melatih AI tersebut menggunakan 1.000 foto dokter laki-laki tanpa memasukkan satu pun foto dokter perempuan ke dalam data latihnya.\n\nFenomena ketidakadilan atau kecacatan kesimpulan pada AI akibat data latih yang tidak seimbang ini disebut...',
    imageSvg: `<svg viewBox="0 0 500 160" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="160" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Data Latih yang Berat Sebelah -->
      <rect x="25" y="25" width="210" height="110" rx="10" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>
      <text x="130" y="48" font-size="11" font-weight="bold" fill="#9f1239" text-anchor="middle">Data Latih Tidak Seimbang</text>
      <text x="130" y="70" font-size="9" fill="#be123c" text-anchor="middle">1.000 Foto Dokter Pria 👨‍⚕️</text>
      <text x="130" y="88" font-size="9" fill="#e11d48" text-anchor="middle">0 Foto Dokter Wanita 👩‍⚕️ (Hilang)</text>
      <text x="130" y="115" font-size="9" font-weight="bold" fill="#881337" text-anchor="middle">⚠️ Sampel Data Tidak Lengkap</text>

      <!-- Timbangan Miring (Simbol Bias) -->
      <path d="M 255 80 L 285 80" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
      <polygon points="290,80 282,75 282,85" fill="#f43f5e"/>

      <!-- Hasil AI yang Bias -->
      <rect x="300" y="25" width="175" height="110" rx="10" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
      <text x="387" y="48" font-size="11" font-weight="bold" fill="#fda4af" text-anchor="middle">Keputusan AI Cacat</text>
      <rect x="315" y="58" width="145" height="26" rx="4" fill="#334155"/>
      <text x="387" y="75" font-size="9" fill="#f43f5e" text-anchor="middle" font-weight="bold">Keputusan Memihak (Bias)</text>
      <text x="387" y="105" font-size="8" fill="#94a3b8" text-anchor="middle">AI meniru ketidakseimbangan</text>
      <text x="387" y="120" font-size="8" fill="#94a3b8" text-anchor="middle">dari data pelatihannya</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Bias Data (Data Bias / Ketidakseimbangan Data Pelatihan)' },
      { id: 'B', text: 'Penyusutan memori harddisk komputer' },
      { id: 'C', text: 'Koneksi jaringan internet terputus mendadak' },
      { id: 'D', text: 'Layar monitor terkena debu tebal' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bias Data terjadi ketika data yang digunakan untuk melatih AI tidak mewakili keberagaman nyata, sehingga AI menghasilkan kesimpulan yang tidak adil, salah, atau mendiskriminasi kelompok tertentu.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Keterbatasan AI - Fenomena Halusinasi AI (AI Hallucination)',
    difficulty: 'Sukar',
    text: 'Edo bertanya kepada program AI cerdas di komputer: "Siapakah pahlawan yang memimpin Perang Puputan Margarana di Bali?". Namun AI tersebut menjawab dengan sangat yakin: "Perang Margarana dipimpin oleh Kapten Jack Sparrow pada tahun 2050".\n\nFenomena ketika program AI memberikan jawaban palsu atau mengarang fakta yang terdengar sangat meyakinkan padahal salah disebut...',
    imageSvg: `<svg viewBox="0 0 500 160" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="160" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Pertanyaan Siswa -->
      <rect x="25" y="25" width="210" height="60" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="130" y="45" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Pertanyaan Siswa:</text>
      <text x="130" y="65" font-size="9" fill="#1e3a8a" text-anchor="middle">"Pahlawan Puputan Margarana?"</text>

      <!-- Jawaban Halusinasi AI -->
      <rect x="265" y="25" width="210" height="75" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
      <text x="370" y="45" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Jawaban Chatbot AI:</text>
      <text x="370" y="65" font-size="9" fill="#7f1d1d" text-anchor="middle">"Dipimpin Kapten Jack Sparrow"</text>
      <text x="370" y="82" font-size="8" fill="#dc2626" font-style="italic" text-anchor="middle">(Terdengar yakin, padahal ngawur!)</text>

      <!-- Kotak Solusi: Verifikasi Fakta -->
      <rect x="75" y="110" width="350" height="36" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="250" y="125" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">⚠️ Fenomena Halusinasi AI (AI Hallucination)</text>
      <text x="250" y="138" font-size="9" fill="#047857" text-anchor="middle">Solusi Wajib: Selalu cek fakta ke buku pelajaran atau tanya guru!</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Halusinasi AI (AI Hallucination)' },
      { id: 'B', text: 'Korsleting tombol keyboard' },
      { id: 'C', text: 'Efek layar berkedip pada laptop' },
      { id: 'D', text: 'Pencadangan file ke flashdisk' },
    ],
    correctAnswer: 'A',
    explanation:
      'Halusinasi AI adalah kondisi ketika model AI menghasilkan informasi yang keliru, fiktif, atau mengarang bebas namun menyampaikannya dengan nada bahasa yang terdengar sangat meyakinkan. Oleh karena itu, kita wajib selalu mengecek kebenaran jawaban AI ke buku atau guru.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Etika Dasar Penggunaan AI - Perlindungan Privasi Data Pribadi',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram rambu-rambu keamanan data digital berikut!\n\nSaat menggunakan aplikasi kecerdasan artifisial daring (seperti chatbot atau pembuat gambar AI), data masukan yang kita ketikkan dapat disimpan dan dipelajari oleh penyedia server.\n\nBerdasarkan etika keamanan privasi anak, manakah data yang SANGAT DILARANG untuk dimasukkan ke dalam aplikasi AI daring?',
    imageSvg: `<svg viewBox="0 0 500 160" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="160" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Boleh Dibagikan -->
      <rect x="25" y="25" width="215" height="110" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
      <circle cx="55" cy="50" r="14" fill="#22c55e"/>
      <text x="55" y="55" font-size="12" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="135" y="52" font-size="11" font-weight="bold" fill="#166534">Boleh Ditanyakan:</text>
      <text x="45" y="78" font-size="9" fill="#15803d">• Rumus matematika bangun ruang</text>
      <text x="45" y="96" font-size="9" fill="#15803d">• Sejarah candi Borobudur</text>
      <text x="45" y="114" font-size="9" fill="#15803d">• Kosakata bahasa Inggris</text>

      <!-- DILARANG Dibagikan (Privasi) -->
      <rect x="260" y="25" width="215" height="110" rx="10" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
      <circle cx="290" cy="50" r="14" fill="#ef4444"/>
      <text x="290" y="55" font-size="12" fill="#ffffff" text-anchor="middle">✕</text>
      <text x="370" y="52" font-size="11" font-weight="bold" fill="#991b1b">DILARANG Masuk AI:</text>
      <text x="280" y="78" font-size="9" fill="#b91c1c">• Nama lengkap &amp; alamat rumah</text>
      <text x="280" y="96" font-size="9" fill="#b91c1c">• Foto wajah pribadi &amp; keluarga</text>
      <text x="280" y="114" font-size="9" fill="#b91c1c">• Kata sandi &amp; nomor telepon</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Nama lengkap, alamat rumah, nomor telepon orang tua, foto identitas pribadi, dan kata sandi akun' },
      { id: 'B', text: 'Pertanyaan tentang rumus keliling lingkaran' },
      { id: 'C', text: 'Pencarian arti kata bahasa Inggris di kamus online' },
      { id: 'D', text: 'Permintaan ide resep masakan sayur sup' },
    ],
    correctAnswer: 'A',
    explanation:
      'Data pribadi yang sensitif seperti nama lengkap, nomor telepon, alamat rumah, foto keluarga, dan kata sandi tidak boleh diunggah ke platform AI karena berisiko disimpan di server luar dan disalahgunakan oleh pihak yang berniat jahat.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Etika Dasar Penggunaan AI - Kejujuran Akademik & Plagiarisme',
    difficulty: 'Sukar',
    text: 'Ibu Guru memberikan tugas mengarang cerita bertema "Cita-citaku". Di bawah ini ada dua cara siswa menggunakan bantuan AI:\n\n• Siswa A: Meminta AI menuliskan karangan utuh dari awal sampai akhir, lalu langsung menyalin-tempel (copy-paste) dan mengumpulkan ke guru seolah-olah itu karya buatannya sendiri.\n• Siswa B: Menggunakan AI untuk berdiskusi mencari ide ide pokok, lalu merangkai kalimat karangan sendiri dengan pemikirannya, serta jujur berkata kepada guru bahwa ia mendapat ide dari diskusi bersama AI.\n\nSikap yang benar dan mencerminkan etika integritas akademik adalah...',
    imageSvg: `<svg viewBox="0 0 500 150" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="150" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Kotak Siswa A -->
      <rect x="25" y="20" width="215" height="110" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
      <text x="132" y="42" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Siswa A: Plagiat Mencontek</text>
      <text x="40" y="65" font-size="9" fill="#7f1d1d">• Salin mentah-mentah karya AI</text>
      <text x="40" y="82" font-size="9" fill="#7f1d1d">• Tidak ada proses berpikir</text>
      <text x="40" y="100" font-size="9" fill="#7f1d1d">• Berbohong mengaku karya sendiri</text>
      <text x="132" y="120" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">❌ Tidak Beretika / Curang</text>

      <!-- Kotak Siswa B -->
      <rect x="260" y="20" width="215" height="110" rx="8" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5"/>
      <text x="367" y="42" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Siswa B: Penggunaan Bijak</text>
      <text x="275" y="65" font-size="9" fill="#14532d">• AI sebagai teman tukar ide</text>
      <text x="275" y="82" font-size="9" fill="#14532d">• Karangan dirangkai sendiri</text>
      <text x="275" y="100" font-size="9" fill="#14532d">• Jujur dan bertanggung jawab</text>
      <text x="367" y="120" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">✓ Beretika &amp; Berintegritas</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Hanya sikap Siswa B yang beretika, karena menggunakan AI sebagai alat bantu pemantik ide tanpa mengabaikan usaha berpikir mandiri dan jujur kepada guru' },
      { id: 'B', text: 'Sikap Siswa A lebih baik karena menyelesaikan tugas jauh lebih cepat dan tidak membuang waktu' },
      { id: 'C', text: 'Kedua siswa sama-sama salah karena siswa sekolah sama sekali tidak boleh menyentuh komputer' },
      { id: 'D', text: 'Siswa A berhak mendapat nilai tertinggi karena teks buatan AI pasti sempurna tanpa salah ketik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Etika kejujuran akademik melarang kita menyalin mentah-mentah (plagiasi) teks buatan AI dan mengakuinya sebagai karya sendiri. Penggunaan AI yang tepat adalah sebagai mitra bertukar ide, sementara karangan akhir tetap dirangkai oleh pikiran siswa sendiri.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Menjawab lebih dari 1 opsi benar. Setiap butir bernilai skor 1
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Komponen Utama Sistem Kecerdasan Artifisial',
    difficulty: 'Sedang',
    text: 'Pilihlah DUA atau TIGA komponen utama yang mutlak dibutuhkan agar sebuah sistem kecerdasan artifisial dapat dilatih dan bekerja mengenali pola dengan baik! (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Data pelatihan (dataset) dalam jumlah cukup dan berkualitas baik' },
      { id: 'B', text: 'Algoritma model pembelajaran mesin (machine learning) untuk menemukan pola' },
      { id: 'C', text: 'Daya komputasi prosesor komputer untuk melakukan perhitungan matematis' },
      { id: 'D', text: 'Baterai jam dinding konvensional yang dipasang di bagian luar casing komputer' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Tiga pilar utama sistem AI adalah: 1) Data latih berkualitas, 2) Algoritma pembelajaran mesin, dan 3) Perangkat pemrosesan komputasi untuk menjalankan perhitungan model.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Contoh Penerapan Nyata Kecerdasan Artifisial Sehari-hari',
    difficulty: 'Sedang',
    text: 'Manakah dari layanan digital berikut yang menggunakan kecerdasan artifisial dalam operasinya untuk memberikan dampak positif bagi manusia? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Aplikasi peta navigasi (GPS) yang memprediksi kemacetan jalan dan rute tercepat secara waktu nyata' },
      { id: 'B', text: 'Kamera ponsel pintar yang otomatis mengenali wajah dan mengatur fokus cahaya foto' },
      { id: 'C', text: 'Penyaring pesan sampah (Spam Filter) di kotak masuk email yang mendeteksi pesan penipuan' },
      { id: 'D', text: 'Kapur tulis putih yang digunakan guru menulis di papan tulis kelas' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Navigasi rute tercepat, deteksi wajah kamera smartphone, dan filter spam email adalah contoh nyata penerapan kecerdasan artifisial yang telah membantu rutinitas harian manusia.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Dampak Negatif & Risiko Penggunaan AI Tanpa Kendali',
    difficulty: 'Sedang',
    text: 'Jika kecerdasan artifisial digunakan secara berlebihan tanpa etika dan sikap bijak, dampak negatif apa sajakah yang berpotensi menimpa anak sekolah? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Menurunnya kemampuan berpikir kritis dan daya juang belajar karena terlalu manja mengandalkan jawaban instan' },
      { id: 'B', text: 'Mudah tertipu oleh kabar bohong (hoaks) dan video manipulasi palsu (deepfake) yang tampak nyata' },
      { id: 'C', text: 'Risiko kebocoran privasi data pribadi apabila sembarangan mengunggah foto atau rahasia ke platform AI' },
      { id: 'D', text: 'Mata pelajaran matematika otomatis dihapus dari kurikulum seluruh sekolah di dunia' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Ketergantungan kognitif (malas berpikir kritis), kerentanan tertipu deepfake/hoaks, dan pelanggaran privasi adalah risiko nyata jika AI digunakan tanpa etika dan batas kontrol diri yang sehat.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Etika Mengerjakan Tugas Sekolah Berbantuan AI',
    difficulty: 'Sukar',
    text: 'Sikap beretika dan bertanggung jawab apa sajakah yang wajib ditunjukkan seorang siswa ketika memanfaatkan kecerdasan artifisial dalam kegiatan belajar? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Selalu memeriksa ulang dan memverifikasi kebenaran jawaban AI dengan membaca buku cetak pegangan sekolah' },
      { id: 'B', text: 'Menyusun kembali jawaban dengan kata-kata dan pemahaman sendiri tanpa melakukan salin-tempel langsung' },
      { id: 'C', text: 'Secara jujur dan terbuka memberi tahu guru jika tugas tersebut dibantu pencarian idenya menggunakan AI' },
      { id: 'D', text: 'Menyembunyikan fakta penggunaan AI dan menantang guru berdebat saat tugasnya diteliti' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Etika belajar dengan AI meliputi verifikasi kebenaran fakta, menulis kembali dengan pemahaman sendiri, dan menjunjung kejujuran akademik dengan mencantumkan sumber pemantik ide.',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Langkah Bijak Verifikasi Fakta (Fact-Checking) Tanggapan AI',
    difficulty: 'Sukar',
    text: 'Mengingat sistem AI dapat mengalami "halusinasi" (memberi jawaban keliru dengan nada meyakinkan), langkah bijak apa yang dapat dilakukan siswa untuk menguji kebenaran tanggapan AI? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Mencari informasi pembanding di sumber rujukan terpercaya seperti buku pelajaran resmi, ensiklopedia, atau situs berita kredibel' },
      { id: 'B', text: 'Menanyakan dan mengonfirmasi kebenaran konsep kepada Bapak/Ibu Guru di sekolah' },
      { id: 'C', text: 'Memeriksa apakah data angka, nama tokoh, dan tahun peristiwa cocok dengan catatan sejarah resmi' },
      { id: 'D', text: 'Langsung mempercayai 100% apa pun yang dikatakan AI karena komputer tidak pernah membuat kesalahan' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Verifikasi fakta dilakukan dengan mencari sumber pembanding terpercaya, bertanya kepada guru, dan memeriksa kecocokan data tahun/nama tokoh resmi. Menganggap AI selalu 100% benar adalah anggapan yang keliru.',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI BENAR/SALAH ATAU SESUAI/TIDAK (5 BUTIR: NO. 16 - 20)
  // Menilai kebenaran setiap pernyataan dalam tabel. Skor @ 1 butir = 1
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Prinsip Kerja Kecerdasan Artifisial',
    difficulty: 'Sedang',
    text: 'Tentukan apakah setiap pernyataan mengenai cara kerja kecerdasan artifisial di bawah ini bernilai BENAR atau SALAH!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Kecerdasan Artifisial membutuhkan data contoh (dataset) dalam jumlah banyak agar komputernya bisa mengenali pola secara akurat.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Komputer yang memiliki AI sudah memiliki perasaan cinta, sedih, dan empati persis seperti seorang manusia.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Proses belajar komputer dari data untuk membuat prediksi masa depan dinamakan Machine Learning (Pembelajaran Mesin).',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Sistem AI dapat bekerja tanpa membutuhkan pemrograman atau algoritma logika sama sekali dari manusia.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 Benar. AI membutuhkan dataset untuk belajar dan prosesnya disebut Machine Learning. Pernyataan 2 Salah (AI tidak punya perasaan), dan Pernyataan 4 Salah (AI tetap dibangun di atas algoritma buatan manusia).',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Pemanfaatan Positif AI dalam Berbagai Bidang Kehidupan',
    difficulty: 'Sedang',
    text: 'Tentukan apakah contoh pemanfaatan teknologi kecerdasan artifisial di bawah ini SESUAI atau TIDAK SESUAI dalam memberikan dampak positif bagi manusia!',
    categoryType: 'sesuai_tidak',
    statements: [
      {
        id: 's1',
        text: 'Di bidang kesehatan, AI membantu dokter menganalisis foto rontgen paru-paru untuk mendeteksi penyakit lebih cepat dan tepat.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's2',
        text: 'Di bidang bahasa, AI menerjemahkan percakapan turis asing dengan masyarakat lokal secara langsung sehingga mempermudah komunikasi.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's3',
        text: 'Di bidang pertanian, kamera pemindai berbasis AI mendeteksi tanaman yang terserang hama agar pestisida disemprotkan secara hemat dan tepat sasaran.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's4',
        text: 'Di bidang pendidikan, AI dimanfaatkan siswa untuk mengerjakan seluruh soal ujian secara otomatis tanpa perlu belajar sama sekali.',
        correctAnswer: false,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
    ],
    explanation:
      'Pemanfaatan AI untuk diagnosis medis, terjemahan instan, dan pertanian presisi adalah dampak positif (Sesuai). Menggunakan AI untuk mencontek ujian adalah tindakan curang dan tidak etis (Tidak Sesuai).',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Dampak Negatif & Tantangan Era Kecerdasan Artifisial',
    difficulty: 'Sedang',
    text: 'Tentukan apakah setiap pernyataan tentang dampak negatif dan tantangan teknologi AI berikut bernilai BENAR atau SALAH!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Jika data yang dimasukkan untuk melatih AI keliru atau berat sebelah, maka hasil keputusan AI juga akan keliru (bias data).',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Teknologi Deepfake tidak berbahaya sama sekali karena semua pengguna internet sudah pasti bisa membedakan mana video asli dan video palsu.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Ketergantungan berlebihan pada AI dalam memecahkan soal dapat membuat daya ingat dan kemampuan bernalar kritis siswa menurun.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Chatbot AI tidak pernah membuat kesalahan informasi karena AI memiliki pengetahuan mutlak yang melampaui seluruh buku perpustakaan.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 Benar (prinsip "Garbage In, Garbage Out"). Pernyataan 2 Salah (Deepfake sangat sulit dibedakan orang awam). Pernyataan 3 Benar (ketergantungan menurunkan daya pikir). Pernyataan 4 Salah (AI sering mengalami halusinasi informasi).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Etika Privasi & Keamanan Data Digital Siswa',
    difficulty: 'Sukar',
    text: 'Tentukan apakah tindakan siswa di bawah ini SESUAI atau TIDAK SESUAI dengan etika perlindungan privasi data pribadi!',
    categoryType: 'sesuai_tidak',
    statements: [
      {
        id: 's1',
        text: 'Beni menanyakan kepada chatbot AI: "Tuliskan contoh pantun nasihat tentang rajin menabung untuk anak SD".',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's2',
        text: 'Siti mengunggah foto kartu identitas anak (KIA) dan nomor rekening bank milik orang tuanya ke situs AI untuk meminta hadiah saldo game.',
        correctAnswer: false,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's3',
        text: 'Made tidak pernah membagikan kata sandi akun email belajarnya kepada aplikasi chatbot asing di internet.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's4',
        text: 'Dayu mengunggah foto wajah teman sekelasnya ke aplikasi AI untuk diedit menjadi gambar yang mempermalukan temannya di grup obrolan.',
        correctAnswer: false,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
    ],
    explanation:
      'Tindakan Beni dan Made menjaga privasi dan keamanan (Sesuai). Tindakan Siti membahayakan privasi keluarga, dan tindakan Dayu merupakan cyberbullying yang melanggar hukum dan etika (Tidak Sesuai).',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Integritas Akademik & Hak Cipta Karya Berbantuan AI',
    difficulty: 'Sukar',
    text: 'Tentukan apakah pernyataan terkait integritas akademik dan etika hak cipta karya di bawah ini bernilai BENAR atau SALAH!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Menyalin tulisan karangan buatan AI secara utuh lalu mengakuinya sebagai karya karangan sendiri adalah perbuatan plagiarisme yang tidak jujur.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Siswa diperbolehkan menggunakan AI untuk mencari ide dasar atau merangkum bahan bacaan, asalkan hasil tugas akhir tetap ditulis dengan pemahaman bahasa sendiri.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Karena AI adalah mesin komputer, maka siswa tidak perlu bersikap santun dan boleh menggunakan kata-kata kasar/umpatan saat memberi perintah teks.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Menyebutkan sumber informasi pembanding yang ditemukan saat belajar dengan AI merupakan wujud penghargaan terhadap kejujuran akademik.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1, 2, dan 4 Benar. Pernyataan 3 Salah karena membiasakan diri berbicara kasar pada teknologi tetap dapat merusak adab dan karakter kesantunan siswa.',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN (5 BUTIR SOAL: NO. 21 - 25)
  // Menjodohkan premis kiri dengan pasangan jawaban kanan. Skor @ 1 butir = 1
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'Istilah Pokok dalam Dunia Kecerdasan Artifisial',
    difficulty: 'Mudah',
    text: 'Jodohkan istilah teknologi kecerdasan artifisial di kolom kiri dengan pengertian atau definisinya yang tepat di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Dataset (Data Latih)',
        match: 'Kumpulan data contoh (gambar, teks, angka) untuk melatih model AI',
      },
      {
        id: 'm2',
        premise: 'Machine Learning',
        match: 'Metode di mana komputer belajar menemukan pola dari data secara mandiri',
      },
      {
        id: 'm3',
        premise: 'Computer Vision',
        match: 'Kemampuan sistem komputer mengenali dan memahami isi gambar atau video',
      },
      {
        id: 'm4',
        premise: 'Algoritma',
        match: 'Urutan langkah-langkah logis dan sistematis untuk memecahkan masalah',
      },
    ],
    explanation:
      'Dataset adalah bahan ajar model AI, Machine Learning adalah proses belajar mandiri komputer dari pola data, Computer Vision adalah kemampuan melihat/mengenali gambar, dan Algoritma adalah urutan instruksi logis.',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Tahapan Alur Kerja AI pada Mobil Otonom (Self-Driving Car)',
    difficulty: 'Sedang',
    text: 'Jodohkan tahapan kerja sistem AI pada mobil pintar (tanpa sopir) di kolom kiri dengan aktivitas konkretnya di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Tahap 1: Input Sensor',
        match: 'Kamera dan sensor radar menangkap gambar jalan raya dan lampu lalu lintas',
      },
      {
        id: 'm2',
        premise: 'Tahap 2: Pengenalan Pola',
        match: 'Komputer mencocokkan bentuk lingkaran merah dengan pola rambu berhenti',
      },
      {
        id: 'm3',
        premise: 'Tahap 3: Pengambilan Keputusan',
        match: 'Sistem menyimpulkan mobil harus menginjak rem untuk berhenti di garis aman',
      },
      {
        id: 'm4',
        premise: 'Tahap 4: Aksi Output',
        match: 'Perangkat mekanik rem aktif menahan roda sehingga kendaraan berhenti sempurna',
      },
    ],
    explanation:
      'Alur kerja AI mobil pintar: Input sensor kamera -> Deteksi pola rambu -> Keputusan sistem rem -> Aksi mekanik fisik mengerem.',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'Penerapan Positif AI dalam Bidang Kehidupan',
    difficulty: 'Sedang',
    text: 'Jodohkan bidang kehidupan di kolom kiri dengan contoh aplikasi nyata teknologi AI yang membantunya di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Bidang Kedokteran',
        match: 'Mendeteksi kelainan sel kanker pada citra sinar-X sejak stadium awal',
      },
      {
        id: 'm2',
        premise: 'Bidang Transportasi',
        match: 'Mengatur durasi pergantian lampu hijau di jalan raya sesuai kepadatan antrean',
      },
      {
        id: 'm3',
        premise: 'Bidang Pendidikan',
        match: 'Memberikan penjelasan bertahap saat siswa kesulitan memahami rumus',
      },
      {
        id: 'm4',
        premise: 'Bidang Pelestarian Alam',
        match: 'Kamera AI di hutan mendeteksi suara gergaji penebang pohon liar',
      },
    ],
    explanation:
      'AI diterapkan di kedokteran untuk analisis citra medis, transportasi untuk traffic lights cerdas, pendidikan untuk tutor adaptif, dan pelestarian alam untuk memantau deforestasi liar.',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'Tantangan dan Istilah Dampak Negatif AI',
    difficulty: 'Sedang',
    text: 'Jodohkan istilah tantangan negatif AI di kolom kiri dengan contoh permasalahan kasus di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Deepfake',
        match: 'Video manipulasi wajah pejabat publik yang disebarkan untuk fitnah politik',
      },
      {
        id: 'm2',
        premise: 'Halusinasi AI',
        match: 'Chatbot memberikan nama presiden fiktif dengan nada bahasa sangat meyakinkan',
      },
      {
        id: 'm3',
        premise: 'Bias Data',
        match: 'Alat seleksi karyawan otomatis menolak pelamar perempuan karena data latihnya timpang',
      },
      {
        id: 'm4',
        premise: 'Ketergantungan Digital',
        match: 'Siswa malas memikirkan ide sendiri karena selalu mengandalkan bantuan AI instan',
      },
    ],
    explanation:
      'Deepfake: video rekayasa palsu; Halusinasi AI: jawaban mengarang meyakinkan; Bias data: ketidakadilan algoritma akibat sampel latih cacat; Ketergantungan digital: kemalasan kognitif manusia.',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'Pilar Etika Penggunaan AI bagi Siswa Sekolah',
    difficulty: 'Sedang',
    text: 'Jodohkan prinsip etika penggunaan AI di kolom kiri dengan tindakan nyata yang harus dipraktikkan siswa di kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Kejujuran Akademik',
        match: 'Tidak menyalin-tempel jawaban AI secara mentah dan mengakuinya sebagai karya pribadi',
      },
      {
        id: 'm2',
        premise: 'Perlindungan Privasi',
        match: 'Merahasiakan alamat rumah, kata sandi, dan foto identitas keluarga dari internet',
      },
      {
        id: 'm3',
        premise: 'Verifikasi Fakta',
        match: 'Mencocokkan informasi yang diberikan chatbot dengan buku pelajaran resmi',
      },
      {
        id: 'm4',
        premise: 'Tanggung Jawab Digital',
        match: 'Menggunakan AI hanya untuk hal-hal yang bermanfaat dan tidak merugikan orang lain',
      },
    ],
    explanation:
      'Prinsip etika mencakup: Kejujuran akademik (anti plagiasi), Privasi (keamanan data rahasia), Verifikasi fakta (cross-check), dan Tanggung Jawab (pemanfaatan positif).',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Menjawab dengan kata kunci tepat. Skor @ 1 butir = 1
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Kumpulan Data Latih AI',
    difficulty: 'Mudah',
    text: 'Kumpulan ribuan data contoh (seperti foto, rekaman suara, atau artikel) yang dimasukkan ke dalam program komputer untuk melatih sistem kecerdasan artifisial disebut dengan istilah data latih atau ...',
    correctAnswer: 'DATASET',
    acceptedAnswers: ['dataset', 'data training', 'training dataset', 'data latih', 'training data'],
    explanation:
      'Dataset (kumpulan data latih) adalah sekumpulan data terstruktur yang digunakan untuk melatih model kecerdasan artifisial agar dapat mengenali pola dan karakteristik data.',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'Konsep Dasar Pengenalan Pola',
    difficulty: 'Sedang',
    text: 'Kemampuan sistem komputer pintar dalam mengenali kemiripan bentuk telinga pada foto kucing atau kesamaan irama gelombang nada suara dinamakan pengenalan ...',
    correctAnswer: 'POLA',
    acceptedAnswers: ['pola', 'pattern', 'pattern recognition', 'pengenalan pola'],
    explanation:
      'Pengenalan pola (pattern recognition) adalah proses komputasi untuk mendeteksi kesamaan ciri, keteraturan, atau struktur bentuk dalam sekumpulan data masukan.',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Teknologi Manipulasi Video Palsu AI',
    difficulty: 'Sedang',
    text: 'Teknologi kecerdasan artifisial yang mampu merekayasa dan menukar wajah serta meniru suara seseorang dalam rekaman video palsu hingga terlihat sangat mirip aslinya dinamakan teknologi ...',
    correctAnswer: 'DEEPFAKE',
    acceptedAnswers: ['deepfake', 'deep fake', 'deepfakes'],
    explanation:
      'Deepfake adalah teknik manipulasi media digital sintetis berbasis kecerdasan artifisial (deep learning) untuk mengganti atau memalsukan rupa dan suara seseorang dalam video.',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'Etika Akademik dalam Belajar',
    difficulty: 'Sedang',
    text: 'Ketika seorang siswa tidak mencuri hasil pemikiran orang lain atau tidak menyalin mentah-mentah jawaban chatbot AI pada saat ujian sekolah, siswa tersebut telah menjunjung tinggi prinsip kejujuran ...',
    correctAnswer: 'AKADEMIK',
    acceptedAnswers: ['akademik', 'akademis', 'integritas akademik', 'kejujuran akademik'],
    explanation:
      'Kejujuran akademik (integritas akademik) adalah nilai moral kepatutan dan kejujuran dalam kegiatan belajar, menghasilkan karya tulis orisinal, serta tidak melakukan kecurangan atau plagiarisme.',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Perlindungan Informasi Pribadi Digital',
    difficulty: 'Sedang',
    text: 'Hak setiap orang untuk merahasiakan data pribadinya (seperti alamat rumah, nomor kontak, foto keluarga, dan kata sandi) agar tidak disebarluaskan di internet disebut hak atau perlindungan ...',
    correctAnswer: 'PRIVASI',
    acceptedAnswers: ['privasi', 'privacy', 'data pribadi', 'privasi data'],
    explanation:
      'Privasi (atau perlindungan data pribadi) adalah hak individu untuk mengendalikan informasi tentang dirinya sendiri agar tidak disalahgunakan atau diakses sembarangan oleh pihak lain.',
  },

  // =========================================================================
  // BAGIAN VI: URAIAN / ESSAY (5 BUTIR SOAL: NO. 31 - 35)
  // Menjawab secara mendalam dan sistematis. Skor @ 1 butir = 2 (Total skor = 10)
  // =========================================================================
  {
    id: 31,
    type: 'uraian',
    topic: 'Alur Kerja Sederhana AI dalam Mengenali Gambar',
    difficulty: 'Sedang',
    text: 'Jelaskan secara runtut bagaimana alur kerja sederhana sebuah program kecerdasan artifisial (AI) dalam mengenali perbedaan antara gambar bunga mawar dan gambar bunga melati, mulai dari tahap masukan data hingga menghasilkan jawaban prediksi!',
    keyPoints: [
      'Tahap 1 (Input/Dataset): Komputer diberikan ribuan foto bunga mawar merah dan melati putih berlabel sebagai bahan data latih.',
      'Tahap 2 (Pelatihan & Deteksi Pola): Algoritma AI menganalisis dan mempelajari ciri khas masing-masing bunga (kelopak mawar bergerigi merah vs kelopak melati bulat putih kecil).',
      'Tahap 3 (Pengujian & Prediksi Output): Saat dimasukkan foto bunga baru yang belum pernah dilihat, model AI mencocokkan pola ciri dan menyimpulkan prediksi jenis bunganya dengan tingkat keyakinan (akurasi).',
    ],
    rubric:
      'Skor 2: Siswa menguraikan lengkap 3 tahapan (Input data latih, proses pelatihan pengenalan pola, dan output prediksi). Skor 1: Siswa hanya menyebutkan 1 atau 2 tahapan secara parsial. Skor 0: Jawaban kosong atau tidak relevan.',
    maxScore: 2,
    explanation:
      'Alur kerja AI: 1. Input: Memberikan dataset ribuan foto bunga berlabel; 2. Model Learning: AI mengekstraksi pola warna dan bentuk kelopak; 3. Output/Inference: Saat melihat foto baru, AI membandingkan pola dan memprediksi jenis bunganya.',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'Tiga Dampak Positif AI dalam Kegiatan Belajar Siswa',
    difficulty: 'Sedang',
    text: 'Sebutkan dan jelaskan 3 (tiga) contoh dampak positif atau manfaat nyata dari teknologi kecerdasan artifisial yang dapat membantu kegiatan belajar siswa sekolah dasar sehari-hari!',
    keyPoints: [
      '1. Sebagai Tutor Belajar Mandiri: Menyediakan penjelasan materi tambahan dan latihan soal sesuai tingkat pemahaman siswa yang bersangkutan.',
      '2. Mempermudah Pembelajaran Bahasa: Fitur penerjemah instan dan pelafalan kata bahasa asing membantu siswa memperkaya kosakata.',
      '3. Membantu Pencarian Referensi & Ide: Memberikan inspirasi topik karangan, rangkuman konsep sains yang sulit, atau ide eksperimen belajar.',
    ],
    rubric:
      'Skor 2: Menyebutkan 3 contoh manfaat positif beserta penjelasannya secara logis dan tepat. Skor 1: Hanya menyebutkan 1 atau 2 contoh manfaat tanpa penjelasan memadai. Skor 0: Jawaban kosong atau keliru.',
    maxScore: 2,
    explanation:
      'Tiga manfaat positif AI dalam belajar: 1. Tutor belajar adaptif sesuai kecepatan siswa, 2. Penerjemahan dan pembelajaran bahasa asing, 3. Teman bertukar ide dan pencari referensi pengetahuan.',
  },
  {
    id: 33,
    type: 'uraian',
    topic: 'Penyebab Halusinasi AI dan Pentingnya Verifikasi Fakta',
    difficulty: 'Sukar',
    text: 'Mengapa sebuah program kecerdasan artifisial (seperti chatbot) bisa memberikan informasi yang keliru atau mengarang fakta (halusinasi AI)? Jelaskan mengapa kita sebagai siswa tidak boleh langsung mempercayai jawaban AI 100% dan harus melakukan verifikasi fakta!',
    keyPoints: [
      'Penyebab Halusinasi AI: AI tidak memiliki akal budi atau kesadaran pemahaman layaknya manusia; AI bekerja dengan menebak kata berikutnya yang paling mungkin muncul secara statistik berdasarkan data di internet yang bisa saja mengandung informasi salah.',
      'Pentingnya Verifikasi: Karena jika informasi salah dari AI langsung disalin, siswa akan menyebarkan berita bohong atau memahami konsep keliru. Siswa wajib memverifikasi fakta dengan membandingkannya ke buku pelajaran resmi, ensiklopedia, atau bertanya kepada guru.',
    ],
    rubric:
      'Skor 2: Siswa menjelaskan penyebab AI berhalusinasi (menebak kata secara statistik tanpa akal nyata) DAN menguraikan pentingnya verifikasi fakta ke sumber terpercaya. Skor 1: Hanya menjawab salah satu aspek saja. Skor 0: Jawaban tidak tepat.',
    maxScore: 2,
    explanation:
      'AI tidak memiliki akal dan kesadaran, melainkan model probabilitas kata. Jika data sumbernya salah atau pola katanya ambigu, AI dapat menghasilkan informasi palsu (halusinasi). Oleh sebab itu, verifikasi fakta ke buku atau guru mutlak diperlukan.',
  },
  {
    id: 34,
    type: 'uraian',
    topic: 'Studi Kasus Penilaian Etis Penggunaan AI dalam Tugas Sekolah',
    difficulty: 'Sukar',
    text: 'Doni mendapat tugas membuat karangan tentang keindahan alam desanya. Karena ingin cepat bermain game, Doni mengetikkan perintah di chatbot AI: "Buatkan karangan 4 paragraf tentang keindahan desa". Doni lalu menyalin seluruh karangan buatan AI tersebut dan mengumpulkannya ke guru tanpa membaca isinya sama sekali.\n\nBerikan penilaian etis terhadap tindakan Doni, dan jelaskan bagaimana langkah yang benar dan beretika jika Doni ingin memanfaatkan AI dalam menyelesaikan tugas karangan tersebut!',
    keyPoints: [
      'Penilaian Etis: Tindakan Doni TIDAK BERETIKA karena melakukan plagiarisme (mengakui karya AI sebagai karya sendiri), tidak jujur secara akademik, dan merugikan dirinya sendiri karena kehilangan kesempatan mengasah keterampilan berpikir dan menulis.',
      'Cara yang Benar & Beretika: Doni seharusnya menggunakan AI hanya untuk mencari ide pokok atau inspirasi kerangka karangan, kemudian membaca dan menulis sendiri kalimat ceritanya sesuai pengalaman nyata di desanya, serta secara jujur menyebutkan bahwa ide awal dibantu AI.',
    ],
    rubric:
      'Skor 2: Menilai tindakan Doni dengan tepat (tidak etis/plagiat) DISERTAI pemaparan solusi cara beretika yang benar (menggunakan AI sebagai pemicu ide, menulis sendiri, dan jujur). Skor 1: Hanya memberi penilaian tanpa alternatif solusi etis. Skor 0: Tidak relevan.',
    maxScore: 2,
    explanation:
      'Tindakan Doni adalah plagiarisme yang melanggar integritas akademik. Cara beretika: gunakan AI untuk memantik ide awal, lalu susun karangan menggunakan pemikiran, perasaan, dan kata-kata sendiri serta tetap jujur kepada guru.',
  },
  {
    id: 35,
    type: 'uraian',
    topic: 'Aturan Dasar (Kode Etik) Keamanan dan Privasi Penggunaan AI',
    difficulty: 'Sukar',
    text: 'Sebagai siswa kelas VI yang cerdas dan melek teknologi di era digital, rumuskan 4 (empat) aturan dasar (kode etik) penggunaan kecerdasan artifisial yang harus dipatuhi oleh seluruh siswa di sekolah agar tetap aman, jujur, dan beretika!',
    keyPoints: [
      '1. Jaga Privasi Data Pribadi: Jangan pernah memasukkan nama lengkap, alamat rumah, nomor telepon, foto pribadi/keluarga, atau kata sandi ke dalam aplikasi AI.',
      '2. Selalu Cek Fakta (Verifikasi): Tidak menelan mentah-mentah jawaban AI, selalu periksa kebenaran informasi ke buku atau guru.',
      '3. Junjung Kejujuran Akademik: Tidak melakukan salin-tempel (plagiat) tugas sekolah dari AI; jadikan AI sebagai sarana belajar, bukan pengganti berpikir mandiri.',
      '4. Gunakan untuk Kebaikan: Tidak menggunakan AI untuk membuat konten palsu (deepfake/hoaks), mengejek teman (cyberbullying), atau merugikan orang lain.',
    ],
    rubric:
      'Skor 2: Merumuskan 4 aturan kode etik yang mencakup privasi, verifikasi fakta, kejujuran akademik, dan pemanfaatan positif. Skor 1: Hanya merumuskan 2 atau 3 aturan dengan benar. Skor 0: Jawaban kurang dari 2 atau tidak relevan.',
    maxScore: 2,
    explanation:
      'Empat kode etik pemanfaatan AI untuk siswa: 1. Lindungi privasi data pribadi, 2. Verifikasi kebenaran informasi, 3. Junjung kejujuran akademik (anti-plagiasi), 4. Manfaatkan hanya untuk hal positif dan kebaikan bersama.',
  },
];
