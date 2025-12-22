import { Box, Button, Container, Grid, Typography, Link, Stack, IconButton, Divider, alpha } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, Email, Phone, LocationOn } from "@mui/icons-material";
import { footerLinks } from "./data";
import { styles } from "./styles";

function Footer() {
    const socialLinks = [
        { icon: <Facebook />, href: "#facebook", label: "Facebook" },
        { icon: <Twitter />, href: "#twitter", label: "Twitter" },
        { icon: <LinkedIn />, href: "#linkedin", label: "LinkedIn" },
        { icon: <Instagram />, href: "#instagram", label: "Instagram" },
        { icon: <YouTube />, href: "#youtube", label: "YouTube" },
    ];

    return (
        <Box component="footer" sx={styles.footer} >
            {/* Floating orbs */}
            <Box sx={styles.orb_a} />
            <Box sx={styles.orb_b} />
            <Box sx={styles.orb_c} />

            {/* Footer Content */}
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', pb: 4, gap: 4 }}>
                    <Typography
                        sx={{
                            fontSize: '34px',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '-0.5px',
                            maxWidth: '560px',
                            lineHeight: 1.2,
                        }}
                    >
                        Ready to Transform Your School?
                        Start with School Portal Today
                    </Typography>
                    <Box>
                        <Button size="large"
                            onClick={() => {
                                window.location.href = 'http://localhost:5174/auth/';
                            }}
                            sx={styles.Btn} >
                            Sign Up for Free Today
                        </Button>
                    </Box>
                </Box>
                <Divider sx={{ borderColor: (theme) => alpha(theme.palette.secondary.main, 0.4), mt: 4, mb: 5 }} />

                <Grid container spacing={4}>
                    {/* Brand Section */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Stack
                            direction={{ xs: 'column', sm: 'row', md: 'column' }}
                            spacing={3}
                            sx={styles.logo}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <img src="/logo/favicon.png" alt="School Portal Logo" width="45px" />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 500,
                                            color: '#ffffff',
                                            letterSpacing: '-0.5px',
                                        }}
                                    >
                                        SchoolPortal
                                    </Typography>
                                </Box>
                                <Typography sx={{ color: 'secondary.main', maxWidth: { xs: '100%', sm: 300 }, textAlign: 'left', fontSize: '15px' }}>
                                    Run your school operations from one platform. Manage students, attendance, grades, and parent communication seamlessly.
                                </Typography>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={1} sx={{ pt: 2 }}>
                                    {socialLinks.map((social) => (
                                        <IconButton
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            sx={{
                                                color: 'base.main',
                                                backgroundColor: (theme) => alpha(theme.palette.secondary.main, 0.5),
                                                '&:hover': {
                                                    color: 'primary.main',
                                                    backgroundColor: (theme) => alpha(theme.palette.secondary.main, 1),
                                                },
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Links Sections */}
                    <Grid size={{ xs: 12, md: 8 }} container spacing={3}>
                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Typography sx={{ color: '#ffffff', fontWeight: 600, mb: 3, fontSize: '15px' }}>
                                PRODUCT
                            </Typography>
                            <Stack spacing={1.5}>
                                {footerLinks.product.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const targetId = link.href.replace('#', '');
                                            const element = document.getElementById(targetId);
                                            if (element) {
                                                element.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }
                                        }}
                                        sx={{
                                            color: 'secondary.main', fontWeight: 400, fontFamily: 'Gilroy',
                                            maxWidth: 300, textAlign: 'left', fontSize: '15px',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                color: 'error.main',
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Typography sx={{ color: '#ffffff', fontWeight: 600, mb: 3, fontSize: '15px' }}>
                                COMPANY
                            </Typography>
                            <Stack spacing={1.5}>
                                {footerLinks.company.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const targetId = link.href.replace('#', '');
                                            const element = document.getElementById(targetId);
                                            if (element) {
                                                element.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }
                                        }}
                                        sx={styles.footerLinks}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Typography sx={{ color: '#ffffff', fontWeight: 600, mb: 3, fontSize: '15px' }}>
                                RESOURCES
                            </Typography>
                            <Stack spacing={1.5}>
                                {footerLinks.resources.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const targetId = link.href.replace('#', '');
                                            const element = document.getElementById(targetId);
                                            if (element) {
                                                element.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start'
                                                });
                                            }
                                        }}
                                        sx={styles.footerLinks}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 6, sm: 3 }}>
                            <Typography sx={{ color: '#ffffff', fontFamily: 'Gilroy', fontWeight: 700, mb: 3, fontSize: '15px' }}>
                                LEGAL
                            </Typography>
                            <Stack spacing={1.5}>
                                {footerLinks.legal.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        sx={styles.footerLinks}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Contact Info */}
                <Box sx={{ mt: 6, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Email sx={{ color: 'secondary.main' }} />
                                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: 400, fontSize: '15px', color: 'secondary.main' }}>
                                    support@schoolportal.com
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Phone sx={{ color: 'secondary.main' }} />
                                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: 400, fontSize: '15px', color: 'secondary.main' }}>
                                    +234 800 000 0000
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <LocationOn sx={{ color: 'secondary.main' }} />
                                <Typography sx={{ fontFamily: 'Gilroy', fontWeight: 400, fontSize: '15px', color: 'secondary.main' }}>
                                    Lagos, Nigeria
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>

                <Divider sx={{ borderColor: (theme) => alpha(theme.palette.secondary.main, 0.4), my: 4 }} />

                {/* Bottom Section */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontFamily: 'Gilroy', fontWeight: 400, fontSize: '12.5px', color: 'secondary.main' }}>
                        © {new Date().getFullYear()} SchoolPortal. All rights reserved.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Gilroy', fontWeight: 400, fontSize: '12.5px', color: 'secondary.main' }}>
                        Made with ❤️ for educators worldwide
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;