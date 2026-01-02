import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  LinearProgress,
  Alert,
  InputAdornment,
} from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  CloudUpload,
  School,
  Email,
  Phone,
  Language,
  Description,
  ContactEmergency,
  DocumentScanner,
  East,
} from "@mui/icons-material";
import { useSignup } from "../../../hooks/auth";
import { nextData, schoolTypes, statsData, steps, stepsData } from "./data";
import { styles } from "./style";
import { convertToBase64 } from "../../../utils/str";

const iconMap: Record<string, React.ReactNode> = {
  School: <School sx={{ fontSize: 22 }} />,
  ContactEmergency: <ContactEmergency sx={{ fontSize: 22 }} />,
  DocumentScanner: <DocumentScanner sx={{ fontSize: 22 }} />,
};

function SignUp() {
  const navigate = useNavigate();
  const { signup, loading: signupLoading } = useSignup();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    school_type: "",
    email: "",
    phone: "",
    country: "ng",
    population: "",
    address: "",
    website: "",
    reg_number: "",
    cert_incorporation: "",
  });
  const [avatarPreview, setAvatarPreview] = useState("");
  const [certName, setCertName] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeStep]);

  useEffect(() => {
    if (success) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [success]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleFileUpload = async (field: string, file: File | null) => {
    if (!file) return;

    const base64String = (await convertToBase64(file)) as any;

    handleInputChange(field, base64String);

    if (field === "avatar") {
      setAvatarPreview(base64String);
    } else if (field === "cert_incorporation") {
      setCertName(file.name);
    }
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 0: {
        if (!formData.name || !formData.school_type || !formData.population) {
          setError("Please fill in all required fields");
          return false;
        }
        break;
      }
      case 1: {
        if (
          !formData.email ||
          !formData.phone ||
          !formData.country ||
          !formData.address
        ) {
          setError("Please fill in all required fields");
          return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setError("Please enter a valid email address");
          return false;
        }
        if (formData.phone.length < 8) {
          setError("Phone number must be at least 8 digits");
          return false;
        }
        if (formData.website && formData.website.trim() !== "") {
          const urlRegex = /^https?:\/\/.+\..+$/;
          if (!urlRegex.test(formData.website)) {
            setError(
              "Website must be a valid URL (e.g., https://yourschool.com)",
            );
            return false;
          }
        }
        break;
      }
      case 2: {
        if (!formData.cert_incorporation) {
          setError("Certificate of incorporation is required");
          return false;
        }
        break;
      }
      default:
        return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => prev + 1);
      setError("");
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
    setError("");
  };

  const handleSubmit = async () => {
    if (!validateStep(activeStep)) return;

    setLoading(true);
    setError("");

    try {
      // Prepare the data for API
      const signupData = {
        name: formData.name,
        avatar: formData.avatar,
        school_type: formData.school_type,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        population: String(formData.population),
        address: formData.address,
        website: formData.website || null,
        reg_number: formData.reg_number || null,
        cert_incorporation: formData.cert_incorporation,
      };

      console.log("📤 Submitting signup data:", signupData);

      const result = await signup(signupData);

      if (result) {
        setSuccess(true);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Update the reference number display in success modal
  if (success) {
    return (
      <Box sx={styles.successModal}>
        <Container maxWidth="md">
          <Box sx={styles.successBox}>
            <Box sx={styles.successIcon}>
              <CheckCircle sx={{ fontSize: 36, color: "#10b981" }} />
            </Box>

            <Typography variant="h4" sx={styles.successHeading}>
              Application Submitted Successfully
            </Typography>

            {/* Description */}
            <Typography sx={styles.modalDescription}>
              Thank you for your interest in SchoolPortal. Our team will review
              your application and contact you via email within 24-48 business
              hours with your account credentials.
            </Typography>

            {/* Next Steps */}
            <Box sx={styles.nextStepsBox}>
              <Typography sx={styles.whatHappensTypography}>
                What Happens Next
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {nextData.map((step, idx) => (
                  <Box
                    key={idx}
                    sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}
                  >
                    <Box sx={styles.nextSteps}>{idx + 1}</Box>
                    <Typography sx={styles.nextStepsTypography}>
                      {step}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Action Button */}
            <Button
              size="large"
              onClick={() => navigate("/")}
              sx={styles.modalActionButton}
            >
              Return to Homepage
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const isLoading = loading || signupLoading;

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h5" fontWeight={700} mb={1}>
              Basic Information
            </Typography>
            <Typography color="text.secondary" mb={4}>
              Tell us about your institution
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box
                onClick={() =>
                  document.getElementById("avatar-upload")?.click()
                }
                sx={styles.avatarBox}
              >
                {avatarPreview ? (
                  <Box
                    component="img"
                    src={avatarPreview}
                    alt="Avatar"
                    sx={styles.avatarImg}
                  />
                ) : (
                  <School sx={{ fontSize: 50, color: "#9ca3af" }} />
                )}
              </Box>
              <Box
                component="input"
                id="avatar-upload"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                sx={{ display: "none" }}
                onChange={(e) =>
                  handleFileUpload("avatar", e.target.files?.[0] ?? null)
                }
              />
              <Typography
                variant="body2"
                color="base.customDark"
                sx={{ opacity: 0.7 }}
              >
                Upload school logo (optional)
              </Typography>
            </Box>

            <TextField
              fullWidth
              label="School Name"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              sx={styles.shrinkTextField}
            />

            <TextField
              fullWidth
              select
              label="School Type"
              required
              value={formData.school_type}
              onChange={(e) => handleInputChange("school_type", e.target.value)}
              sx={styles.shrinkTextField}
            >
              {schoolTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Student Population"
              required
              type="number"
              value={formData.population}
              onChange={(e) => handleInputChange("population", e.target.value)}
              placeholder="e.g., 850"
              sx={styles.shrinkTextField}
            />
          </Box>
        );

      case 1:
        return (
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h5" fontWeight={700} mb={1}>
              Contact Details
            </Typography>
            <Typography color="text.secondary" mb={4}>
              How can we reach you?
            </Typography>

            <TextField
              fullWidth
              label="Email Address"
              required
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="e.g., info@brightfutureacademy.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#9ca3af" }} />
                  </InputAdornment>
                ),
              }}
              sx={styles.contactTextField}
            />

            <TextField
              fullWidth
              type="number"
              label="Phone Number"
              placeholder="08012345678"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone sx={{ color: "#9ca3af" }} />
                  </InputAdornment>
                ),
              }}
              sx={styles.contactTextField}
            />

            <TextField
              fullWidth
              label="Physical Address"
              placeholder="12 Unity Road, Ikeja, Lagos"
              required
              multiline
              rows={2}
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              sx={styles.contactTextField}
            />

            <TextField
              fullWidth
              label="Website (Optional)"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Language sx={{ color: "#9ca3af" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="https://yourschool.com"
              sx={styles.basicTextField}
            />
          </Box>
        );

      case 2:
        return (
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h5" fontWeight={700} mb={1}>
              Documentation
            </Typography>
            <Typography color="text.secondary" mb={4}>
              Upload required documents
            </Typography>

            <TextField
              fullWidth
              label="Registration Number (Optional)"
              value={formData.reg_number}
              onChange={(e) => handleInputChange("reg_number", e.target.value)}
              placeholder="e.g., RC-123456"
              sx={styles.shrinkTextField}
            />

            <Box
              sx={styles.documentation}
              onClick={() => document.getElementById("cert-upload")?.click()}
            >
              <CloudUpload sx={{ fontSize: 50, color: "#10b981", mb: 2 }} />
              <Typography fontWeight={600} mb={1}>
                {certName || "Upload Certificate of Incorporation"}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                Required: PDF, Word, Excel, or Image file
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Max file size: 5MB
              </Typography>
              <Box
                component="input"
                id="cert-upload"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,image/png,image/jpeg,image/jpg"
                style={{ display: "none" }}
                onChange={(e) =>
                  handleFileUpload(
                    "cert_incorporation",
                    e.target.files?.[0] ?? null,
                  )
                }
              />
            </Box>

            {certName && (
              <Alert severity="success" sx={{ mt: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Description />
                  <Typography variant="body2">{certName}</Typography>
                </Box>
              </Alert>
            )}
          </Box>
        );
      default:
        return null;
    }
  };

  const StatsBanner = () => (
    <Box sx={styles.statsBanner}>
      <Typography sx={styles.statsBannerTypography}>
        Join 500+ Schools Already Using SchoolPortal
      </Typography>
      <Grid container spacing={2}>
        {statsData.map((stat, idx) => (
          <Grid
            size={{ xs: 4, md: 4 }}
            key={idx}
            sx={{ textAlign: { xs: "center", md: "center" } }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "24px", md: "24px", lg: "20px" },
                fontWeight: 700,
                mb: 0.5,
              }}
            >
              {stat.number}
            </Typography>
            <Typography sx={{ fontSize: "12px", opacity: 0.8 }}>
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Grid
        container
        sx={{ minHeight: { xs: "100vh", md: "auto", lg: "100vh" }, p: 1.5 }}
      >
        <Grid size={{ xs: 12, md: 12, lg: 4 }} sx={styles.leftGrid}>
          <Container maxWidth="lg" sx={styles.leftGridContainer}>
            <Box onClick={() => navigate("/")} sx={styles.logoBox}>
              <Box
                component="img"
                src="/logo/favicon.png"
                alt="School Portal Logo"
                sx={{ width: "42px", display: "block" }}
              />
              <Typography sx={styles.logoText}>SchoolPortal</Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "block", lg: "none" } }}>
              <StatsBanner />
            </Box>

            <Box sx={styles.steps}>
              {stepsData.map((item, index, array) => (
                <Box key={index}>
                  <Box
                    sx={{
                      ...styles.step,
                      transform:
                        activeStep === item.step
                          ? "translateX(8px)"
                          : "translateX(0)",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: { md: "row", lg: "column" },
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          background:
                            activeStep === item.step
                              ? "linear-gradient(135deg, #d87093 0%, #8a2be2 100%)"
                              : activeStep > item.step
                                ? "linear-gradient(135deg, #d87093 0%, #8a2be2 100%)"
                                : "#f8f9fa",
                          display: "flex",
                          alignItems: "center",
                          my: 2,
                          justifyContent: "center",
                          color: activeStep >= item.step ? "white" : "#94a3b8",
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 2,
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          boxShadow:
                            activeStep === item.step
                              ? "0 8px 24px rgba(216, 112, 147, 0.25), 0 0 0 4px rgba(216, 112, 147, 0.1)"
                              : activeStep > item.step
                                ? "0 4px 12px rgba(216, 112, 147, 0.15)"
                                : "none",
                        }}
                      >
                        {activeStep > item.step ? (
                          <CheckCircle sx={{ fontSize: 22 }} />
                        ) : (
                          iconMap[item.icon]
                        )}
                      </Box>
                      {index < array.length - 1 && (
                        <Box
                          sx={{
                            ...styles.lgConnector,
                            background:
                              activeStep > item.step
                                ? {
                                    md: "linear-gradient(90deg, #d87093 0%, #8a2be2 100%)",
                                    lg: "linear-gradient(180deg, #d87093 0%, #8a2be2 100%)",
                                  }
                                : "#e5e7eb",
                          }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        pt: 1,
                        flex: 1,
                        bgcolor:
                          activeStep === item.step
                            ? "rgba(255, 255, 255, 0.25)"
                            : "transparent",
                        backdropFilter:
                          activeStep === item.step ? "blur(10px)" : "none",
                        border:
                          activeStep === item.step
                            ? "1px solid rgba(255, 255, 255, 0.1)"
                            : "2px solid transparent",
                        transform:
                          activeStep === item.step
                            ? "translateX(8px) scale(1.02)"
                            : "translateX(0)",
                        boxShadow:
                          activeStep === item.step
                            ? "0 8px 24px rgba(0,0,0,0.15)"
                            : "none",
                        px: 2,
                        py: 2,
                        borderRadius: "8px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: activeStep === item.step ? 700 : 600,
                          fontSize: "15px",
                          color:
                            activeStep === item.step ? "#0f172a" : "#64748b",
                          mb: 0.75,
                          letterSpacing: "-0.2px",
                          transition: "color 0.3s",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          color:
                            activeStep === item.step ? "#6b7280" : "#9ca3af",
                          lineHeight: 1.6,
                          transition: "color 0.3s",
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                    {index < array.length - 1 && (
                      <Box
                        sx={{
                          ...styles.mdConnector,
                          background:
                            activeStep > item.step
                              ? {
                                  md: "linear-gradient(90deg, #d87093 0%, #8a2be2 100%)",
                                  lg: "linear-gradient(180deg, #d87093 0%, #8a2be2 100%)",
                                }
                              : "#e5e7eb",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={styles.mdFooter}>
              <Typography
                onClick={() => navigate("/")}
                sx={styles.footerTypography}
              >
                <East sx={{ transform: "scaleX(-1)", fontSize: "16px" }} />
                Back to home
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Grid size={{ xs: 12, md: 12, lg: 8 }} sx={styles.rightGrid}>
          <Container
            maxWidth="xl"
            sx={{ py: { xs: 3, md: 0 }, mx: { md: 8, lg: 15 } }}
          >
            {/* Mobile Logo */}
            <Box sx={styles.mobileLogoBox}>
              <Box
                component="img"
                src="/logo/favicon.png"
                alt="Logo"
                sx={{ width: { xs: "36px", sm: "50px", lg: "36px" } }}
              />
              <Typography sx={styles.mobileLogoText}>SchoolPortal</Typography>
            </Box>

            <Box sx={{ display: { xs: "block", md: "none", lg: "block" } }}>
              <StatsBanner />
            </Box>

            {/* Main Form Card */}
            <Box sx={styles.Card}>
              {/* Progress Indicator - Top of form */}
              <Box sx={styles.mobileProgressIndicator}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {steps.map((step, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          position: "relative",
                          zIndex: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 32, sm: 40 },
                            height: { xs: 32, sm: 40 },
                            borderRadius: "50%",
                            background:
                              activeStep >= index
                                ? "linear-gradient(135deg, #d87093 0%, #8a2be2 100%)"
                                : "#f1f5f9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: activeStep >= index ? "white" : "#94a3b8",
                            fontWeight: 700,
                            fontSize: { xs: "14px", sm: "16px" },
                            transition: "all 0.3s ease",
                            boxShadow:
                              activeStep === index
                                ? "0 4px 12px rgba(216, 112, 147, 0.3)"
                                : "none",
                          }}
                        >
                          {activeStep > index ? (
                            <CheckCircle
                              sx={{ fontSize: { xs: 18, sm: 20 } }}
                            />
                          ) : (
                            index + 1
                          )}
                        </Box>
                        <Typography
                          sx={{
                            color: activeStep >= index ? "#0f172a" : "#94a3b8",
                            ...styles.mobileStep,
                          }}
                        >
                          {step}
                        </Typography>
                      </Box>
                      {index < steps.length - 1 && (
                        <Box
                          sx={{
                            width: { xs: "40px", sm: "60px" },
                            height: "2px",
                            background:
                              activeStep > index
                                ? "linear-gradient(90deg, #d87093 0%, #8a2be2 100%)"
                                : "#f1f5f9",
                            mx: { xs: 1, sm: 2 },
                            transition: "background 0.3s ease",
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Error Alert */}
              {error && (
                <Alert severity="error" sx={styles.alert}>
                  {error}
                </Alert>
              )}

              {/* Form Content */}
              <Box sx={{ minHeight: "400px" }}>{renderStepContent()}</Box>

              {/* Action Buttons */}
              <Box sx={styles.cardBtn}>
                {activeStep > 0 && (
                  <Button
                    size="large"
                    variant="outlined"
                    onClick={handleBack}
                    startIcon={<ArrowBack />}
                    sx={styles.backCardBtn}
                  >
                    Back
                  </Button>
                )}

                <Button
                  size="large"
                  onClick={
                    activeStep === steps.length - 1 ? handleSubmit : handleNext
                  }
                  disabled={isLoading} // Use isLoading instead of just loading
                  endIcon={activeStep < steps.length - 1 && <East />}
                  sx={styles.continueCardBtn}
                >
                  {isLoading ? (
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Box sx={styles.processing} />
                      Processing...
                    </Box>
                  ) : activeStep === steps.length - 1 ? (
                    "Submit Application"
                  ) : (
                    "Continue"
                  )}
                </Button>
              </Box>

              {/* Loading Progress Bar */}
              {loading && (
                <Box sx={{ mt: 3 }}>
                  <LinearProgress sx={styles.linearProgress} />
                </Box>
              )}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "none" },
                justifyContent: "flex-end",
                alignItems: "center",
                pt: 4,
                borderTop: "1px solid #f1f5f9",
                mt: 4,
              }}
            >
              <Typography
                onClick={() => navigate("/")}
                sx={styles.footerTypography}
              >
                <East sx={{ transform: "scaleX(-1)", fontSize: "16px" }} />
                Back to home
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignUp;
