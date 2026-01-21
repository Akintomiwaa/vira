import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import heroImage from '../assets/hero-model-final.jpg';
import productCardImg from '../assets/product-leather.png';

const Hero = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const yImage = useTransform(scrollY, [0, 500], [0, -50]);

    return (
        <header style={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg)',
            paddingTop: '130px'
        }}>

            {/* Top Graphic Text Bar */}
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                color: '#333',
                marginBottom: '4rem',
                marginTop: '2rem'
            }}>
                <span style={{ textAlign: 'left' }}>Move Comfortably</span>
                <span style={{ textAlign: 'center' }}>Live Freely</span>
                <span style={{ textAlign: 'right' }}>Feel Confident</span>
            </div>

            <div className="container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Massive Text Layer */}
                <motion.div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                        y: yText
                    }}
                >
                    <h1 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(5rem, 18vw, 16rem)',
                        color: 'var(--color-dark)',
                        textTransform: 'uppercase',
                        lineHeight: 0.8,
                        margin: '0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <span>Pure</span>
                        <span>Fashion</span>
                    </h1>
                </motion.div>

                {/* Central Content Area */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '600px',
                    marginTop: '-5vw',
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                    {/* Left Description Block */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: '30%',
                        width: '250px',
                        zIndex: 2
                    }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Designed for everyday movement.</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Soft fabrics, relaxed fits, and effortless comfort. Redefining your wardrobe essentials.
                        </p>
                        {/* Decorative Asterisk */}
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '20%',
                            fontSize: '15rem',
                            color: '#f0ece6',
                            zIndex: -1,
                            lineHeight: 0
                        }}>*</div>
                    </div>

                    {/* Center Model Image */}
                    <motion.div
                        style={{
                            position: 'relative',
                            zIndex: 3,
                            height: '100%',
                            y: yImage
                        }}
                    >
                        <img
                            src={heroImage}
                            alt="Hero Model"
                            style={{
                                height: '110%',
                                width: 'auto',
                                objectFit: 'cover',
                                mixBlendMode: 'normal',
                                borderRadius: '16px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                            }}
                        />
                    </motion.div>

                    {/* Right Floating Product Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 0 }}
                        animate={{ opacity: 1, x: 0, rotate: 6 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            right: '5%',
                            top: '15%',
                            width: '220px',
                            zIndex: 4,
                        }}
                    >
                        <div style={{
                            background: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            padding: '10px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.4)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ background: '#333', color: 'white', padding: '0.5rem', borderRadius: '8px 8px 0 0', fontWeight: 'bold', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>AUTUMN HOODIE</span>
                                <span>:</span>
                            </div>
                            <div style={{ background: 'white', padding: '1rem', borderRadius: '0 0 8px 8px' }}>
                                <img src={productCardImg} alt="Product" style={{ width: '100%' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                    <span>FABRIC</span>
                                    <span>.32</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Buttons */}
                <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    zIndex: 10,
                    display: 'flex',
                    gap: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <button style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        boxShadow: '0 10px 20px rgba(255,59,15,0.3)'
                    }}>
                        Shop The Collection
                    </button>
                    <button style={{
                        background: 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(10px)',
                        color: 'var(--color-dark)',
                        border: '1px solid rgba(255, 255, 255, 0.8)',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        cursor: 'pointer'
                    }}>
                        Explore New Arrivals
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Hero;
