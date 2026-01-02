import AboutHero from '../../components/about/AboutHero';
import AboutSection from '../../components/about/AboutSection';
import HowWeWork from '../../components/about/HowWeWork';
import OurOfficeSection from '../../components/about/OurOfficeSection';
import AppDownloadSection from '../../components/driverapp/AppDownloadSection';

const About = () => {
    return (
        <div className="flex flex-col w-full">
            <AboutHero />
            <AboutSection />
            <OurOfficeSection />
            <HowWeWork />
            <AppDownloadSection />

        </div>
    );
};

export default About;