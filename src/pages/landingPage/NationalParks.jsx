import { forwardRef, useState, useEffect } from "react";
import { Check } from "lucide-react";

const NationalParks = forwardRef(({ onChange, scrollToPlanningDays }, ref) => {
    const [selectedParks, setSelectedParks] = useState([]);

    const parks = [
        {
            id: 1,
            name: "Serengeti",
            image: "/images/national-parks/serengeti.webp",
            description:
                "Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.",
        },
        {
            id: 2,
            name: "Tarangire",
            image: "/images/national-parks/tarangire.webp",
            description:
                "Known for ancient baobab trees, large elephant herds, seasonal river wildlife, quieter game drives, and excellent dry-season sightings.",
        },
        {
            id: 3,
            name: "Lake Manyara",
            image: "/images/national-parks/lake-manyara.webp",
            description:
                "A compact park featuring tree-climbing lions, birdlife, forested paths, groundwater lakes, and varied scenery within a short safari circuit.",
        },
        {
            id: 4,
            name: "Kilimanjaro",
            image: "/images/national-parks/kilimanjaro.jpg",
            description:
                "Africa’s highest mountain offering trekking routes, changing habitats, crater views, and a challenging climb for adventurous travellers.",
        },
        {
            id: 5,
            name: "Arusha",
            image: "/images/national-parks/arusha.webp",
            description:
                "A compact park featuring tree-climbing lions, birdlife, forested paths, groundwater lakes, and varied scenery within a short safari circuit.",
        },
        {
            id: 6,
            name: "Zanzibar",
            image: "/images/national-parks/zanzibar.jpg",
            description:
                "An island escape with white beaches, Swahili culture, historic Stone Town, spice farms, and relaxed coastal experiences after safari journeys.",
        },
        {
            id: 7,
            name: "Ngorongoro",
            image: "/images/national-parks/ngorongoro-crater.webp",
            description:
                "A volcanic caldera offering dense wildlife viewing, scenic viewpoints, black rhinos, flamingos, and short travel distances within the crater floor.",
        },
        {
            id: 8,
            name: "Not Sure / Other",
            image: "/images/national-parks/not-sure.webp",
            description:
                "Unsure where to go or considering something different? Share your ideas, and we’ll suggest destinations matching your interests and travel style.",
        }
    ];

    const handleParkClick = (parkName) => {
        setSelectedParks(prev => {
            const updated =
                prev.includes(parkName)
                    ? prev.filter(p => p !== parkName)
                    : [...prev, parkName];

            // scroll only when 1 park is selected
            if (updated.length > 0) {
                scrollToPlanningDays?.();
            }

            return updated;
        });
    };

    // sync to parent
    useEffect(() => {
        onChange(selectedParks);
        // console.log(selectedParks)
    }, [selectedParks, onChange]);

    return (
        <>
            <section className="national-parks-section py-lg-5 py-4 bg-theme-light" ref={ref}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-lg-4">
                            <h3 className="text-capitalize">
                                1. Which parts of Tanzania would you like to explore?
                            </h3>
                            <p>
                                Choose the national parks and regions that interest you most to help us design a Tanzania safari that matches your travel goals, pace, and experience.
                            </p>
                        </div>
                        {parks.map((park) => (
                            <div
                                key={park.id}
                                className="col-6 col-lg-3 mb-4 d-flex"
                            >
                                <div
                                    className={`card shadow d-flex flex-column park-card ${selectedParks.includes(park.name) ? 'selected' : ''}`}
                                    onClick={() => handleParkClick(park.name)}
                                >
                                    <div className="park-img-wrapper position-relative">
                                        <img
                                            src={park.image}
                                            className="w-100 park-img"
                                            alt={`${park.name} image`}
                                            style={{ objectFit: "cover" }}
                                        />

                                        {/* overlay layer when selected - only on image */}
                                        {selectedParks.includes(park.name) && (
                                            <div
                                                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                                style={{
                                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                    transition: "all 0.3s ease"
                                                }}
                                            >
                                                <div
                                                    className="tick-background">
                                                    <Check
                                                        className="check"
                                                        size={50}
                                                        strokeWidth={5}
                                                        style={{
                                                            color: "#d87028",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* card body with sliding layer effect */}
                                    <div className="park-card-body-wrapper">
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-center text-uppercase mb-3">
                                                {park.name}
                                            </h5>
                                            <p className="card-text">
                                                {park.description}
                                            </p>
                                        </div>

                                        {/* sliding overlay on card-body */}
                                        <div className="card-body-overlay">
                                            <div className="overlay-text-content">
                                                <h5 className="text-uppercase mb-2" style={{
                                                    fontSize: "1.1rem",
                                                    fontWeight: "600",
                                                    letterSpacing: "0.5px"
                                                }}>
                                                    {park.name}
                                                </h5>
                                                <p style={{
                                                    fontSize: "0.9rem",
                                                    lineHeight: "1.5",
                                                    margin: 0
                                                }}>
                                                    {park.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
});

export default NationalParks;