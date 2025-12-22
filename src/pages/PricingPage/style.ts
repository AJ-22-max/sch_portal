import { alpha, type Theme } from "@mui/material"

export const styles = {
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        backgroundImage: `
                                linear-gradient(45deg, #8B5CF6 25%, transparent 25%),
                                linear-gradient(-45deg, #8B5CF6 25%, transparent 25%),
                                linear-gradient(45deg, transparent 75%, #8B5CF6 75%),
                                linear-gradient(-45deg, transparent 75%, #8B5CF6 75%)
                            `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    },
    tag: {
        bgcolor: (theme:Theme) => alpha(theme.palette.primary.main, 0.1),
        width: 'auto',
        mb: 3,
        display: 'flex',
        justifySelf: 'center',
        justifyContent: 'center',
        gap: 1,
        py: 1,
        px: 3,
        border: '1px solid',
        borderColor: 'primary.main',
        borderRadius: '20px',
        animation: 'float 3s ease-in-out infinite',
        '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
        },
    },
    header: {
        fontFamily: 'Gilroy',
        fontWeight: 700,
        color: "base.customDark",
        mb: 2,
        fontSize: { xs: "26px", md: "34px" },
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
    subHeader: {
        color: 'base.customMain',
        fontFamily: 'Gilroy',
        fontWeight: 400,
        maxWidth: "800px",
        mx: "auto",
        fontSize: { xs: "1rem", md: '17px' },
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
    getBtn: {
        background: 'linear-gradient(135deg, #8B5CF6 0%, #C057F3 100%)',
        color: 'white',
        px: 5,
        py: 2,
        fontSize: '1.125rem',
        fontWeight: 700,
        borderRadius: 3,
        textTransform: 'none',
        boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
        '&:hover': {
            background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)',
            boxShadow: '0 12px 32px rgba(139, 92, 246, 0.4)',
            transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease',
    },
    benefitCard: {
        p: 3,
        textAlign: 'center',
        border: '1px solid',
        borderColor: '#e5e7eb',
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: '#8B5CF6',
            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.1)',
            transform: 'translateY(-4px)',
        },
    }
}