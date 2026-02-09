import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import App from "./App.tsx";
import CursorFollower from "./components/CursorFollower.tsx";
import { CursorProvider } from "./components/CursorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CursorProvider>
      <CursorFollower />
      <Header />
      <App />
      <Footer />
    </CursorProvider>
  </StrictMode>,
);
