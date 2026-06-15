import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieBanner from "./components/CookieBanner";
import MainHome from "./pages/MainHome";
import Home from "./pages/Home";
import S2Home from "./pages/S2Home";
import Privacidad from "./pages/Privacidad";
import AvisoLegal from "./pages/AvisoLegal";
import Cookies from "./pages/Cookies";
import Condiciones from "./pages/Condiciones";

function usePageKeys() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "PageDown") {
        e.preventDefault();
        window.scrollBy(0, window.innerHeight * 0.9);
      } else if (e.key === "PageUp") {
        e.preventDefault();
        window.scrollBy(0, -window.innerHeight * 0.9);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={MainHome} />
      <Route path={"/diagnostico-financiero-pyme"} component={Home} />
      <Route path={"/direccion-financiera-mensual"} component={S2Home} />
      <Route path={"/privacidad"} component={Privacidad} />
      <Route path={"/aviso-legal"} component={AvisoLegal} />
      <Route path={"/cookies"} component={Cookies} />
      <Route path={"/condiciones"} component={Condiciones} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  usePageKeys();
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
