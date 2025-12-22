import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Dialog,
  DialogContent,
  Chip,
  alpha,
} from '@mui/material';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import {
  PlayCircle,
  GraduationCap,
  ChalkboardTeacher,
  UserCircleGear,
  ChartLineUp,
  Books,
  CalendarCheck,
  X
} from '@phosphor-icons/react';
import { demoVideos } from './data';
import type { DemoVideo } from './data';
import { styles } from './style';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={32} weight="duotone" />,
  ChalkboardTeacher: <ChalkboardTeacher size={32} weight="duotone" />,
  UserCircleGear: <UserCircleGear size={32} weight="duotone" />,
  ChartLineUp: <ChartLineUp size={32} weight="duotone" />,
  Books: <Books size={32} weight="duotone" />,
  CalendarCheck: <CalendarCheck size={32} weight="duotone" />,
};

const Demo: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<DemoVideo | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleOpenVideo = (video: DemoVideo) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <Box id="demo" sx={styles.demo} >
      {/* Floating orbs */}
      <Box sx={styles.orb_a} />
      <Box sx={styles.orb_b} />
      <Box sx={styles.orb_c} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{
            ...styles.tag,
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.2),
            borderColor: 'primary.main',
          }}>
            <PlayCircleOutlineSharpIcon sx={{ fontSize: '22px', color: 'error.main' }} />
            <Typography sx={{ fontFamily: 'Gilroy', fontWeight: 500, fontSize: '16px', color: 'error.main' }}>Interactive Demos</Typography>
          </Box>
          <Typography sx={styles.title} >
            Watch How It Works
          </Typography>
          <Typography
            variant="h6"
            sx={{ ...styles.subtitle, color: 'secondary.main' }}
          >
            Explore comprehensive video tutorials for every role in your school.
            From student dashboards to administrative tools, master the platform in minutes.
          </Typography>
        </Box>

        {/* Video Grid */}
        <Grid container spacing={4}>
          {demoVideos.map((video) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={video.id}>
              <Card
                onMouseEnter={() => setHoveredCard(video.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleOpenVideo(video)}
                sx={{
                  ...styles.card,
                  border: `1px solid ${alpha(video.color, hoveredCard === video.id ? 0.5 : 0.2)}`,
                  transform: hoveredCard === video.id ? 'translateY(-12px)' : 'translateY(0)',
                  boxShadow: hoveredCard === video.id
                    ? `0 20px 60px ${alpha(video.color, 0.4)}, 0 0 0 1px ${alpha(video.color, 0.5)}`
                    : `0 4px 20px ${alpha('#000', 0.3)}`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${alpha(video.color, 0.1)}, transparent)`,
                    opacity: hoveredCard === video.id ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                  },
                }}
              >
                {/* Thumbnail */}
                <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={video.thumbnail}
                    alt={video.title}
                    sx={{
                      ...styles.thumbnail,
                      transform: hoveredCard === video.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  {/* Overlay */}
                  <Box
                    sx={{
                      ...styles.overlay,
                      opacity: hoveredCard === video.id ? 1 : 0.7,
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: alpha(video.color, 0.9),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: hoveredCard === video.id ? 'scale(1.2)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                        boxShadow: `0 10px 40px ${alpha(video.color, 0.6)}`,
                        animation: 'pulse 2s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%, 100%': {
                            transform: 'scale(1)',
                            boxShadow: `0 0 0 0 ${alpha(video.color, 0.4)}`,
                          },
                          '50%': {
                            transform: 'scale(1.05)',
                            boxShadow: `0 0 0 10px ${alpha(video.color, 0)}`,
                          },
                        },
                      }}
                    >
                      <PlayCircle size={40} weight="fill" color="#fff" />
                    </Box>
                  </Box>
                  {/* Duration Badge */}
                  <Chip
                    label={video.duration}
                    size="small"
                    sx={styles.chip}
                  />
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        background: alpha(video.color, 0.15),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: video.color,
                        border: `1px solid ${alpha(video.color, 0.3)}`,
                      }}
                    >
                      {iconMap[video.icon]}
                    </Box>
                    <Chip
                      label={video.category}
                      size="small"
                      sx={{
                        background: alpha(video.color, 0.15),
                        color: `${video.color} !important`,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        border: `1px solid ${alpha(video.color, 0.3)}`,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 1,
                      fontSize: '1.125rem',
                    }}
                  >
                    {video.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Gilroy',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: alpha('#fff', 0.7),
                      lineHeight: 1.6,
                    }}
                  >
                    {video.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Video Dialog */}
      <Dialog
        open={!!selectedVideo}
        onClose={() => { }}
        disableEscapeKeyDown
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: alpha('#1F2937', 0.95),
            backdropFilter: 'blur(20px)',
            borderRadius: 3,
            border: `1px solid ${alpha(selectedVideo?.color || '#8B5CF6', 0.3)}`,
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseVideo}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 2,
              background: alpha('#000', 0.6),
              color: '#fff !important',
              '&:hover': {
                background: alpha('#000', 0.8),
              },
            }}
          >
            <X size={24} />
          </IconButton>
          {selectedVideo && (
            <Box>
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%',
                  background: '#000',
                }}
              >
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 'auto',
                      p: 1,
                      borderRadius: 2,
                      background: alpha(selectedVideo.color, 0.15),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: `${selectedVideo.color} !important`,
                      border: `1px solid ${alpha(selectedVideo.color, 0.3)}`,
                    }}
                  >
                    {iconMap[selectedVideo.icon]}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff' }}>
                      {selectedVideo.title}
                    </Typography>
                    <Chip
                      label={selectedVideo.category}
                      size="small"
                      sx={{
                        mt: 1,
                        background: alpha(selectedVideo.color, 0.15),
                        color: `${selectedVideo.color} !important`,
                        fontWeight: 600,
                        border: `1px solid ${alpha(selectedVideo.color, 0.3)}`,
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: alpha('#fff', 0.7),
                    lineHeight: 1.7,
                  }}
                >
                  {selectedVideo.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Demo;