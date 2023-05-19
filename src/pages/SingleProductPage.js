import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { Loading, Error, PageHero } from "../components";
import { formatPrice } from "../utils/helpers";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id, fetchSingleProduct]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <div>
      <PageHero title={name} product={product} />
      <div>
        <Link to="/products">back to products</Link>
        <div>
          {/* ProductImages component */}
          <section>
            <h2>{name}</h2>
            {/* Stars component */}
            <h5>{formatPrice(price)}</h5>
            <p>{description}</p>
            <p>
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p>
              <span>SKU : </span>
              {sku}
            </p>
            <p>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {/* AddToCart component */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
