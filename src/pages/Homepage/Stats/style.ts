export const styles = {
    box: {
        position: "relative",
        bgcolor: 'base.main',
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 8 },
        textAlign: "center",
        overflow: "hidden",
    },
    header: {
        fontFamily: "Gilroy",
        fontWeight: 700,
        fontSize: { xs: "27px", md: "34px" },
        mb: 1,
        color: "text.primary",
    },
    subtitle: {
        fontFamily: 'Gilroy',
        fontSize: {
            xs: "17px",
            md: "18px"
        },
        color: "text.secondary",
        mb: 4,
        width: {
            xs: "100%",
            sm: '80%',
            md: "60%"
        },
        mx: "auto",
        lineHeight: 1.6,
        px: { xs: 2, sm: 0 }
    },
    gridContainer: {
        px: {
            xs: '13vw',
            sm: 5,
            md: 10,
            lg: 0
        }
    },
    subGrid: {
        position: 'relative',
        bgcolor: 'secondary.main',
        py: 5,
        px: 0.5,
        border: '1px solid',
        borderColor: 'base.dark',
        borderRadius: '8px',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        '&:hover': {
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 10px 30px rgba(138, 43, 226, 0.25), inset 0 0 60px rgba(138, 43, 226, 0.1)',
            cursor: 'context-menu',
        },
        '&:hover::before': {
            width: '80%',
            height: '80%',
            opacity: 1,
        }
    },
    divider: {
        width: "30px",
        mx: "auto",
        my: 2,
        borderColor: "black",
    },
    label: {
        fontFamily: "Gilroy",
        fontWeight: 500,
        color: "text.secondary",
        fontSize: {
            xs: "14px",
            md: "15px"
        },
    },
    counter: {
        fontFamily: "Gilroy",
        fontWeight: 700,
        fontSize: { xs: "28px", md: "40px" },
        color: "primary.main",
        letterSpacing: "0.5px",
        mb: 1,
    }
}