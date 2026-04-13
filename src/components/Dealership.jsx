import "./Dealership.css";

export default function Dealership() {
  const handleFindNow = () => {
    window.open("https://www.google.com/maps", "_blank");
  };

  return (
    <section className="dealership">
      <div className="overlay">
        <h2>Find Dealership</h2>
        <p>Locate your nearest Tata Motors showroom and experience our cars in person.</p>
        <button className="confirm-btn" onClick={handleFindNow}>Find Now →</button>
      </div>
    </section>
  );
}