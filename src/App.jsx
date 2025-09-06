import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// App.jsx
function App() {
  return (
    <Router>
      {/* Use dvh for mobile address-bar quirks */}
      <div className="flex min-h-dvh flex-col bg-zinc-950">
        <Navbar />
        {/* Let pages set their own background; main just flexes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
