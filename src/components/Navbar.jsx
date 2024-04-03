import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, handleLogOut }) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar" data-bs-theme="dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <NavLink className="custom-text" to="/">
              Ana Sayfa
            </NavLink>
            <NavLink className="custom-text" to="/products">
              Spor Dalları
            </NavLink>
            <NavLink className="custom-text" to="/faci">
              Tesislerimiz
            </NavLink>
            <NavLink className="custom-text" to="/users">
              Spor Tesisleri Kullanım Sayıları
            </NavLink>
            <NavLink className="custom-text" to="/about">
              Hakkımızda
            </NavLink>
            <NavLink className="custom-text" to="/record">
              Kayıt Formu
            </NavLink>
            <NavLink className="custom-text" to="/contact">
              İletişim
            </NavLink>
          </ul>
          <ul className="navbar-nav">
            {user ? (
              <>
                <button className="nav-link" onClick={handleLogOut}>
                  Çıkış Yap
                </button>
              </>
            ) : (
              <NavLink className="custom" to="/login">
                Giriş Yap
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
