import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "./images/experiences/exp-fig-1.webp",
  "./images/experiences/exp-fig-2.webp",
  "./images/experiences/exp-fig-3.webp",
  "./images/experiences/exp-fig-4.webp",
  "./images/experiences/exp-fig-5.webp",
  "./images/experiences/exp-fig-6.webp",
  "./images/experiences/exp-fig-7.webp",
  "./images/experiences/exp-fig-8.webp",
  "./images/experiences/exp-fig-9.webp",
  "./images/experiences/exp-fig-10.webp",
];

const Experiences = () => {
  return (
    <section className="experiences-section py-lg-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-lg-4 text-center">
            <h2 className="text-capitalize">
              Moments From Our Safaris
            </h2>
            <p>
              Images capturing wildlife landscapes, lodges, people, and quiet details from real safari journeys across Tanzania
            </p>
          </div>
        </div>

        <div className="row g-2 mb-4 d-none d-md-flex">
          {images.map((img, index) => (
            <div
              key={index}
              className={`col-12 col-md-${index % 5 === 2 || index % 5 === 3 ? 3 : 2}`}
            >
              <div className="experience-img-wrapper fixed-height">
                <img src={img} alt="experience" />
              </div>
            </div>
          ))}
        </div>

        <div className="d-md-none">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="experience-img-wrapper fixed-height">
                  <img src={img} alt="experience" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Experiences;