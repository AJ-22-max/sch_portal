import { alpha } from "@mui/material";
import type { Theme } from "@mui/material";

export const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, rgba(240, 147, 251, 0.2) 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 0,
    },
    tag: {
        bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.2),
        borderColor: 'primary.main',
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
        px: 3
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
        }
    },
    iconButton: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        bgcolor: "white",
        boxShadow: 3,
        width: 48,
        height: 48,
        "&:hover": {
            bgcolor: "grey.100"
        },
        "&:disabled": {
            opacity: 0.3
        },
    },
    cardGrid: {
        display: "grid",
        width: 'auto',
        gap: 4,
        alignItems: "stretch",
        transition: "all 0.3s ease",
    },
    card: {
        pointerEvents: 'auto',
        bgcolor: 'base.main',
        width: '270px',
        borderRadius: "15px",
        border: 1,
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "visible",
        '&:hover': {
            cursor: 'pointer'
        },
    },
    highlightedCard: {
        border: 3,
        transform: "translateY(-12px) scale(1.05)",
        animation: 'pulse 2s ease-in-out 2',
        '@keyframes pulse': {
            '0%, 100%': {
                transform: 'translateY(-12px) scale(1.05)',
            },
            '50%': {
                transform: 'translateY(-14px) scale(1.06)',
            },
        },
    },
    beforeCard: {
        content: '""',
        position: "absolute",
        borderRadius: 10,
        top: -4,
        left: 0,
        right: 0,
        height: 10,
        transformOrigin: "left",
        transition: "transform 0.3s ease",
        width: '95%',
        display: 'flex',
        justifySelf: 'center'
    },
    featureTitle: {
        fontFamily: 'Gilroy',
        fontWeight: 600,
        fontStyle: 'normal',
        color: 'base.customDark',
        mb: 1,
        fontSize: '20px !important'
    },
    featureDescription: {
        fontSize: '14px',
        color: 'base.customDark',
        fontWeight: 400,
        opacity: 0.7,
        mb: 2,
        lineHeight: 1.6,
        height: '50px'
    },
    paper: {
        width: 340,
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: "background.paper",
        border: "1px solid",
        boxShadow: "0 12px 40px rgba(15,15,15,0.2)",
    }
}