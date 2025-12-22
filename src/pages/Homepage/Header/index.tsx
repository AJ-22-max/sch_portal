import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    useMediaQuery,
    useTheme,
    alpha,
    AppBar,
    Box,
    Button,
    Container,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Grid,
    Fade,
    useScrollTrigger,
} from '@mui/material';
import {
    Dashboard,
    AccountCircle,
    Payment,
    EmojiEvents,
    Business,
    MenuBook,
    Class,
    CalendarMonth,
    People,
    PersonAdd,
    AttachMoney,
    LocalLibrary,
    Hotel,
    Message,
    ChevronRight,
    Phone,
    ArrowForwardIos,
    Menu as MenuIcon,
} from '@mui/icons-material';
import { solutions, solutionDetails, featureCategories, resources } from "./data";
import MobileDrawer from './drawer';
import { featuresData } from '../Features/data';
import { styles } from './styles';

interface HeaderProps {
    featuresAnchor: null | HTMLElement;
    setFeaturesAnchor: (anchor: null | HTMLElement) => void;
    solutionsAnchor: null | HTMLElement;
    setSolutionsAnchor: (anchor: null | HTMLElement) => void;
    resourcesAnchor: null | HTMLElement;
    setResourcesAnchor: (anchor: null | HTMLElement) => void;
    hoveredSolution: string | null;
    setHoveredSolution: (solution: string | null) => void;
}

const iconMap: Record<string, React.ReactElement> = {
    Dashboard1: <Dashboard />,
    AccountCircle: <AccountCircle />,
    People: <People />,
    PersonAdd: <PersonAdd />,
    Business: <Business />,
    Class: <Class />,
    CalendarMonth: <CalendarMonth />,
    AttachMoney: <AttachMoney />,
    Payment: <Payment />,
    LocalLibrary: <LocalLibrary />,
    Hotel: <Hotel />,
    EmojiEvents: <EmojiEvents />,
    MenuBook1: <MenuBook />,
    Message1: <Message />,
    MenuBook: <MenuBook sx={{ fontSize: 20 }} />,
    Phone: <Phone sx={{ fontSize: 20 }} />,
    Message: <Message sx={{ fontSize: 20 }} />,
    Dashboard: <Dashboard sx={{ fontSize: 20 }} />,
};

const transformedFeatureCategories = Object.fromEntries(
    Object.entries(featureCategories).map(([key, category]) => [
        key,
        {
            ...category,
            features: category.features.map(f => ({ ...f, icon: iconMap[f.icon] }))
        }
    ])
);

const transformedResources = resources.map(r => ({ ...r, icon: iconMap[r.icon] }));

const DropdownArrow = ({
    isOpen,
    shouldHaveWhiteBg
}: {
    isOpen: boolean;
    shouldHaveWhiteBg: boolean;
}) => (
    <ArrowForwardIos
        sx={{
            color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
            fontSize: '11px !important',
            transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
            transition: 'transform 0.3s ease',
        }}
    />
);

const Header = ({
    featuresAnchor,
    setFeaturesAnchor,
    solutionsAnchor,
    setSolutionsAnchor,
    resourcesAnchor,
    setResourcesAnchor,
    hoveredSolution,
    setHoveredSolution,
}: HeaderProps) => {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const location = useLocation();
    const shouldHaveWhiteBg = scrolled || location.pathname === '/pricing';

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const navigate = useNavigate();

    useEffect(() => {
        setScrolled(trigger);
    }, [trigger]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleFeaturesOpen = (event: React.MouseEvent<HTMLElement>) => {
        if (isMobile) {
            setFeaturesAnchor(featuresAnchor ? null : event.currentTarget);
        } else {
            setSolutionsAnchor(null);
            setResourcesAnchor(null);
            setHoveredSolution(null);
            setFeaturesAnchor(event.currentTarget);
        }
    };

    const handleSolutionsOpen = (event: React.MouseEvent<HTMLElement>) => {
        if (isMobile) {
            setSolutionsAnchor(solutionsAnchor ? null : event.currentTarget);
        } else {
            setFeaturesAnchor(null);
            setResourcesAnchor(null);
            setSolutionsAnchor(event.currentTarget);
        }
    };

    const handleResourcesOpen = (event: React.MouseEvent<HTMLElement>) => {
        if (isMobile) {
            setResourcesAnchor(resourcesAnchor ? null : event.currentTarget);
        } else {
            setFeaturesAnchor(null);
            setSolutionsAnchor(null);
            setHoveredSolution(null);
            setResourcesAnchor(event.currentTarget);
        }
    };

    const handleClose = () => {
        setFeaturesAnchor(null);
        setSolutionsAnchor(null);
        setResourcesAnchor(null);
        setHoveredSolution(null);
        setMobileMenuOpen(false);
    };

    return (
        <AppBar
            position="fixed"
            elevation={shouldHaveWhiteBg ? 1 : 0}
            sx={{
                py: 0.8,
                bgcolor: shouldHaveWhiteBg ? 'white' : 'transparent',
                transition: 'all 0.3s ease-in-out',
                border: 'none',
                boxShadow: shouldHaveWhiteBg ? 0.7 : 'none'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={styles.toolbar}>
                    {/* Logo */}
                    <Box
                        onClick={() => {
                            navigate('/');
                        }}
                        onMouseEnter={() => {
                            setFeaturesAnchor(null);
                            setSolutionsAnchor(null);
                            setResourcesAnchor(null);
                            setHoveredSolution(null);
                        }}
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                        <Box
                            component="img"
                            src="/logo/favicon.png"
                            alt="School Portal Logo"
                            sx={{
                                width: '35px',
                                display: 'block'
                            }}
                        />
                        <Typography
                            sx={{ color: shouldHaveWhiteBg ? '#1a1a1a' : 'white', ...styles.logoText }}
                        >
                            SchoolPortal
                        </Typography>
                    </Box>

                    {/* Mobile Menu Button - Only show on xs/sm */}
                    <Box sx={{ display: { xs: 'flex', lg: 'none' }, gap: 2, alignItems: 'center', py: 1 }}>
                        <Button
                            size="large"
                            onClick={() => {
                                window.location.href = 'https://portal-sp.vercel.app/';
                            }}
                            sx={{
                                ...styles.loginBtn,
                                backdropFilter: shouldHaveWhiteBg ? 'none' : 'blur(6px)',
                                bgcolor: shouldHaveWhiteBg ? '#ffffff !important' : 'transparent !important',
                                color: shouldHaveWhiteBg ? '#000000 !important' : '#ffffff !important',
                                transform: 'translateY(-2px) scale(1.03)'
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white !important',
                                bgcolor: 'transparent !important',
                                '&:hover': {
                                    bgcolor: shouldHaveWhiteBg ? '#f5f5f5' : 'rgba(255,255,255,0.15)',
                                    borderColor: shouldHaveWhiteBg ? '#d0d0d0' : 'rgba(255,255,255,0.4)',
                                },
                                ...styles.mobileMenuBtn
                            }}
                        >
                            {mobileMenuOpen ? '' : <MenuIcon />}
                        </Button>
                    </Box>

                    {/* Navigation Links */}
                    <Box sx={styles.navigationLinks}>

                        {/* Home Link */}
                        <Button
                            size="large"
                            onMouseEnter={() => {
                                setFeaturesAnchor(null);
                                setSolutionsAnchor(null);
                                setResourcesAnchor(null);
                                setHoveredSolution(null);
                            }}
                            onClick={() => {
                                navigate('/');
                            }}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                fontWeight: location.pathname === '/' ? 600 : 500,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '-4px',
                                    width: location.pathname === '/' ? '100%' : '0%',
                                    height: '4px',
                                    borderRadius: '4px',
                                    background: 'linear-gradient(90deg, #C057F3, #FF6A88)',
                                    transition: 'width 0.3s ease',
                                },
                                ...styles.activeBtn
                            }}
                        >
                            Home
                        </Button>

                        {/* Features Dropdown */}
                        <Button
                            size="large"
                            onMouseEnter={handleFeaturesOpen}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                ...styles.navigationBtn
                            }}
                        >
                            Features
                            <DropdownArrow isOpen={!!solutionsAnchor} shouldHaveWhiteBg={shouldHaveWhiteBg} />
                        </Button>

                        {/* Solutions Dropdown */}
                        <Button
                            size="large"
                            onMouseEnter={handleSolutionsOpen}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                ...styles.navigationBtn
                            }}
                        >
                            Solutions
                            <DropdownArrow isOpen={!!solutionsAnchor} shouldHaveWhiteBg={shouldHaveWhiteBg} />
                        </Button>


                        {/* Pricing Link */}
                        <Button
                            size="large"
                            onMouseEnter={() => {
                                setFeaturesAnchor(null);
                                setSolutionsAnchor(null);
                                setResourcesAnchor(null);
                                setHoveredSolution(null);
                            }}
                            onClick={() => {
                                navigate('/pricing');
                            }}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                fontWeight: location.pathname === '/pricing' ? 600 : 500,
                                ...styles.activeBtn,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '-4px',
                                    width: location.pathname === '/pricing' ? '100%' : '0%',
                                    height: '4px',
                                    borderRadius: '4px',
                                    background: 'linear-gradient(90deg, #C057F3, #FF6A88)',
                                    transition: 'width 0.3s ease',
                                }
                            }}
                        >
                            Pricing
                        </Button>


                        {/* Resources Dropdown */}
                        <Button
                            size="large"
                            onMouseEnter={handleResourcesOpen}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                ...styles.navigationBtn
                            }}
                        >
                            Resources
                            <DropdownArrow isOpen={!!solutionsAnchor} shouldHaveWhiteBg={shouldHaveWhiteBg} />
                        </Button>
                    </Box>

                    {/* Right Side Actions */}
                    <Box
                        onMouseEnter={() => {
                            setFeaturesAnchor(null);
                            setSolutionsAnchor(null);
                            setResourcesAnchor(null);
                            setHoveredSolution(null);
                        }}
                        sx={styles.sideActions}>

                        {/* Phone Number */}
                        <Box
                            onClick={() => {
                                window.open('https://wa.me/2348000000000?text=Hello, I would like to inquire about SchoolPortal', '_blank');
                            }}
                            sx={{
                                bgcolor: shouldHaveWhiteBg ? ((theme) => alpha(theme.palette.primary.main, 0.1)) : ((theme) => alpha(theme.palette.base.main, 0.2)),
                                '&:hover': {
                                    bgcolor: shouldHaveWhiteBg ? ((theme) => alpha(theme.palette.primary.main, 0.2)) : ((theme) => alpha(theme.palette.base.main, 0.3)),
                                    cursor: 'pointer'
                                },
                                ...styles.phoneBox
                            }}>
                            <Phone sx={{ fontSize: 18, color: shouldHaveWhiteBg ? '#C057F3' : 'white' }} />
                            <Typography
                                sx={{
                                    color: shouldHaveWhiteBg ? '#C057F3' : 'white',
                                    ...styles.phoneText
                                }}
                            >
                                +234 800 000 0000
                            </Typography>
                        </Box>

                        {/* Login Button */}
                        <Button
                            onClick={() => {
                                window.location.href = 'https://portal-sp.vercel.app/';
                            }}
                            size="large"
                            sx={{
                                ...styles.loginBtn,
                                backdropFilter: shouldHaveWhiteBg ? 'none' : 'blur(6px)',
                                bgcolor: shouldHaveWhiteBg ? '#ffffff !important' : 'transparent !important',
                                color: shouldHaveWhiteBg ? '#000000 !important' : '#ffffff !important',
                                border: shouldHaveWhiteBg
                                    ? '2px solid #000000'
                                    : '2px solid rgba(255,255,255,0.5)',
                                '&:hover': {
                                    transform: 'translateY(-2px) scale(1.03)',
                                    backgroundColor: shouldHaveWhiteBg ? '#f3f3f3' : 'rgba(255,255,255,0.2)',
                                    borderColor: 'transparent',
                                    boxShadow: '0 0 12px rgba(192, 87, 243, 0.4)',
                                },
                            }}
                        >
                            Login
                        </Button>

                        {/* Get Started Button */}
                        <Button
                            size="large"
                            onClick={() => {
                                window.location.href = 'https://portal-sp.vercel.app/';
                            }}
                            sx={styles.startBtn}>
                            Get Started
                        </Button>
                    </Box>
                </Toolbar>
            </Container>

            {/* Mobile Menu Drawer */}
            <MobileDrawer
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                navigate={navigate}
                transformedFeatureCategories={transformedFeatureCategories}
                transformedResources={transformedResources}
            />

            {/* Features Mega Menu */}
            <Menu
                anchorEl={featuresAnchor}
                open={Boolean(featuresAnchor)}
                onClose={handleClose}
                disableAutoFocusItem
                disableRestoreFocus
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                slotProps={{
                    paper: {
                        onMouseLeave: () => setFeaturesAnchor(null),
                        sx: {
                            p: 0,
                            mt: 1.5,
                            minWidth: 900,
                            maxWidth: 1000,
                            borderRadius: 2,
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        }
                    },
                }}
                sx={styles.menu}
            >
                <Box sx={{ p: 4 }}>
                    <Grid container spacing={3}>
                        {Object.entries(transformedFeatureCategories).map(([key, category]) => (
                            <Grid size={{ xs: 3 }} key={key}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 700,
                                        color: '#666',
                                        textTransform: 'uppercase',
                                        fontSize: '11px',
                                        letterSpacing: '0.5px',
                                        mb: 2,
                                    }}
                                >
                                    {category.title}
                                </Typography>
                                {category.features.map((feature, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            p: 1.5,
                                            mb: 1,
                                            borderRadius: 1.5,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            '&:hover': {
                                                backgroundColor: '#f5f5f5',
                                                transform: 'translateX(4px)',
                                            },
                                        }}
                                    >
                                        <Box
                                            onClick={() => {
                                                const matchingFeature = featuresData.find(
                                                    f => f.title.toLowerCase() === feature.title.toLowerCase()
                                                );

                                                if (matchingFeature) {
                                                    if (location.pathname === '/pricing') {
                                                        navigate(`/?feature=${matchingFeature.id}`);
                                                    } else {
                                                        const featuresSection = document.getElementById('features');
                                                        if (featuresSection) {
                                                            featuresSection.scrollIntoView({
                                                                behavior: 'smooth',
                                                                block: 'start'
                                                            });
                                                        }

                                                        setTimeout(() => {
                                                            window.dispatchEvent(new CustomEvent('navigateToFeature', {
                                                                detail: { featureId: matchingFeature.id }
                                                            }));
                                                        }, 500);
                                                    }
                                                }
                                                handleClose();
                                            }}

                                            sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                            <Box
                                                sx={{
                                                    color: feature.color,
                                                    display: 'flex',
                                                    mt: 0.5,
                                                }}
                                            >
                                                {feature.icon}
                                            </Box>
                                            <Box sx={{ flex: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
                                                        {feature.title}
                                                    </Typography>
                                                    {feature.tag && (
                                                        <Typography
                                                            sx={{
                                                                fontSize: '10px',
                                                                fontWeight: 600,
                                                                backgroundColor: feature.color,
                                                                color: 'white',
                                                                px: 1,
                                                                py: 0.25,
                                                                borderRadius: 1,
                                                            }}
                                                        >
                                                            {feature.tag}
                                                        </Typography>
                                                    )}
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: '13px',
                                                        color: '#666',
                                                        mt: 0.5,
                                                    }}
                                                >
                                                    {feature.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                    <Box
                        sx={{
                            mt: 3,
                            pt: 3,
                            borderTop: '1px solid #e0e0e0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography sx={{ fontSize: '14px', color: '#666' }}>
                            Explore all 20+ features in our comprehensive platform
                        </Typography>
                        <Button
                            onClick={() => {
                                const element = document.getElementById('features');
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                                handleClose();
                            }}
                            variant="text"
                            sx={{
                                color: '#10B981',
                                fontWeight: 600,
                                textTransform: 'none',
                            }}
                        >
                            View All Features →
                        </Button>
                    </Box>
                </Box>
            </Menu>

            {/* Solutions Dropdown */}
            <Menu
                anchorEl={solutionsAnchor}
                open={Boolean(solutionsAnchor)}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        onMouseLeave: () => {
                            setSolutionsAnchor(null);
                            setHoveredSolution(null);
                        },
                        sx: {
                            mt: 1.5,
                            minWidth: hoveredSolution ? 900 : 520,
                            borderRadius: 2,
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                            transition: 'min-width 0.3s ease',
                        }
                    }
                }}
                sx={styles.menu}
            >
                <Box sx={{ display: 'flex', minHeight: 400, width: '100%' }}>
                    {/* Left Side - Solutions List */}
                    <Box sx={{
                        width: hoveredSolution ? 520 : '100%',
                        p: 2,
                        borderRight: hoveredSolution ? '1px solid #e0e0e0' : 'none',
                        transition: 'width 0.3s ease',
                    }}>
                        {solutions.map((solution, idx) => (
                            <MenuItem
                                key={idx}
                                onMouseEnter={() => setHoveredSolution(solution.title)}
                                sx={{
                                    p: 2.5,
                                    borderRadius: 1.5,
                                    mb: 1.5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    transition: 'all 0.2s ease',
                                    backgroundColor: hoveredSolution === solution.title ? solution.color + '08' : 'transparent',
                                    transform: hoveredSolution === solution.title ? 'translateX(4px)' : 'none',
                                    '&:hover': {
                                        backgroundColor: solution.color + '08',
                                        transform: 'translateX(4px)',
                                    },
                                    '&:last-child': {
                                        mb: 0,
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', gap: 2, width: '100%', alignItems: 'flex-start', mb: 1.5 }}>
                                    <Box sx={{ backgroundColor: solution.color + '15', ...styles.solutionsIcon }}>
                                        {solution.icon}
                                    </Box>

                                    <Box sx={{ flex: 1 }}>
                                        <Typography
                                            sx={styles.solutionsTitle}
                                        >
                                            {solution.title}
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: '13px', color: 'grey.600', lineHeight: 1.5 }}
                                        >
                                            {solution.desc}
                                        </Typography>
                                    </Box>

                                    <ChevronRight
                                        sx={{
                                            color: solution.color,
                                            fontSize: 20,
                                            opacity: hoveredSolution === solution.title ? 1 : 0.3,
                                            transition: 'all 0.2s ease',
                                            transform: hoveredSolution === solution.title ? 'translateX(2px)' : 'none',
                                        }}
                                    />
                                </Box>

                                <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', pl: 7 }}>
                                    {solution.features.map((feature, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: 1,
                                                backgroundColor: solution.color + '10',
                                                border: '1px solid',
                                                borderColor: solution.color + '30',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '11px', fontWeight: 600, color: solution.color,
                                                }}
                                            >
                                                {feature}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </MenuItem>
                        ))}
                    </Box>

                    {/* Right Side - Expanded Details */}
                    {hoveredSolution && (
                        <Box
                            sx={styles.hoveredSolutions}
                        >
                            {/* Header */}
                            <Typography
                                sx={{
                                    fontFamily: 'Gilroy',
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: solutions.find(s => s.title === hoveredSolution)?.color,
                                    mb: 1,
                                }}
                            >
                                {hoveredSolution}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    color: 'grey.600',
                                    lineHeight: 1.6,
                                    mb: 3,
                                }}
                            >
                                {solutionDetails[hoveredSolution as keyof typeof solutionDetails].description}
                            </Typography>

                            {/* Workflows */}
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: 'grey.500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    mb: 2,
                                }}
                            >
                                Key Workflows
                            </Typography>

                            {solutionDetails[hoveredSolution as keyof typeof solutionDetails].workflows.map((workflow, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: 'flex',
                                        gap: 1.5,
                                        mb: 2,
                                        p: 1.5,
                                        borderRadius: 1.5,
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: solutions.find(s => s.title === hoveredSolution)?.color + '08',
                                        }
                                    }}
                                >
                                    <Typography sx={{ fontSize: '20px' }}>{workflow.icon}</Typography>
                                    <Box>
                                        <Typography sx={{ fontWeight: 600, fontSize: '13px', mb: 0.3 }}>
                                            {workflow.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: '12px', color: 'grey.600' }}>
                                            {workflow.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}

                            {/* Stats */}
                            <Box
                                sx={{
                                    mt: 3,
                                    p: 2,
                                    borderRadius: 2,
                                    backgroundColor: solutions.find(s => s.title === hoveredSolution)?.color + '08',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: 'grey.700' }}>
                                    {solutionDetails[hoveredSolution as keyof typeof solutionDetails].stats}
                                </Typography>
                            </Box>

                            {/* CTA Button */}
                            <Button
                                fullWidth
                                onClick={() => {
                                    window.location.href = 'https://portal-sp.vercel.app/manage/users';
                                }}
                                sx={{
                                    mt: 2,
                                    py: 1.5,
                                    backgroundColor: solutions.find(s => s.title === hoveredSolution)?.color,
                                    color: 'white',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': {
                                        backgroundColor: solutions.find(s => s.title === hoveredSolution)?.color,
                                        opacity: 0.9,
                                    }
                                }}
                            >
                                {solutionDetails[hoveredSolution as keyof typeof solutionDetails].cta} →
                            </Button>
                        </Box>
                    )}
                </Box>
            </Menu >

            {/* Resources Dropdown */}
            <Menu
                anchorEl={resourcesAnchor}
                open={Boolean(resourcesAnchor)}
                onClose={handleClose}
                slots={{
                    transition: Fade
                }}
                slotProps={{
                    paper: {
                        onMouseLeave: () => setResourcesAnchor(null),
                        sx: {
                            p: 0,
                            mt: 1.5,
                            minWidth: 380,
                            borderRadius: 2,
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        }
                    }
                }}
                sx={styles.menu}
            >
                <Box sx={{ p: 3 }}>
                    {/* Header */}
                    <Typography
                        sx={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#666',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            mb: 2,
                        }}
                    >
                        Learning Resources
                    </Typography>

                    {/* Menu Items */}
                    {transformedResources.map((resource, idx) => (
                        <MenuItem
                            key={idx}
                            onClick={() => {
                                if (resource.title === "Video Tutorials") {
                                    const demoSection = document.getElementById('demo');
                                    if (demoSection) {
                                        demoSection.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                } else if (resource.title === "Documentation") {
                                    const docsSection = document.getElementById('docs');
                                    if (docsSection) {
                                        docsSection.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                } else if (resource.title === "Help Center") {
                                    const helpSection = document.getElementById('help');
                                    if (helpSection) {
                                        helpSection.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                } else if (resource.title === "API Reference") {
                                    const apiSection = document.getElementById('api');
                                    if (apiSection) {
                                        apiSection.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                }
                                handleClose();
                            }}
                            sx={{
                                p: 2,
                                borderRadius: 1.5,
                                mb: 1.5,
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 2,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    backgroundColor: resource.color + '08',
                                    transform: 'translateX(4px)',
                                },
                                '&:last-child': {
                                    mb: 0,
                                }
                            }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    backgroundColor: resource.color + '15',
                                    color: resource.color,
                                    ...styles.resourceIcon
                                }}
                            >
                                {resource.icon}
                            </Box>

                            {/* Content */}
                            <Box sx={{ flex: 1 }}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        mb: 0.5,
                                        color: '#1a1a1a',
                                    }}
                                >
                                    {resource.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '13px',
                                        color: '#666',
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {resource.desc}
                                </Typography>
                            </Box>
                        </MenuItem>
                    ))}

                    {/* Footer section */}
                    <Box sx={styles.resourceFooter}>
                        <Typography sx={{ fontSize: '13px', color: '#666' }}>
                            Need more help?
                        </Typography>
                        <Button
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                                handleClose();
                            }}
                            variant="text"
                            sx={styles.resourceBtn}>
                            Contact Support →
                        </Button>
                    </Box>
                </Box>
            </Menu>
        </AppBar >
    );
};

export default Header;