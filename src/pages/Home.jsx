import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ products }) => {
  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 3);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleExploreProducts = () => {
    navigate("/products");
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Welcome to ShopApp</h1>
              <p className="hero-subtitle">
                Discover amazing products with the best prices. Built with React
                Router for seamless navigation.
              </p>
              <div className="hero-actions">
                <button
                  onClick={handleExploreProducts}
                  className="btn btn-primary">
                  Explore Products
                </button>
                <Link to="/about" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">🛒</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose ShopApp?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Navigation</h3>
              <p>Instant page transitions with React Router</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful UI</h3>
              <p>Modern and responsive design</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure</h3>
              <p>Safe and reliable shopping experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/products" className="view-all-link">
              View All Products →
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => handleProductClick(product.id)}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    Rp
                    {product.price.toLocaleString()}
                  </p>
                  <p
                    className="product
category">
                    {product.category}
                  </p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div
                className="stat
number">
                {products.length}+
              </div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
