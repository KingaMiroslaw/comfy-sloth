import styled from "styled-components";
import { PageHero } from "../components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
  const { cart, total_amount, shipping_fee } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <article className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </article>
        ) : (
          <article>
            <h3>Payment</h3>
            <hr />
            <h4>
              Order total:
              <span> {formatPrice(total_amount + shipping_fee)}</span>
            </h4>
          </article>
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5 {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  h4 {
    margin-top: 2rem;
  }
  .empty {
    text-align: center;
    border: none;
  }
`;

export default CheckoutPage;
