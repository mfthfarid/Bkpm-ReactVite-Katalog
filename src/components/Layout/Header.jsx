import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "🏠 Home", name: "home" },
    { path: "/products", label: "📦 Products", name: "products" },
    { path: "/about", label: "ℹ️ About", name: "about" },
  ];

  const isActiveLink = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="layout">
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-container">
            {/* Logo */}
            <Link to="/" className="logo">
              <span>🛍️</span>
              ShopApp
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${
                    isActiveLink(item.path) ? "active" : ""
                  }`}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  isActiveLink(item.path) ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 ShopApp. Built with React Router.</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
