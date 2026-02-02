const Benefits = () => {
    const benefitsData = [
        {
            id: 1,
            title: "Local Safari Experts",
            image: "/images/benefits/transparent-prices.png",
            description:
                "We live here. We drive these roads, watch seasons shift, hear guides talk daily. That lived knowledge quietly influences routes, timing, lodge choices, and small decisions that often make the difference for travelers who notice.",
        },
        {
            id: 2,
            title: "Tailored Travel Planning",
            image: "/images/benefits/save-time.png",
            description:
                "No two travellers arrive the same. We listen first, then plan days that feel unforced, balancing drives, wildlife time, rest, and budgets without squeezing too much into each sunrise, or afternoon quietly unfolding naturally together.",
        },
        {
            id: 3,
            title: "Trusted Safari Operations",
            image: "/images/benefits/we-love-what-we-do.png",
            description:
                "Safaris work when small things don’t fail. Vehicles matter. Guides matter more. So we choose people and partners we trust, focusing on safety, clear communication, and steady support from arrival to farewell moments on journey.",
        },
        {
            id: 4,
            title: "Honest Local Pricing",
            image: "/images/benefits/our-experience.png",
            description:
                "We believe pricing should feel understandable, not awkward. Being based here lets us explain costs clearly, adjust options honestly, and match expectations with real value across budget, economy, and luxury safaris, without surprises later.",
        },
    ];

    return (
        <section className="benefits-section py-lg-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-lg-5 mb-1 text-center">
                        <h3 className="text-capitalize text-theme" style={{ letterSpacing: "1px", lineHeight: "1" }}>
                            Your Benefits
                        </h3>
                        <h2 className="text-uppercase">
                            Why Choose Imara Kileleni Safaris?
                        </h2>
                    </div>
                </div>

                <div className="row g-lg-4 g-2 mb-lg-4 mb-md-3 mb-2">
                    {benefitsData.map((benefit) => (
                        <div key={benefit.id} className="col-lg-6 col-md-6">
                            <div className="benefit-card d-flex align-items-lg-start">
                                <div className="benefit-icon-wrapper">
                                    <div className="benefit-icon">
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>

                                <div className="benefit-content">
                                    <h4 className="benefit-title">{benefit.title}</h4>
                                    <p className="benefit-description">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
