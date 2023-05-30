import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();

  return (
    <div>
      {/* GridView component */}
      <h4>Grid View</h4>
    </div>
  );
};
export default ProductList;
