export const styles = {
    cardStyles: {
        height: '100%',
        minHeight: {
            xs: '250px',
            sm: '280px',
            md: '350px'
        },
        display: 'flex',
        px: {
            xs: 0,
            sm: 2
        },
        position: 'relative',
        overflow: 'visible',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: { xs: '20px', md: '0px' },
    },
    cardContent: {
        p: { xs: 3, sm: 4 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    name: {
        fontFamily: 'Gilroy',
        fontSize: {xs: '17px', md: '15px'},
        fontWeight: 600,
        m: 0,
    },
    testimonial: {
        my: 3,
        fontFamily: 'Gilroy',
        fontWeight: 400,
        fontStyle: 'italic',
        fontSize: '14px',
        lineHeight: '152%',
    },
    mobile: {
        width: { sm: '70vw' },
        maxWidth: { xs: 'auto' },
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        height: 'auto',
    },
    mobileIconButton: {
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        mt: 5,
        '& button': {
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            borderRadius: '20%',
            backgroundColor: '#FFBF00',
            color: 'base.customDark',
            '&:hover': {
                backgroundColor: 'FFBF00',
                transform: 'scale(1.05)',
            },
            transition: 'all 0.2s ease-in-out',
        }
    },
    typography: {
        width: { xs: '75vw', sm: '55vw' },
        fontWeight: 500,
        color: 'default.dark',
        textAlign: 'center'
    },
    box: {
        width: { xs: '80vw', sm: 'auto' },
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        pt: { xs: '6vh', md: '2vh' },
    },
    button: {
        display: 'flex',
        gap: 2,
        px: { xs: 0, sm: '90px' },
        width: { xs: '100%', sm: 'auto' }
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
        px: 3
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
    }
}