import { alpha } from "@mui/material"
import type { Theme } from "@mui/material"

export const styles = {
    pricing: {
        pt: {
            xs: 8,
            md: 9
        },
        pb: 7,
        bgcolor: 'secondary.main',
        position: 'relative',
        overflow: 'hidden',
    },
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
        bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.1),
        borderColor: 'primary.main',
    },
    tagTitle: {
        fontFamily: 'Gilroy',
        fontWeight: 500,
        fontSize: '16px',
        color: 'primary.main'
    },
    title: {
        color: "base.customDark",
        fontFamily: 'Gilroy',
        fontWeight: 700,
        mb: 2,
        fontSize: {
            xs: "27px",
            md: "34px"
        },
        animation: 'fadeInUp 0.8s ease-out',
        '@keyframes fadeInUp': {
            from: {
                opacity: 0,
                transform: 'translateY(20px)',
            },
            to: {
                opacity: 1,
                transform: 'translateY(0)',
            },
        },
    },
    subtitle: {
        color: 'base.customMain',
        width: {
            sm: '90%',
            md: 'auto'
        },
        fontFamily: 'Gilroy',
        fontWeight: 400,
        maxWidth: "800px",
        mx: "auto",
        fontSize: {
            xs: '17px',
            md: '18px'
        },
        animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
        '@keyframes fadeInUp': {
            from: {
                opacity: 0,
                transform: 'translateY(20px)',
            },
            to: {
                opacity: 1,
                transform: 'translateY(0)',
            },
        },
    },
    mainCard: {
        mb: 6,
        px: 3,
        py: 3,
        borderRadius: 4,
        border: '2px solid',
        borderColor: alpha('#8B5CF6', 0.2),
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: { lg: '#8B5CF6' },
            boxShadow: { lg: `0 20px 60px ${alpha('#8B5CF6', 0.15)}` },
            transform: { lg: 'translateY(-4px)' },
        },
    },
    headerIcon: {
        display: 'inline-flex',
        p: 2,
        borderRadius: 3,
        bgcolor: alpha('#8B5CF6', 0.1),
        color: '#8B5CF6',
        mb: 3,
        animation: 'pulse 2s ease-in-out infinite',
        '@keyframes pulse': {
            '0%, 100%': {
                transform: 'scale(1)',
                boxShadow: `0 0 0 0 ${alpha('#8B5CF6', 0.4)}`,
            },
            '50%': {
                transform: 'scale(1.05)',
                boxShadow: `0 0 0 10px ${alpha('#8B5CF6', 0)}`,
            },
        },
    },
    header: {
        fontWeight: 700,
        mb: 2,
        color: '#1a1a1a',
        fontSize: { xs: '1.5rem', md: '2rem' },
        animation: 'fadeIn 1s ease-out 0.3s backwards',
        '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
    },
    headerSubtitle: {
        fontFamily: 'Gilroy',
        fontSize: '15px',
        fontWeight: 400,
        color: (theme: Theme) => alpha(theme.palette.base.customDark, 0.6),
        mb: 4,
        lineHeight: 1.7,
        animation: 'fadeIn 1s ease-out 0.4s backwards',
    },
    features: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.5,
        '@keyframes slideInLeft': {
            from: {
                opacity: 0,
                transform: 'translateX(-20px)',
            },
            to: {
                opacity: 1,
                transform: 'translateX(0)',
            },
        },
        '&:hover': {
            transform: 'translateX(5px)',
            transition: 'transform 0.3s ease',
        },
    }
}