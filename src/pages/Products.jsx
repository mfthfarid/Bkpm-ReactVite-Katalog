import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Our Products</h1>
          <p>Discover our amazing collection of products</p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">
                  Rp
                  {product.price.toLocaleString()}
                </p>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="empty-state">
            <p>No products available</p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
