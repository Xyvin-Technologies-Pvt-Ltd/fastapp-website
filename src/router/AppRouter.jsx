import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/home';
import About from '../pages/about';
import RiderApp from '../pages/rider-app';
import DriverApp from '../pages/driver-app';
import Support from '../pages/support';
import RiderQR from '../pages/qr/RiderQR';
import DriverQR from '../pages/qr/DriverQR';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="rider-app" element={<RiderApp />} />
                <Route path="driver-app" element={<DriverApp />} />
                <Route path="support" element={<Support />} />
            </Route>
            <Route path="/qr/rider" element={<RiderQR />} />
            <Route path="/qr/driver" element={<DriverQR />} />
        </Routes>
    );
};

export default AppRouter;
