import { IonIcon } from "@ionic/react";
import banner from "../../assets/images/about-banner.png";
import icon from "../../assets/images/sale-shape-red.png";

export const About = () => {
  return (
    <>
      <section className="section section-divider gray about" id="about">
        <div className="container">
          <div className="about-banner">
            <img
              src={banner}
              width="509"
              height="459"
              loading="lazy"
              alt="Burger with Drinks"
              className="w-100 about-img"
            />

            <img
              src={icon}
              width="216"
              height="226"
              alt="get up to 50% off now"
              className="abs-img scale-up-anim"
            />
          </div>

          <div className="about-content">
            <h2 className="h2 section-title">
              WOW Burgers, and Best Pizzas
              <span className="span">in Addis Ababa!</span>
            </h2>

            <p className="section-text">
              WOW Burger is a burger company based in Ethiopia and Addis Ababa.
              We are committed to providing our customers with the best possible
              burger experience. Our burgers are made with fresh, high-quality
              ingredients and are cooked to perfection. We also offer a wide
              variety of toppings and sauces to choose from. Whether you are a
              burger lover or just looking for a delicious meal, WOW Burger is
              the place for you.
            </p>
            <ul className="about-list">
              <li className="about-item">
                <IonIcon name="checkmark-outline"></IonIcon>
                <span className="span">Delicious & Healthy Foods</span>
              </li>

              <li className="about-item">
                <IonIcon name="checkmark-outline"></IonIcon>
                <span className="span">Spacific Family And Kids Zone</span>
              </li>

              <li className="about-item">
                <IonIcon name="checkmark-outline"></IonIcon>
                <span className="span">Music & Other Facilities</span>
              </li>

              <li className="about-item">
                <IonIcon name="checkmark-outline"></IonIcon>
                <span className="span">Fastest Food Home Delivery</span>
              </li>
            </ul>

            <button className="btn btn-hover">Order Now</button>
          </div>
        </div>
      </section>
    </>
  );
};
