import { Rating } from "@mantine/core";
import image1 from "../../assets/images/avatar-1.jpg";
import image2 from "../../assets/images/avatar-2.jpg";
import image3 from "../../assets/images/avatar-3.jpg";
const Testimonials = () => {
  return (
    <>
      <section className="section section-divider white testi">
        <div className="container">
          <p className="section-subtitle">Testimonials</p>

          <h2 className="h2 section-title">
            Our Customers <span className="span">Reviews</span>
          </h2>

          <p className="section-text">
            We make burgers so good, you'll never want to eat a boring old
            hamburger again.
          </p>

          <ul className="testi-list has-scrollbar">
            <li className="testi-item">
              <div className="testi-card">
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img
                      src={image1}
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Mekuanint Legese"
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Mekuanint Legese</h3>

                    <p className="testi-title">Customer</p>
                  </div>
                </div>

                <blockquote className="testi-text">
                  "I would be lost without restaurant. I would like to
                  personally thank you for your outstanding product."
                </blockquote>

                <div className="rating-wrapper">
                  <Rating defaultValue={4.5} readOnly />
                </div>
              </div>
            </li>

            <li className="testi-item">
              <div className="testi-card">
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img
                      src={image2}
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Mekuanint Legese"
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Mekuanint Legese</h3>

                    <p className="testi-title">Customer</p>
                  </div>
                </div>

                <blockquote className="testi-text">
                  "I would be lost without restaurant. I would like to
                  personally thank you for your outstanding product."
                </blockquote>

                <div className="rating-wrapper">
                  <Rating defaultValue={4.5} readOnly />
                </div>
              </div>
            </li>

            <li className="testi-item">
              <div className="testi-card">
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img
                      src={image3}
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Mekuanint Legese"
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Mekuanint Legese</h3>

                    <p className="testi-title">Customer</p>
                  </div>
                </div>

                <blockquote className="testi-text">
                  "I would be lost without restaurant. I would like to
                  personally thank you for your outstanding product."
                </blockquote>

                <div className="rating-wrapper">
                  <Rating defaultValue={4.5} readOnly />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
