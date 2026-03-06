import { useNavigate } from "react-router-dom";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeItem }) {
  const navigate = useNavigate();

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-section">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price} each</p>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span className="qty-value">{item.quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-right">
                <p className="cart-subtotal">₹{item.price * item.quantity}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          <hr />
          <h3 className="total">Total: ₹{totalCost}</h3>

          <button className="checkout-btn" onClick={() => navigate("/payment")}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
