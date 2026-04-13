import React, { useState } from "react";
import BookingComp from "./BookingComp";
import "./TestDrive.css";

const CARS = [
  { name: "Sierra", img: "/image/sierra.jpg" },
  { name: "Harrier", img: "/image/harrier.jpg" },
  { name: "Safari", img: "/image/safari.jpg" },
  { name: "Nexon", img: "/image/nexon.jpg" },
  { name: "Punch", img: "/image/Punch2.png" },
  { name: "Curvv", img: "/image/Cruv2.png" },
  { name: "Tiago", img: "/image/Tiago.png" },
  { name: "Altroz", img: "/image/altroz.jpg" }
];

export default function TestDrive() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <section className="testdrive-section" id="testdrive">
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/UqDI4Y8Hzr4?autoplay=1&mute=1&loop=1&playlist=UqDI4Y8Hzr4&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video-overlay"></div>
      </div>

      {!showBooking ? (
        <div className="testdrive-intro">
          <h2>Experience the Power</h2>
          <p>
            Don't just take our word for it. Get behind the wheel and feel the Tata Motors difference.
          </p>
          <button 
            className="main-book-btn" 
            onClick={() => setShowBooking(true)}
          >
            BOOK A TEST DRIVE NOW
          </button>
        </div>
      ) : (
        <div className="active-booking-container">
          <button 
            className="close-booking" 
            onClick={() => {
              setShowBooking(false);
              setSelectedCar(null);
            }}
          >
            ✕ Close
          </button>

          {!selectedCar ? (
            <>
              <h3>Select Your Car</h3>
              <div className="car-grid">
                {CARS.map((car) => (
                  <div 
                    key={car.name} 
                    className="car-card"
                    onClick={() => setSelectedCar(car.name)}
                  >
                    <img src={car.img} alt={car.name} />
                    <p>{car.name}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <BookingComp selectedCar={selectedCar} />
          )}
        </div>
      )}
    </section>
  );
}