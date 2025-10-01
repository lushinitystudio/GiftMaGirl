import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConsentGate from "./pages/ConsentGate";
import Landing from "./pages/Landing";
import ModelSelection from "./pages/ModelSelection";
import GiftSelection from "./pages/GiftSelection";
import Checkout from "./pages/Checkout";
import Reward from "./pages/Reward";
import SpecialReward from "./pages/SpecialReward";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import Footer from "./components/ui/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConsentGate />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/models" element={<ModelSelection />} />
          <Route path="/gifts" element={<GiftSelection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/special-reward" element={<SpecialReward />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;