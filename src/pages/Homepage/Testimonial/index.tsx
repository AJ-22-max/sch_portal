import { useState } from 'react';
import { alpha, Box, Container, Typography, Card, CardContent, Avatar, Rating, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { baseTestimonials } from './data';
import 'swiper/swiper-bundle.css';
import { styles } from './style';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
    const muiTheme = useTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
    const isXs = useMediaQuery(muiTheme.breakpoints.only('xs'));
    const testimonials = [...baseTestimonials, ...baseTestimonials];

    const getCurrentMobileTestimonials = () => {
        const slidesToShow = isXs ? 2 : 2;
        const result = [];
        for (let i = 0; i < slidesToShow; i++) {
            const index = (mobileActiveIndex + i) % baseTestimonials.length;
            result.push(baseTestimonials[index]);
        }
        return result;
    };

    const isActive = (slideIndex: number, isMobileView: boolean) => {
        return isMobileView
            ? slideIndex === 1
            : (slideIndex % baseTestimonials.length) === (activeIndex % baseTestimonials.length);
    };

    const getCardStyles = (slideIndex: number, isMobileView: boolean) => {
        const active = isActive(slideIndex, isMobileView);
        return {
            mb: isMobileView ? 2 : 0,
            background: active ? '#ffffff' : `
      radial-gradient(circle at 20% 30%, rgba(192, 87, 243, 0.18) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 106, 136, 0.15) 0%, transparent 50%),
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
            '&::before': active ? '' : {
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
            color: active ? '#333' : 'white',
            transform: active
                ? (isMobileView ? 'translateY(0px) scale(1.02)' : 'translateY(-30px) scale(1.08)')
                : 'translateY(0) scale(1)',
            boxShadow: active ? '0 8px 24px rgba(0,0,0,0.12)' : '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: active ? 3 : 1,
            ...styles.cardStyles
        };
    };

    const TestimonialCard = ({ testimonial, index, isMobileView }: {
        testimonial: any;
        index: number;
        isMobileView: boolean
    }) => {
        const active = isActive(index, isMobileView);

        const getRatingStyles = (isActive: boolean) => ({
            '& .MuiRating-iconFilled': {
                color: '#FDAF3B',
                borderRadius: '0.73px',
                width: { xs: '24.82px', sm: '28px' },
                height: { xs: '24.82px', sm: '28px' },
            },
            '& .MuiRating-iconEmpty': {
                color: isActive ? 'neutral.dark' : 'base.light',
            }
        });

        return (
            <Card sx={getCardStyles(index, isMobileView)}>
                <CardContent sx={styles.cardContent}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', pr: isMobileView ? 0 : 2 }}>
                            <Avatar
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                sx={{
                                    width: isMobileView ? { xs: '12vw', sm: '12vw' } : '4vw',
                                    height: isMobileView ? { xs: '12vw', sm: '12vw' } : '4vw',
                                    mr: 2
                                }}
                            />
                            <Box>
                                <Typography sx={styles.name}>
                                    {testimonial.name}
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Gilroy',
                                    fontWeight: 500,
                                    color: active ? 'base.customDark' : 'default.light',
                                    fontSize: '12px'
                                }}>
                                    {testimonial.company}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            component="img"
                            src="/home/testimonial/quotation.png"
                            alt="Quotation Icon"
                            sx={{
                                width: isMobileView ? { xs: '10vw', sm: '10vw' } : '3vw',
                                height: isMobileView ? { xs: '10vw', sm: '10vw' } : '3vw',
                                alignSelf: 'center'
                            }}
                        />
                    </Box>

                    <Typography sx={{
                        color: active ? 'base.customMain' : 'base.main',
                        ...styles.testimonial
                    }}>
                        {testimonial.testimonial}
                    </Typography>

                    <Rating value={testimonial.rating} readOnly sx={getRatingStyles(active)} />
                </CardContent>
            </Card>
        );
    };

    const renderMobileLayout = () => (
        <Box sx={styles.mobile}>
            <Box sx={{ transform: 'translateY(0px)', transition: 'transform 0.5s ease-in-out' }}>
                {getCurrentMobileTestimonials().map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.id}-${mobileActiveIndex}-${index}`}
                        testimonial={testimonial}
                        index={index}
                        isMobileView={true}
                    />
                ))}
            </Box>

            <Box sx={styles.mobileIconButton}>
                <IconButton onClick={() => setMobileActiveIndex(prev => (prev - 1 + baseTestimonials.length) % baseTestimonials.length)}>
                    ▲
                </IconButton>
                <IconButton onClick={() => setMobileActiveIndex(prev => (prev + 1) % baseTestimonials.length)}>
                    ▼
                </IconButton>
            </Box>
        </Box>
    );

    const renderDesktopLayout = () => (
        <Box sx={{ pb: 4, width: '100%', margin: '0 auto' }}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
                    768: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
                }}
                style={{ paddingBottom: '70px', paddingTop: '40px' }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={`${testimonial.id}-${index}`}>
                        <TestimonialCard
                            testimonial={testimonial}
                            index={index}
                            isMobileView={false}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );

    return (
        <Box sx={{
            bgcolor: 'secondary.main',
            position: 'relative',
            minHeight: '100%',
            pt: 12,
            pb: 3,
        }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Box sx={{
                        ...styles.tag,
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
                        borderColor: 'primary.main',
                    }}>
                        <FormatQuoteIcon sx={{ fontSize: '22px', color: 'primary.main' }} />
                        <Typography sx={ styles.tagTitle }>Testimonials</Typography>
                    </Box>
                    <Typography
                        sx={ styles.title }
                    >
                        Why Choose Us
                    </Typography>
                    <Typography
                        sx={ styles.subtitle }
                    >
                        We provide an integrated logistics solution built on Express Parcel,
                        Cross Border, Warehousing, Freight and Software value added services
                        that helps brands deliver faster and provide a superior experience
                    </Typography>
                </Box>

                {isMobile ? renderMobileLayout() : renderDesktopLayout()}
            </Container>
        </Box>
    );
}

export default Testimonial;