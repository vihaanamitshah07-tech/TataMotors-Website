import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>TATA</h3>
          <p>Driving innovation & sustainability</p>
        </div>
        <div>
          <h4>Tata Cars</h4>
          <ul>
            <li>Nexon</li>
            <li>Harrier</li>
            <li>Curvv</li>
            <li>Sierra</li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li>Service</li>
            <li>Locate Dealer</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Tata Motors | All Rights Reserved
      </div>
    </footer>
  );
}