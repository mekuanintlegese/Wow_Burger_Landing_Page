import {
  IconCalendarEvent,
  IconLego,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";

const Blog = () => {
  return (
    <>
      <section className="section section-divider white blog" id="blog">
        <div className="container">
          <p className="section-subtitle">Latest Blog Posts</p>

          <h2 className="h2 section-title">
            This Is All About <span className="span">Foods</span>
          </h2>

          <p className="section-text">
            We make burgers so good, you'll never want to eat a boring old
            hamburger again.
          </p>

          <ul className="blog-list">
            <li>
              <div className="blog-card">
                <div className="card-banner">
                  <img
                    src={blog1}
                    width="600"
                    height="390"
                    loading="lazy"
                    alt="What Do You Think About Cheese Pizza Recipes?"
                    className="w-100"
                  />

                  <div className="badge">Pizza</div>
                </div>

                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <IconCalendarEvent
                        size={25}
                        strokeWidth={1}
                        color={"orange"}
                      />

                      <time className="meta-info">Jan 20 2023</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <IconLego size={25} strokeWidth={1} color={"orange"} />

                      <p className="meta-info">Mekuanint Legese</p>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      What Do You Think About Cheese Pizza Recipes?
                    </a>
                  </h3>

                  <p className="card-text">
                    Financial experts support or help you to to find out which
                    way you can raise your funds more...
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <IconArrowNarrowRight
                      size={25}
                      strokeWidth={1}
                      color={"yellow"}
                    />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <div className="card-banner">
                  <img
                    src={blog2}
                    width="600"
                    height="390"
                    loading="lazy"
                    alt="Making Chicken Strips With New Delicious Ingridents."
                    className="w-100"
                  />

                  <div className="badge">Burger</div>
                </div>

                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <IconCalendarEvent
                        size={25}
                        strokeWidth={1}
                        color={"orange"}
                      />
                      <time className="meta-info">Jan 04 2023</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <IconLego size={25} strokeWidth={1} color={"orange"} />
                      <p className="meta-info">Mekuanint Legese</p>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Making Chicken Strips With New Delicious Ingridents.
                    </a>
                  </h3>

                  <p className="card-text">
                    Financial experts support or help you to to find out which
                    way you can raise your funds more...
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <IconArrowNarrowRight
                      size={25}
                      strokeWidth={1}
                      color={"yellow"}
                    />
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <div className="card-banner">
                  <img
                    src={blog3}
                    width="600"
                    height="390"
                    loading="lazy"
                    alt="Innovative Hot Chessyraw Pasta Make Creator Fact."
                    className="w-100"
                  />

                  <div className="badge">Chicken</div>
                </div>

                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <IconCalendarEvent
                        size={25}
                        strokeWidth={1}
                        color={"orange"}
                      />

                      <time className="meta-info">Jan 10 2023</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <IconLego size={25} strokeWidth={1} color={"orange"} />
                      <p className="meta-info">Mekuanint Legese</p>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Innovative Hot Chessyraw Pasta Make Creator Fact.
                    </a>
                  </h3>

                  <p className="card-text">
                    Financial experts support or help you to to find out which
                    way you can raise your funds more...
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <IconArrowNarrowRight
                      size={25}
                      strokeWidth={1}
                      color={"yellow"}
                    />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Blog;
