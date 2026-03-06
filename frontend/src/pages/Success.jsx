import { Link } from "react-router-dom";
import "./Success.css";

function Success() {
  return (
    <div className="success-page">
      <div className="success-card">
        <h1>Payment Successful 🎉</h1>
        <p>Your order has been placed successfully.</p>
        <p>
          Your groceries are on their way. Tiny delivery warriors have been
          dispatched.
        </p>

        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Success;
