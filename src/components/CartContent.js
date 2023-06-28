import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className="section section-center">
      {/* Cart Columns component */}
      <h2>Cart Columns</h2>
      {cart.map((item) => {
        // Cart Item component
        return (
          <h2 key={item.id} {...item}>
            Cart Item
          </h2>
        );
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      {/* Cart Total component */}
      <h2>Cart Total</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
