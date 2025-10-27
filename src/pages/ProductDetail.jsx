import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ProductDetail.css";
const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by ID
  const product = products.find((p) => p.id === parseInt(id));

  // Handle back navigation
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleGoToProducts = () => {
    navigate("/products");
  };

  // If product not found
  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <div className="actions">
              <button
                onClick={handleBack}
                className="btn btn
secondary">
                ← Go Back
              </button>
              <button
                onClick={handleGoToProducts}
                className="btn 
btn-primary">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/products">Products</Link>
          <span> / </span>
          <span>{product.name}</span>
        </nav>

        {/* Product Detail Content */}
        <div className="detail-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <h1>{product.name}</h1>
              <p
                className="product
category">
                {product.category}
              </p>
              <p className="product-price">
                Rp
                {product.price.toLocaleString()}
              </p>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            {product.features && (
              <div className="product-features">
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="product-actions">
              <button className="btn btn-primary btn-large">Add to Cart</button>
              <button className="btn btn-secondary">❤️ Wishlist</button>
            </div>
            {/* Navigation Buttons */}
            <div className="navigation-actions">
              <button
                onClick={handleBack}
                className="btn btn
outline">
                ← Back
              </button>
              <Link to="/products" className="btn btn-outline">
                View All Products
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="related-products">
          <h2>Related Products</h2>
          <div className="related-grid">
            {products
              .filter(
                (p) => p.id !== product.id && p.category === product.category
              )
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="related-card">
                  <div className="related-image">
                    <img src={relatedProduct.image} alt={relatedProduct.name} />
                  </div>
                  <div className="related-info">
                    <h4>{relatedProduct.name}</h4>
                    <p>
                      Rp
                      {relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
