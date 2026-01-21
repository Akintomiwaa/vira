import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import orangeModel from '../assets/grid-orange.png';
import winterCoat from '../assets/winter-coat.png';
import leatherJacket from '../assets/product-leather.png';
import { Shirt, Box } from 'lucide-react';

const categories = [
    "Pullover", "Cardigan", "Sweatshirt", "Hoodie", "Leggings", "Longsleeve", "Shortsleeve", "Gloves",
    "T-Shirt", "Tank Top", "Shorts", "Sports Bra", "Jackets", "Beanies", "Scarves"
];

// Map categories to images (fallback to orangeModel)
const categoryContent = {
    "Hoodie": orangeModel,
    "Jackets": winterCoat, // From assets
    "Cardigan": leatherJacket,
    "Pullover": winterCoat,
    "Sweatshirt": orangeModel,
    "Leather": leatherJacket
};

const GridBinder = () => {
    const [activeCategory, setActiveCategory] = useState("Hoodie");

    const activeImage = categoryContent[activeCategory] || orangeModel;

    return (
        <section style={{ padding: '8rem 0', background: 'var(--color-bg)' }}>
            <div className="container">

                {/* Section Title */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        background: '#FCA311',
                        color: 'black',
                        padding: '0.3rem 0.8rem',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        borderRadius: '2px'
                    }}>
                        Shop By Category
                    </span>
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        marginTop: '1rem',
                        textTransform: 'uppercase',
                        lineHeight: 1.1
                    }}>
                        Clothes That Fit Your Life
                    </h2>
                </div>


                {/* Main Split Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '1rem',
                    height: '600px' // Fixed height for consistent look
                }}>

                    {/* Left: Category List (Dark) */}
                    <div style={{
                        background: '#0a0a0a',
                        borderRadius: '24px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 4rem' // Removed vertical padding to let scroll area dictate
                    }}>
                        {/* Background Decor - Circular Lines */}
                        <div style={{
                            position: 'absolute',
                            left: '-20%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '400px',
                            height: '400px',
                            border: '1px dashed #333',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            left: '-25%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '500px',
                            height: '500px',
                            border: '1px dashed #222',
                            borderRadius: '50%',
                            pointerEvents: 'none'
                        }}></div>

                        {/* List */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            width: '100%',
                            paddingLeft: '2rem',
                            maxHeight: '400px', // Restrict height to trigger scroll
                            overflowY: 'auto',
                            scrollbarWidth: 'none', // Firefox
                            msOverflowStyle: 'none', // IE/Edge
                            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', // Fade effect
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                            paddingTop: '2rem', // Space for mask
                            paddingBottom: '2rem'
                        }}>
                            <style>{`
                                div::-webkit-scrollbar {
                                    display: none;
                                }
                                .category-item {
                                    color: rgba(255,255,255,0.1);
                                    transition: all 0.3s ease;
                                }
                                .category-item:hover {
                                    color: white !important;
                                    transform: translateX(10px);
                                }
                                .category-item.active {
                                    color: white;
                                }
                            `}</style>
                            {categories.map((item) => {
                                const isActive = item === activeCategory;
                                return (
                                    <h3
                                        key={item}
                                        className={`category-item ${isActive ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(item)}
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '3rem',
                                            textTransform: 'uppercase',
                                            margin: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            cursor: 'pointer',
                                            // Color handled by CSS class now
                                        }}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIcon"
                                                style={{
                                                    background: 'white',
                                                    borderRadius: '8px',
                                                    padding: '4px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    height: '40px'
                                                }}
                                            >
                                                <span style={{ fontSize: '20px' }}>🧥</span>
                                            </motion.div>
                                        )}
                                        {item}
                                    </h3>
                                );
                            })}
                        </div>
                    </div>


                    {/* Right: Lifestyle Image (Light/Image) */}
                    <div style={{
                        borderRadius: '24px',
                        position: 'relative',
                        overflow: 'hidden',
                        background: '#f0f0f0' // Fallback
                    }}>
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={activeCategory} // Triggers animation on change
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                src={activeImage}
                                alt="Lifestyle Model"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </AnimatePresence>

                        {/* Floating Badges */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            right: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '0.5rem',
                            zIndex: 2
                        }}>
                            {['Perfect Stretch Fit', 'Soft Fabrics', 'Designed For You'].map((text) => (
                                <span key={text} style={{
                                    background: 'black',
                                    color: 'white',
                                    padding: '0.4rem 1rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    borderRadius: '4px',
                                    marginTop: '2px'
                                }}>
                                    {text}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GridBinder;
