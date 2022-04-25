import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Alert from "./components/Layout/Alert";
import { GithubProvider } from "./context/GithubContext";
import { AlertProvider } from "./context/AlertContext";

function App() {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="container mx-auto px-3 pb-12">
                <Alert />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </>
  );
}

export default App;
