
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Velicham from "./pages/programs/Velicham";
import Isthiqaama from "./pages/programs/Isthiqaama";
import QHLS from "./pages/programs/QHLS";
import Inspire from "./pages/programs/Inspire";
import Eelaf from "./pages/programs/Eelaf";
import Other from "./pages/programs/Other";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/velicham" element={<Velicham />} />
          <Route path="/programs/isthiqaama" element={<Isthiqaama />} />
          <Route path="/programs/qhls" element={<QHLS />} />
          <Route path="/programs/inspire" element={<Inspire />} />
          <Route path="/programs/eelaf" element={<Eelaf />} />
          <Route path="/programs/other" element={<Other />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
