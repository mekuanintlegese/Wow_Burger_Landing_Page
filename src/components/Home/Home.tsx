const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Eat Sleep And</p>

            <h5 className="h2 hero-title">
              Supper delicious Burger in Addis Ababa!
            </h5>

            <p className="hero-text">
              We make burgers so good, you'll never want to eat a boring old
              hamburger again.
            </p>

            <button className="btn">Book A Table</button>
          </div>

          <figure className="hero-banner">
            <img
              src="./assets/images/hero-banner-bg.png"
              width="820"
              height="716"
              alt=""
              aria-hidden="true"
              className="w-100 hero-img-bg"
            />

            <img
              src="./assets/images/hero-banner.png"
              width="700"
              height="637"
              loading="lazy"
              alt="Burger"
              className="w-100 hero-img"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Home;
