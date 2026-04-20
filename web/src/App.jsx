import { Navigate, Route, Routes } from 'react-router-dom'
import { SplashPage } from './pages/auth/SplashPage'
import { OnboardingPage } from './pages/auth/OnboardingPage'
import { LoginPage } from './pages/auth/LoginPage'
import { CustomerShellPage } from './pages/customer/CustomerShellPage'
import { ProviderShellPage } from './pages/provider/ProviderShellPage'
import { CreateRequestPage } from './pages/requests/CreateRequestPage'
import { ProposalsPage } from './pages/requests/ProposalsPage'
import { ProviderProfilePage } from './pages/profile/ProviderProfilePage'
import { ChatPage } from './pages/messages/ChatPage'
import { AppointmentTrackingPage } from './pages/requests/AppointmentTrackingPage'
import { ReviewPage } from './pages/requests/ReviewPage'
import { ProviderSubmitProposalPage } from './pages/provider/ProviderSubmitProposalPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/splash" replace />} />
      <Route path="/splash" element={<SplashPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<CustomerShellPage />} />
      <Route path="/provider-home" element={<ProviderShellPage />} />
      <Route path="/create-request" element={<CreateRequestPage />} />
      <Route path="/proposals" element={<ProposalsPage />} />
      <Route path="/provider-profile" element={<ProviderProfilePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/appointment-tracking" element={<AppointmentTrackingPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/submit-proposal" element={<ProviderSubmitProposalPage />} />
      <Route path="*" element={<Navigate to="/splash" replace />} />
    </Routes>
  )
}

export default App
