import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CloakerGuard from './components/CloakerGuard';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ContactUs from './pages/ContactUs';
import NewHomePage from './pages/ok';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <CloakerGuard enableLogging={true}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ok" element={<NewHomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </CloakerGuard>
  );
}

export default App;