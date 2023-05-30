import { Rating } from "@mantine/core";
import food1 from "../../assets/images/food-menu-1.png";
import food2 from "../../assets/images/food-menu-2.png";
import food3 from "../../assets/images/food-menu-3.png";
import food4 from "../../assets/images/food-menu-4.png";
import food5 from "../../assets/images/food-menu-5.png";
import food6 from "../../assets/images/food-menu-6.png";

const Shop = () => {
  return (
    <>
      <section className="section food-menu" id="food-menu">
        <div className="container">
          <p className="section-subtitle">Popular Dishes</p>

          <h2 className="h2 section-title">
            Our Delicious <span className="span">Foods</span>
          </h2>

          <p className="section-text">
            We make burgers so good, you'll never want to eat a boring old
            hamburger again.
          </p>

          <ul className="fiter-list">
            <li>
              <button className="filter-btn active">All</button>
            </li>

            <li>
              <button className="filter-btn">Pizza</button>
            </li>

            <li>
              <button className="filter-btn">Burger</button>
            </li>

            <li>
              <button className="filter-btn">Drinks</button>
            </li>

            <li>
              <button className="filter-btn">Sandwich</button>
            </li>
          </ul>

          <ul className="food-menu-list">
            <li>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img
                    src={food1}
                    width="300"
                    height="300"
                    loading="lazy"
                    alt="Fried Chicken Unlimited"
                    className="w-100"
                  />

                  <div className="badge">-15%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Chicken</p>

                  <div className="rating-wrapper">
                    <Rating defaultValue={4.5} readOnly />
                  </div>
                </div>

                <h3 className="h3 card-title">Fried Chicken Unlimited</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>

                  <data className="price">$49.00</data>

                  <del className="del">$69.00</del>
                </div>
              </div>
            </li>

            <li>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img
                    src={food2}
                    width="300"
                    height="300"
                    loading="lazy"
                    alt="Burger King Whopper"
                    className="w-100"
                  />

                  <div className="badge">-10%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Noddles</p>

                  <div className="rating-wrapper">
                    <Rating defaultValue={4.5} readOnly />
                  </div>
                </div>

                <h3 className="h3 card-title">Burger King Whopper</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>

                  <data className="price" value="29.00">
                    $29.00
                  </data>

                  <del className="del">$39.00</del>
                </div>
              </div>
            </li>

            <li>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img
                    src={food3}
                    width="300"
                    height="300"
                    loading="lazy"
                    alt="White Castle Pizzas"
                    className="w-100"
                  />

                  <div className="badge">-25%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Pizzas</p>

                  <div className="rating-wrapper">
                    <Rating defaultValue={4.5} readOnly />
                  </div>
                </div>

                <h3 className="h3 card-title">White Castle Pizzas</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">
                    $49.00
                  </data>

                  <del className="del">$69.00</del>
                </div>
              </div>
            </li>

            <li>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img
                    src={food4}
                    width="300"
                    height="300"
                    loading="lazy"
                    alt="Bell Burrito Supreme"
                    className="w-100"
                  />

                  <div className="badge">-20%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Burrito</p>

                  <div className="rating-wrapper">
                    <Rating defaultValue={4.5} readOnly />
                  </div>
                </div>

                <h3 className="h3 card-title">Bell Burrito Supreme</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>

                  <data className="price" value="59.00 ">
                    $59.00
                  </data>

                  <del className="del">$69.00</del>
                </div>
              </div>
            </li>

            <li>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img
                    src={food5}
                    width="300"
                    height="300"
                    loading="lazy"
                    alt="Kung Pao Chicken BBQ"
                    className="w-100"
                  />

                  <div className="badge">-5%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Nuggets</p>

                  <div className="rating-wrapper">
                    <Rating defaultValue={4.5} readOnly />
                  </div>
                </div>

                <h3 className="h3 card-title">Kung Pao Chicken BBQ</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">
                    $49.00
                  </data>

                  <del className="del">$69.00</del>
                </div>
              </div>
            </li>

            <li>
              <div className="food-menu-card">
                <div className="card-banner">
                  <img
                    src={food6}
                    width="300"
                    height="300"
                    loading="lazy"
                    alt="Wendy's Chicken"
                    className="w-100"
                  />

                  <div className="badge">-15%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Chicken</p>

                  <div className="rating-wrapper">
                    <Rating defaultValue={4.5} readOnly />
                  </div>
                </div>

                <h3 className="h3 card-title">Wendy's Chicken</h3>

                <div className="price-wrapper">
                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">
                    $49.00
                  </data>

                  <del className="del">$69.00</del>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Shop;
