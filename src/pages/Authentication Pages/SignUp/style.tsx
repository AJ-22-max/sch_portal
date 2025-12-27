export const styles = {
  successModal: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: '#fafbfc',
    py: 3
  },
  successBox: {
    bgcolor: "white",
    borderRadius: 2,
    p: { xs: 5, sm: 8 },
    textAlign: "center",
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    border: '1px solid #e5e7eb'
  },
  successIcon: {
    width: 64,
    height: 64,
    margin: '0 auto 32px',
    borderRadius: '50%',
    bgcolor: '#f0fdf4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  successHeading: {
    fontFamily: 'Gilroy',
    fontWeight: 700,
    mb: 2,
    color: '#0f172a',
    fontSize: { xs: '1.5rem', sm: '2rem' },
    letterSpacing: '-0.025em'
  },
  referenceNumber: {
    fontFamily: 'Gilroy',
    color: '#64748b',
    fontSize: '14px',
    mb: 4,
    letterSpacing: '0.5px',
    fontWeight: 500
  },
  modalDescription: {
    fontFamily: 'Gilroy',
    color: '#475569',
    fontSize: '14px',
    lineHeight: 1.7,
    fontWeight: 500,
    mb: 5,
    maxWidth: '560px',
    margin: '0 auto 40px'
  },
  nextStepsBox: {
    bgcolor: '#f8fafc',
    borderRadius: 2,
    p: 4,
    mb: 5,
    textAlign: 'left',
    border: '1px solid #e2e8f0'
  },
  whatHappensTypography: {
    fontFamily: 'Gilroy',
    fontWeight: 700,
    fontSize: '14px',
    color: '#0f172a',
    mb: 2,
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  nextSteps: {
    minWidth: '24px',
    height: '24px',
    borderRadius: '50%',
    bgcolor: '#e0e7ff',
    color: '#4f46e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 700,
    fontFamily: 'Gilroy'
  },
  nextStepsTypography: {
    fontFamily: 'Gilroy',
    fontSize: '14px',
    fontWeight: 500,
    color: '#475569',
    pt: 0.25
  },
  modalActionButton: {
    width: { xs: '100%', sm: 'auto' },
    px: { xs: 0, sm: '40px !important' },
    py: '12px !important',
    fontFamily: 'Gilroy',
    fontWeight: 700,
    fontSize: '16px !important',
    textTransform: 'none',
    color: '#fff',
    background: 'linear-gradient(135deg, #d87093 0%, #8a2be2 100%)',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(138, 43, 226, 0.25)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-3px) scale(1.02)',
      boxShadow: '0 12px 24px rgba(138, 43, 226, 0.35)',
    },
  },
  avatarBox: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    border: "3px dashed #d1d5db",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 2,
    cursor: "pointer",
    overflow: "hidden",
    bgcolor: "#f9fafb",
    "&:hover": { borderColor: "primary.main" }
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  shrinkTextField: {
    mb: 3,
    '& .MuiInputLabel-root': {
      transform: 'translate(14px, 9px) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.75)',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Gilroy', fontWeight: 700,
      px: 2,
      fontSize: '14px',
    }
  },
  contactTextField: {
    mb: 3,
    '& input::placeholder': {
      fontFamily: 'Gilroy',
      fontWeight: 500
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Gilroy', fontWeight: 700,
      px: 2,
      fontSize: '14px',
    }
  },
  basicTextField: {
    mb: 3,
    '& .MuiInputBase-input': {
      fontFamily: 'Gilroy', fontWeight: 700,
      px: 2,
      fontSize: '14px',
    }
  },
  documentation: {
    border: "2px dashed #d1d5db",
    borderRadius: 2,
    p: 4,
    textAlign: "center",
    bgcolor: "#f9fafb",
    cursor: "pointer",
    "&:hover": { borderColor: "#10b981", bgcolor: "#f0fdf4" }
  },
  statsBanner: {
    background: 'linear-gradient(135deg, #d87093 0%, #8a2be2 100%)',
    borderRadius: 3,
    p: 4,
    color: 'white',
    mb: 4
  },
  statsBannerTypography: {
    textAlign: { xs: 'center', md: 'center', lg: 'left' },
    fontSize: { xs: '14px', sm: '17px', md: '17px' },
    fontWeight: 600,
    mb: 3,
    opacity: 0.9
  },
  leftGrid: {
    minHeight: { xs: "100vh", md: 'auto', lg: '100vh' },
    display: { xs: "none", md: "block" },
    position: { md: 'relative', lg: 'fixed' },
    left: 0,
    top: 0,
    width: { md: 'auto', lg: '33.33%' },
    borderRight: '1px solid #f1f5f9',
    overflowY: 'auto',
  },
  logoBox: {
    mb: { xs: 3, md: 5, lg: 3 },
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'translateX(-4px)'
    }
  },
  leftGridContainer: {
    minHeight: { md: 'auto', lg: '100vh' },
    display: 'flex',
    flexDirection: 'column',
    py: { xs: 5, md: 4, lg: 5 },
  },
  logoText: {
    color: 'base.customDark',
    fontWeight: 700,
    letterSpacing: '-0.8px',
    fontSize: '1.75rem',
    lineHeight: 1,
  },
  steps: {
    display: 'flex',
    flexDirection: { md: 'row', lg: 'column' },
    gap: 0,
    mb: { lg: 4 },
    mt: { md: 5, lg: 0 }
  },
  step: {
    display: 'flex',
    gap: 2.5,
    alignItems: 'flex-start',
    py: 2,
    px: { md: 0, lg: 2.5 },
    borderRadius: 2,
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bgcolor: 'transparent',
  },
  lgConnector: {
    display: { md: 'none', lg: 'flex' },
    width: { md: '20px', lg: '2px' },
    height: { md: '2px', lg: '70px' },
    position: { md: 'relative', lg: 'absolute' },
    top: { lg: 44 },
    left: { lg: '30%' },
    transform: { lg: 'translateX(-50%)' },
    alignSelf: { md: 'center' },
    mx: { md: 2 },
    transition: 'background 0.4s ease'
  },
  mdConnector: {
    display: { md: 'flex', lg: 'none' },
    width: { md: '40px', lg: '2px' },
    height: { md: '2px', lg: '70px' },
    position: { md: 'relative', lg: 'absolute' },
    top: { lg: 44 },
    left: { lg: '50%' },
    mb: 4,
    transform: { lg: 'translateX(-50%)' },
    alignSelf: { md: 'center' },
    transition: 'background 0.4s ease'
  },
  mdFooter: {
    display: { xs: 'none', lg: 'flex' },
    justifyContent: 'space-between',
    alignItems: 'center',
    pt: 4,
    borderTop: '1px solid #f1f5f9',
    mt: 4
  },
  footerTypography: {
    color: "#64748b",
    fontWeight: 600,
    fontSize: '14px',
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    transition: 'all 0.2s',
    "&:hover": {
      color: '#0f172a',
      transform: 'translateX(-4px)'
    }
  },
  rightGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: { xs: 0, lg: '33.33%' },
    minHeight: { xs: '100vh', md: 'auto', lg: '100vh' },
    overflowY: 'auto',
  },
  mobileLogoBox: {
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    gap: 1.5,
    mb: 5,
    justifyContent: 'left'
  },
  mobileLogoText: {
    fontSize: { xs: '20px', sm: '28px' },
    fontWeight: 700,
    color: '#0f172a',
    letterSpacing: '-0.5px'
  },
  Card: {
    bgcolor: "base.main",
    borderRadius: 3,
    p: { xs: 3, sm: 5 },
    border: 'none',
    boxShadow: '0 8px 32px rgba(0,0,0,0.06)'
  },
  mobileProgressIndicator: {
    display: { xs: 'flex', md: 'none' },
    alignItems: 'center',
    justifyContent: 'center',
    mb: 5,
    pb: 4,
    borderBottom: '2px solid #f1f5f9',
    position: 'relative',
  },
  mobileStep: {
    fontSize: { xs: '10px', sm: '12px' },
    fontWeight: 600,
    mt: 1,
    textAlign: 'center',
    display: { xs: 'none', sm: 'block' },
    maxWidth: '100px',
    transition: 'color 0.3s'
  },
  alert: {
    mb: 4,
    borderRadius: 2,
    '& .MuiAlert-icon': {
      fontSize: 24
    }
  },
  cardBtn: {
    display: "flex",
    gap: 2,
    mt: 2,
    pt: 4,
    borderTop: '1px solid #f1f5f9'
  },
  backCardBtn: {
    textTransform: "none",
    fontWeight: 600,
    flex: 1,
    py: 1.75,
    fontSize: '15px',
    borderColor: '#e5e7eb',
    color: '#64748b',
    borderRadius: 2,
    '&:hover': {
      borderColor: '#d1d5db',
      bgcolor: '#f9fafb'
    }
  },
  continueCardBtn: {
    flex: 1,
    fontFamily: 'Gilroy',
    fontWeight: 700,
    fontSize: '15px',
    textTransform: 'none',
    color: '#fff',
    background: 'linear-gradient(135deg, #d87093 0%, #8a2be2 100%)',
    borderRadius: 2,
    py: 1.75,
    boxShadow: '0 4px 16px rgba(138, 43, 226, 0.2)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(138, 43, 226, 0.3)',
    },
    '&:disabled': {
      background: '#e5e7eb',
      color: '#9ca3af'
    }
  },
  processing: {
    width: 16,
    height: 16,
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: 'white',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    }
  },
  linearProgress: {
    borderRadius: 1,
    height: 6,
    bgcolor: '#f1f5f9',
    '& .MuiLinearProgress-bar': {
      background: 'linear-gradient(90deg, #d87093 0%, #8a2be2 100%)',
      borderRadius: 1
    }
  },
  helperText: {
    background: 'linear-gradient(135deg, #d87093 0%, #8a2be2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 700,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8
    }
  }
}