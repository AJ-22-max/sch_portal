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

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');

        if (section) {
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    }, []);

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