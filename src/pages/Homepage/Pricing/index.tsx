import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    alpha,
    Avatar,
    Fade,
    Slide,
    Zoom,
} from '@mui/material';
import {
    CheckCircle,
    ArrowRight,
    Users,
    TrendUp,
    Shield,
    CreditCard,
    SparkleIcon,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { quickFeatures, pricingHighlights } from './data';
import { styles } from './style';

const iconMap: Record<string, React.ReactNode> = {
    Users: <Users size={32} weight="duotone" />,
    TrendUp: <TrendUp size={32} weight="duotone" />,
    Shield: <Shield size={32} weight="duotone" />,
};

export default function Pricing() {
    const navigate = useNavigate();

    const handleViewPricing = () => {
        navigate('/pricing');
    };

    return (
        <Box id="pricing" sx={styles.pricing} >
            <Container maxWidth="lg" sx={{ position: 'relative' }}>
                {/* Header */}
                <Fade in timeout={800}>
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Zoom in timeout={1000}>
                            <Box sx={styles.tag}>
                                <SparkleIcon size={22} color="#C057F3" />
                                <Typography sx={styles.tagTitle}>
                                    Flexible Pricing
                                </Typography>
                            </Box>
                        </Zoom>
                        <Typography sx={styles.title}>
                            Pricing that Fits Your School
                        </Typography>
                        <Typography sx={styles.subtitle}>
                            Custom pricing based on your school's unique needs. No one-size-fits-all plans—
                            just fair, transparent pricing that works for you.
                        </Typography>
                    </Box>
                </Fade>

                {/* Main Pricing Card */}
                <Slide direction="up" in timeout={1000}>
                    <Card
                        elevation={0}
                        sx={styles.mainCard}>
                        <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                                    gap: 6,
                                    alignItems: 'center',
                                }}
                            >
                                {/* Left Side - Features */}
                                <Box>
                                    <Zoom in timeout={1200}>
                                        <Box sx={styles.headerIcon}>
                                            <CreditCard weight="duotone" size={40} />
                                        </Box>
                                    </Zoom>

                                    <Typography variant="h4" sx={styles.header}>
                                        Enterprise Custom Pricing
                                    </Typography>

                                    <Typography sx={styles.headerSubtitle}>
                                        Get a personalized quote based on your school's size, requirements,
                                        and preferred subscription terms. Our team works with you to create
                                        a plan that fits your budget.
                                    </Typography>

                                    {/* Feature List */}
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                                            gap: 2,
                                        }}
                                    >
                                        {quickFeatures.map((feature, index) => (
                                            <Box key={index} sx={{
                                                ...styles.features,
                                                animation: `slideInLeft 0.5s ease-out ${0.5 + index * 0.1}s backwards`,
                                            }} >
                                                <CheckCircle
                                                    weight="fill"
                                                    size={20}
                                                    color="#10B981"
                                                    style={{ marginTop: 2, flexShrink: 0 }}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: 'base.customMain',
                                                        fontFamily: 'Gilroy',
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                                {/* Right Side - Highlights */}
                                <Box>
                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', lg: 'column' }, gap: 3 }}>
                                        {pricingHighlights.map((highlight, index) => (
                                            <Slide
                                                key={index}
                                                direction="left"
                                                in
                                                timeout={1000 + index * 200}
                                            >
                                                <Card
                                                    elevation={0}
                                                    sx={{
                                                        p: 3,
                                                        border: '1px solid',
                                                        borderColor: alpha(highlight.color, 0.2),
                                                        borderRadius: 3,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            borderColor: { lg: highlight.color },
                                                            transform: { lg: 'translateX(8px)' },
                                                            boxShadow: { lg: `0 8px 24px ${alpha(highlight.color, 0.15)}` },
                                                        },
                                                    }}
                                                >
                                                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'flex-start' }}>
                                                        <Avatar
                                                            sx={{
                                                                bgcolor: alpha(highlight.color, 0.1),
                                                                color: highlight.color,
                                                                width: 56,
                                                                height: 56,
                                                                transition: 'transform 0.3s ease',
                                                                '&:hover': {
                                                                    transform: 'rotate(360deg)',
                                                                },
                                                            }}
                                                        >
                                                            {iconMap[highlight.icon]}
                                                        </Avatar>
                                                        <Box sx={{ flex: 1 }}>
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    fontWeight: 700,
                                                                    mb: 0.5,
                                                                    fontSize: '1.125rem',
                                                                    color: '#1a1a1a',
                                                                }}
                                                            >
                                                                {highlight.title}
                                                            </Typography>
                                                            <Typography
                                                                sx={{
                                                                    color: (theme) => alpha(theme.palette.base.customDark, 0.6),
                                                                    fontFamily: 'Gilroy',
                                                                    fontSize: '14px',
                                                                    fontWeight: 400,
                                                                }}
                                                            >
                                                                {highlight.description}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </Slide>
                                        ))}
                                    </Box>

                                    {/* CTA Button */}
                                    <Fade in timeout={2000}>
                                        <Box sx={{ mt: 4 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Button
                                                    size="large"
                                                    endIcon={<ArrowRight weight="bold" size={20} />}
                                                    onClick={handleViewPricing}
                                                    sx={{
                                                        width: { xs: '100%', sm: '50%', lg: '100%' },
                                                        fontFamily: 'Gilroy',
                                                        fontWeight: 700,
                                                        fontSize: '16px !important',
                                                        textTransform: 'none',
                                                        px: '35px !important',
                                                        color: '#fff',
                                                        background: 'linear-gradient(135deg, #8a2be2 0%, #d87093 100%)',
                                                        borderRadius: '12px',
                                                        boxShadow: '0 8px 20px rgba(138, 43, 226, 0.25)',
                                                        transition: 'all 0.3s ease',
                                                        position: 'relative',
                                                        overflow: 'hidden',
                                                        '&::before': {
                                                            content: '""',
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: '-100%',
                                                            width: '100%',
                                                            height: '100%',
                                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                                            transition: 'left 0.5s ease',
                                                        },
                                                        '&:hover': {
                                                            transform: 'translateY(-3px) scale(1.02)',
                                                            boxShadow: '0 12px 24px rgba(138, 43, 226, 0.35)',
                                                            '&::before': {
                                                                left: '100%',
                                                            },
                                                        },
                                                    }}
                                                >
                                                    View Detailed Pricing
                                                </Button>
                                            </Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    display: 'block',
                                                    textAlign: 'center',
                                                    mt: 2,
                                                    color: '#666',
                                                    fontSize: '0.875rem',
                                                }}
                                            >
                                                No credit card required • Free consultation
                                            </Typography>
                                        </Box>
                                    </Fade>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Slide>
            </Container>
        </Box>
    );
}