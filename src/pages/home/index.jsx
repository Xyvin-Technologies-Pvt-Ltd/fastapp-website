import HeroSection from '../../components/home/HeroSection';
import BenefitsSection from '../../components/home/BenefitsSection';
import FeatureSection from '../../components/home/FeatureSection';
import AppShowcaseSection from '../../components/home/AppShowcaseSection';
import DownloadSection from '../../components/driverapp/AppDownloadSection';
import MobileShowcaseSection from '../../components/home/MobileSecton';
import FastAppWorks from '../../components/home/FastAppWorks';
import WhatsAppButton from '../../components/WhatsAppButton';

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <HeroSection />
            <BenefitsSection />
            <MobileShowcaseSection />
            <FeatureSection />
            <AppShowcaseSection />
            <FastAppWorks />
            <DownloadSection />
            <WhatsAppButton />
        </div>
    );
};

export default Home;
