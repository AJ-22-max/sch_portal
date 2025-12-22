export const styles = {
    footer: {
        position: 'relative',
        minHeight: '100%',
        pt: 7,
        pb: 5,
        px: { xs: 1, sm: 3 },
        overflow: 'hidden',
        background: `
                          radial-gradient(circle at 20% 30%, rgba(192, 87, 243, 0.18) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(255, 106, 136, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 40% 80%, rgba(192, 87, 243, 0.12) 0%, transparent 50%),
                          radial-gradient(circle at 90% 70%, rgba(255, 106, 136, 0.10) 0%, transparent 50%),
                          linear-gradient(135deg, 
                            #2a2d5a 0%, 
                            #3d3b6f 25%, 
                            #4a4380 50%, 
                            #3d3b6f 75%, 
                            #2a2d5a 100%
                          )
                        `,
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
                                repeating-linear-gradient(
                                  90deg,
                                  rgba(192, 87, 243, 0.04) 0px,
                                  transparent 2px,
                                  transparent 100px
                                ),
                                repeating-linear-gradient(
                                  0deg,
                                  rgba(255, 106, 136, 0.04) 0px,
                                  transparent 2px,
                                  transparent 100px
                                )
                            `,
            pointerEvents: 'none',
        },
    },
    orb_a: {
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192, 87, 243, 0.25), transparent)',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite',
        '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '50%': { transform: 'translate(30px, -30px) scale(1.1)' },
        },
    },
    orb_b: {
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 106, 136, 0.22), transparent)',
        filter: 'blur(80px)',
        animation: 'float 10s ease-in-out infinite reverse',
    },
    orb_c: {
        position: 'absolute',
        top: '50%',
        right: '5%',
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 108, 255, 0.20), transparent)',
        filter: 'blur(70px)',
        animation: 'float 12s ease-in-out infinite',
    },
    Btn: {
        width: { xs: '0', sm: 'auto' },
        px: { xs: '30px !important', sm: 0 },
        fontFamily: 'Gilroy',
        fontWeight: 700,
        fontSize: '17px !important',
        textTransform: 'none',
        height: '50px',
        color: '#C057F3 !important',
        background: '#ffffff !important',
        border: 'none',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(138, 43, 226, 0.25)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 12px 24px rgba(138, 43, 226, 0.35)',
        },
    },
    logo: {
        pb: {
            xs: 5,
            sm: 0
        },
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row',
            md: 'column'
        },
        justifyContent: 'space-between'
    },
    footerLinks: {
        color: 'secondary.main',
        fontWeight: 400,
        fontFamily: 'Gilroy',
        maxWidth: 300,
        textAlign: 'left',
        fontSize: '15px',
        textDecoration: 'none',
        '&:hover': {
            color: 'error.main',
        }
    }
}