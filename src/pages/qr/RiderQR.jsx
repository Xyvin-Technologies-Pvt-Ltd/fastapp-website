import { useEffect } from "react";

const RiderQR = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const androidUrl = "https://play.google.com/store/apps/details?id=com.xyvin.fastapp";
    const iosUrl = "https://apps.apple.com/in/app/fast-app-rider/id6754153644";

     if (/android/i.test(userAgent)) {
      window.location.href = androidUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = iosUrl;
    } else {
      // Optional: fallback for unsupported or desktop users
      console.log("Device not supported or fallback page");
    }
  }, []);

    return <p>Redirecting to your app store...</p>;
};

export default RiderQR;
