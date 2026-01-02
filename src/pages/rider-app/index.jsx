import HeroSection from '../../components/riderapp/HeroSection';
import MobileShowcaseSection from '../../components/riderapp/MobileShowSection';
import RiderFeaturesSection from '../../components/riderapp/RiderFeaturesSection';
import SafetySection from '../../components/driverapp/SafetySection';
import FAQSection from '../../components/riderapp/FAQSection';
import AppDownloadSection from '../../components/driverapp/AppDownloadSection';

const Riderapp = () => {
  return (
    <>
        <HeroSection />
        <MobileShowcaseSection />
        <RiderFeaturesSection />
        <SafetySection />
        <FAQSection />
        <AppDownloadSection />
    </>
  );
};

export default Riderapp;