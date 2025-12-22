import { alpha } from "@mui/material"
import type { Theme } from "@mui/material";

export const styles = {
    tag: {
        animation: 'float 3s ease-in-out infinite',
        '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
        },
        mb: 3,
        display: 'flex',
        justifySelf: 'center',
        justifyContent: 'center',
        gap: 1,
        p: 1,
        border: '1px solid',
        borderRadius: '20px',
        px: 3,
        bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.2),
        borderColor: 'primary.main'
    },
    tagTitle: {
        fontFamily: 'Gilroy',
        fontWeight: 500,
        fontSize: '16px',
        color: 'primary.main'
    },
    title: {
        fontFamily: 'Gilroy',
        fontWeight: 700,
        color: "base.customDark",
        mb: 2,
        fontSize: {
            xs: "27px",
            md: "34px"
        }
    },
    subtitle: {
        color: 'base.customMain',
        fontFamily: 'Gilroy',
        fontWeight: 400,
        maxWidth: "800px",
        mx: "auto",
        fontSize: {
            xs: '17px',
            md: '18px'
        }
    },
    accordion: {
        mb: 2,
        border: '1px solid',
        borderRadius: '12px !important',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:before': { display: 'none' },
        '&:hover': {
            borderColor: '#C057F3',
            boxShadow: `0 4px 20px ${alpha('#C057F3', 0.12)}`,
        },
    },
    expandIcon: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
    },
    questionIcon: {
        width: 40,
        height: 40,
        borderRadius: 2,
        bgcolor: alpha('#C057F3', 0.1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    chip: {
        mb: 1,
        height: '22px',
        fontSize: '11px',
        fontFamily: 'Gilroy',
        fontWeight: 600,
        bgcolor: alpha('#C057F3', 0.1),
        color: '#C057F3',
        border: '1px solid',
        borderColor: alpha('#C057F3', 0.2),
    },
    question: {
        fontFamily: 'Gilroy',
        fontWeight: 600,
        fontSize: {
            xs: '15px',
            md: '17px'
        },
        color: '#0D0D0D',
        textAlign: 'left',
    },
    accordionDetails: {
        px: 3,
        py: 3,
        bgcolor: alpha('#C057F3', 0.02),
        borderTop: '1px solid',
        borderColor: alpha('#C057F3', 0.1),
    },
    answer: {
        fontFamily: 'Gilroy',
        fontSize: '15px',
        lineHeight: 1.8,
        color: alpha('#0D0D0D', 0.75),
        pl: 7,
    },
    card: {
        p: 6,
        borderRadius: 4,
        border: '2px solid',
        borderColor: alpha('#8B5CF6', 0.2),
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#8B5CF6',
            boxShadow: `0 20px 60px ${alpha('#8B5CF6', 0.15)}`,
            transform: 'translateY(-4px)',
        },
    },
    headsetIcon: {
        width: 64,
        height: 64,
        borderRadius: '50%',
        bgcolor: alpha('#C057F3', 0.15),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 'auto',
        mb: 3,
    },
    contact: {
        fontFamily: 'Gilroy',
        fontWeight: 700,
        color: '#0D0D0D',
        mb: 2,
        textAlign: 'center',
        fontSize: { xs: '24px', md: '32px' },
    },
    contactSubtitle: {
        fontFamily: 'Gilroy',
        fontSize: '16px',
        color: alpha('#0D0D0D', 0.7),
        mb: 6,
        maxWidth: 600,
        mx: 'auto',
        lineHeight: 1.7,
        textAlign: { xs: 'center', md: 'left' }
    },
    supportBtn: {
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
    }
}