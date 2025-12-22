import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState, useEffect, useRef } from 'react';
import '../../../assets/fonts/fonts.css';
import Overview from "./overview";
import { PlayCircle } from "@phosphor-icons/react";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [showOverview, setShowOverview] = useState(false);
    const overviewRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (overviewRef.current && !showOverview) {
                const rect = overviewRef.current.getBoundingClientRect();
                const isInViewport = rect.top <= window.innerHeight * 0.8;

                if (isInViewport) {
                    setShowOverview(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [showOverview]);

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }} >
            <Box sx={styles.parent} >
                <Container maxWidth="xl">
                    <Box sx={styles.subParent}>
                        {/* Main Heading */}
                        <Typography
                            sx={{
                                transform: hasAnimated ? 'translateY(0)' : 'translateY(100px)',
                                opacity: hasAnimated ? 1 : 0,
                                ...styles.heading
                            }}
                        >
                            Run Your School Operations From One Platform.
                        </Typography>

                        {/* Subtitle */}
                        <Typography
                            sx={{
                                transform: hasAnimated ? 'translateY(0)' : 'translateY(100px)',
                                opacity: hasAnimated ? 1 : 0,
                                ...styles.subHeading
                            }}
                        >
                            Manage students, attendance, grades, and parent communication. Simplify Admissions, Academics, and Administration — all in one place.
                        </Typography>

                        {/* Buttons */}
                        <Box
                            sx={{
                                transform: hasAnimated ? 'translateY(0)' : 'translateY(100px)',
                                opacity: hasAnimated ? 1 : 0,
                                ...styles.buttonParent
                            }}
                        >
                            {/* Primary Button */}
                            <Button
                            onClick={() => {
                                window.location.href = 'http://localhost:5174/auth/';
                            }}
                                size="large"
                                sx={styles.startButton}>
                                Get Started For Free
                            </Button>

                            {/* Secondary Button */}
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => {
                            if (location.pathname !== '/') {
                                navigate('/?scrollTo=demo');
                            } else {
                                const demoSection = document.getElementById('demo');
                                if (demoSection) {
                                    demoSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            }
                        }}
                                sx={styles.demoButton}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <PlayCircle size={30} weight="fill" color="#d28eff" />
                                    <Box textAlign="left" lineHeight={1.2}>
                                        <Typography sx={{ fontWeight: 700, fontSize: '18px !important', color: '#fff' }}>
                                            Watch a Demo
                                        </Typography>
                                        <Typography sx={{ letterSpacing: 0.3, fontWeight: 400, fontSize: '14px !important', color: 'rgba(255,255,255,0.75)' }}>
                                            (it’s actually pretty cool)
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Button>
                        </Box>

                        {/* Overview Component */}
                        <Box
                            ref={overviewRef}
                            sx={{
                                transform: showOverview ? 'translateY(0)' : 'translateY(100px)',
                                opacity: showOverview ? 1 : 0,
                                visibility: showOverview ? 'visible' : 'hidden',
                                ...styles.overviewBox
                            }}
                        >
                            <Overview />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="xl">
                <Box sx={ styles.mobileOverview }>
                    <Box
                        component="img"
                        src="/home/hero/mobileOverview.png"
                        alt="Overview Page"
                        sx={ styles.mobileOverviewImg }
                    />
                </Box>
            </Container>
            <Box
                sx={ styles.overlay }
            />
        </Box>
    );
}

export default Hero;