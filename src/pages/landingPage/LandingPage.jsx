import Benefits from './Benefits';
import Testimonial from './Testimonial';
import Experiences from './Experiences';
import FooterBar from './FooterBar';
import Footer from './Footer';
import LandingForm from './LandingForm';

function LandingPage() {
    return (
        <>
            <LandingForm />
            <Benefits />
            <Testimonial />
            <Experiences />
            <FooterBar />
            <Footer />
        </>
    );
}

export default LandingPage
