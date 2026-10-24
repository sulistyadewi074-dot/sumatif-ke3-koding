import { Question, LevelKognitif, Difficulty, QuestionType } from '../types';

export interface KisiKisiItem {
  id: number;
  elemen: string;
  cp: string;
  tp: string;
  indikator: string;
  levelKognitif: LevelKognitif;
  bobotSkor: number;
}

const ELEMEN_DEFAULT = 'Literasi Digital & Berpikir Komputasional (Kecerdasan Artifisial)';

const CP_DEFAULT =
  'Peserta didik mampu memahami konsep dan cara kerja kecerdasan artifisial secara sederhana melalui pengenalan data, pelatihan model, dan pengenalan pola; mengidentifikasi ragam pemanfaatan serta dampak positif dan negatif AI dalam kehidupan sehari-hari; serta menerapkan etika dasar penggunaan kecerdasan artifisial secara bertanggung jawab, aman, jujur secara akademik, dan mampu memverifikasi kebenaran informasi.';

const TP_1 =
  'Memahami konsep dasar dan cara kerja kecerdasan artifisial secara sederhana (input data, data pelatihan/training, pengenalan pola/pattern recognition, dan output/prediksi).';
const TP_2 =
  'Mengidentifikasi ragam pemanfaatan dan dampak positif kecerdasan artifisial dalam mempermudah kehidupan manusia dan pembelajaran di sekolah.';
const TP_3 =
  'Menganalisis tantangan dan dampak negatif kecerdasan artifisial (bias data, fenomena deepfake/hoaks, ketergantungan digital, dan ancaman privasi).';
const TP_4 =
  'Menerapkan etika dasar penggunaan kecerdasan artifisial secara bertanggung jawab, melindungi privasi data pribadi, menjunjung kejujuran akademik, dan memverifikasi kebenaran fakta.';

export const KISI_KISI_MAP: Record<number, KisiKisiItem> = {
  // --- BAGIAN I: PILIHAN GANDA (10 BUTIR: NO. 1 - 10) ---
  1: {
    id: 1,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus diagram alur kerja sederhana kecerdasan artifisial (Input Data -> Proses Model AI -> Output/Prediksi), peserta didik dapat mengidentifikasi pengertian dasar kecerdasan artifisial (AI) sebagai kemampuan komputer meniru kecerdasan manusia dalam belajar dan memecahkan masalah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    id: 2,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan ilustrasi komputer yang dilatih membedakan gambar kucing dan anjing menggunakan kumpulan ribuan foto, peserta didik dapat menentukan peran penting data pelatihan (training dataset) dalam proses pembelajaran mesin.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    id: 3,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan perbandingan skema program komputer tradisional berbasis aturan kaku versus sistem kecerdasan artifisial, peserta didik dapat menelaah perbedaan mendasar di mana AI dapat belajar sendiri dari pola data yang diberikan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    id: 4,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan ilustrasi asisten suara cerdas (voice assistant) yang merespons perintah ucapan manusia, peserta didik dapat mengidentifikasi konsep pengenalan pola (pattern recognition) dalam pengolahan audio suara ke teks.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    id: 5,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan infografis berbagai fitur aplikasi pembelajaran modern, peserta didik dapat mengidentifikasi dampak positif kecerdasan artifisial dalam membantu siswa memahami materi pelajaran melalui tutor belajar mandiri adaptif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    id: 6,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan kasus rekayasa manipulasi video tiruan wajah tokoh terkenal (deepfake), peserta didik dapat menganalisis bahaya penyebaran video buatan AI terhadap maraknya misinformasi dan pencemaran nama baik di media sosial.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    id: 7,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan studi kasus sistem AI pemilah foto profesi yang menghasilkan keputusan tidak seimbang karena dataset pelatihannya tidak lengkap, peserta didik dapat mengidentifikasi fenomena bias data (data bias) pada kecerdasan artifisial.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    id: 8,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan percakapan interaksi dengan chatbot cerdas yang memberikan informasi tanggal sejarah fiktif namun bernada sangat meyakinkan, peserta didik dapat mengevaluasi fenomena halusinasi AI (AI hallucination) dan pentingnya verifikasi sumber primer.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    id: 9,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan diagram keamanan digital dan privasi data anak, peserta didik dapat membedakan data yang bersifat publik dan data pribadi sensitif yang dilarang dimasukkan ke dalam platform AI daring.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    id: 10,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan perbandingan perilaku dua siswa saat menyelesaikan tugas penulisan esai sekolah berbantuan AI, peserta didik dapat mengevaluasi penerapan etika kejujuran akademik dan atribusi sumber yang bertanggung jawab.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR: NO. 11 - 15) ---
  11: {
    id: 11,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan daftar komponen sistem teknologi komputasi, peserta didik dapat memilih beberapa komponen pokok yang wajib ada agar suatu sistem kecerdasan artifisial dapat dilatih dan bekerja mengenali pola.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    id: 12,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan berbagai macam aplikasi dan layanan digital sehari-hari, peserta didik dapat memilih contoh pemanfaatan nyata kecerdasan artifisial yang terbukti memberikan dampak positif bagi kehidupan manusia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    id: 13,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan beberapa potensi masalah di era digital, peserta didik dapat memilih ragam dampak negatif dan ancaman nyata apabila kecerdasan artifisial digunakan tanpa pengawasan etika dan batas kewajaran.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    id: 14,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan ragam perilaku siswa dalam mengerjakan tugas sekolah dengan bantuan alat kecerdasan artifisial, peserta didik dapat memilih tindakan-tindakan yang mencerminkan etika penggunaan AI yang benar dan santun.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    id: 15,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan berbagai metode pemeriksaan informasi di internet, peserta didik dapat memilih langkah-langkah verifikasi fakta (cross-checking) yang tepat guna memastikan kebenaran hasil tanggapan dari chatbot AI.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN III: PGK KATEGORI BENAR/SALAH (5 BUTIR: NO. 16 - 20) ---
  16: {
    id: 16,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan tabel pernyataan konseptual tentang prinsip dasar kerja kecerdasan artifisial (perbedaan kecerdasan manusia vs AI, data pelatihan, algoritma), peserta didik dapat menilai kebenaran tiap pernyataan (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    id: 17,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan tabel pernyataan penerapan teknologi AI dalam berbagai sektor (kesehatan, transportasi otonom, pendidikan, pertanian presisi), peserta didik dapat memvalidasi kesesuaian dampak positifnya (Sesuai/Tidak Sesuai).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    id: 18,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan tabel pernyataan mengenai dampak negatif, ketergantungan berlebih, dan risiko keamanan siber akibat AI, peserta didik dapat menilai kebenaran tiap pernyataan (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    id: 19,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan tabel situasi interaksi siswa dengan platform AI terkait perlindungan data pribadi dan kerahasiaan identitas, peserta didik dapat menentukan kesesuaian tindakan dengan etika privasi (Sesuai/Tidak Sesuai).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    id: 20,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan tabel pernyataan terkait integritas akademik, plagiarisme, dan hak cipta karya orisinal saat menggunakan AI generatif, peserta didik dapat menilai kebenaran kaidah etika tersebut (Benar/Salah).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN IV: MENJODOHKAN (5 BUTIR: NO. 21 - 25) ---
  21: {
    id: 21,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan premis istilah-istilah pokok dalam dunia kecerdasan artifisial (Dataset, Algoritma, Machine Learning, Computer Vision), peserta didik dapat menjodohkannya dengan definisi atau penjelasan yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    id: 22,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan premis tahapan alur kerja AI dalam studi kasus mobil otonom ramah lingkungan, peserta didik dapat menjodohkan tiap tahapan (Input, Pelatihan, Deteksi Pola, Keputusan Output) dengan contoh aktivitas sistem yang bersesuaian.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    id: 23,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan premis bidang-bidang kehidupan manusia (Kedokteran, Transportasi, Pendidikan, Kebudayaan & Bahasa), peserta didik dapat menjodohkannya dengan contoh teknologi AI yang diterapkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    id: 24,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan premis istilah tantangan dan dampak negatif AI (Deepfake, Bias Data, Halusinasi AI, Ketergantungan Kognitif), peserta didik dapat menjodohkannya dengan gambaran kasus permasalahan yang relevan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    id: 25,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan premis pilar etika penggunaan AI (Kejujuran Akademik, Privasi Data, Transparansi Sumber, Tanggung Jawab Pengguna), peserta didik dapat menjodohkannya dengan tindakan nyata siswa di lingkungan sekolah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN V: ISIAN SINGKAT (5 BUTIR: NO. 26 - 30) ---
  26: {
    id: 26,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat melengkapi kalimat definisi istilah kumpulan data contoh (berupa gambar, teks, atau suara) yang diberikan kepada komputer agar komputer dapat belajar mengenali pola.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    id: 27,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menuliskan istilah kemampuan komputer cerdas dalam menemukan kesamaan ciri atau keteraturan pada sekumpulan data masukan (pengenalan ...).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    id: 28,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat menuliskan istilah teknologi manipulasi gambar, audio, atau video rekayasa tiruan berbasis AI yang meniru sosok asli manusia secara sangat meyakinkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    id: 29,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Peserta didik dapat melengkapi kalimat tentang prinsip moral di mana siswa tidak menjiplak tugas orang lain atau karya AI secara mentah-mentah demi menjunjung tinggi integritas/kejujuran ...',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    id: 30,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Peserta didik dapat menuliskan istilah hak setiap orang untuk menjaga kerahasiaan identitas dan data pribadinya agar tidak disalahgunakan di ruang digital (hak / perlindungan ...).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN VI: URAIAN / ESAI (5 BUTIR: NO. 31 - 35) ---
  31: {
    id: 31,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menguraikan alur kerja sederhana kecerdasan artifisial dalam mengenali objek (misalnya membedakan foto kucing dan anjing) mulai dari input data, proses pelatihan, hingga penentuan hasil prediksi.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  32: {
    id: 32,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat mengemukakan tiga contoh konkret manfaat dan dampak positif penggunaan kecerdasan artifisial yang dapat membantu kegiatan belajar siswa sekolah dasar sehari-hari.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  33: {
    id: 33,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan masalah kesalahan output AI (halusinasi AI dan bias data), peserta didik dapat menganalisis mengapa AI tidak boleh dipercaya 100% dan menguraikan alasan pentingnya verifikasi fakta.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  34: {
    id: 34,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan studi kasus siswa yang menyuruh AI membuat seluruh karangan sekolah tanpa membaca atau menyuntingnya, peserta didik dapat memberikan penilaian etis serta menjelaskan cara beretika memanfaatkan AI sebagai teman belajar.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  35: {
    id: 35,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Peserta didik dapat merumuskan empat aturan dasar (kode etik) keamanan dan privasi yang wajib dipatuhi oleh siswa saat berinteraksi dengan aplikasi kecerdasan artifisial di dunia maya.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Memperkaya objek soal dengan metadata kisi-kisi Kurikulum Merdeka
 */
export function enrichQuestion(question: Question): Question {
  const item = KISI_KISI_MAP[question.id];
  if (!item) {
    return {
      ...question,
      elemen: question.elemen || ELEMEN_DEFAULT,
      cp: question.cp || CP_DEFAULT,
      tp: question.tp || TP_1,
      indikator: question.indikator || `Indikator soal nomor ${question.id}`,
      levelKognitif: question.levelKognitif || 'L2',
      bobotSkor: question.bobotSkor || (question.type === 'uraian' ? 2 : 1),
    };
  }

  return {
    ...question,
    elemen: question.elemen || item.elemen,
    cp: question.cp || item.cp,
    tp: question.tp || item.tp,
    indikator: question.indikator || item.indikator,
    levelKognitif: question.levelKognitif || item.levelKognitif,
    bobotSkor: question.bobotSkor || item.bobotSkor,
  };
}

export interface KisiKisiSummaryStats {
  totalSoal: number;
  totalSkor: number;
  elemenCounts: Record<string, number>;
  levelCounts: {
    L1: { count: number; percent: number; label: string };
    L2: { count: number; percent: number; label: string };
    L3: { count: number; percent: number; label: string };
  };
  difficultyCounts: {
    Mudah: { count: number; percent: number };
    Sedang: { count: number; percent: number };
    Sukar: { count: number; percent: number };
  };
  typeCounts: Record<QuestionType, number>;
}

/**
 * Menghitung rekapitulasi statistik kisi-kisi secara otomatis
 */
export function calculateKisiKisiStats(questions: Question[]): KisiKisiSummaryStats {
  const total = questions.length || 1;
  let totalScore = 0;

  const elemenCounts: Record<string, number> = {};
  const levelRaw = { L1: 0, L2: 0, L3: 0 };
  const diffRaw = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCounts: Record<QuestionType, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
    isian: 0,
    uraian: 0,
  };

  questions.forEach((q) => {
    const enriched = enrichQuestion(q);
    const score = enriched.bobotSkor || (q.type === 'uraian' ? 2 : 1);
    totalScore += score;

    const el = enriched.elemen || ELEMEN_DEFAULT;
    elemenCounts[el] = (elemenCounts[el] || 0) + 1;

    const lvl =
      enriched.levelKognitif ||
      (enriched.difficulty === 'Mudah' ? 'L1' : enriched.difficulty === 'Sedang' ? 'L2' : 'L3');
    if (lvl in levelRaw) {
      levelRaw[lvl as keyof typeof levelRaw] += 1;
    }

    const diff = enriched.difficulty || 'Sedang';
    if (diff in diffRaw) {
      diffRaw[diff as keyof typeof diffRaw] += 1;
    }

    if (q.type in typeCounts) {
      typeCounts[q.type as keyof typeof typeCounts] += 1;
    }
  });

  return {
    totalSoal: questions.length,
    totalSkor: totalScore,
    elemenCounts,
    levelCounts: {
      L1: {
        count: levelRaw.L1,
        percent: Math.round((levelRaw.L1 / total) * 100),
        label: 'L1 - Pemahaman & Pengetahuan',
      },
      L2: {
        count: levelRaw.L2,
        percent: Math.round((levelRaw.L2 / total) * 100),
        label: 'L2 - Aplikasi & Penerapan',
      },
      L3: {
        count: levelRaw.L3,
        percent: Math.round((levelRaw.L3 / total) * 100),
        label: 'L3 - Penalaran & Analisis HOTS',
      },
    },
    difficultyCounts: {
      Mudah: { count: diffRaw.Mudah, percent: Math.round((diffRaw.Mudah / total) * 100) },
      Sedang: { count: diffRaw.Sedang, percent: Math.round((diffRaw.Sedang / total) * 100) },
      Sukar: { count: diffRaw.Sukar, percent: Math.round((diffRaw.Sukar / total) * 100) },
    },
    typeCounts,
  };
}
