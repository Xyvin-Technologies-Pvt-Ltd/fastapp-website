import HeroSection from '../../components/driverapp/HeroSection';
import MobileShowcaseSection from '../../components/driverapp/MobileShowcaseSection';
import DriverFeaturesSection from '../../components/driverapp/DriverFeatureSeaction';
import RequirementsSection from '../../components/driverapp/RequirementsSection';
import SafetySection from '../../components/driverapp/SafetySection';
import FAQSection from '../../components/driverapp/FAQSection';
import AppDownloadSection from '../../components/driverapp/AppDownloadSection';

const Driverapp = () => {
  return (
    <>
        <HeroSection />
        <MobileShowcaseSection />
        <DriverFeaturesSection />
        <RequirementsSection />
        <SafetySection />
        <FAQSection />
        <AppDownloadSection />
    </>
  );
};

export default Driverapp;