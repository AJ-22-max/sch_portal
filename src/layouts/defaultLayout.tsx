import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../pages/Homepage/Header';
import Footer from '../pages/Homepage/Footer';

interface LayoutProps {
    children: React.ReactNode;
    hideFooter?: boolean;
}

function Layout({ children, hideFooter = false }: LayoutProps) {
    const [featuresAnchor, setFeaturesAnchor] = useState<null | HTMLElement>(null);
    const [solutionsAnchor, setSolutionsAnchor] = useState<null | HTMLElement>(null);
    const [resourcesAnchor, setResourcesAnchor] = useState<null | HTMLElement>(null);
    const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);

    return (
        <>
            <Header
                featuresAnchor={featuresAnchor}
                setFeaturesAnchor={setFeaturesAnchor}
                solutionsAnchor={solutionsAnchor}
                setSolutionsAnchor={setSolutionsAnchor}
                resourcesAnchor={resourcesAnchor}
                setResourcesAnchor={setResourcesAnchor}
                hoveredSolution={hoveredSolution}
                setHoveredSolution={setHoveredSolution}
            />
            <Box
                onMouseEnter={() => {
                    setFeaturesAnchor(null);
                    setSolutionsAnchor(null);
                    setResourcesAnchor(null);
                    setHoveredSolution(null);
                }}
            >
                {children}
            </Box>
            {!hideFooter && <Footer />}
        </>
    );
}

export default Layout;