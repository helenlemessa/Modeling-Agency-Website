import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./Components/Navbar";
import Main1 from "./Components/Main1";
import Showmodels from "./Components/Showmodels";
import Article from "./Components/Article";
import Footer from "./Components/Footer";
import ModelsPage from "./Components/ModelsPage";
import Testimonials from "./Components/Testimonials";
import Signup from "./Components/Signup";
import Login from "./components/Login";
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const mainRef = useRef(null);
  const modelsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const articleRef = useRef(null);

  // Ensure pathname comparison is case insensitive
  const isSignupPage = location.pathname.toLowerCase() === "/signup";

  return (
    <div className="flex flex-col min-h-screen">
      {!isSignupPage && (
        <Navbar
          mainRef={mainRef}
          modelsRef={modelsRef}
          testimonialsRef={testimonialsRef}
          articleRef={articleRef}
        />
      )}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={mainRef}>
                  <Main1 />
                </div>
                <div ref={modelsRef}>
                  <Showmodels />
                </div>
                <div ref={articleRef}>
                  <Article />
                </div>
                <div ref={testimonialsRef}>
                  <Testimonials />
                </div>
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/models" element={<ModelsPage />} />
        </Routes>
      </div>
      {!isSignupPage && <Footer />}
    </div>
  );
}
