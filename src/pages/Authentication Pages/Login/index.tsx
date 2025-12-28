import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Alert,
    LinearProgress,
} from "@mui/material";
import {
    Email,
    Visibility,
    VisibilityOff,
    LockOutlined,
    ArrowForward,
} from "@mui/icons-material";
import OTPInput from "./otp";
import type { AnimatedSquare } from "./data";
import { movements } from "./data";
import { styles } from "./style";

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [requires2FA, setRequires2FA] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        otp: ""
    });

    const [squares, setSquares] = useState<AnimatedSquare[]>([
        { id: 1, position: 1, color: 'transparent', text: '' },
        { id: 2, position: 2, color: '#d87093', text: 'Manage Smarter.\nEducate Better.' },
        { id: 3, position: 3, color: '#8a2be2', icon: 'SP' },
        { id: 4, position: 4, color: '#f4e5a5', text: 'Empowering\nSchools\nEverywhere' },
        { id: 5, position: 5, color: '#ffffff', text: 'Your School,\nSimplified' },
        { id: 6, position: 6, color: 'transparent', text: '' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSquares(prevSquares => {
                const newSquares = [...prevSquares];
                [2, 3, 4, 5].forEach(squareId => {
                    const square = newSquares.find(s => s.id === squareId);
                    if (square) {
                        const currentMovementIndex = movements[squareId].indexOf(square.position);
                        const nextIndex = (currentMovementIndex + 1) % movements[squareId].length;
                        square.position = movements[squareId][nextIndex];
                    }
                });

                return newSquares;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setError("");
    };

    const handleLogin = async () => {
        if (!formData.email || !formData.password) {
            setError("Please fill in all required fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address");
            return;
        }

        setLoading(true);
        setError("");

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const has2FA = Math.random() > 0.5;

            if (has2FA && !requires2FA) {
                setRequires2FA(true);
                setLoading(false);
                return;
            }

            if (requires2FA && !formData.otp) {
                setError("Please enter the 6-digit OTP");
                setLoading(false);
                return;
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate("/dashboard");
        } catch {
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    const getSquareStyles = (position: number): { gridColumn: number; gridRow: number } => {
        const positions: Record<number, { gridColumn: number; gridRow: number }> = {
            1: { gridColumn: 1, gridRow: 1 },
            2: { gridColumn: 2, gridRow: 1 },
            3: { gridColumn: 1, gridRow: 2 },
            4: { gridColumn: 2, gridRow: 2 },
            5: { gridColumn: 1, gridRow: 3 },
            6: { gridColumn: 2, gridRow: 3 },
        };

        return positions[position];
    };

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "secondary.main", position: "relative" }}>
            <Grid container sx={{ minHeight: "100vh", flexDirection: { xs: "column", lg: "row" } }}>
                {/* Animated Squares Section - Top on mobile, Left on desktop */}
                <Grid size={{ xs: 12, lg: 6 }} sx={styles.leftGrid} >
                    <Box sx={styles.leftGridBox} >
                        {squares.map((square) => {
                            const targetPos = getSquareStyles(square.position);

                            return (
                                <Box
                                    key={square.id}
                                    sx={{
                                        ...styles.squareBox,
                                        bgcolor: square.color,
                                        transform: {
                                            xs: `translate(calc(-50% + ${(targetPos.gridColumn - 1) * 118}px - 54px), ${(targetPos.gridRow - 1) * 88}px)`,
                                            sm: `translate(calc(-50% + ${(targetPos.gridColumn - 1) * 180}px - 65px), ${(targetPos.gridRow - 1) * 108}px)`,
                                            md: `translate(calc(-50% + ${(targetPos.gridColumn - 1) * 200}px - 65px), ${(targetPos.gridRow - 1) * 150}px)`,
                                            lg: `translate(${(targetPos.gridColumn - 1) * 200}px, ${(targetPos.gridRow - 1) * 160}px)`,
                                            xl: `translate(${(targetPos.gridColumn - 1) * 196}px, ${(targetPos.gridRow - 1) * 176}px)`,
                                        },
                                        boxShadow: square.color !== 'transparent'
                                            ? "0 4px 20px rgba(0,0,0,0.1)"
                                            : "none",
                                    }}
                                >
                                    {square.icon && (
                                        <Typography sx={styles.squareIcon} >
                                            {square.icon}
                                        </Typography>
                                    )}
                                    {square.text && (
                                        <Typography sx={{
                                            ...styles.squareText,
                                            color: square.color === '#8a2be2' ? "white" : "#0f172a",
                                        }} >
                                            {square.text}
                                        </Typography>
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                </Grid>

                {/* Login Form Section */}
                <Grid size={{ xs: 12, lg: 6 }} sx={styles.rightGrid} >
                    <Container maxWidth="sm">
                        {/* Logo */}
                        <Box sx={styles.logoBox} onClick={() => navigate("/")} >
                            <Box
                                component="img"
                                src="/logo/favicon.png"
                                alt="SchoolPortal"
                                sx={{ width: { xs: 36, sm: 42 }, height: { xs: 36, sm: 42 } }}
                            />
                            <Typography sx={styles.logoText} >
                                SchoolPortal
                            </Typography>
                        </Box>

                        {/* Welcome Text */}
                        <Box sx={{ mb: { xs: 3, sm: 4 }, textAlign: { xs: "center", lg: "left" } }}>
                            <Typography variant="h4" sx={styles.header} >
                                {requires2FA ? "Enter Verification Code" : "Sign In"}
                            </Typography>
                            <Typography sx={styles.subtitle} >
                                {requires2FA
                                    ? `We've sent a 6-digit code to ${formData.email}`
                                    : "Welcome back! Please sign in to continue"
                                }
                            </Typography>
                        </Box>

                        {/* Error Alert */}
                        {error && (
                            <Alert
                                severity="error"
                                sx={{
                                    mb: 3,
                                    borderRadius: 2,
                                    fontSize: { xs: "13px", sm: "14px" },
                                }}
                            >
                                {error}
                            </Alert>
                        )}

                        {/* Login Form */}
                        <Box>
                            {!requires2FA ? (
                                <>
                                    {/* Email Field */}
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="name@school.com"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Email sx={{ color: "#9ca3af", fontSize: { xs: 18, sm: 20 } }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{ ...styles.textField, mb: { xs: 2.5, sm: 3 }, }}
                                    />

                                    {/* Password Field */}
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={formData.password}
                                        onChange={(e) => handleInputChange("password", e.target.value)}
                                        placeholder="Enter your password"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockOutlined sx={{ color: "#9ca3af", fontSize: { xs: 18, sm: 20 } }} />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        edge="end"
                                                        size="small"
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff sx={{ fontSize: { xs: 18, sm: 20 } }} />
                                                        ) : (
                                                            <Visibility sx={{ fontSize: { xs: 18, sm: 20 } }} />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{ ...styles.textField, mb: 2 }}
                                    />

                                    {/* Forgot Password Link */}
                                    <Box sx={{ textAlign: "right", mb: { xs: 3, sm: 4 } }}>
                                        <Typography
                                            component="span"
                                            onClick={() => navigate("/auth/forgot-password")}
                                            sx={styles.forgotPassword}
                                        >
                                            Forgot Password?
                                        </Typography>
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <OTPInput
                                        value={formData.otp}
                                        onChange={(value) => handleInputChange("otp", value)}
                                        error={!!error}
                                    />

                                    {/* Resend Code Link */}
                                    <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4 } }}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: "13px", sm: "14px" },
                                                color: "#64748b",
                                                fontFamily: "Gilroy",
                                            }}
                                        >
                                            Didn't receive code?{" "}
                                            <Typography component="span" sx={styles.resend} >
                                                Resend
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </>
                            )}

                            {/* Login Button */}
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                onClick={handleLogin}
                                disabled={loading}
                                endIcon={!loading && <ArrowForward sx={{ fontSize: { xs: 18, sm: 20 } }} />}
                                sx={styles.loginBtn}
                            >
                                {loading ? (
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Box sx={styles.loading} />
                                        Signing In...
                                    </Box>
                                ) : requires2FA ? (
                                    "Verify & Sign In"
                                ) : (
                                    "Sign In"
                                )}
                            </Button>

                            {/* Loading Progress Bar */}
                            {loading && (
                                <Box sx={{ mt: 2 }}>
                                    <LinearProgress sx={styles.linearProgress} />
                                </Box>
                            )}

                            {/* Back Button for 2FA */}
                            {requires2FA && (
                                <Button
                                size="large"
                                    fullWidth
                                    variant="outlined"
                                    onClick={() => {
                                        setRequires2FA(false);
                                        setFormData(prev => ({ ...prev, otp: "" }));
                                    }}
                                    sx={styles.backBtn}
                                >
                                    Back to Sign In
                                </Button>
                            )}

                            {/* Sign Up Link */}
                            {!requires2FA && (
                                <Box sx={{ textAlign: "center", mt: { xs: 3, sm: 4 } }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "13px", sm: "14px" },
                                            color: "#64748b",
                                            fontFamily: "Gilroy",
                                        }}
                                    >
                                        Don't have an account?{" "}
                                        <Typography
                                            component="span"
                                            onClick={() => navigate("/auth/signup")}
                                            sx={styles.signup}
                                        >
                                            Sign Up
                                        </Typography>
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;