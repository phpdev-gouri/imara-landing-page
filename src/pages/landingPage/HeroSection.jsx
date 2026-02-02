const HeroSection = ({ scrollToParks }) => {
    return (
        <header className="hero-section-container position-relative text-white" >
            <div className="makklo_jsd">
                <div className="imara-landing-logo">
                    <img src="./images/imaralogo.png" alt="imara-logo" />
                </div>
            </div>
            <img
                src="/images/banner-image.webp"
                className="img-fluid w-100"
                alt="hero-img"
            />

            {/* dark overlay */}
            {/* <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            ></div> */}

            <div className="hero-text position-absolute top-50 start-50 translate-middle text-center">
                <h1 className="fw-bold text-uppercase text-center">
                    <span className="d-none d-sm-inline text-nowrap">
                        Plan Your Tanzania Safari Here
                    </span>

                    <span className="d-inline d-sm-none">
                        Plan Your Tanzania <br />
                        Safari Here
                    </span>
                </h1>

                <p className="fw-bold text-white mt-3">
                    Tailor-made safari journeys across Tanzania guided by timing landscapes and expertise.
                </p>

                <button
                    id="scrollDownButton"
                    className="scroll-button mt-3"
                    onClick={scrollToParks}
                >
                    ▼
                </button>
            </div>
        </header>
    );
};

export default HeroSection;