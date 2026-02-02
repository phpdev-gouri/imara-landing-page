import { forwardRef, useState } from "react";
import { Check } from "lucide-react";

const PlanningDays = forwardRef(
    ({ scrollToSafariStyle, onChange }, ref) => {
        const [selectedDay, setSelectedDay] = useState(null);

        const days = [
            {
                id: 1,
                name: "4 to 6 Days",
                image: "/images/planning-days/4-6-days.webp"
            },
            {
                id: 2,
                name: "6 to 8 Days",
                image: "/images/planning-days/6-8-days.webp"
            },
            {
                id: 3,
                name: "8 to 10 Days",
                image: "/images/planning-days/8-10-days.webp"
            },
            {
                id: 4,
                name: "12+ Days",
                image: "/images/planning-days/12-plus-days.webp"
            }
        ];

        const handleDayClick = (day) => {
            setSelectedDay(day.id);   // ui state
            onChange(day.name);       // send to parent
            // console.log(day.name)
            scrollToSafariStyle();    // keep existing behavior
        };

        const isDaySelected = (dayId) => selectedDay === dayId;

        return (
            <section ref={ref} className="planning-days-section py-lg-5 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-lg-4">
                            <h3 className="text-capitalize">
                                2. How long do you want to travel?
                            </h3>
                            <p>
                                Tell us how many days you have available so we can plan distances, wildlife viewing, rest time, and logistics for a smooth Tanzania safari.
                            </p>
                        </div>

                        {days.map((day) => (
                            <div
                                key={day.id}
                                className="col-6 col-lg-3 mb-4 d-flex"
                            >
                                <div
                                    className={`card shadow park-card d-flex flex-column ${isDaySelected(day.id) ? "selected" : ""
                                        }`}
                                    onClick={() => handleDayClick(day)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="park-img-wrapper position-relative">
                                        <img
                                            src={day.image}
                                            className="card-img-top park-img"
                                            alt={`${day.name} image`}
                                        />

                                        {/* image overlay with tick */}
                                        {isDaySelected(day.id) && (
                                            <div
                                                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                                style={{
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    transition: "all 0.3s ease"
                                                }}
                                            >
                                                <div
                                                    className="tick-background"

                                                >
                                                    <Check className="check" size={50} strokeWidth={4} style={{ color: "#d87028" }} />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="park-card-body-wrapper">
                                        <div className="card-body d-flex flex-column justify-content-center">
                                            <h5 className="card-title text-center text-uppercase">
                                                {day.name}
                                            </h5>
                                        </div>

                                        <div className="card-body-overlay">
                                            <div className="overlay-text-content">
                                                <h5 className="text-uppercase">{day.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
)
export default PlanningDays;
