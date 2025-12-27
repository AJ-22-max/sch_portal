import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

function Login() {
    const navigate = useNavigate();
    return (
        <Box>
            <Grid container>
                <Grid
                    size={{ xs: 0, md: 5 }}
                    sx={{
                        bgcolor: 'secondary.main',
                        minHeight: '100vh',
                        backgroundImage: 'url(/auth/login.png)',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                >
                    <Container maxWidth="lg">
                        <Box
                            onClick={() => {
                                navigate('/');
                            }}
                            sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                            <Box
                                component="img"
                                src="/logo/favicon.png"
                                alt="School Portal Logo"
                                sx={{
                                    width: '35px',
                                    display: 'block'
                                }}
                            />
                            <Typography
                                sx={{
                                    color: 'base.customDark',
                                    fontWeight: 700,
                                    letterSpacing: '-0.5px',
                                    fontSize: {
                                        xs: '22px',
                                        sm: '20px',
                                        md: '2rem'
                                    },
                                    lineHeight: 1,
                                }}
                            >
                                SchoolPortal
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    Login
                </Grid>
            </Grid>
        </Box>
    );
}
export default Login;