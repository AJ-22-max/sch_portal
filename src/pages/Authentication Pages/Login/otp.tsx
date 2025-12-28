import { useState, useRef, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { styles } from "./style";

interface OTPInputProps {
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
}

function OTPInput({ value, onChange, error }: OTPInputProps) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef<Array<HTMLInputElement | null>>(
        Array(6).fill(null)
    );

    // Initialize refs
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, 6);
    }, []);

    // Update internal state when external value changes
    useEffect(() => {
        if (value) {
            const digits = value.split("").slice(0, 6);
            const newOtp = [...Array(6)].map((_, i) => digits[i] || "");
            setOtp(newOtp);
        } else {
            setOtp(["", "", "", "", "", ""]);
        }
    }, [value]);

    const handleChange = (index: number, newValue: string) => {
        // Only allow digits
        const digit = newValue.replace(/\D/g, "");

        if (digit.length > 1) {
            // Handle paste
            const digits = digit.split("").slice(0, 6);
            const newOtp = [...otp];
            digits.forEach((d, i) => {
                if (index + i < 6) {
                    newOtp[index + i] = d;
                }
            });
            setOtp(newOtp);
            onChange(newOtp.join(""));

            // Focus last filled box or last box
            const lastIndex = Math.min(index + digits.length, 5);
            inputRefs.current[lastIndex]?.focus();
        } else {
            // Single digit input
            const newOtp = [...otp];
            newOtp[index] = digit;
            setOtp(newOtp);
            onChange(newOtp.join(""));

            // Auto-focus next input
            if (digit && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
        if (e.key === "Backspace") {
            if (!otp[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
                onChange(newOtp.join(""));
            }
        } else if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        } else if (e.key === "ArrowRight" && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                mb: 3,
            }}
        >
            {otp.map((digit, index) => (
                <TextField
                    key={index}
                    inputRef={(el) => (inputRefs.current[index] = el)}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onFocus={handleFocus}
                    inputProps={{
                        maxLength: 1,
                        sx: {
                            textAlign: "center",
                            fontSize: { xs: '14px', md: '18px' },
                            fontWeight: 600,
                            padding: "14px 0",
                        },
                    }}
                    sx={{
                        ...styles.otpTextField,
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: error ? "#ef4444" : "#e5e7eb",
                            borderWidth: 2,
                        },
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: error ? "#ef4444" : "#d1d5db",
                        },
                    }}
                />
            ))}
        </Box>
    );
}


export default OTPInput;