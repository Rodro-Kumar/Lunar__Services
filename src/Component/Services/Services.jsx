import React from "react";
import "../Services/Services.css";
import Card from "../../CommonComponent/Card/Card";
import Button from "../../CommonComponent/Button/Button";
import img from "../../assets/startup.png";
import promotion from "../../assets/promotion.png";
import writer from "../../assets/writer.png";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="services__wraper">
            <Card Classname="main__box" card__img={promotion}>
              <Button btnStyle="card__main__btn">
                Book a free 30 minute meeting
              </Button>
            </Card>
            <Card Classname="main__box" card__img={promotion}>
              <Button btnStyle="card__main__btn">
                Book a free 30 minute meeting
              </Button>
            </Card>
            <Card
              CardTitle="Search Engine Optimization"
              CardDetail="Search engine optimization is the process behind the making your website easy to find. Our SEO experts will help you rank higher in search engines and drive more traffic to your site organically. This is the bread and butter of better marketing, where you can influence how many sales can be generated for a lower cost. We make sure your content is aligned with the requirements of SEO."
              Classname="main__box"
              card__img={img}
            >
              <Button btnStyle="card__main__btn">
                Book a free 30 minute meeting
              </Button>
            </Card>
            <Card
              CardTitle="Web Content"
              CardDetail="Do you need a content update on your site? Perhaps you are adding information to your website or building it from scratch? Professionally created web content, which is highly informative, well structured, and optimized for search engines is crucial for any web page. These factors not only make the content look great, but are also important for a high ranking among the search results"
              Classname="main__box"
              card__img={writer}
            >
              <Button btnStyle="card__main__btn">
                Book a free 30 minute meeting
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
