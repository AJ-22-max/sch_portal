import { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Popper,
    Paper,
    Drawer
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { featuresData } from './data'
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import type { Feature } from "./data";
import { styles } from "./style";

export default function Features() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [closeTimeout, setCloseTimeout] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [highlightedCard, setHighlightedCard] = useState<string | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [touchStart, setTouchStart] = useState<number>(0);
    const [touchEnd, setTouchEnd] = useState<number>(0);

    const cardsPerView = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;

    useEffect(() => {
        const handleScroll = () => {
            setHoveredCard(null);
            setAnchorEl(null);
            if (closeTimeout) {
                clearTimeout(closeTimeout);
                setCloseTimeout(null);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [closeTimeout]);

    useEffect(() => {
        const handleFeatureNavigation = (event: CustomEvent) => {
            const featureId = event.detail.featureId;
            const featureIndex = featuresData.findIndex(f => f.id === featureId);

            if (featureIndex !== -1) {
                const targetPage = Math.floor(featureIndex / cardsPerView);
                setCurrentIndex(targetPage);

                // Wait for the slide transition
                setTimeout(() => {
                    const element = document.getElementById(featureId);
                    if (element) {
                        const offset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Highlight and auto-open the card
                        setTimeout(() => {
                            setHighlightedCard(featureId);

                            // Handle mobile vs desktop differently
                            if (isMobile) {
                                const feature = featuresData.find(f => f.id === featureId);
                                if (feature) {
                                    setSelectedFeature(feature); // Open drawer on mobile
                                }
                            } else {
                                setHoveredCard(featureId);
                                const cardElement = document.getElementById(featureId);
                                if (cardElement) {
                                    setAnchorEl(cardElement as HTMLElement);
                                }
                            }

                            // Remove highlight after 3 seconds
                            setTimeout(() => {
                                setHighlightedCard(null);
                            }, 3000);
                        }, 600);
                    }
                }, 400);
            }
        };

        window.addEventListener('navigateToFeature' as any, handleFeatureNavigation);

        return () => {
            window.removeEventListener('navigateToFeature' as any, handleFeatureNavigation);
        };
    }, [cardsPerView, isMobile]);

    useEffect(() => {
        const featureId = searchParams.get('feature');

        if (featureId) {
            setTimeout(() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                    featuresSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Dispatch the event to highlight the feature
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('navigateToFeature', {
                        detail: { featureId }
                    }));
                }, 500);

                // Clear the search param
                setSearchParams({});
            }, 100);
        }
    }, [searchParams, setSearchParams]);

    const pageCount = Math.ceil(featuresData.length / cardsPerView);
    const maxIndex = Math.max(0, pageCount - 1);

    const minSwipeDistance = 20;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && currentIndex < maxIndex) {
            handleNext();
        }
        if (isRightSwipe && currentIndex > 0) {
            handlePrev();
        }
    };


    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((p) => p + 1);
                setIsAnimating(false);
            }, 350);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((p) => p - 1);
                setIsAnimating(false);
            }, 350);
        }
    };

    const start = currentIndex * cardsPerView;
    const end = start + cardsPerView;
    const pageItems = featuresData.slice(start, end);

    return (
        <Box id="features" sx={{ bgcolor: 'secondary.light', pt: { xs: 10, md: 10 }, pb: { xs: 8, md: 10 } }}>
            <Container maxWidth="xl">
                <Box sx={styles.container} />
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 4, px: 1 }}>
                    <Box sx={styles.tag}>
                        <AssuredWorkloadIcon sx={{ fontSize: '22px', color: 'primary.main' }} />
                        <Typography sx={styles.tagTitle}>Built for Every School</Typography>
                    </Box>
                    <Typography sx={styles.title}>
                        Powerful Features for Modern Schools
                    </Typography>
                    <Typography variant="h6" sx={styles.subtitle} >
                        From student management to financial tracking, everything you need to run your school efficiently in one comprehensive platform.
                    </Typography>
                </Box>

                {/* Carousel  */}
                <Box sx={{ position: "relative", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Prev */}
                    <IconButton
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        sx={{ left: 0, display: { xs: 'none', sm: 'block' }, ...styles.iconButton }}
                    >
                        <ChevronLeft size={24} />
                    </IconButton>

                    {/* Next */}
                    <IconButton
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        sx={{ right: 0, display: { xs: 'none', sm: 'block' }, ...styles.iconButton }}
                    >
                        <ChevronRight size={24} />
                    </IconButton>

                    {/* Visible page grid: exactly up to 4 cards */}
                    <Box
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        sx={{
                            gridTemplateColumns: `repeat(${cardsPerView}, 1fr)`,
                            transform: isAnimating ? "scale(0.96)" : "scale(1)",
                            opacity: isAnimating ? 0.8 : 1,
                            ...styles.cardGrid
                        }}
                    >
                        {pageItems.map((feature, i) => {
                            const isHovered = hoveredCard === feature.id;
                            const isHighlighted = highlightedCard === feature.id;
                            const shouldDim = highlightedCard && !isHighlighted;
                            const globalIndex = start + i;
                            const shouldPlaceLeft = globalIndex >= start + (cardsPerView - 1);

                            return (
                                <Box
                                    key={feature.id}
                                    sx={{
                                        width: "100%",
                                        pointerEvents: 'none',
                                        opacity: shouldDim ? 0.3 : 1,
                                        transition: 'opacity 0.3s ease'
                                    }}
                                >
                                    <Card
                                        id={feature.id}
                                        onClick={() => {
                                            if (isMobile) {
                                                setSelectedFeature(feature);
                                            }
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isMobile) {
                                                if (closeTimeout) {
                                                    clearTimeout(closeTimeout);
                                                    setCloseTimeout(null);
                                                }
                                                setHoveredCard(feature.id);
                                                setAnchorEl(e.currentTarget as HTMLElement);
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            const timeout = setTimeout(() => {
                                                setHoveredCard(null);
                                                setAnchorEl(null);
                                            }, 300);
                                            setCloseTimeout(timeout);
                                        }}
                                        sx={{
                                            ...styles.card,
                                            borderColor: isHovered ? feature.color : "grey.200",
                                            boxShadow: isHovered ? 6 : 2,
                                            transform: isHovered ? "translateY(-8px) scale(1.02)" : "none",
                                            ...(highlightedCard === feature.id && {
                                                borderColor: feature.color,
                                                boxShadow: `0 0 0 4px ${feature.color}30, 0 0 40px ${feature.color}40, 0 20px 60px rgba(0,0,0,0.2)`,
                                                ...styles.highlightedCard
                                            }),
                                            "&::before": {
                                                ...styles.highlightedCard,
                                                transform: isHovered || highlightedCard === feature.id ? "scaleX(1)" : "scaleX(0)",
                                                bgcolor: feature.color,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                overflow: "hidden",
                                                borderRadius: "15px",
                                                borderBottomLeftRadius: 0,
                                                borderBottomRightRadius: 0,
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={feature.image}
                                                alt={feature.title}
                                                sx={{
                                                    height: '300px',
                                                    transition: "transform 0.3s ease",
                                                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                                                }}
                                            />
                                        </Box>

                                        <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                                            {/* title */}
                                            <Typography sx={styles.featureTitle}>
                                                {feature.title}
                                            </Typography>

                                            {/* description - always visible */}
                                            <Typography sx={styles.featureDescription}>
                                                {feature.description}
                                            </Typography>

                                            {/* spacer to keep consistent height */}
                                            <Box sx={{ mt: "auto", height: 20 }} />
                                        </CardContent>
                                    </Card>

                                    {/* Popper tooltip */}
                                    {!isMobile && (
                                        <Popper
                                            open={isHovered && Boolean(anchorEl)}
                                            anchorEl={anchorEl}
                                            placement={shouldPlaceLeft ? "left-start" : "right-start"}
                                            disablePortal={false}
                                            modifiers={[
                                                { name: "offset", options: { offset: [shouldPlaceLeft ? -12 : 12, 0] } },
                                                { name: "preventOverflow", options: { padding: 8 } },
                                                {
                                                    name: 'computeStyles',
                                                    options: {
                                                        gpuAcceleration: false,
                                                    },
                                                },
                                            ]}
                                            style={{ zIndex: 1500, position: 'fixed' }}
                                        >
                                            <Box
                                                onMouseEnter={() => {
                                                    if (closeTimeout) {
                                                        clearTimeout(closeTimeout);
                                                        setCloseTimeout(null);
                                                    }
                                                }}
                                                onMouseLeave={() => {
                                                    const timeout = setTimeout(() => {
                                                        setHoveredCard(null);
                                                        setAnchorEl(null);
                                                    }, 200);
                                                    setCloseTimeout(timeout);
                                                }}
                                                sx={{
                                                    position: 'relative', display: 'flex',
                                                    boxShadow: `
                                                    0 20px 60px rgba(0,0,0,0.15),
                                                    0 0 40px ${feature.color}20,
                                                    0 0 1px rgba(0,0,0,0.1)
                                                `,
                                                    backdropFilter: 'blur(10px)', borderRadius: 3,
                                                    ...(shouldPlaceLeft ? {
                                                        right: 13
                                                    } : {
                                                        left: 13
                                                    }),
                                                }}>
                                                {/* Triangle pointer */}
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        ...(shouldPlaceLeft ? {
                                                            // Popper is on LEFT, so arrow points RIGHT
                                                            left: '100%',
                                                            width: 0,
                                                            height: 0,
                                                            borderTop: '10px solid transparent',
                                                            borderBottom: '10px solid transparent',
                                                            borderLeft: `10px solid ${feature.color}50`,
                                                        } : {
                                                            // Popper is on RIGHT, so arrow points LEFT
                                                            right: '100%',
                                                            width: 0,
                                                            height: 0,
                                                            borderTop: '10px solid transparent',
                                                            borderBottom: '10px solid transparent',
                                                            borderRight: `10px solid ${feature.color}50`,
                                                        }),
                                                    }}
                                                />

                                                {/* Inner triangle (for background color) */}
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        ...(shouldPlaceLeft ? {
                                                            // Popper is on LEFT, so arrow points RIGHT
                                                            left: 'calc(100% - 1px)',
                                                            width: 0,
                                                            height: 0,
                                                            borderTop: '9px solid transparent',
                                                            borderBottom: '9px solid transparent',
                                                            borderLeft: '9px solid white',
                                                        } : {
                                                            // Popper is on RIGHT, so arrow points LEFT
                                                            right: 'calc(100% - 1px)',
                                                            width: 0,
                                                            height: 0,
                                                            borderTop: '9px solid transparent',
                                                            borderBottom: '9px solid transparent',
                                                            borderRight: '9px solid white',
                                                        }),
                                                    }}
                                                />

                                                <Paper
                                                    sx={{
                                                        ...styles.paper,
                                                        borderColor: feature.color + "50",
                                                    }}
                                                >
                                                    {/* Header with gradient */}
                                                    <Box
                                                        sx={{
                                                            background: `linear-gradient(135deg, ${feature.color}15 0%, ${feature.color}05 100%)`,
                                                            p: 2.5,
                                                            borderBottom: "1px solid",
                                                            borderColor: feature.color + "20",
                                                            cursor: 'default'
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Gilroy',
                                                                fontWeight: 700,
                                                                fontSize: "18px",
                                                                color: feature.color,
                                                                mb: 0.5
                                                            }}
                                                        >
                                                            {feature.title}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "13px",
                                                                color: "grey.600",
                                                                lineHeight: 1.5
                                                            }}
                                                        >
                                                            {feature.description}
                                                        </Typography>

                                                        {/* Tag if exists */}
                                                        {feature.tag && (
                                                            <Box
                                                                sx={{
                                                                    display: 'inline-block',
                                                                    mt: 1.5,
                                                                    px: 1.5,
                                                                    py: 0.5,
                                                                    bgcolor: feature.color + "20",
                                                                    borderRadius: '12px',
                                                                    border: '1px solid',
                                                                    borderColor: feature.color + "40",
                                                                }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "11px",
                                                                        fontWeight: 600,
                                                                        color: feature.color,
                                                                        textTransform: 'uppercase',
                                                                        letterSpacing: '0.5px'
                                                                    }}
                                                                >
                                                                    {feature.tag}
                                                                </Typography>
                                                            </Box>
                                                        )}
                                                    </Box>

                                                    {/* Features list */}
                                                    <Box sx={{ p: 2.5, cursor: 'default' }}>
                                                        <Typography
                                                            sx={{
                                                                fontSize: "12px",
                                                                fontWeight: 600,
                                                                color: "grey.500",
                                                                textTransform: 'uppercase',
                                                                letterSpacing: '0.5px',
                                                                mb: 1.5
                                                            }}
                                                        >
                                                            Key Capabilities
                                                        </Typography>

                                                        {feature.features?.map((item, idx) => (
                                                            <Box
                                                                key={idx}
                                                                sx={{
                                                                    display: "flex",
                                                                    gap: 1.5,
                                                                    alignItems: "flex-start",
                                                                    mb: 1.5,
                                                                    transition: 'all 0.2s ease',
                                                                    '&:hover': {
                                                                        transform: 'translateX(4px)',
                                                                    }
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        width: 18,
                                                                        height: 18,
                                                                        borderRadius: "4px",
                                                                        bgcolor: feature.color + "15",
                                                                        border: '1.5px solid',
                                                                        borderColor: feature.color,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        flexShrink: 0,
                                                                        mt: 0.2
                                                                    }}
                                                                >
                                                                    <Box
                                                                        sx={{
                                                                            width: 6,
                                                                            height: 6,
                                                                            borderRadius: "50%",
                                                                            bgcolor: feature.color
                                                                        }}
                                                                    />
                                                                </Box>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "14px",
                                                                        color: "grey.700",
                                                                        lineHeight: 1.5,
                                                                        fontWeight: 400
                                                                    }}
                                                                >
                                                                    {item}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>

                                                    {/* Footer CTA */}
                                                    <Box
                                                        sx={{
                                                            px: 2.5,
                                                            pb: 2.5,
                                                            pt: 1,
                                                        }}
                                                    >
                                                        <a href={feature.link}>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'space-between',
                                                                    px: 2,
                                                                    py: 1.5,
                                                                    bgcolor: feature.color + "08",
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: feature.color + "20",
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.2s ease',
                                                                    '&:hover': {
                                                                        bgcolor: feature.color + "15",
                                                                        borderColor: feature.color + "40",
                                                                    }
                                                                }}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: "13px",
                                                                        fontWeight: 600,
                                                                        color: feature.color,
                                                                    }}
                                                                >
                                                                    Explore {feature.title}
                                                                </Typography>
                                                                <ChevronRight size={16} color={feature.color} />
                                                            </Box>
                                                        </a>
                                                    </Box>
                                                </Paper>
                                            </Box>
                                        </Popper>
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                    {isXs && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mt: 3,
                            color: 'grey.500',
                            fontSize: '13px',
                            animation: 'fadeInOut 2s ease-in-out infinite',
                            '@keyframes fadeInOut': {
                                '0%, 100%': { opacity: 0.4 },
                                '50%': { opacity: 1 }
                            }
                        }}>
                            <ChevronLeft size={16} />
                            <Typography sx={{ fontSize: '13px', color: 'base.customDark' }}>Swipe or tap cards to explore</Typography>
                            <ChevronRight size={16} />
                        </Box>
                    )}
                    {/* Mobile Bottom Sheet */}
                    <Drawer
                        anchor="bottom"
                        open={Boolean(selectedFeature)}
                        onClose={() => setSelectedFeature(null)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24,
                                maxHeight: '80vh',
                                overflow: 'auto'
                            }
                        }}
                    >
                        {selectedFeature && (
                            <Paper sx={{ p: 0, boxShadow: 'none' }}>
                                {/* Drag Handle */}
                                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 1.5, pb: 1 }}>
                                    <Box sx={{ width: 40, height: 4, bgcolor: 'grey.300', borderRadius: 2 }} />
                                </Box>

                                {/* Same content as your Popper Paper - just copy it */}
                                <Box sx={{ background: `linear-gradient(135deg, ${selectedFeature.color}15 0%, ${selectedFeature.color}05 100%)`, p: 2.5 }}>
                                    {/* Header with gradient */}
                                    <Typography
                                        sx={{
                                            fontFamily: 'Gilroy',
                                            fontWeight: 700,
                                            fontSize: "18px",
                                            color: selectedFeature.color,
                                            mb: 0.5
                                        }}
                                    >
                                        {selectedFeature.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            color: "grey.600",
                                            lineHeight: 1.5
                                        }}
                                    >
                                        {selectedFeature.description}
                                    </Typography>

                                    {/* Tag if exists */}
                                    {selectedFeature.tag && (
                                        <Box
                                            sx={{
                                                display: 'inline-block',
                                                mt: 1.5,
                                                px: 1.5,
                                                py: 0.5,
                                                bgcolor: selectedFeature.color + "20",
                                                borderRadius: '12px',
                                                border: '1px solid',
                                                borderColor: selectedFeature.color + "40",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "11px",
                                                    fontWeight: 600,
                                                    color: selectedFeature.color,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                {selectedFeature.tag}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>

                                {/* Features list */}
                                <Box sx={{ p: 2.5, cursor: 'default' }}>
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color: "grey.500",
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            mb: 1.5
                                        }}
                                    >
                                        Key Capabilities
                                    </Typography>

                                    {selectedFeature.features?.map((item, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                display: "flex",
                                                gap: 1.5,
                                                alignItems: "flex-start",
                                                mb: 1.5,
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    transform: 'translateX(4px)',
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 18,
                                                    height: 18,
                                                    borderRadius: "4px",
                                                    bgcolor: selectedFeature.color + "15",
                                                    border: '1.5px solid',
                                                    borderColor: selectedFeature.color,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexShrink: 0,
                                                    mt: 0.2
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        bgcolor: selectedFeature.color
                                                    }}
                                                />
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: "grey.700",
                                                    lineHeight: 1.5,
                                                    fontWeight: 400
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                {/* Footer CTA */}
                                <Box
                                    sx={{
                                        px: 2.5,
                                        pb: 2.5,
                                        pt: 1,
                                    }}
                                >
                                    <a href={selectedFeature.link}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                px: 2,
                                                py: 1.5,
                                                bgcolor: selectedFeature.color + "08",
                                                borderRadius: 2,
                                                border: '1px solid',
                                                borderColor: selectedFeature.color + "20",
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    bgcolor: selectedFeature.color + "15",
                                                    borderColor: selectedFeature.color + "40",
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "13px",
                                                    fontWeight: 600,
                                                    color: selectedFeature.color,
                                                }}
                                            >
                                                Explore {selectedFeature.title}
                                            </Typography>
                                            <ChevronRight size={16} color={selectedFeature.color} />
                                        </Box>
                                    </a>
                                </Box>
                            </Paper>
                        )}
                    </Drawer>

                    {/* Indicators */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 7 }}>
                        {Array.from({ length: pageCount }).map((_, idx) => (
                            <Box
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                sx={{
                                    width: currentIndex === idx ? 32 : 8,
                                    height: 8,
                                    borderRadius: 4,
                                    bgcolor: currentIndex === idx ? "primary.main" : "grey.300",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

