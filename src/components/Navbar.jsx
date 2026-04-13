import { useState, useEffect } from "react";
import "./Navbar.css";

const CAR_DATABASE = [
  { 
    name: "Sierra", 
    img: "/image/sierra1.jpeg", 
    desc: "The legend returns.", 
    details: "400km range, futuristic EV technology, and a premium lounge-like cabin experience." 
  },
  { 
    name: "Harrier", 
    img: "/image/harrier.jpg", 
    desc: "Power meets sophistication.", 
    details: "Kryotec 170PS engine, ADAS safety suite, and refined premium interiors." 
  },
  { 
    name: "Safari", 
    img: "/image/safari.jpg", 
    desc: "Reclaim your adventures.", 
    details: "Spacious 7-seater, panoramic sunroof, ventilated seats, and strong road presence." 
  },
  { 
    name: "Nexon", 
    img: "/image/nexon.jpg", 
    desc: "Level up your drive.", 
    details: "5-star safety rating, modern digital cockpit, and efficient performance." 
  },
  { 
    name: "Punch", 
    img: "/image/Punch1.jpg", 
    desc: "Small in size, big on confidence.", 
    details: "High ground clearance, rugged design, and perfect for city adventures." 
  },
  { 
    name: "Curvv", 
    img: "/image/Cruv2.png", 
    desc: "The future of SUVs.", 
    details: "Coupe-inspired styling, large touchscreen, and next-gen EV-ready platform." 
  },
  { 
    name: "Tiago", 
    img: "/image/Tiago.png", 
    desc: "Fun that drives you.", 
    details: "Compact hatchback with great mileage, smart infotainment, and daily usability." 
  },
  { 
    name: "Altroz", 
    img: "/image/altroz.jpg", 
    desc: "The gold standard of hatchbacks.", 
    details: "Premium design, solid build quality, and a smooth comfortable ride." 
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const results = searchQuery.trim() === "" 
    ? [] 
    : CAR_DATABASE.filter(car => car.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // HANDLE SELECTION
  const handleCarSelect = (car) => {
    console.log("Information triggered for:", car.name); 
    setSelectedCar(car);
    setSearchQuery(""); // Clear search bar
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-active" : ""}`}>
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          TATA <span>MOTORS</span>
        </div>
        
        <ul className="navbar-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('explore')}>Explore</li>
          <li onClick={() => scrollToSection('dealership')}>Showrooms</li>
        </ul>

        <div className="navbar-right">
          <div className="search-wrapper">
          <div className="navbar-search">
  <input 
    type="text" 
    placeholder="Search car..." 
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <span className="search-icon">🔍</span>
</div>

            {results.length > 0 && (
              <div className="search-dropdown">
                {results.map((car, index) => (
                  <div key={index} className="result-card" onClick={() => handleCarSelect(car)}>
                    <img src={car.img} alt={car.name} />
                    <span>{car.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="book-btn" onClick={() => scrollToSection('testdrive')}>
          BOOK NOW 
          </button>
        </div>
      </nav>

      {/* MODAL - Moved outside <nav> to prevent clipping but inside the component */}
      {selectedCar && (
        <div className="search-modal-overlay" onClick={() => setSelectedCar(null)}>
          <div className="search-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-x" onClick={() => setSelectedCar(null)}>×</button>
            <img src={selectedCar.img} alt={selectedCar.name} className="modal-hero-img" />
            <div className="modal-info-box">
              <h2>{selectedCar.name}</h2>
              <h4 className="modal-tagline">{selectedCar.desc}</h4>
              <p className="modal-details-text">{selectedCar.details}</p>
              <button className="modal-close-btn" onClick={() => setSelectedCar(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}