import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { showCheckout: false };
  }
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} items in your cart
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      ${item.price} x {item.count}{" "}
                      <button
                        onClick={() => this.props.removeFromCart(item)}
                        className="button"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total: ${cartItems.reduce((a, c) => a + c.price * c.count, 0)}
                </div>
                <button
                  onClick={this.setState({ showCheckout: true })}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
