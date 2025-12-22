import { useState, useEffect, useRef } from 'react';
import { Box, Button, Dialog, DialogContent, Typography } from '@mui/material';
import { features } from './data';
import { ListIcon } from "@phosphor-icons/react";
import { styles, getWrapStyles } from './styles';

interface OverviewProps {
  expand?: boolean;
}

export default function Overview({ expand = false }: OverviewProps) {
  const [activeItem, setActiveItem] = useState<string>('overview');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(!expand);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const hasAnimationRun = useRef<boolean>(false);

  const handleItemClick = (itemId: string) => {
    if (itemId === activeItem || !animationComplete) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveItem(itemId);
      setIsTransitioning(false);
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimationRun.current) {
          setIsInView(true);
        } else {
          // Keep this to terminate animation when scrolling away
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
  if (!isInView || hasAnimationRun.current) return;

  let isCancelled = false;

  const runTutorial = async () => {
    hasAnimationRun.current = true;

    setIsAnimating(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (isCancelled) return;

    for (let i = 0; i < 3; i++) {
      if (isCancelled) return;

      const feature = features[i];
      const element = navItemRefs.current[feature.id];

      if (element) {

        if (isCancelled) return;

        setIsTransitioning(true);
        await new Promise(resolve => setTimeout(resolve, 100));

        if (isCancelled) return;

        setActiveItem(feature.id);
        setIsTransitioning(false);

        await new Promise(resolve => setTimeout(resolve, 1200));
        if (isCancelled) return;
      }
    }

    if (isCancelled) return;

    setIsAnimating(false);
    setShowPopup(true); // Only show if not cancelled
    setAnimationComplete(true);
  };

  runTutorial();

  return () => {
    isCancelled = true;
    setIsAnimating(false);
    setShowPopup(false); // Add this line to prevent dialog from showing
    setAnimationComplete(true);
  };
}, [isInView]);

useEffect(() => {
  if (!isInView && isAnimating) {
    // User scrolled away during animation
    setIsAnimating(false);
    setShowPopup(false); // Add this line to prevent dialog from showing
    setAnimationComplete(true);
  }
}, [isInView, isAnimating]);

  const currentItem = features.find(item => item.id === activeItem);

  if (!currentItem) return null;

  return (
    <Box ref={containerRef}
      sx={styles.overviewParent}>
      {/* Dialog box */}
      <Dialog
        open={showPopup}
        onClose={() => { }}
        disableEscapeKeyDown
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: 'blur(6px)',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }
          },
          paper: {
            sx: {
              borderRadius: '20px',
              padding: '40px',
              background: 'linear-gradient(to bottom, #ffffff, #f8fafc)',
              maxWidth: '420px',
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.12)',
            }
          }
        }}
      >
        <DialogContent sx={{ textAlign: 'center', padding: 0 }}>
          <Box sx={styles.dialogueContentBox}>
            <Box component="span" sx={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>→</Box>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#0f172a', fontSize: '22px' }}>
            Navigation Tutorial Complete
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#64748b', lineHeight: 1.6, fontSize: '15px' }}>
            Click any sidebar item to switch between sections
          </Typography>
          <Button
            variant="contained"
            onClick={() => setShowPopup(false)}
            sx={styles.exploringButton}
          >
            Start Exploring
          </Button>
        </DialogContent>
      </Dialog>
      {/* Sidebar */}
      <Box sx={styles.sideNav}>
        {/* Logo */}
        <Box sx={styles.header}>
          <Box display={{ xs: "none", md: "block", xl: "none" }}>
            <Button
              className="icon"
              color="secondary"
              sx={styles.listIconButton}
            >
              <ListIcon />
            </Button>
          </Box>
          <Box component="img" src="/logo/dark.png" sx={styles.logoLabel} />
        </Box>

        {/* Navigation Items */}
        <Box sx={styles.navigationWrap}>
          {features.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <Box
                key={item.id}
                ref={(el: HTMLDivElement | null) => {
                  navItemRefs.current[item.id] = el;
                }}
                onClick={() => handleItemClick(item.id)}
                sx={getWrapStyles(isActive, isExpanded, isAnimating)}
              >
                <Box className="icon">
                  <Icon weight={isActive ? "fill" : "regular"} size={18} />
                </Box>
                <Typography className="label default">{item.label}</Typography>
                {isExpanded && <Typography className="label mini">{item.label}</Typography>}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <Box
          component="img"
          src={currentItem.image}
          alt={currentItem.label}
          sx={{
            border: '1px solid', borderTopRightRadius: '6px',
            borderBottom: 'none',
            borderColor: 'transparent'
          }}
        />
        <Box
          component="img"
          src={currentItem.imageb}
          alt={currentItem.label}
          sx={{
            border: '1px solid', borderBottomRightRadius: '6px',
            borderTop: 'none'
          }}
        />
      </Box>
    </Box>
  );
}