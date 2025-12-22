import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    Button,
    Chip,
    Stack,
    Fade,
    Slide,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
    CaretDown,
    Question,
    HeadsetIcon,
    ArrowRight,
} from '@phosphor-icons/react';
import { faqData } from './data';
import { styles } from './style';

export default function FAQ() {
    const [expanded, setExpanded] = useState<string | false>('panel0');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

    const filteredFAQs = selectedCategory === 'All'
        ? faqData
        : faqData.filter(item => item.category === selectedCategory);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box id="faq"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: '#FFFFFF',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Box sx={styles.tag}>
                        <Question size={22} color="#C057F3" />
                        <Typography sx={styles.tagTitle}>
                            Frequently Asked Questions
                        </Typography>
                    </Box>

                    <Typography
                        sx={styles.title}>
                        Got Questions? We've Got Answers
                    </Typography>

                    <Typography
                        sx={styles.subtitle}
                    >
                        Everything you need to know about SchoolPortal. Can't find what you're looking for?
                        Our support team is ready to help!
                    </Typography>
                </Box>

                {/* Category Filter */}
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
                    {categories.map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            onClick={() => setSelectedCategory(category)}
                            sx={{
                                px: 2,
                                py: 2.5,
                                fontSize: '15px',
                                fontFamily: 'Gilroy',
                                fontWeight: 600,
                                bgcolor: selectedCategory === category ? '#C057F3 !important' : 'f9fafb !important',
                                color: selectedCategory === category ? '#fff !important' : '#000000 !important',
                                border: '1px solid',
                                borderColor: selectedCategory === category ? '#C057F3' : alpha('#C057F3', 0.2),
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: selectedCategory === category ? '#B44BE5' : alpha('#C057F3', 0.15),
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 4px 12px ${alpha('#C057F3', 0.2)}`,
                                },
                            }}
                        />
                    ))}
                </Box>

                {/* FAQ Accordions */}
                <Box sx={{ maxWidth: '900px', mx: 'auto', mb: 8 }}>
                    {filteredFAQs.map((faq, index) => (
                        <Fade in timeout={300 + index * 50} key={index}>
                            <Accordion
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                elevation={0}
                                sx={{
                                    ...styles.accordion,
                                    borderColor: expanded === `panel${index}` ? '#C057F3' : alpha('#C057F3', 0.15),
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <Box
                                            sx={{
                                                ...styles.expandIcon,
                                                bgcolor: expanded === `panel${index}` ? '#C057F3' : alpha('#C057F3', 0.1),
                                            }}
                                        >
                                            <CaretDown
                                                size={20}
                                                weight="bold"
                                                color={expanded === `panel${index}` ? '#fff' : '#C057F3'}
                                            />
                                        </Box>
                                    }
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        bgcolor: expanded === `panel${index}` ? alpha('#C057F3', 0.04) : 'transparent',
                                        '&:hover': {
                                            bgcolor: alpha('#C057F3', 0.04),
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                                        <Box sx={styles.questionIcon}>
                                            <Question size={22} weight="duotone" color="#C057F3" />
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Chip
                                                label={faq.category}
                                                size="small"
                                                sx={styles.chip}
                                            />
                                            <Typography sx={styles.question}>
                                                {faq.question}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails sx={styles.accordionDetails}>
                                    <Typography sx={styles.answer}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Fade>
                    ))}
                </Box>

                {/* CTA Section */}
                {/* Main Pricing Card */}
                <Slide direction="up" in timeout={1000}>
                    <Card
                        id="contact"
                        elevation={0}
                        sx={styles.card}>
                        <Box sx={styles.headsetIcon}>
                            <HeadsetIcon size={32} weight="duotone" color="#C057F3" />
                        </Box>

                        <Typography variant="h4" sx={styles.contact}>
                            Still Have Questions?
                        </Typography>

                        <Typography sx={styles.contactSubtitle}>
                            Our support team is available 24/7 to answer any questions and help you get started
                            with SchoolPortal. We're just a message away!
                        </Typography>

                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="center"
                        >
                            <Fade in timeout={2000}>
                                <Box sx={{ mt: 4 }}>
                                    <Button
                                        fullWidth
                                        size="large"
                                        endIcon={<ArrowRight weight="bold" size={20} />}
                                        sx={styles.supportBtn}
                                    >
                                        Contact Support
                                    </Button>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            textAlign: 'center',
                                            mt: 2,
                                            color: '#666',
                                            fontSize: '0.875rem',
                                        }}
                                    >
                                        No credit card required • Free consultation
                                    </Typography>
                                </Box>
                            </Fade>

                        </Stack>
                    </Card>
                </Slide>
            </Container>
        </Box>
    );
}