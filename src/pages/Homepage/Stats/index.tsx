import { useEffect, useRef, useState } from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import { statsData } from "./data";
import { styles } from "./style";

function Stats() {
    const [startCount, setStartCount] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (statsRef.current) observer.observe(statsRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <Box ref={statsRef} sx={styles.box} >
            <Container maxWidth="lg">
                {/* Title */}
                <Typography
                    sx={styles.header}>
                    Real Impact. Real Results.
                </Typography>

                <Typography
                    sx={styles.subtitle}
                >
                    Trusted by schools worldwide to simplify management, engage students, and empower educators.
                </Typography>

                {/* Stats Grid */}
                <Grid container spacing={{ xs: 5, sm: 8, lg: 6 }} justifyContent="center" sx={styles.gridContainer}>
                    {statsData.map((stat, index) => (
                        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index} sx={styles.subGrid}>
                            <CountUp end={stat.value} start={startCount} suffix={stat.suffix} />

                            <Divider sx={styles.divider} />
                            <Typography sx={styles.label} >
                                {stat.label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Stats;

/* ---------------- CountUp Component ---------------- */
interface CountUpProps {
    start: boolean;
    end: number;
    suffix?: string;
}

function CountUp({ start, end, suffix = "" }: CountUpProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const duration = 2000;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [start, end]);

    return (
        <Typography sx={styles.counter} >
            {count.toLocaleString()}
            {suffix}
        </Typography>
    );
}
