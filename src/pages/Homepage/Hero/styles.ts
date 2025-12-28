import type { Theme } from "@mui/material";
import { bgPalette, fgPalette, mainPalette, borderPalette } from "../../../constants/colors";
import {
  dashboardLayoutPad,
  dashboardNavHeight,
  space,
  cardRadius,
  pad,
} from "../../../constants/dimensions";

export const styles = {
  parent: {
    position: 'relative',
    minHeight: '100%',
    pt: {
      xs: 15,
      md: 19
    },
    backgroundImage: 'url(/home/hero/bgImage.webp)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  subParent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'base.main',
    px: {
      xs: 2,
      sm: 8,
      lg: 0
    }
  },
  heading: {
    lineHeight: {
      xs: 1.2,
      lg: 1
    },
    fontSize: {
      xs: '35px',
      md: '54px'
    },
    fontFamily: 'Gilroy',
    fontWeight: 500,
    width: {
      xs: '100%',
      lg: '56%'
    },
    letterSpacing: -1,
    alignSelf: 'center',
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-in-out',
  },
  subHeading: {
    fontSize: {
      xs: '16px',
      md: '20px'
    },
    mt: {
      xs: 2,
      md: 4
    },
    px: {
      md: 10,
      lg: 0
    },
    fontWeight: 100,
    alignSelf: 'center',
    width: {
      xs: '100%',
      lg: '55%'
    },
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, opacity 0.8s ease-in-out 0.2s',
  },
  buttonParent: {
    mb: {
      xs: 10,
      sm: 15,
      md: 20,
      lg: 7
    },
    mt: 4,
    display: {
      xs: 'block',
      sm: 'flex'
    },
    justifyContent: 'center',
    gap: '20px',
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, opacity 0.8s ease-in-out 0.4s',
  },
  startButton: {
    mb: {
      xs: 2,
      sm: 0
    },
    fontFamily: 'Gilroy',
    fontWeight: 700,
    fontSize: '19px !important',
    textTransform: 'none',
    height: '60px',
    px: '40px !important',
    color: '#fff',
    background: 'linear-gradient(135deg, #8a2be2 0%, #d87093 100%)',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(138, 43, 226, 0.25)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 12px 24px rgba(138, 43, 226, 0.35)',
    },
  },
  demoButton: {
    fontFamily: 'Gilroy',
    textTransform: 'none',
    height: '60px',
    px: '28px !important',
    borderRadius: '12px',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
    color: '#ffffff',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
    boxShadow: 'inset 0 0 10px rgba(255,255,255,0.05)',
    '&:hover': {
      background: 'linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
      borderColor: 'rgba(255,255,255,0.6)',
      transform: 'translateY(-3px) scale(1.03)',
      boxShadow: '0 6px 20px rgba(138, 43, 226, 0.2)',
    },
  },
  dialogueContentBox: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
  },
  exploringButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontWeight: 600,
    padding: '14px 32px',
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '15px',
    boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)',
    '&:hover': {
      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)',
      transform: 'translateY(-1px)',
    },
    transition: 'all 0.2s ease',
  },
  overviewBox: {
    display: {
      xs: 'none',
      lg: 'flex'
    },
    width: '85%',
    alignSelf: 'center',
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-in-out',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: `0 0 25px rgba(255, 255, 255, 0.1),0 0 60px rgba(138, 43, 226, 0.3)`,
    overflow: 'hidden',
  },
  mobileOverview: {
    display: {
      xs: 'flex',
      lg: 'none'
    },
    height: {
      xs: '33vw',
      sm: '25vh',
      md: '35vw'
    },
    position: 'relative'
  },
  mobileOverviewImg: {
    borderRadius: '10px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: (theme: Theme) => `5px 7px 40px ${theme.palette.primary.main}`,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '180px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)',
    pointerEvents: 'none',
  },
  overviewParent: {
    display: 'flex',
    height: '100vh',
    bgcolor: 'base.dark',
    borderRadius: '6px',
    border: '1px solid',
    position: 'relative',
  },
  listIconButton: {
    padding: "0 !important",
    height: "36px !important",
    width: "36px !important",
    backgroundColor: "transparent !important",
    border: "none !important",
    boxShadow: "none !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  sideNav: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minWidth: '20%',
  },
  header: {
    height: dashboardNavHeight + "px",
    px: dashboardLayoutPad / 2 + "px",
    display: "flex",
    alignItems: "center",
    gap: space.md,
    borderBottom: `1px solid ${borderPalette.primary}`,
    borderRight: `1px solid ${borderPalette.primary}`,
    boxSizing: "border-box",
  },
  logoLabel: {
    height: "14px",
    display: "block",
  },
  navigationWrap: {
    position: "relative",
    flex: 1,
    height: "100%",
    overflowY: "auto",
    px: dashboardLayoutPad / 2 + "px",
    py: dashboardLayoutPad / 2 + "px",
    borderRight: `1px solid ${borderPalette.primary}`,
  },
};

export const getWrapStyles = (isActive = false, expand: boolean, isAnimating = false) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: !expand ? "center" : "start",
  gap: space.sm,
  px: expand ? pad.md : 0,
  width: { xs: "100%", md: !expand ? "36px" : "100%", xl: "100%" },
  height: "36px",
  boxSizing: "border-box",

  // Apply gradient only when both active AND animating
  backgroundColor: isActive ? bgPalette.secondary : "transparent",
  background: (isActive && isAnimating)
    ? "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
    : isActive ? bgPalette.secondary : "transparent",

  boxShadow: (isActive && isAnimating)
    ? "0 8px 24px rgba(102, 126, 234, 0.35)"
    : isActive ? "0 0 2px rgba(0, 0, 0, 0.1), inset 0 1px 2px #ffffff" : "none",

  // For this option, also update:
  "& .icon": {
    color: (isActive && isAnimating) ? "#ffffff" : isActive ? mainPalette.primary : fgPalette.secondary,
  },

  "& .label": {
    color: (isActive && isAnimating) ? "#ffffff" : isActive ? mainPalette.primary : fgPalette.secondary,
    fontWeight: (isActive && isAnimating) ? 600 : isActive ? 500 : 400,
  },

  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",

  borderRadius: cardRadius.sm,
  cursor: "pointer",

  // Transform only during animation
  transform: (isActive && isAnimating)
    ? "translateX(2px) scale(1.02)"
    : "translateX(0) scale(1)",



  "& .label.default": {
    display: { xs: "block", md: "none", xl: "block" },
  },
  "& .label.mini": {
    display: { xs: "none", md: "block", xl: "none" },
  },

  "&:hover": {
    backgroundColor: isActive ? undefined : "rgba(102, 126, 234, 0.05)",
  },
});
