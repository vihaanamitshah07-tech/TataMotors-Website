import { useState } from "react";
import { useBooking } from "../context/BookingContext";
import "./CarsSection.css";

const CARS = [
  { 
    name: "Sierra", 
    img: "/image/sierra3.jpeg", 
      tagline: "The legend returns with a modern soul",
    info: "The new Sierra blends iconic design with futuristic features, offering a premium SUV experience with advanced technology and comfort."
  },
  { 
    name: "Harrier", 
    img: "/image/HAR1.png", 
     tagline: "Power meets sophistication",
    info: "Harrier delivers a bold design, powerful performance, and premium interiors, making it perfect for both city drives and long journeys."
  },
  { 
    name: "Safari", 
    img: "/image/safari1.png", 
     tagline: "Reclaim your adventures",
    info: "Safari is a spacious and rugged SUV built for families and explorers, combining comfort, safety, and off-road capability."
  },
  { 
    name: "Nexon", 
    img: "/image/nexon.jpg", 
     tagline: "Level up your drive",
    info: "Nexon offers a stylish design, strong safety ratings, and efficient performance, making it one of the most popular compact SUVs."
  },
  { 
    name: "Punch", 
    img: "/image/Punch2.png", 
     tagline: "Small in size, big on confidence",
    info: "Punch is a micro SUV designed for city adventures, offering high ground clearance, safety, and a bold stance." 
  },
  { 
    name: "Curvv", 
    img: "/image/car.jpg", 
     tagline: "The future of SUVs is here",
    info: "Curvv combines coupe-inspired styling with electric-ready technology, delivering a futuristic and dynamic driving experience."
  },
   { 
    name: "Tiago", 
    img: "/image/Tiago.png", 
    tagline: "Fun that drives you",
    info: "Tiago is a practical and affordable hatchback with a sporty feel, offering great mileage and comfort for everyday use."
  },
   { 
    name: "Altroz", 
    img: "/image/altroz.jpg", 
    tagline: "The gold standard of hatchbacks",
    info: "Altroz stands out with its premium design, solid build quality, and comfortable ride, ideal for modern urban drivers."
  }
];

export default function CarsSection({ onBookClick }) {
  const [index, setIndex] = useState(0);
  const { updateBooking } = useBooking();

  const nextSlide = () => setIndex((prev) => (prev === CARS.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setIndex((prev) => (prev === 0 ? CARS.length - 1 : prev - 1));

  const handleBook = () => {
    updateBooking({ carName: CARS[index].name, carImg: CARS[index].img });
    onBookClick();
  };

  return (
    <section className="full-car-slider">
      <div className="slider-container">
        {CARS.map((car, i) => (
          <div key={i} className={`car-slide ${i === index ? "active" : ""}`}>
            <div className="bg-text">{car.name}</div>
            <div className="slide-content">
              <div className="car-details-panel">
                <p className="car-count">0{i + 1} / 0{CARS.length}</p>
                <h2 className="car-main-name">{car.name}</h2>
                <h3 className="car-tagline">{car.tagline}</h3>
                <p className="car-info-text">{car.info}</p>
              </div>
              <div className="car-image-panel">
                <img src={car.img} alt={car.name} className="floating-car" />
              </div>
            </div>
          </div>
        ))}
        <div className="slider-nav">
          <button className="nav-arrow" onClick={prevSlide}>PREV</button>
          <div className="divider"></div>
          <button className="nav-arrow" onClick={nextSlide}>NEXT</button>
        </div>
      </div>
    </section>
  );
}