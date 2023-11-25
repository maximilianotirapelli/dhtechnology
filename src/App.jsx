// Shadcn dark mode provider
import { ThemeProvider } from "@/components/theme/ThemeProvider";
// Shadcn components
import { Toaster } from "@/components/ui/toaster";
// React Router
import { useLocation } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/Footer";

export default function App() {
  const location = useLocation();

  const isAdminPages = location.pathname.startsWith("/admin");

  const isUserPages = location.pathname.startsWith("/user");

  const isAuthPages = location.pathname.startsWith("/auth");

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen bg-[#F5F5FA] scroll-smooth">
        <Toaster />

        {/* En las páginas de login y register no muestra el Navbar */}
        {!isAdminPages && !isAuthPages && <Navbar />}

        {/* Main de la página */}
        <AppRouter />

        {/* En las páginas de login, register y admin no muestra el Footer */}
        {!isAdminPages && !isAuthPages && !isUserPages && <Footer />}
      </div>
    </ThemeProvider>
  );
}
