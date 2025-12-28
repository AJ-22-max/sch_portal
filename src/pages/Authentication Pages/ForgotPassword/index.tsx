import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Grid,
    Container,
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
    ArrowBack,
} from "@mui/icons-material";
import OTPInput from "../Login/otp";
import { styles } from "../Login/style";
import type { AnimatedSquare } from "../Login/data";
import { movements } from "../Login/data";

type Step = 'email' | 'otp' | 'password';

function ForgotPasswordForm() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState<Step>('email');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: ""
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
        setSuccess("");
    };

    const handleEmailSubmit = async () => {
        if (!formData.email) {
            setError("Please enter your email address");
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
            // Simulate API call to send OTP
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess("Verification code sent to your email!");
            setTimeout(() => {
                setCurrentStep('otp');
                setSuccess("");
            }, 1000);
        } catch {
            setError("Failed to send verification code. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleOTPSubmit = async () => {
        if (!formData.otp || formData.otp.length !== 6) {
            setError("Please enter the complete 6-digit code");
            return;
        }

        setLoading(true);
        setError("");

        try {
            // Simulate API call to verify OTP
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess("Code verified successfully!");
            setTimeout(() => {
                setCurrentStep('password');
                setSuccess("");
            }, 1000);
        } catch {
            setError("Invalid verification code. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordSubmit = async () => {
        if (!formData.password || !formData.confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError("");

        try {
            // Simulate API call to reset password
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess("Password reset successfully!");
            setTimeout(() => {
                navigate("/auth/login");
            }, 1500);
        } catch {
            setError("Failed to reset password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = () => {
        if (currentStep === 'email') {
            handleEmailSubmit();
        } else if (currentStep === 'otp') {
            handleOTPSubmit();
        } else if (currentStep === 'password') {
            handlePasswordSubmit();
        }
    };

    const handleBack = () => {
        setError("");
        setSuccess("");
        if (currentStep === 'otp') {
            setCurrentStep('email');
            setFormData(prev => ({ ...prev, otp: "" }));
        } else if (currentStep === 'password') {
            setCurrentStep('otp');
            setFormData(prev => ({ ...prev, password: "", confirmPassword: "" }));
        }
    };

    const getHeaderText = () => {
        switch (currentStep) {
            case 'email':
                return "Forgot Password?";
            case 'otp':
                return "Enter Verification Code";
            case 'password':
                return "Create New Password";
            default:
                return "";
        }
    };

    const getSubtitleText = () => {
        switch (currentStep) {
            case 'email':
                return "Enter your email address and we'll send you a code to reset your password";
            case 'otp':
                return `We've sent a 6-digit code to ${formData.email}`;
            case 'password':
                return "Your new password must be different from previous passwords";
            default:
                return "";
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

    const getButtonText = () => {
        if (loading) return "Processing...";
        switch (currentStep) {
            case 'email':
                return "Send Code";
            case 'otp':
                return "Verify Code";
            case 'password':
                return "Reset Password";
            default:
                return "";
        }
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

                        {/* Header Text */}
                        <Box sx={{ mb: { xs: 3, sm: 4 }, textAlign: { xs: "center", lg: "left" } }}>
                            <Typography variant="h4" sx={styles.header}>
                                {getHeaderText()}
                            </Typography>
                            <Typography sx={styles.subtitle}>
                                {getSubtitleText()}
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

                        {/* Success Alert */}
                        {success && (
                            <Alert
                                severity="success"
                                sx={{
                                    mb: 3,
                                    borderRadius: 2,
                                    fontSize: { xs: "13px", sm: "14px" },
                                }}
                            >
                                {success}
                            </Alert>
                        )}

                        {/* Form Content */}
                        <Box>
                            {/* STEP 1: Email Input */}
                            {currentStep === 'email' && (
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    placeholder="name@school.com"
                                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email sx={{ color: "#9ca3af", fontSize: { xs: 18, sm: 20 } }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ ...styles.textField, mb: { xs: 3, sm: 4 } }}
                                />
                            )}

                            {/* STEP 2: OTP Input */}
                            {currentStep === 'otp' && (
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
                                            <Typography component="span" sx={styles.resend}>
                                                Resend
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </>
                            )}

                            {/* STEP 3: Password Input */}
                            {currentStep === 'password' && (
                                <>
                                    {/* New Password Field */}
                                    <TextField
                                        fullWidth
                                        label="New Password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={formData.password}
                                        onChange={(e) => handleInputChange("password", e.target.value)}
                                        placeholder="Enter new password"
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
                                        sx={{ ...styles.textField, mb: { xs: 2.5, sm: 3 } }}
                                    />

                                    {/* Confirm Password Field */}
                                    <TextField
                                        fullWidth
                                        label="Confirm Password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        value={formData.confirmPassword}
                                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                        placeholder="Confirm new password"
                                        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockOutlined sx={{ color: "#9ca3af", fontSize: { xs: 18, sm: 20 } }} />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        edge="end"
                                                        size="small"
                                                    >
                                                        {showConfirmPassword ? (
                                                            <VisibilityOff sx={{ fontSize: { xs: 18, sm: 20 } }} />
                                                        ) : (
                                                            <Visibility sx={{ fontSize: { xs: 18, sm: 20 } }} />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{ ...styles.textField, mb: { xs: 3, sm: 4 } }}
                                    />

                                    {/* Password Requirements */}
                                    <Box sx={{ mb: 3 }}>
                                        <Typography sx={{
                                            fontSize: "13px",
                                            color: "#64748b",
                                            fontFamily: "Gilroy",
                                            mb: 1
                                        }}>
                                            Password must contain:
                                        </Typography>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                                            {[
                                                "At least 8 characters",
                                                "One uppercase letter",
                                                "One lowercase letter",
                                                "One number"
                                            ].map((req, i) => (
                                                <Typography key={i} sx={{
                                                    fontSize: "12px",
                                                    color: "#9ca3af",
                                                    fontFamily: "Gilroy",
                                                    pl: 2,
                                                    position: "relative",
                                                    "&::before": {
                                                        content: '"•"',
                                                        position: "absolute",
                                                        left: 0,
                                                    }
                                                }}>
                                                    {req}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </>
                            )}

                            {/* Submit Button */}
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={loading}
                                endIcon={!loading && <ArrowForward sx={{ fontSize: { xs: 18, sm: 20 } }} />}
                                sx={styles.loginBtn}
                            >
                                {loading ? (
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Box sx={styles.loading} />
                                        {getButtonText()}
                                    </Box>
                                ) : (
                                    getButtonText()
                                )}
                            </Button>

                            {/* Loading Progress Bar */}
                            {loading && (
                                <Box sx={{ mt: 2 }}>
                                    <LinearProgress sx={styles.linearProgress} />
                                </Box>
                            )}

                            {/* Back Button */}
                            {currentStep !== 'email' && (
                                <Button
                                    fullWidth
                                    size="large"
                                    variant="outlined"
                                    onClick={handleBack}
                                    startIcon={<ArrowBack sx={{ fontSize: { xs: 18, sm: 20 } }} />}
                                    sx={{
                                        ...styles.backBtn,
                                        mt: 2,
                                    }}
                                >
                                    Back
                                </Button>
                            )}

                            {/* Back to Login Link */}
                            <Box sx={{ textAlign: "center", mt: { xs: 3, sm: 4 } }}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "13px", sm: "14px" },
                                        color: "#64748b",
                                        fontFamily: "Gilroy",
                                    }}
                                >
                                    Remember your password?{" "}
                                    <Typography
                                        component="span"
                                        onClick={() => navigate("/auth/login")}
                                        sx={styles.signup}
                                    >
                                        Sign In
                                    </Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ForgotPasswordForm;