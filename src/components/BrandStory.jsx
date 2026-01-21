import React from 'react';
import { motion } from 'framer-motion';
// Keeping heroImg for the 'main hero' constraint, but using new images for everything else
import heroImg from '../assets/hero-model-final.jpg';
import story1 from '../assets/story-1.jpg';
import story2 from '../assets/story-2.jpg';
import story3 from '../assets/story-3.png';
import story4 from '../assets/story-4.jpg';
import story5 from '../assets/story-5.png';
import leatherImg from '../assets/product-leather.png';

const BrandStory = () => {
    return (
        <section style={{ padding: '4rem 0 10rem', background: 'var(--color-bg)', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* 1. TOP SECTION: UNIFIED FRAME */}
                <div style={{ position: 'relative', width: '100%' }}>

                    {/* Header Row: Flex Container */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 10 }}>

                        {/* Left: Find Your Fit */}
                        <div style={{ maxWidth: '300px' }}>
                            <span style={{
                                background: '#FCA311',
                                color: 'black',
                                padding: '0.4rem 0.8rem',
                                fontWeight: '800',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                marginBottom: '0.5rem',
                                borderRadius: '2px'
                            }}>
                                Find Your Fit
                            </span>
                            <h2 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '3rem',
                                textTransform: 'uppercase',
                                lineHeight: 0.9,
                                color: '#111',
                                margin: 0
                            }}>
                                Your Everyday<br />Favorites
                            </h2>
                        </div>

                        {/* Right: FEEL BODY (Aligned to Container Right) */}
                        <div style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(4rem, 12vw, 8rem)',
                            color: '#F0F0F0',
                            lineHeight: 0.8,
                            textAlign: 'right',
                            zIndex: 0,
                            userSelect: 'none',
                            whiteSpace: 'nowrap'
                        }}>
                            FEEL BODY
                        </div>

                        {/* Floating Image (Right) - Using Story 1 */}
                        <motion.div
                            initial={{ rotate: 12, y: 0 }}
                            whileHover={{ rotate: 8, y: -10 }}
                            style={{
                                position: 'absolute',
                                top: '50px',
                                right: '10%',
                                width: '160px',
                                height: '220px', // Portrait aspect for model
                                borderRadius: '24px',
                                border: '5px solid white',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                                overflow: 'hidden',
                                zIndex: 12,
                                background: 'white'
                            }}
                        >
                            <img src={story1} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Model" />
                        </motion.div>

                    </div>

                    {/* Main Text Block: COMFORTABLE WITH VIRA (Left Aligned) */}
                    <div style={{ position: 'relative', marginTop: '4rem', marginBottom: '4rem', zIndex: 5, textAlign: 'left' }}>
                        <h1 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(5rem, 13.5vw, 12rem)', // REDUCED to fit container safely
                            color: '#FF3B0F',
                            lineHeight: 0.8,
                            margin: 0,
                            letterSpacing: '-0.04em', // Proportional spacing
                            position: 'relative',
                            zIndex: 2,
                            marginLeft: '-0.05em', // Slight optical adjustment to left edge
                            maxWidth: '100%'
                        }}>
                            COMFORTABLE
                        </h1>

                        {/* WITH VIRA - Directly Under */}
                        <h1 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(4rem, 12vw, 8rem)', // Matched FEEL BODY sizing
                            color: '#EAEAEA',
                            lineHeight: 0.8,
                            margin: 0,
                            letterSpacing: '-2px',
                            position: 'relative',
                            zIndex: 1,
                            marginTop: '2rem' // Spacing below COMFORTABLE
                        }}>
                            WITH VIRA
                        </h1>

                        {/* Floating Image (Right Center now) - moved to not block left text */}
                        <motion.div
                            initial={{ rotate: -15, y: 0 }}
                            whileHover={{ rotate: -10, y: -10 }}
                            style={{
                                position: 'absolute',
                                top: '30%',
                                right: '30%', // Moved towards right
                                width: '200px',
                                height: '200px',
                                borderRadius: '24px',
                                border: '5px solid white',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                                overflow: 'hidden',
                                zIndex: 15, // Above text
                                background: 'white'
                            }}
                        >
                            <img src={leatherImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Detail" />
                        </motion.div>

                    </div>

                </div>


                {/* 2. CONTENT GRID SECTION */}
                <div style={{ position: 'relative', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>

                    {/* Foreground Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', maxWidth: '1200px', zIndex: 2, alignItems: 'center', gap: '4rem' }}>

                        {/* Left: Diamond Image - Using Story 3 */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 48 }}
                                style={{
                                    width: '300px',
                                    height: '300px',
                                    transform: 'rotate(45deg)',
                                    overflow: 'hidden',
                                    borderRadius: '40px',
                                    border: '6px solid white',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                }}
                            >
                                <img src={story3} style={{ width: '150%', height: '150%', objectFit: 'cover', transform: 'translate(-16%, -16%) rotate(-45deg)' }} alt="Diamond" />
                            </motion.div>
                        </div>

                        {/* Right: Text Block */}
                        <div>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.6, color: '#333', marginBottom: '2rem', maxWidth: '400px' }}>
                                We believe your clothes should be as flexible as your schedule. Discover pieces that look sharp, feel soft, and keep up with you from morning to night.
                            </p>
                            <button style={{
                                background: '#111',
                                color: 'white',
                                border: 'none',
                                padding: '1rem 2rem',
                                borderRadius: '50px',
                                textTransform: 'uppercase',
                                fontWeight: '800',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                letterSpacing: '1px'
                            }}>
                                Shop The Best Sellers
                            </button>

                            {/* 3. TESTIMONIALS (Moved Under Text) */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
                                {/* Text */}
                                <div style={{ textAlign: 'left' }}>
                                    <span style={{
                                        background: '#FCA311',
                                        color: 'black',
                                        padding: '0.3rem 0.6rem',
                                        fontWeight: 'bold',
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        display: 'inline-block',
                                        marginBottom: '0.5rem',
                                        borderRadius: '2px'
                                    }}>
                                        Testimonials
                                    </span>
                                    <h2 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '3rem',
                                        textTransform: 'uppercase',
                                        lineHeight: 0.9,
                                        margin: 0,
                                        letterSpacing: '-1px',
                                        color: '#111'
                                    }}>
                                        From Happy<br />Clients
                                    </h2>
                                </div>
                                {/* Images Row */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {[story4, story5, story1].map((img, i) => (
                                        <div key={i} style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            border: '3px solid white',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                                        }}>
                                            <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Reviewer" />
                                        </div>
                                    ))}
                                    {/* Circle Image */}
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        border: '2px dashed #333',
                                        padding: '2px'
                                    }}>
                                        <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
                                            <img src={story3} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Reviewer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default BrandStory;
