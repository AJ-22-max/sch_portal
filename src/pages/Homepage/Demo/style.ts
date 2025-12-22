import { alpha } from "@mui/material"

export const styles = {
    demo: {
        position: 'relative',
        minHeight: '100%',
        py: 12,
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
        }
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
    },
    title: {
        color: "base.main",
        fontFamily: 'Gilroy',
        fontWeight: 700,
        mb: 2,
        fontSize: {
            xs: "27px",
            md: "34px"
        }
    },
    subtitle: {
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
    card: {
        height: '100%',
        background: alpha('#1F2937', 0.4),
        backdropFilter: 'blur(20px)',
        borderRadius: 4,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    thumbnail: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(180deg, ${alpha('#000', 0.2)}, ${alpha('#000', 0.6)})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease',
    },
    chip: {
        position: 'absolute',
        bottom: 12,
        right: 12,
        background: alpha('#000', 0.8),
        color: '#fff',
        fontWeight: 600,
        fontSize: '0.75rem',
        backdropFilter: 'blur(10px)',
    }
}