import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, Navigation } from 'swiper/modules';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            title: "What an Experience!",
            review: "An unforgettable journey with Imara Kileleni Safaris, perfectly organized, knowledgeable guides, breathtaking wildlife, and warm hospitality throughout. Every detail exceeded expectations and created lifelong memories of Tanzania’s wild beauty.",
            name: "— Sarah M.",
            date: "January 2023",
            image: "./images/testimonials/testimonial-1.jpg"
        },
        {
            id: 2,
            rating: 5,
            title: "One of the Best Experiences of My Life! Memories Forever!",
            review: "Imara Kileleni Safaris delivered an exceptional safari experience, seamless logistics, luxury camps, and incredible game drives. The team’s professionalism and local knowledge made our adventure safe, inspiring, and memorable.",
            name: "— James K.",
            date: "January 2023",
            image: "./images/testimonials/testimonial-2.jpg"
        },
        {
            id: 3,
            rating: 5,
            title: "Amazing Mikumi!",
            review: "From start to finish, Imara Kileleni Safaris provided outstanding service, cultural insight, and unforgettable wildlife encounters. Our safari felt personal, well guided, and perfectly paced for relaxation and adventure.",
            name: "— Amina L.",
            date: "November 2022",
            image: "./images/testimonials/testimonial-3.jpg"
        }
    ];

    return (
        <section className="testimonial-section bg-theme-light py-lg-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="testimonial-card text-center">
                                        <div className="star-rating mb-4">
                                            {[...Array(testimonial.rating)].map((_, index) => (
                                                <span key={index} className="star">★</span>
                                            ))}
                                        </div>

                                        <h2 className="testimonial-title mb-4">
                                            "{testimonial.title}"
                                        </h2>

                                        <p className="testimonial-review mb-5">
                                            {testimonial.review}
                                        </p>

                                        <div className="author-info d-flex align-items-center">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="author-image rounded-circle"
                                            />
                                            <div className="author-details text-start ms-3">
                                                <h4 className="author-name mb-1">{testimonial.name}</h4>
                                                <p className="author-date mb-0">{testimonial.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial