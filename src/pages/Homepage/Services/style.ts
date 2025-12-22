export const styles = {
    Box: {
        position: {
            xs: 'relative',
            md: 'sticky'
        },
        pt: {
            sm: 3,
            md: 1.5
        },
        pb: {
            xs: 4,
            sm: 2,
            md: '-200px',
            lg: 3
        },
        px: {
            xs: 0.5,
            md: 0
        }
    },
    headerIcon: {
        width: '55px',
        height: '55px',
        borderRadius: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '18px',
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: 0.6,
        }
    },
    header: {
        fontFamily: "Gilroy",
        fontWeight: 700,
        fontSize: {
            xs: "26px",
            md: "40px !important",
            lg: "30px !important"
        },
        mb: 2,
        color: 'base.customDark',
    },
    subtitle: {
        fontFamily: 'Gilroy',
        fontWeight: 400,
        fontSize: {
            xs: '15px !important',
            md: '18px !important',
            lg: '15px !important'
        },
        lineHeight: 1.7,
        mb: 3,
        color: 'base.customMain',
    },
    features: {
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 2.5, md: 3, lg: 2.5 },
        p: 3.5,
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
    },
    icon: {
        width: '52px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
        color: 'white',
        fontSize: '24px',
        flexShrink: 0,
    },
    img: {
        position: { xs: "relative", lg: "absolute" },
        top: {
            md: 20,
            lg: 70
        },
        right: {
            xs: "0px",
            lg: "-32px"
        },
        width: {
            xs: "100%",
            lg: "600px"
        },
        boxShadow: "0 6px 36px rgba(0,0,0,0.05)",
        overflow: "hidden",
        border: '0.5px solid',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: {
            lg: '20px'
        },
        borderBottomLeftRadius: {
            lg: '20px'
        },
        borderTopRightRadius: {
            xs: '20px',
            sm: '0px'
        },
        borderRight: 'none',
        transition: 'all 0.35s ease',
        '&:hover': {
            transform: {
                xs: 'none',
                lg: 'translateY(-10px)'
            },
            boxShadow: "0 10px 45px rgba(0,0,0,0.08)",
            width: {
                lg: "610px"
            },
        }
    }
}