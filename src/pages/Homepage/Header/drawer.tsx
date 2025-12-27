import { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Drawer,
    Collapse,
} from '@mui/material';
import {
    Phone,
    Close,
    ExpandMore
} from '@mui/icons-material';
import type { NavigateFunction } from 'react-router-dom';
import { featuresData } from '../Features/data';
import { solutions } from "./data";
import type { TransformedFeatureCategory, TransformedResource } from "./data";
import { styles } from "./styles";

interface MobileDrawerProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    navigate: NavigateFunction;
    transformedFeatureCategories: Record<string, TransformedFeatureCategory>;
    transformedResources: TransformedResource[];
}

function MobileDrawer({
    mobileMenuOpen,
    setMobileMenuOpen,
    navigate,
    transformedFeatureCategories,
    transformedResources,
}: MobileDrawerProps) {
    const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
    return (
        <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            sx={styles.drawer}
        >
            <Box
                sx={styles.box}
            >
                {/* Header with Close Button */}
                <Box sx={styles.header}>
                    <Box
                        onClick={() => {
                            navigate('/');
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
                            sx={{ color: '#1a1a1a', ...styles.logoText }}
                        >
                            SchoolPortal
                        </Typography>
                    </Box>
                    <Button
                        onClick={() => setMobileMenuOpen(false)}
                        sx={{
                            color: '#000000 !important',
                            bgcolor: 'transparent !important',
                            ...styles.mobileMenuBtn
                        }}
                    >
                        <Close />
                    </Button>
                </Box>

                {/* Navigation Section */}
                <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
                    {/* Home */}
                    <Button
                        size='large'
                        disableRipple
                        fullWidth
                        onClick={() => {
                            navigate('/');
                            setMobileMenuOpen(false);
                            setMobileExpandedSection(null);
                        }}
                        sx={{
                            ...styles.mobileActiveBtn,
                            color: location.pathname === '/' ? '#000 !important' : '#666 !important',
                            fontWeight: location.pathname === '/' ? 600 : 400,
                            bgcolor: location.pathname === '/' ? 'rgba(0,0,0,0.04) !important' : 'transparent !important',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '0px',
                                bottom: '0px',
                                width: '4px',
                                borderRadius: '0',
                                background: location.pathname === '/'
                                    ? 'linear-gradient(180deg, #C057F3, #FF6A88)'
                                    : 'transparent',
                                transition: 'all 0.3s ease',
                            }
                        }}
                    >
                        Home
                    </Button>

                    {/* Features Section */}
                    <Box sx={{ mb: 0.5 }}>
                        <Button
                            size='large'
                            disableRipple
                            fullWidth
                            onClick={() => setMobileExpandedSection(mobileExpandedSection === 'features' ? null : 'features')}
                            sx={{
                                fontWeight: mobileExpandedSection === 'features' ? 600 : 400,
                                ...styles.mobileNavBtn
                            }}
                        >
                            Features
                            <ExpandMore
                                sx={{
                                    fontSize: '18px !important',
                                    transform: mobileExpandedSection === 'features' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Button>

                        <Collapse in={mobileExpandedSection === 'features'}>
                            <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
                                {Object.entries(transformedFeatureCategories).map(([key, category]) => (
                                    <Box key={key} sx={{ mb: 2 }}>
                                        <Typography
                                            sx={{
                                                fontSize: '11px !important',
                                                fontWeight: 600,
                                                color: '#999 !important',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                                mb: 1,
                                                px: 1,
                                            }}
                                        >
                                            {category.title}
                                        </Typography>
                                        {category.features.map((feature, idx) => (
                                            <Box
                                                key={idx}
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
                                                    setMobileMenuOpen(false);
                                                    setMobileExpandedSection(null);
                                                }}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1.5,
                                                    p: 1.5,
                                                    mb: 0.5,
                                                    borderRadius: 1.5,
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(0,0,0,0.04)',
                                                    },
                                                }}
                                            >
                                                <Box sx={{ color: feature.color, display: 'flex' }}>
                                                    {feature.icon}
                                                </Box>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography sx={{ fontWeight: 500, fontSize: '14px !important', color: '#1a1a1a !important' }}>
                                                        {feature.title}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '12px !important', color: '#666 !important', mt: 0.25 }}>
                                                        {feature.desc}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Box>
                                ))}
                            </Box>
                        </Collapse>
                    </Box>

                    {/* Solutions Section */}
                    <Box sx={{ mb: 0.5 }}>
                        <Button
                            size='large'
                            disableRipple
                            fullWidth
                            onClick={() => setMobileExpandedSection(mobileExpandedSection === 'solutions' ? null : 'solutions')}
                            sx={{
                                fontWeight: mobileExpandedSection === 'solutions' ? 600 : 400,
                                ...styles.mobileNavBtn
                            }}
                        >
                            Solutions
                            <ExpandMore
                                sx={{
                                    fontSize: '18px !important',
                                    transform: mobileExpandedSection === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Button>

                        <Collapse in={mobileExpandedSection === 'solutions'}>
                            <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
                                {solutions.map((solution, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            p: 2,
                                            mb: 1.5,
                                            borderRadius: 1.5,
                                            border: '1px solid rgba(0,0,0,0.08)',
                                            bgcolor: 'white',
                                            '&:hover': {
                                                bgcolor: 'rgba(0,0,0,0.02)',
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', gap: 1.5, mb: 1 }}>
                                            <Typography sx={{ fontSize: '24px !important' }}>{solution.icon}</Typography>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography sx={{ fontWeight: 600, fontSize: '14px !important', mb: 0.5, color: '#1a1a1a !important' }}>
                                                    {solution.title}
                                                </Typography>
                                                <Typography sx={{ fontSize: '12px !important', color: '#666 !important' }}>
                                                    {solution.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Collapse>
                    </Box>

                    {/* Pricing */}
                    <Button
                        size='large'
                        disableRipple
                        fullWidth
                        onClick={() => {
                            navigate('/pricing');
                            setMobileMenuOpen(false);
                            setMobileExpandedSection(null);
                        }}
                        sx={{
                            fontWeight: location.pathname === '/pricing' ? 600 : 400,
                            bgcolor: location.pathname === '/pricing' ? 'rgba(0,0,0,0.04) !important' : 'transparent !important',
                            ...styles.mobileActiveBtn,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '0px',
                                bottom: '0px',
                                width: '4px',
                                borderRadius: '0',
                                background: location.pathname === '/pricing'
                                    ? 'linear-gradient(180deg, #C057F3, #FF6A88)'
                                    : 'transparent',
                                transition: 'all 0.3s ease',
                            }
                        }}
                    >
                        Pricing
                    </Button>

                    {/* Resources Section */}
                    <Box sx={{ mb: 0.5 }}>
                        <Button
                            size='large'
                            disableRipple
                            fullWidth
                            onClick={() => setMobileExpandedSection(mobileExpandedSection === 'resources' ? null : 'resources')}
                            sx={{
                                fontWeight: mobileExpandedSection === 'resources' ? 600 : 400,
                                ...styles.mobileNavBtn
                            }}
                        >
                            Resources
                            <ExpandMore
                                sx={{
                                    fontSize: '18px !important',
                                    transform: mobileExpandedSection === 'resources' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Button>

                        <Collapse in={mobileExpandedSection === 'resources'}>
                            <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
                                {transformedResources.map((resource, idx) => (
                                    <Box
                                        key={idx}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1.5,
                                            p: 1.5,
                                            mb: 0.5,
                                            borderRadius: 1.5,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                bgcolor: 'rgba(0,0,0,0.04)',
                                            },
                                        }}
                                    >
                                        <Box sx={{
                                            borderRadius: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: resource.color + '15',
                                            color: resource.color,
                                            flexShrink: 0,
                                        }}>{resource.icon}</Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography sx={{ fontWeight: 500, fontSize: '14px !important', mb: 0.25, color: '#1a1a1a !important' }}>
                                                {resource.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: '12px !important', color: '#666 !important' }}>
                                                {resource.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Collapse>
                    </Box>
                </Box>

                {/* Action Buttons - Bottom */}
                <Box sx={styles.mobileSideActions}>
                    <Button
                        size="large"
                        fullWidth
                        onClick={() => {
                            if (location.pathname !== '/') {
                                navigate('/?scrollTo=demo');
                                setMobileMenuOpen(false);
                                setMobileExpandedSection(null);
                            } else {
                                const demoSection = document.getElementById('demo');
                                if (demoSection) {
                                    demoSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                                setMobileMenuOpen(false);
                                setMobileExpandedSection(null);
                            }
                        }}
                        sx={styles.mobileLoginBtn}
                    >
                        Get a Free Demo
                    </Button>
                    <Button

                        fullWidth
                        size="large"
                        onClick={() => navigate('/auth/signup')}
                        sx={styles.mobileStartBtn} >
                        Get Started
                    </Button>

                    <Box
                        onClick={() => {
                            window.open('https://wa.me/2348000000000?text=Hello, I would like to inquire about SchoolPortal', '_blank');
                        }}
                        sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <Phone sx={{ fontSize: '16px !important', color: '#666 !important' }} />
                        <Typography sx={{ color: '#666 !important', fontSize: '13px !important' }}>
                            +234 800 000 0000
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
}

export default MobileDrawer;