import { useRef, useState } from "react";
import HeroSection from './HeroSection';
import NationalParks from './NationalParks';
import PlanningDays from './PlanningDays';
import SafariStyle from './SafariStyle';
import PlanningSafari from './PlanningSafari';
import ContactInformation from './ContactInformation';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LandingForm = () => {
    const parksRef = useRef(null);
    const planningDaysRef = useRef(null);
    const safariStyleRef = useRef(null);
    const planningSafariRef = useRef(null);
    const contactInfoRef = useRef(null);
    const [submitError, setSubmitError] = useState("");
    const navigate = useNavigate();

    // central form state
    const [formData, setFormData] = useState({
        parks: [],
        planningDays: "",
        safariStyle: "",
        travelDate: null,
        contact: {}
    });

    const validateBeforeSubmit = (contactData) => {

        if (!formData.parks || formData.parks.length === 0) {
            return { message: "Error ! Please Check Which Parks Do You Want To Visit...!!!!!!", scroll: false };
        }

        if (!formData.planningDays) {
            return { message: "Error ! Please Check How Many Days Of Safari Are You Planning...!!!!!!", scroll: false };
        }

        if (!formData.safariStyle) {
            return { message: "Error ! Please Check What Type Of Tanzania Safari Are You Looking For...!!!!!!", scroll: false };
        }

        if (!formData.travelDate) {
            return { message: "Error ! Please Choose When You Are Planning For The Safari...!!!!!!", scroll: false };
        }

        // contact section errors 
        if (!contactData.fullName) {
            return { message: "Error ! Please Enter Your Full Name...!!!!!!", scroll: false };
        }

        if (!contactData.email) {
            return { message: "Error ! Please Enter Your Email Address...!!!!!!", scroll: false };
        }

        if (!contactData.countryCode) {
            return { message: "Error ! Please Select Country Code...!!!!!!", scroll: false };
        }

        if (!contactData.phone) {
            return { message: "Error ! Please Enter Phone Number...!!!!!!", scroll: false };
        }

        if (!contactData.people) {
            return { message: "Error ! Please Enter Number Of People...!!!!!!", scroll: false };
        }

        return null; // all good
    };

    const updateFormData = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleFinalSubmit = (contactData) => {
        const error = validateBeforeSubmit(contactData);

        if (error) {
            setSubmitError(error.message);

            if (error.scroll) {
                contactInfoRef.current?.scrollIntoView({ behavior: "smooth" });
            }

            return;
        }

        setSubmitError("");

        const finalData = {
            ...formData,
            contact: contactData,
        };

        // console.log("FINAL FORM DATA", finalData);
        toast.success("Your Information Submitted Successfully.");

        // redirect after short delay
        setTimeout(() => {
            navigate("/thank-you");
        }, 2500);
    };

    return (
        <>
            <HeroSection scrollToParks={() => parksRef.current?.scrollIntoView({ behavior: "smooth" })} />

            <NationalParks
                ref={parksRef}
                onChange={(parks) => updateFormData("parks", parks)}
                scrollToPlanningDays={() => planningDaysRef.current?.scrollIntoView({ behavior: "smooth" })}
            />

            <PlanningDays
                ref={planningDaysRef}
                onChange={(day) => updateFormData("planningDays", day)}
                scrollToSafariStyle={() =>
                    safariStyleRef.current?.scrollIntoView({ behavior: "smooth" })
                }
            />

            <SafariStyle
                ref={safariStyleRef}
                onChange={(style) => updateFormData("safariStyle", style)}
                scrollToPlanningSafari={() => planningSafariRef.current?.scrollIntoView({ behavior: "smooth" })}
            />

            <PlanningSafari
                ref={planningSafariRef}
                onChange={(date) => updateFormData("travelDate", date)}
                scrollToContactInformation={() => contactInfoRef.current?.scrollIntoView({ behavior: "smooth" })}
            />

            <ContactInformation ref={contactInfoRef} onSubmit={handleFinalSubmit} submitError={submitError} />
        </>
    );
};

export default LandingForm;
