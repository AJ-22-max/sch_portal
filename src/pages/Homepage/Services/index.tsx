import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material'
import { services } from './data';
import { styles } from './style';

function Services() {
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newProgress = services.map((_, index) => {
        const step = Math.pow(services.length - index, 1.5);
        return scrolled / 7000 + step * 0.18;
      });

      setScrollProgress(newProgress);
    };



    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{ backgroundColor: 'base.main', pt: { xs: 3, md: 0, lg: 3 } }}
    >
      <Container maxWidth="lg">
        <Box sx={{ pb: 6 }}>
          {services.map((service, index) => (
            <Box
              key={service.id}
              ref={(el: HTMLDivElement | null) => {
                serviceRefs.current[index] = el;
              }}
              sx={{
                top: { xs: 'none', md: `${1 + index * 3.5}vh`, lg: `${17 + index * 7}vh` },
                ...styles.Box
              }}
            >
              <Box
                sx={{
                  bgcolor: 'secondary.main',
                  border: '1px solid',
                  borderColor: 'base.dark',
                  borderRadius: '10px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: {
                    xs: 'none',
                    md: `scale(${1.08 - (scrollProgress[index] || 0) * 0.09})`,
                    lg: `scale(${1.1 - (scrollProgress[index] || 0) * 0.09})`
                  },
                  zIndex: index,
                  m: '0 auto'
                }}
              >
                <Grid container spacing={{ xs: 3, md: 5 }}>
                  {/* Left Side - Content */}
                  <Grid size={{ xs: 12, lg: 5 }} sx={{ p: { xs: 3, md: 6, lg: 4 } }} >
                    <Box
                      sx={{
                        background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}DD 100%)`,
                        boxShadow: `0 8px 24px ${service.color}40`,
                        ...styles.headerIcon
                      }}
                    >
                      {service.icon ? <service.icon sx={{ fontSize: '32px', color: 'white' }} /> : null}
                    </Box>

                    <Typography sx={ styles.header}>
                      {service.title}
                    </Typography>

                    <Typography sx={styles.subtitle}>
                      {service.description}
                    </Typography>

                    <Box sx={{
                      display: 'grid', gap: 2, cursor: 'default',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: '1fr' }
                    }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            ...styles.features,
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.8)',
                              boxShadow: `0 12px 40px ${service.color}20`,
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >
                          <Box
                            sx={{
                              background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                              boxShadow: `0 8px 16px ${service.color}35`,
                              ...styles.icon
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              sx={{
                                fontFamily: 'Gilroy',
                                fontWeight: 700,
                                fontSize: '17px',
                                mb: 0.5,
                                color: 'base.customDark',
                              }}
                            >
                              {feature.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '13px !important',
                                lineHeight: 1.7,
                                color: 'base.customMain',
                                opacity: 0.85,
                              }}
                            >
                              {feature.description}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  {/* Right Side - Mockup */}
                  <Grid size={{ xs: 12, lg: 7 }} sx={{ pr: { xs: 3, md: 0, lg: 4 } }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "visible",
                      }}
                    >
                      <Box
                        sx={styles.img}
                      >
                        <Box
                          sx={{
                            content: {
                              xs: `url(${service.mobileImage})`,
                              lg: `url(${service.image})`
                            },
                            width: '100%',
                            height: 'auto',
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Services;