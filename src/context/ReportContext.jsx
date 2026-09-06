import { createContext, useContext, useState } from 'react'

const ReportContext = createContext(null)

export function ReportProvider({ children }) {
  const [reportData, setReportData] = useState({
  reportedName: '',
  reportedAccountOrWA: '',
  severity: 'baru_isi_data',
  category: 'pinjol_ilegal',
  description: '',
  isAnonymous: true,
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  evidenceFiles: [],
})

  const [reportResult, setReportResult] = useState(null)

  const updateField = (field, value) => {
    setReportData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const addEvidenceFile = (file) => {
    setReportData((prev) => ({
      ...prev,
      evidenceFiles: [...prev.evidenceFiles, file],
    }))
  }

  const removeEvidenceFile = (index) => {
    setReportData((prev) => ({
      ...prev,
      evidenceFiles: prev.evidenceFiles.filter((_, i) => i !== index),
    }))
  }

  const resetReport = () => {
  setReportData({
    reportedName: '',
    reportedAccountOrWA: '',
    severity: 'ringan',
    category: 'pinjol_ilegal',
    description: '',
    isAnonymous: true,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    evidenceFiles: [],
  })
  setReportResult(null)
}

  const value = {
    reportData,
    updateField,
    addEvidenceFile,
    removeEvidenceFile,
    reportResult,
    setReportResult,
    resetReport,
  }

  return (
    <ReportContext.Provider value={value}>
      {children}
    </ReportContext.Provider>
  )
}

export function useReport() {
  const context = useContext(ReportContext)
  if (!context) {
    throw new Error('useReport harus dipakai di dalam ReportProvider')
  }
  return context
}