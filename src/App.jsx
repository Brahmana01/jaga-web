  import { Routes, Route, Outlet } from 'react-router-dom'

  import MainLayout from './layouts/MainLayout'
  import AdminLayout from './layouts/AdminLayout'

  import HomePage from './pages/home/HomePage'
  import CheckApplicationPage from './pages/check/CheckApplicationPage'
  import RiskResultPage from './pages/risk/RiskResultPage'

  import EducationPage from './pages/education/EducationPage'
  import EducationDetailPage from './pages/education/EducationDetailPage'

  import ReportLandingPage from './pages/report/ReportLandingPage'
  import ReportFormPage from './pages/report/ReportFormPage'
  import ReportEvidencePage from './pages/report/ReportEvidencePage'
  import ReportReviewPage from './pages/report/ReportReviewPage'
  import ReportSuccessPage from './pages/report/ReportSuccessPage'

  import VictimHelpPage from './pages/victim/VictimHelpPage'
  import EmergencyGuidePage from './pages/victim/EmergencyGuidePage'

  import TrackReportPage from './pages/tracking/TrackReportPage'
  import ReportStatusPage from './pages/tracking/ReportStatusPage'

  import AboutPage from './pages/about/AboutPage'

  import LoginPage from './pages/auth/LoginPage'
  import OtpPage from './pages/auth/OtpPage'

  import AdminDashboardPage from './pages/admin/AdminDashboardPage'
  import ReportsPage from './pages/admin/ReportsPage'
  import ReportDetailPage from './pages/admin/ReportDetailPage'
  import ThreatEntitiesPage from './pages/admin/ThreatEntitiesPage'

  import { ReportProvider } from './context/ReportContext'

  function App() {
    return (
      <Routes>

        {/* WEBSITE UNTUK MASYARAKAT */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<HomePage />} />

          <Route
            path="/cek-aplikasi"
            element={<CheckApplicationPage />}
          />

          <Route
            path="/hasil-pemeriksaan"
            element={<RiskResultPage />}
          />

          <Route
            path="/edukasi"
            element={<EducationPage />}
          />

          <Route
            path="/edukasi/:slug"
            element={<EducationDetailPage />}
          />
          <Route element={<ReportProvider><Outlet /></ReportProvider>}>
            <Route path="/laporkan" element={<ReportLandingPage />} />
            <Route path="/laporkan/form" element={<ReportFormPage />} />
            <Route path="/laporkan/bukti" element={<ReportEvidencePage />} />
            <Route path="/laporkan/review" element={<ReportReviewPage />} />
            <Route path="/laporkan/berhasil" element={<ReportSuccessPage />} />
          </Route>

          <Route
            path="/bantuan-korban"
            element={<VictimHelpPage />}
          />

          <Route
            path="/bantuan-korban/darurat"
            element={<EmergencyGuidePage />}
          />

          <Route
            path="/status-laporan"
            element={<TrackReportPage />}
          />

          <Route
            path="/status-laporan/detail"
            element={<ReportStatusPage />}
          />

          <Route
            path="/tentang-kami"
            element={<AboutPage />}
          />

        </Route>


        {/* AUTH */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/otp"
          element={<OtpPage />}
        />


        {/* ADMIN / VERIFIKATOR */}
        <Route element={<AdminLayout />}>

          <Route
            path="/admin"
            element={<AdminDashboardPage />}
          />

          <Route
            path="/admin/laporan"
            element={<ReportsPage />}
          />

          <Route
            path="/admin/laporan/:id"
            element={<ReportDetailPage />}
          />

          <Route
            path="/admin/threat-entities"
            element={<ThreatEntitiesPage />}
          />

        </Route>

      </Routes>
    )
  }

  export default App