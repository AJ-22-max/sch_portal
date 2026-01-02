import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '../layouts/defaultLayout';
import Homepage from "../pages/Homepage";
import PricingPage from '../pages/PricingPage';
import BlogPage from '../pages/BlogPage';

function PublicRoutes() {
    const location = useLocation();

    const pathsWithoutFooter = ['/placeorder', '/rider-review'];
    const hideFooter = pathsWithoutFooter.includes(location.pathname);

    return (
        <Layout hideFooter={hideFooter}>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/pricing' element={<PricingPage />} />
                <Route path='/blog' element={<BlogPage />} />
            </Routes>
        </Layout>

    );
}

export default PublicRoutes;