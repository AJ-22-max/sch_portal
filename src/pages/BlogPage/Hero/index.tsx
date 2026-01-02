import { useState } from "react";
import { Box, Container, Typography, TextField, Button, InputAdornment } from "@mui/material";

function Hero() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubscribe = async () => {
        if (!email) return;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return;

        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSuccess(true);
            setEmail("");

            // Reset success message after 3 seconds
            setTimeout(() => setSuccess(false), 5000);
        } catch (error) {
            console.error("Subscription failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '590px',
                pt: {
                    xs: 15,
                    md: 19
                },
                pb: 12,
                backgroundImage: 'url(/blogs/bgImage.webp)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="md" sx={{ position: "relative" }}>
                <Box sx={{ textAlign: "center" }}>
                    {/* Main Heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: "Gilroy",
                            fontWeight: 700,
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                            color: "base.main",
                            mb: 2,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                        }}
                    >
                        Insights, Updates & Best Practices for Modern Schools
                    </Typography>

                    {/* Subheading */}
                    <Typography
                        sx={{
                            fontFamily: "Gilroy",
                            fontWeight: 500,
                            fontSize: { xs: "15px", sm: "16px", md: "17px" },
                            color: "base.dark",
                            mb: 5,
                            lineHeight: 1.7,
                            maxWidth: "680px",
                            mx: "auto",
                        }}
                    >
                        Stay informed with product updates, school management tips, education trends, and expert insights designed to help schools run better.
                    </Typography>

                    {/* Email Subscription Form */}
                    <Box
                        sx={{
                            maxWidth: "540px",
                            mx: "auto",
                            position: "relative",
                        }}
                    >
                        <TextField
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            disabled={loading || success}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") handleSubscribe();
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button
                                            variant="contained"
                                            onClick={handleSubscribe}
                                            disabled={loading || success || !email}
                                            sx={{
                                                py: 1.25,
                                                px: 3,
                                                fontFamily: 'Gilroy',
                                                fontWeight: 700,
                                                fontSize: '200px !important',
                                                textTransform: 'none',
                                                color: '#fff',
                                                background: success
                                                    ? "linear-gradient(135deg, #10b981 0%, #059669 100%) !important"
                                                    : 'linear-gradient(135deg, #d87093 0%, #8a2be2 100%) !important',
                                                borderRadius: '7px',
                                                boxShadow: '0 8px 20px rgba(138, 43, 226, 0.25)',
                                                transition: 'all 0.3s ease',
                                                minWidth: 'auto',
                                                '&:hover': {
                                                    transform: 'translateY(0px) scale(1)',
                                                    boxShadow: '0 12px 24px rgba(138, 43, 226, 0.25)',
                                                },
                                                '&:disabled': {
                                                    background: success
                                                        ? "linear-gradient(135deg, #10b981 0%, #059669 100%) !important"
                                                        : "hsla(0, 0%, 90%, 1.00) !important",
                                                    color: success ? "#fff !important" : "#9ca3af !important",
                                                    fontSize: '15px !important'
                                                },
                                            }}
                                        >
                                            {loading ? (
                                                <Box
                                                    sx={{
                                                        width: 16,
                                                        height: 16,
                                                        border: "2px solid rgba(255,255,255,0.3)",
                                                        borderTopColor: "white",
                                                        borderRadius: "50%",
                                                        animation: "spin 0.8s linear infinite",
                                                        "@keyframes spin": {
                                                            "0%": { transform: "rotate(0deg)" },
                                                            "100%": { transform: "rotate(360deg)" },
                                                        },
                                                    }}
                                                />
                                            ) : success ? (
                                                "Subscribed!"
                                            ) : (
                                                "Subscribe"
                                            )}
                                        </Button>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                p: '4px',
                                border: '1px solid',
                                borderColor: 'base.dark',
                                borderRadius: '7px',
                                "& .MuiOutlinedInput-root": {
                                    pr: 0,
                                    border: 'none',
                                    "& fieldset": {
                                        border: 'none'
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#d1d5db",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#8a2be2",
                                    },
                                },
                                "& .MuiInputBase-input": {
                                    fontFamily: "Gilroy",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    py: 1,
                                    pl: 1,
                                    "&::placeholder": {
                                        color: "#9ca3af",
                                        opacity: 1,
                                        fontSize: '15px'
                                    },
                                },
                            }}
                        />
                    </Box>

                    {/* Success Message */}
                    {success && (
                        <Typography
                            sx={{
                                mt: 2,
                                fontFamily: "Gilroy",
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "#10b981",
                            }}
                        >
                            🎉 Thanks for subscribing! Check your inbox for confirmation.
                        </Typography>
                    )}
                </Box>
            </Container>
        <Box
                sx={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    width: '100%',
                    lineHeight: 0,
                    zIndex: 1,
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    style={{
                        width: '100%',
                        height: '60px',
                        transform: 'rotate(0deg)',
                    }}
                >
                    <path
                        d="M0,0 L50,10 L100,5 L150,15 L200,8 L250,12 L300,6 L350,14 L400,9 L450,13 L500,7 L550,11 L600,8 L650,15 L700,10 L750,12 L800,7 L850,14 L900,9 L950,13 L1000,8 L1050,11 L1100,6 L1150,12 L1200,8 L1200,120 L0,120 Z"
                        fill="#fafbfc"
                    />
                </svg>
            </Box>
        </Box>
    );
}

export default Hero;