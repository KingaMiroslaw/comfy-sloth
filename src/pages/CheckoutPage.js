import styled from "styled-components";
import { PageHero } from "../components";
import { formatPrice } from "../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import GooglePayButton from "@google-pay/button-react";

const CheckoutPage = () => {
  const { cart, total_amount, shipping_fee } = useCartContext();
  const navigate = useNavigate();

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
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "USD",
              countryCode: "US",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
            navigate("/");
          }}
        />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
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
