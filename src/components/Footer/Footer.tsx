import { IonIcon } from "@ionic/react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="" className="logo">
                WOW<span className="span">.</span>
              </a>

              <p className="footer-text">
                Financial experts support or help you to to find out which way
                you can raise your funds more.
              </p>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <IonIcon
                      name="logo-facebook"
                      size="large"
                      color="red"
                    ></IonIcon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IonIcon
                      name="logo-twitter"
                      size="large"
                      color="blue"
                    ></IonIcon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IonIcon
                      name="logo-instagram"
                      size="large"
                      color="purple"
                    ></IonIcon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <IonIcon
                      name="logo-pinterest"
                      size="large"
                      color="green"
                    ></IonIcon>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Info</p>
              </li>

              <li>
                <p className="footer-list-item">+251-932488734</p>
              </li>

              <li>
                <p className="footer-list-item">info@wowburger.com</p>
              </li>

              <li>
                <address className="footer-list-item">
                  Bole Medhanialem Alemnesh Plaza, Addis Ababa, Ethiopia
                </address>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Opening Hours</p>
              </li>

              <li>
                <p className="footer-list-item">Monday-Friday: 08:00-22:00</p>
              </li>

              <li>
                <p className="footer-list-item">Tuesday 4PM: Till Mid Night</p>
              </li>

              <li>
                <p className="footer-list-item">
                  Saturday: 6PM: Till Mid Night
                </p>
              </li>
            </ul>

            <form action="" className="footer-form">
              <p className="footer-list-title">Book a Table</p>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="input-field"
                />

                <input
                  type="email"
                  name="email_address"
                  required
                  placeholder="Email"
                  aria-label="Email"
                  className="input-field"
                />
              </div>

              <div className="input-wrapper">
                <select
                  name="total_person"
                  aria-label="Total person"
                  className="input-field"
                >
                  <option value="person">Person</option>
                  <option value="2 person">2 Person</option>
                  <option value="3 person">3 Person</option>
                  <option value="4 person">4 Person</option>
                  <option value="5 person">5 Person</option>
                </select>

                <input
                  type="date"
                  name="booking_date"
                  aria-label="Reservation date"
                  className="input-field"
                />
              </div>

              <textarea
                name="message"
                required
                placeholder="Message"
                aria-label="Message"
                className="input-field"
              ></textarea>

              <button type="submit" className="btn">
                Book a Table
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright-text">
              &copy; 2023 Mekuanint Legese.
              <a href="#" className="copyright-link"></a> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
