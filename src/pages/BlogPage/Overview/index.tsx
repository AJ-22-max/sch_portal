import { Box, Button, Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Stack } from "@mui/material";
import { ArrowRight, CalendarBlank, User } from "@phosphor-icons/react";

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "How Digital Admissions Simplify School Enrollment",
        excerpt: "Discover how modern admission systems streamline the enrollment process, reduce paperwork, and improve the experience for both parents and administrators.",
        coverImage: "/blogs/blog_1.webp",
        date: "19 Jan 2024",
        author: "Phoenix Baker",
        categories: ["Admissions", "Product Updates"],
        featured: true,
    },
    {
        id: 2,
        title: "Improving Parent–Teacher Communication with School Portals",
        excerpt: "Learn effective strategies to enhance parent engagement and communication through digital school management platforms.",
        coverImage: "/blogs/blog_2.webp",
        date: "18 Jan 2024",
        author: "Lana Steiner",
        categories: ["Parent Engagement", "School Management"],
        featured: false,
    },
    {
        id: 3,
        title: "Why Every School Needs Centralized Student Records",
        excerpt: "Explore the benefits of maintaining centralized student data and how it improves academic tracking and compliance.",
        coverImage: "/blogs/blog_3.webp",
        date: "15 Jan 2024",
        author: "David Chen",
        categories: ["Academic Records", "EdTech"],
        featured: false,
    },
    {
        id: 4,
        title: "Streamlining Fee Management with Automated Payment Systems",
        excerpt: "Learn how automated payment systems reduce manual errors, improve cash flow tracking, and make fee collection effortless for school administrators.",
        coverImage: "/blogs/blog_4.webp",
        date: "12 Jan 2024",
        author: "Sarah Johnson",
        categories: ["School Management", "Product Updates"],
        featured: false,
    }
];

const categoryColors: Record<string, string> = {
    "Admissions": "#8b5cf6",
    "School Management": "#0ea5e9",
    "EdTech": "#10b981",
    "Parent Engagement": "#f59e0b",
    "Academic Records": "#ec4899",
    "Product Updates": "#6366f1",
};

function Overview() {
    return (
        <Box sx={{ bgcolor: "base.main", px: 5.5, pt: 5 }}>
            <Container maxWidth="xl">
                {/* Section Header */}
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 6
                }}>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: "Gilroy",
                                fontWeight: 700,
                                fontSize: { xs: "1.75rem", md: "2.25rem" },
                                color: "#0f172a",
                                mb: 1,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Latest Insights
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Gilroy",
                                fontSize: "15px",
                                fontWeight: 500,
                                color: "#64748b",
                            }}
                        >
                            Expert tips and updates for modern school management
                        </Typography>
                    </Box>

                    {/* View All - Desktop */}
                    <Button
                        size="large"
                        onClick={() => navigate('/auth/signup')}
                        sx={{
                            fontFamily: 'Gilroy',
                            fontWeight: 700,
                            fontSize: '16px !important',
                            textTransform: 'none',
                            color: '#fff',
                            background: 'linear-gradient(135deg, #d87093 0%, #8a2be2 100%)',
                            borderRadius: '12px',
                            boxShadow: '0 8px 20px rgba(138, 43, 226, 0.25)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-3px) scale(1.02)',
                                boxShadow: '0 12px 24px rgba(138, 43, 226, 0.35)',
                            },
                        }}
                    >
                        View all posts
                        <ArrowRight size={18} weight="bold" />
                    </Button>
                </Box>

                {/* Blog Grid - Equal Height Cards */}
                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }} key={post.id}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    cursor: "pointer",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    border: "1px solid",
                                    borderColor: "#e5e7eb",
                                    bgcolor: "white",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                                        borderColor: categoryColors[post.categories[0]],
                                        "& .blog-image": {
                                            transform: "scale(1.05)",
                                        },
                                    },
                                }}
                            >
                                {/* Cover Image with Overlay */}
                                <Box sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    height: 220,
                                }}>
                                    <CardMedia
                                        component="img"
                                        image={post.coverImage}
                                        alt={post.title}
                                        className="blog-image"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            transition: "transform 0.6s ease",
                                        }}
                                    />

                                    {/* Category Badge Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 12,
                                            left: 12,
                                        }}
                                    >
                                        <Chip
                                            label={post.categories[0]}
                                            sx={{
                                                bgcolor: "white !important",
                                                color: `${categoryColors[post.categories[0]]} !important`,
                                                fontFamily: "Gilroy",
                                                fontWeight: 700,
                                                fontSize: "12px",
                                                height: "28px",
                                                borderRadius: "6px",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            }}
                                        />
                                    </Box>
                                </Box>

                                <CardContent sx={{
                                    p: 3,
                                    flexGrow: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    {/* Author & Date */}
                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        mb: 2,
                                    }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            <User size={16} color={categoryColors[post.categories[0]]} weight="bold" />
                                            <Typography
                                                sx={{
                                                    fontFamily: "Gilroy",
                                                    fontSize: "13px",
                                                    fontWeight: 600,
                                                    color: "#64748b",
                                                }}
                                            >
                                                {post.author}
                                            </Typography>
                                        </Box>

                                        <Box sx={{
                                            width: "4px",
                                            height: "4px",
                                            borderRadius: "50%",
                                            bgcolor: "#cbd5e1"
                                        }} />

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                            <CalendarBlank size={16} color="#64748b" />
                                            <Typography
                                                sx={{
                                                    fontFamily: "Gilroy",
                                                    fontSize: "13px",
                                                    fontWeight: 500,
                                                    color: "#64748b",
                                                }}
                                            >
                                                {post.date}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Gilroy",
                                            fontWeight: 700,
                                            fontSize: "1.125rem",
                                            color: "#0f172a",
                                            mb: 2,
                                            lineHeight: 1.4,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            minHeight: "2.8em",
                                        }}
                                    >
                                        {post.title}
                                    </Typography>

                                    {/* Excerpt */}
                                    <Typography
                                        sx={{
                                            fontFamily: "Gilroy",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            color: "#64748b",
                                            lineHeight: 1.6,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            mb: 3,
                                            flexGrow: 1,
                                        }}
                                    >
                                        {post.excerpt}
                                    </Typography>

                                    {/* Read More Link */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                            color: "#8b5cf6",
                                            fontFamily: "Gilroy",
                                            fontWeight: 700,
                                            fontSize: "14px",
                                            transition: "gap 0.3s ease",
                                            "&:hover": {
                                                gap: 1,
                                            },
                                        }}
                                    >
                                        Read more
                                        <ArrowRight size={16} weight="bold" />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* View All Button - Mobile */}
                <Box sx={{
                    textAlign: "center",
                    mt: 6,
                    display: { xs: "block", md: "none" },
                }}>
                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            cursor: "pointer",
                            px: 4,
                            py: 2,
                            borderRadius: 2,
                            border: "2px solid",
                            borderColor: "#8b5cf6",
                            color: "#8b5cf6",
                            fontFamily: "Gilroy",
                            fontWeight: 700,
                            fontSize: "15px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: "#8b5cf6",
                                color: "white",
                            },
                        }}
                    >
                        View all posts
                        <ArrowRight size={18} weight="bold" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Overview;