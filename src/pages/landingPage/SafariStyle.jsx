import { useState, forwardRef } from "react";
import { Check } from "lucide-react";

const SafariStyle = forwardRef(
    ({ scrollToPlanningSafari, onChange }, ref) => {
        const [selectedStyle, setSelectedStyle] = useState(null);

        const safariStyles = [
            { id: 1, name: "Budget", image: "/images/safari-style/budget.webp" },
            { id: 2, name: "Economy", image: "/images/safari-style/economy.webp" },
            { id: 3, name: "Luxury", image: "/images/safari-style/luxury.webp" },
            { id: 4, name: "Not decided yet", image: "/images/safari-style/not-decided.webp" },
        ];

        const handleStyleClick = (style) => {
            setSelectedStyle(style.id);  // ui state
            onChange(style.name);        // send to parent
            // console.log(style.name)
            scrollToPlanningSafari();    // keep behavior
        };

        const isStyleSelected = (styleId) => selectedStyle === styleId;

        return (
            <section className="safari-style-section py-lg-5 py-4 bg-theme-light" ref={ref}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-lg-4">
                            <h3 className="text-capitalize">
                                3. What kind of safari suits you?
                            </h3>
                            <p>
                                Select the safari style you prefer from budget economy or luxury options, or choose not to decide if you would like guidance.
                            </p>
                        </div>

                        {safariStyles.map((style) => (
                            <div key={style.id} className="col-6 col-lg-3 mb-4 d-flex">
                                <div
                                    className={`card shadow park-card d-flex flex-column ${isStyleSelected(style.id) ? "selected" : ""
                                        }`}
                                    onClick={() => handleStyleClick(style)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {/* IMAGE */}
                                    <div className="park-img-wrapper position-relative">
                                        <img
                                            src={style.image}
                                            className="card-img-top park-img"
                                            alt={style.name}
                                        />

                                        {isStyleSelected(style.id) && (
                                            <div
                                                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                                            >
                                                <div
                                                    className="tick-background">
                                                    <Check className="check" size={50} strokeWidth={4} color="#d87028" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="park-card-body-wrapper">
                                        <div className="card-body d-flex align-items-center justify-content-center">
                                            <h5 className="card-title text-uppercase mb-0">{style.name}</h5>
                                        </div>

                                        <div className="card-body-overlay">
                                            <div className="overlay-text-content">
                                                <h5 className="text-uppercase mb-0">{style.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
);

export default SafariStyle;
