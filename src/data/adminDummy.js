export const adminStats = {
  totalReports: 1284,
  pendingReports: 37,
  verifiedReports: 916,
  rejectedReports: 331,
  threatEntities: 247
}

export const reports = [
  {
    id: 'JAGA-2026-00023',
    application: 'DanaCepatt',
    category: 'Pinjaman Online',
    reporter: 'Anonim',
    status: 'verification',
    risk: 'high',
    date: '23 Agustus 2026',
    time: '14:32',
    reports: 17
  },

  {
    id: 'JAGA-2026-00022',
    application: 'Uang Kilat',
    category: 'Pinjaman Online',
    reporter: 'Anonim',
    status: 'pending',
    risk: 'medium',
    date: '23 Agustus 2026',
    time: '13:18',
    reports: 8
  },

  {
    id: 'JAGA-2026-00021',
    application: 'Pinjam Yuk',
    category: 'Pinjaman Online',
    reporter: 'Terdaftar',
    status: 'verified',
    risk: 'high',
    date: '23 Agustus 2026',
    time: '11:04',
    reports: 24
  },

  {
    id: 'JAGA-2026-00020',
    application: 'Dana Aman',
    category: 'Pinjaman Online',
    reporter: 'Anonim',
    status: 'rejected',
    risk: 'low',
    date: '22 Agustus 2026',
    time: '18:43',
    reports: 2
  },

  {
    id: 'JAGA-2026-00019',
    application: 'Cepat Cair',
    category: 'Pinjaman Online',
    reporter: 'Anonim',
    status: 'verified',
    risk: 'high',
    date: '22 Agustus 2026',
    time: '16:20',
    reports: 31
  }
]

export const threatEntities = [
  {
    name: 'DanaCepatt',
    type: 'Aplikasi',
    reports: 17,
    risk: 'high',
    status: 'Dalam Verifikasi'
  },

  {
    name: 'Uang Kilat',
    type: 'Aplikasi',
    reports: 8,
    risk: 'medium',
    status: 'Perlu Ditinjau'
  },

  {
    name: 'Pinjam Yuk',
    type: 'Aplikasi',
    reports: 24,
    risk: 'high',
    status: 'Terverifikasi'
  },

  {
    name: '0812••••••23',
    type: 'Nomor',
    reports: 12,
    risk: 'high',
    status: 'Terverifikasi'
  },

  {
    name: 'Cepat Cair',
    type: 'Aplikasi',
    reports: 31,
    risk: 'high',
    status: 'Terverifikasi'
  }
]