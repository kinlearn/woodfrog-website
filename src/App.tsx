import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import WebsiteLandingPageDarkMod from "./pages/WebsiteLandingPageDarkMod";
import MachineLearning from "./components/BlogsPage/MachineLearning";
import DemandForecasting from "./components/BlogsPage/DemandForecasting";
import PredictiveMaintanance from "./components/BlogsPage/PredictiveMaintenance";
import SmartManufacturing from "./components/BlogsPage/SmartMenufacturing";
import Offering from "./pages/Offering";
import AboutUs from "./pages/AboutUs";
import OfferingPage from "./pages/OfferingPage";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import GasTurbine from "./components/BlogsPage/gasTurbine";
import TvacScorePrediction from "./components/BlogsPage/tvacScorePrediction";
import CustomerChurn from "./components/BlogsPage/CustomerChurn";
import SuspectEngline from "./components/BlogsPage/SuspectEngine";
import InsurancePolicy from "./components/BlogsPage/InsurancePolicy";
import StbPredictiveMaintance from "./components/BlogsPage/STBPredictiveMaintance";
import FactFinder from "./components/BlogsPage/FactFinder";
import SmartMonitoringView from "./components/pdf/SmartMonitoringView";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // ✅ Import Privacy Policy Page

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home | Woodfrog Tech";
        metaDescription = "Welcome to Woodfrog Tech.";
        break;
      case "/websitelanding-page-dark-mode":
        title = "Dark Mode | Woodfrog Tech";
        metaDescription = "Experience our website in dark mode.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WebsiteLandingPageDarkMod />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/services" element={<Offering />} />
      <Route path="/offering" element={<OfferingPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/demand-forecasting" element={<DemandForecasting />} />
      <Route path="/Smart-Monitoring" element={<MachineLearning />} />
      <Route path="/pdf/:page" element={<SmartMonitoringView />} />
      <Route path="/predictive-maintenance" element={<PredictiveMaintanance />} />
      <Route path="/smart-manufacturing" element={<SmartManufacturing />} />
      <Route path="/gas-turbine" element={<GasTurbine />} />
      <Route path="/tvac-score" element={<TvacScorePrediction />} />
      <Route path="/customer-churn" element={<CustomerChurn />} />
      <Route path="/suspect-engine" element={<SuspectEngline />} />
      <Route path="/insurance-policy" element={<InsurancePolicy />} />
      <Route path="/stb-predictive" element={<StbPredictiveMaintance />} />
      <Route path="/fact-finder" element={<FactFinder />} />

      {/* ✅ Added routes for Privacy Policy and Terms & Conditions */}
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
