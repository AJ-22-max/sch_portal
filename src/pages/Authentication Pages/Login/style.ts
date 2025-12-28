export const styles = {
    leftGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: 'url(/auth/login.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: {
            xs: "300px",
            sm: "350px",
            md: "500px",
            lg: "100vh"
        },
        order: {
            xs: 1,
            lg: 1
        },
    },
    leftGridBox: {
        position: "relative",
        width: {
            xs: '240px',
            sm: '280px',
            md: '320px',
            lg: '40vw',
            xl: '47vw'
        },
        height: {
            xs: "250px",
            sm: "300px",
            md: "390px",
            lg: "94vh"
        },
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareBox: {
        position: "absolute",
        top: { xs: '0px', lg: '7vh' },
        left: { xs: '50%', lg: '22%' },
        width: {
            xs: "100px",
            sm: "160px",
            lg: "180px",
            xl: "180px"
        },
        height: {
            xs: "70px",
            sm: "90px",
            md: "120px",
            lg: "140px",
            xl: "160px"
        },
        borderRadius: { xs: 2, sm: 2.5, lg: 3 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 1.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
        overflow: "hidden",
    },
    squareIcon: {
        fontSize: {
            xs: "40px",
            sm: "48px",
            md: "56px",
            lg: "56px",
            xl: "72px"
        },
        fontWeight: 700,
        color: "white",
        fontFamily: "Gilroy",
    },
    squareText: {
        fontSize: {
            xs: "11px",
            sm: "14px",
            md: "14px",
            lg: "18px",
            xl: "16px"
        },
        fontWeight: 600,
        textAlign: "center",
        whiteSpace: "pre-line",
        px: { xs: 1, sm: 1.5, lg: 2 },
        fontFamily: "Gilroy",
    },
    rightGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 3, sm: 4, md: 4 },
        minHeight: { xs: "auto", lg: "100vh" },
        order: { xs: 2, lg: 2 },
    },
    logoBox: {
        display: "flex",
        alignItems: "center",
        gap: { xs: 1, sm: 1.5 },
        mb: { xs: 4, sm: 5, md: 6 },
        cursor: "pointer",
        justifyContent: { xs: "center", lg: "flex-start" },
    },
    logoText: {
        fontSize: {
            xs: "1.5rem",
            sm: "25px"
        },
        fontWeight: 700,
        color: "#0f172a",
        letterSpacing: "-0.8px",
        fontFamily: "Gilroy",
    },
    header: {
        fontWeight: 700,
        color: "#0f172a",
        mb: 1,
        fontFamily: "Gilroy",
        fontSize: {
            xs: '20px',
            sm: "2rem",
            md: "2.125rem"
        },
    },
    subtitle: {
        color: "#64748b",
        fontSize: { xs: "14px", sm: "15px" },
        fontFamily: "Gilroy",
        px: { xs: 2, md: 0 },
    },
    textField: {
        mb: { xs: 2.5, sm: 3 },
        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
        },
        "& .MuiInputBase-input": {
            fontFamily: "Gilroy",
            fontWeight: 500,
            fontSize: { xs: "13px", sm: "14px" },
        },
        "& .MuiInputLabel-root": {
            fontSize: { xs: "14px", sm: "16px" },
        },
    },
    forgotPassword: {
        fontSize: { xs: "13px", sm: "14px" },
        fontWeight: 600,
        background: "linear-gradient(135deg, #d87093 0%, #8a2be2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        cursor: "pointer",
        fontFamily: "Gilroy",
        "&:hover": {
            opacity: 0.8,
        },
    },
    resend: {
        fontWeight: 600,
        background: "linear-gradient(135deg, #d87093 0%, #8a2be2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        cursor: "pointer",
        "&:hover": {
            opacity: 0.8,
        },
    },
    loginBtn: {
        py: { xs: '5px !important', sm: '7px !important' },
        fontFamily: "Gilroy",
        fontWeight: 700,
        fontSize: { xs: "13px !important", sm: "14.5px !important" },
        textTransform: "none",
        color: "#fff",
        background: "linear-gradient(135deg, #d87093 0%, #8a2be2 100%)",
        borderRadius: 2,
        boxShadow: "0 4px 16px rgba(138, 43, 226, 0.25)",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px rgba(138, 43, 226, 0.35)",
        },
        "&:disabled": {
            background: "#e5e7eb",
            color: "#9ca3af",
        },
    },
    loading: {
        width: { xs: 14, sm: 16 },
        height: { xs: 14, sm: 16 },
        border: "2px solid rgba(255,255,255,0.3)",
        borderTopColor: "white",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
        "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
        },
    },
    linearProgress: {
        borderRadius: 1,
        height: { xs: 3, sm: 4 },
        bgcolor: "#f1f5f9",
        "& .MuiLinearProgress-bar": {
            background: "linear-gradient(90deg, #d87093 0%, #8a2be2 100%)",
            borderRadius: 1,
        },
    },
    backBtn: {
        mt: 2,
        py: { xs: '5px !important', sm: '7px !important' },
        fontFamily: "Gilroy",
        fontWeight: 700,
        fontSize: { xs: "13px !important", sm: "14.5px !important" },
        textTransform: "none",
        borderColor: "#e5e7eb",
        color: "#64748b",
        borderRadius: 2,
        "&:hover": {
            borderColor: "#d1d5db",
            bgcolor: "#f9fafb",
        },
    },
    signup: {
        fontWeight: 700,
        background: "linear-gradient(135deg, #d87093 0%, #8a2be2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        cursor: "pointer",
        "&:hover": {
            opacity: 0.8,
        },
    },
    otpTextField: {
        width: "50px",
        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            "&.Mui-focused fieldset": {
                borderColor: "#8a2be2",
                borderWidth: 2,
            },
        }
    }
};