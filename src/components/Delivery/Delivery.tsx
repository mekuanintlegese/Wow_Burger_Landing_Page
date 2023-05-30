import bgImage1 from "../../assets/images/delivery-banner-bg.png";
import bgImage2 from "../../assets/images/delivery-boy.svg";

const Delivery = () => {
  return (
    <>
      <section className="section section-divider gray delivery">
        <div className="container">
          <div className="delivery-content">
            <h2 className="h2 section-title">
              A Moments Of Delivered On <span className="span">Right Time</span>{" "}
              & Place
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

            <button className="btn btn-hover">Order Now</button>
          </div>

          <figure className="delivery-banner">
            <img
              src={bgImage1}
              width="700"
              height="602"
              loading="lazy"
              alt="clouds"
              className="w-100"
            />

            <img
              src={bgImage2}
              width="1000"
              height="880"
              loading="lazy"
              alt="delivery boy"
              className="w-100 delivery-img"
              data-delivery-boy
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Delivery;
