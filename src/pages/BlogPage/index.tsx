import { Box, Container } from "@mui/material";
import Hero from "./Hero";
import Overview from "./Overview";

function BlogPage() {
    return (
        <Box>
            <Hero />
            <Container maxWidth="xl">
                <Overview />
            </Container>
        </Box>
    );
};

export default BlogPage;