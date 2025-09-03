import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ISPServices from "./pages/services/isp";
import WebHosting from "./pages/services/web-hosting";
import SecuritySolutions from "./pages/services/security";
import Projects from "./pages/projects";
import Products from "./pages/products";
import Careers from "./pages/careers";
import News from "./pages/news";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/document-management" element={<DocumentManagement />} />
          <Route path="/services/cctv" element={<CCTVSolutions />} />
          <Route path="/services/isp" element={<ISPServices />} />
          <Route path="/services/web-hosting" element={<WebHosting />} />
          <Route path="/services/security" element={<SecuritySolutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
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
