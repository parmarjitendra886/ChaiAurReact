import { useParams } from "react-router";

const NewsSingle = () => {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}
export default NewsSingle;