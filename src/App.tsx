import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes/routes";

import "./index.css";
import { AuthProvider } from "./firebase/auth-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthProvider>
        <div className="fixed bottom-10 right-10 z-50">
          <ModeToggle />
        </div>
        <RouterProvider router={routes} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
