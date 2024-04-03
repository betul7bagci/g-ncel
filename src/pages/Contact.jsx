import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-5">
          <h1 className="contact-text">İletişim</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className=" prgraf-text text-center mx-3">
            Sizden haber almayı çok isteriz! İstek ve şikayetleriniz için lütfen
            iletişime geçin...
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="prgraf-text form-label">
                İsim
              </label>
              <input type="text" className="form-control form-box" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="prgraf-text form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control form-box"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="prgraf-text form-label">
                Mesajınız
              </label>
              <textarea
                className="form-control form-box"
                id="message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
