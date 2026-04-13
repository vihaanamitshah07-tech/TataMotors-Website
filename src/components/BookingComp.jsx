import React, { useState } from "react";
import { useBooking } from "../context/BookingContext";
import "./BookingComp.css";
import "./TestDrive.css";

export default function BookingComp() {
  const { booking, updateBooking } = useBooking();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="success-icon">✓</div>
        <h3>Booking Confirmed!</h3>
        <p>
          Thank you! Our representative will call you shortly to confirm your 
          test drive for the <strong>{booking.carName}</strong>.
        </p>
        <button 
          className="confirm-btn" 
          onClick={() => window.location.reload()}
        >
          DONE
        </button>
      </div>
    );
  }

  return (
    <div className="booking-form-panel">
      <h3>Book Test Drive: <span className="car-highlight">{booking.carName}</span></h3>
      
      <form onSubmit={handleSubmit} className="testdrive-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={booking.userName}
              onChange={(e) => updateBooking({ userName: e.target.value })}
              required 
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter mobile number" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter email" 
              value={booking.userEmail}
              onChange={(e) => updateBooking({ userEmail: e.target.value })}
              required 
            />
          </div>
          <div className="form-group">
            <label>Model Selected</label>
            <input type="text" value={booking.carName} readOnly />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select City</label>
            <select required>
              <option value="">Choose City</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
              <option value="pune">Pune</option>
              <option value="bangalore">Bangalore</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Date</label>
            <input 
              type="date" 
              onChange={(e) => updateBooking({ date: e.target.value })}
              required 
            />
          </div>
        </div>

        <button type="submit" className="confirm-btn">
          CONFIRM APPOINTMENT
        </button>
      </form>
    </div>
  );
}