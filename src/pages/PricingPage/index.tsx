import { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stepper,
    Step,
    StepLabel,
    StepContent,
    alpha,
    Divider,
    Avatar,
    Stack,
    Zoom,
    Fade
} from '@mui/material';
import {
    CheckCircle,
    GraduationCap,
    Users,
    FileText,
    CreditCard,
    TrendUp,
    Shield,
    Trophy,
    Headset,
    ArrowRight,
    SparkleIcon
} from '@phosphor-icons/react';
import { pricingFeatures, pricingFactors, pricingSteps, benefits } from './data';
import { styles } from './style';

const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap size={32} weight="duotone" />,
    FileText: <FileText size={32} weight="duotone" />,
    CheckCircle: <CheckCircle size={32} weight="duotone" />,
    CreditCard: <CreditCard size={32} weight="duotone" />,
    Users: <Users size={32} weight="duotone" />,
    TrendUp: <TrendUp size={32} weight="duotone" />,
    GraduationCap1: <GraduationCap size={28} weight="duotone" />,
    Shield: <Shield size={32} weight="duotone" />,
    Headset: <Headset size={32} weight="duotone" />,
};

export default function PricingPage() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            id="pricing"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: 'secondary.main',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle Background Pattern */}
            <Box sx={styles.background} />

            <Container maxWidth="lg" sx={{ position: 'relative', mt: { xs: 7, sm: 5 } }}>
                {/* Header */}
                <Fade in timeout={800}>
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Zoom in timeout={1000}>
                            <Box sx={styles.tag}>
                                <SparkleIcon size={22} color="#C057F3" />
                                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: 500, fontSize: '16px', color: 'primary.main' }}>
                                    Flexible Pricing
                                </Typography>
                            </Box>
                        </Zoom>
                        <Typography
                            sx={styles.header}
                        >
                            Pricing that Fits Your School
                        </Typography>
                        <Typography sx={styles.subHeader} >
                            Custom pricing based on your school's unique needs. No one-size-fits-all plans—
                            just fair, transparent pricing that works for you.
                        </Typography>
                    </Box>
                </Fade>

                {/* Main Pricing Card */}
                <Card
                    elevation={0}
                    sx={{
                        mb: 6,
                        borderRadius: 4,
                        border: '2px solid',
                        borderColor: alpha('#8B5CF6', 0.2),
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
                    }}
                >
                    <Box
                        sx={{
                            p: 4,
                            color: 'white',
                            textAlign: 'center',
                            background: `
                  radial-gradient(circle at 20% 30%, rgba(192, 87, 243, 0.7) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 106, 136, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(192, 87, 243, 0.12) 0%, transparent 50%),
                  radial-gradient(circle at 90% 70%, rgba(255, 106, 136, 0.10) 0%, transparent 50%),
                  linear-gradient(135deg, 
                    #2a2d5a 0%, 
                    #3d3b6f 25%, 
                    #4a4380 50%, 
                    #3d3b6f 75%, 
                    #2a2d5a 100%
                  )
                `,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: `
                        repeating-linear-gradient(
                          90deg,
                          rgba(192, 87, 243, 0.04) 0px,
                          transparent 2px,
                          transparent 100px
                        ),
                        repeating-linear-gradient(
                          0deg,
                          rgba(255, 106, 136, 0.04) 0px,
                          transparent 2px,
                          transparent 100px
                        )
                    `,
                                pointerEvents: 'none',
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Trophy weight="duotone" size={48} style={{ marginBottom: 16, }} />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                            Enterprise Custom Pricing
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.125rem' }}>
                            Tailored solutions for schools of all sizes
                        </Typography>
                    </Box>

                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                        {/* How It Works Section */}
                        <Typography
                            sx={{
                                fontFamily: 'Gilroy',
                                fontSize: '22px',
                                fontWeight: 700,
                                mb: 4,
                                color: '#1a1a1a',
                                textAlign: 'center',
                            }}
                        >
                            How It Works
                        </Typography>

                        <Stepper
                            activeStep={activeStep}
                            orientation="vertical"
                            sx={{
                                px: 3,
                                '& .MuiStepLabel-root .Mui-active': {
                                    color: '#8B5CF6',
                                },
                                '& .MuiStepLabel-root .Mui-completed': {
                                    color: '#10B981',
                                },
                            }}
                        >
                            {pricingSteps.map((step, index) => (
                                <Step key={index} expanded>
                                    <StepLabel
                                        StepIconComponent={() => (
                                            <Avatar
                                                sx={{
                                                    bgcolor: alpha(step.color, 0.1),
                                                    color: step.color,
                                                    width: 48,
                                                    height: 48,
                                                }}
                                            >
                                                {iconMap[step.icon]}
                                            </Avatar>
                                        )}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                color: '#1a1a1a',
                                                fontSize: '1.125rem',
                                            }}
                                        >
                                            {step.label}
                                        </Typography>
                                    </StepLabel>
                                    <StepContent>
                                        <Typography
                                            sx={{
                                                color: '#666',
                                                fontFamily: 'Gilroy',
                                                fontSize: '14px',
                                                lineHeight: 1.7,
                                                ml: 2,
                                            }}
                                        >
                                            {step.description}
                                        </Typography>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>

                        <Divider sx={{ my: 5 }} />

                        {/* Pricing Factors */}
                        <Typography
                            sx={{
                                fontFamily: 'Gilroy',
                                fontSize: '22px',
                                fontWeight: 700,
                                mb: 4,
                                color: '#1a1a1a',
                                textAlign: 'center',
                            }}
                        >
                            What Determines Your Price?
                        </Typography>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                                gap: 3,
                                mb: 4,
                                px: 3
                            }}
                        >
                            {pricingFactors.map((factor, index) => (
                                <Card
                                    key={index}
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        border: '1px solid',
                                        borderColor: alpha(factor.color, 0.2),
                                        borderRadius: 3,
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: factor.color,
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 12px 24px ${alpha(factor.color, 0.15)}`,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            p: 2,
                                            borderRadius: 2,
                                            bgcolor: alpha(factor.color, 0.1),
                                            color: factor.color,
                                            mb: 2,
                                        }}
                                    >
                                        {iconMap[factor.icon]}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            fontSize: '1rem',
                                            color: '#1a1a1a',
                                        }}
                                    >
                                        {factor.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#666',
                                            fontFamily: 'Gilroy',
                                            fontWeight: '400',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {factor.description}
                                    </Typography>
                                </Card>
                            ))}
                        </Box>

                        <Divider sx={{ my: 5 }} />

                        {/* All Features Included */}
                        <Typography
                            sx={{
                                fontFamily: 'Gilroy',
                                fontSize: '22px',
                                fontWeight: 700,
                                mb: 4,
                                color: '#1a1a1a',
                                textAlign: 'center',
                            }}
                        >
                            Everything Included in Your Plan
                        </Typography>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                                gap: 4,
                                px: 3
                            }}
                        >
                            {pricingFeatures.map((featureGroup, index) => (
                                <Box key={index}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 700,
                                            color: '#8B5CF6',
                                            textTransform: 'uppercase',
                                            fontFamily: 'Gilroy',
                                            fontSize: '14px',
                                            letterSpacing: '0.5px',
                                            mb: 2,
                                        }}
                                    >
                                        {featureGroup.category}
                                    </Typography>
                                    <List disablePadding>
                                        {featureGroup.items.map((item, idx) => (
                                            <ListItem key={idx} disablePadding sx={{ mb: 1.5 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CheckCircle
                                                        weight="fill"
                                                        size={20}
                                                        color="#10B981"
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item}
                                                    primaryTypographyProps={{
                                                        fontFamily: 'Gilroy',
                                                        fontSize: '14px',
                                                        color: '#333',
                                                        fontWeight: 500,
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            ))}
                        </Box>

                        {/* CTA Button */}
                        <Box sx={{ textAlign: 'center', mt: 5 }}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    window.location.href = 'https://portal-sp.vercel.app/subscription/invoices';
                                }}
                                endIcon={<ArrowRight weight="bold" size={20} />}
                                sx={styles.getBtn}
                            >
                                Get Your Custom Quote
                            </Button>
                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'block',
                                    mt: 2,
                                    color: '#666',
                                    fontSize: '0.875rem',
                                }}
                            >
                                No credit card required • Free consultation • Response within 24 hours
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* Benefits Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
                        gap: 3,
                    }}
                >
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            elevation={0}
                            sx={styles.benefitCard}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    p: 2,
                                    borderRadius: 2,
                                    bgcolor: alpha('#8B5CF6', 0.1),
                                    color: '#8B5CF6',
                                    mb: 2,
                                }}
                            >
                                {iconMap[benefit.icon]}
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    fontSize: '1rem',
                                    color: '#1a1a1a',
                                }}
                            >
                                {benefit.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Gilroy',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#666',
                                    textAlign: 'center',
                                }}
                            >
                                {benefit.description}
                            </Typography>
                        </Card>
                    ))}
                </Box>

                {/* Trust Banner */}
                <Box
                    sx={{
                        mt: 8,
                        p: 4,
                        borderRadius: 3,
                        bgcolor: alpha('#10B981', 0.05),
                        border: '1px solid',
                        borderColor: alpha('#10B981', 0.2),
                        textAlign: 'center',
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={4}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    color: '#10B981',
                                    mb: 0.5,
                                }}
                            >
                                1,000+
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Gilroy',
                                fontSize: '14px',
                                fontWeight: 400,
                                color: '#666',
                                textAlign: 'center',
                            }}>
                                Schools Trust Us
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    color: '#10B981',
                                    mb: 0.5,
                                }}
                            >
                                50,000+
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Gilroy',
                                fontSize: '14px',
                                fontWeight: 400,
                                color: '#666',
                                textAlign: 'center',
                            }}>
                                Active Users Daily
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 800,
                                    color: '#10B981',
                                    mb: 0.5,
                                }}
                            >
                                99.9%
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Gilroy',
                                fontSize: '14px',
                                fontWeight: 400,
                                color: '#666',
                                textAlign: 'center',
                            }}>
                                Uptime Guarantee
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}