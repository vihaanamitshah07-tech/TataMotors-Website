import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarsSection from "./components/CarsSection";
import Footer from "./components/Footer";
import BookingComp from "./components/BookingComp";
import Dealership from "./components/Dealership";
import TestDrive from "./components/TestDrive";
import "./App.css";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <div id="home">
        <Hero onBookClick={toggleBooking} />
      </div>

      <div id="explore">
        <CarsSection onBookClick={toggleBooking} /> 
      </div>

      <div id="dealership">
        <Dealership />
        <TestDrive />
      </div>

      {isBookingOpen && (
        <div className="modal-overlay" onClick={toggleBooking}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <BookingComp />
            <button 
              className="confirm-btn" 
              style={{ marginTop: '10px', background: '#666' }} 
              onClick={toggleBooking}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;