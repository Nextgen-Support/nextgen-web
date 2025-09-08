import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "./components/ui/tooltip";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import DocumentManagement from "./pages/services/document-management";
import CCTVSolutions from "./pages/services/cctv";
import ISPServices from "./pages/services/isp-services";
import WebHosting from "./pages/services/web-hosting";
import SecuritySolutions from "./pages/services/security";
import Projects from "./pages/projects";
import Products from "./pages/products";
import Careers from "./pages/careers";
import News from "./pages/news";
import Contact from "./pages/contact";
import ServiceRequest from "./pages/service-request";
import SupportLayout from "./components/support-layout";
import SupportGuides from "./pages/support/guides";
import OutlookEmailSetup from "./pages/support/guides/outlook-email-setup";
import AndroidEmailSetup from "./pages/support/guides/android-email-setup";
import IosEmailSetup from "./pages/support/guides/ios-email-setup";
import DebugRoutes from "./pages/debug-routes";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Outlet /></Layout>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/document-management" element={<DocumentManagement />} />
          <Route path="services/cctv" element={<CCTVSolutions />} />
          {/*<Route path="services/isp-services" element={<ISPServices />} />*/}
          <Route path="services/web-hosting" element={<WebHosting />} />
          <Route path="services/security" element={<SecuritySolutions />} />
          <Route path="projects" element={<Projects />} />
          <Route path="products" element={<Products />} />
          <Route path="careers" element={<Careers />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="support" element={<SupportLayout />}>
            <Route index element={<SupportGuides />} />
            <Route path="guides">
              <Route index element={<SupportGuides />} />
              <Route path="outlook-email-setup" element={<OutlookEmailSetup />} />
              <Route path="android-email-setup" element={<AndroidEmailSetup />} />
              <Route path="ios-email-setup" element={<IosEmailSetup />} />
            </Route>
            <Route path="request" element={<ServiceRequest />} />
            <Route path="*" element={<Navigate to="/support" replace />} />
          </Route>
          <Route path="debug-routes" element={<DebugRoutes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Catch-all route - must be last */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster position="top-right" />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
