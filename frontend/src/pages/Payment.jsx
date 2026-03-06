import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment({ cart, clearCart }) {
  const navigate = useNavigate();

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handlePayment = (e) => {
    e.preventDefault();

    // mock payment success
    clearCart();
    navigate("/success");
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Mock Payment</h1>
        <p className="payment-subtitle">Complete your order securely</p>

        <div className="payment-summary">
          <h3>Order Summary</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="payment-item">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))
          )}
          <hr />
          <h2>Total: ₹{totalCost}</h2>
        </div>

        <form onSubmit={handlePayment} className="payment-form">
          <input type="text" placeholder="Card Holder Name" required />
          <input
            type="text"
            placeholder="Card Number"
            maxLength="16"
            required
          />
          <div className="payment-row">
            <input type="text" placeholder="MM/YY" required />
            <input type="password" placeholder="CVV" maxLength="3" required />
          </div>

          <button
            type="submit"
            className="pay-btn"
            disabled={cart.length === 0}
          >
            Pay ₹{totalCost}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
