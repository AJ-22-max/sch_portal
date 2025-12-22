import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import Features from "./Features";
import Demo from "./Demo";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import FAQ from "./FAQ";

function Homepage() {
    const navigate = useNavigate();

    useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    
    if (scrollTo === 'demo') {
        setTimeout(() => {
            const demoSection = document.getElementById('demo');
            if (demoSection) {
                demoSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            navigate('/', { replace: true });
        }, 100);
    }
}, [ navigate]);

    return (
        <Box>
            <Hero />
            <Stats />
            <Services />
            <Features />
            <Demo />
            <Testimonial />
            <Pricing />
            <FAQ />
        </Box>
    );
}

export default Homepage;