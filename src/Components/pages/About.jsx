const About = () => {
  return (
    <div className="container w-5/6">
      <div
        className="section section-padding pb-0 "
        style={{ color: "black", textAlign: "left", marginTop: "50px" }}
      >
        <div className="row learts-mb-n30">
          <div className="col-md-6 col-12 align-self-center learts-mb-30 ">
            <div className="about-us3">
              <h2 className="title text-5xl mb-3">Gold Price </h2>
              <div className="desc">
                <p className="text-lg">
                  GOLD PRICE provides you with fast loading charts of the
                  current gold price per ounce, gram and kilogram in 160 major
                  currencies. We provide you with timely and accurate silver and
                  gold price commentary, gold price history charts for the past
                  1 days, 3 days, 30 days, 60 days, 1, 2, 5, 10, 15, 20, 30 and
                  up to 43 years. You can also find out where to buy gold coins
                  from gold dealers at the best gold price.
                </p>
                <p className="text-lg">
                  Gold Price’s media division is a precious metals, commodities and
                  mining global authority, generating and distributing
                  cutting-edge news, market insights and data to a global
                  audience. The Kitco brand resonates globally and our
                  information is consumed by millions on our web assets,
                  applications and social media channels.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 text-center learts-mb-30 ">
            <img
              src="https://investingnews.com/media-library/chart-showing-platinum-gold-and-silver-price-moves.jpg?id=27737078&width=1200&height=600&coordinates=0%2C42%2C0%2C42"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
