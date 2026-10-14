import { Link } from "react-router";


const News = () => {
  const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mobile" },
    { id: 103, name: "Headphones" }
  ];

  return (
    <div className="page">
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <Link to={`/news/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default News;