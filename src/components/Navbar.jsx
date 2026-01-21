import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <>
            <motion.nav 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                    background: scrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                    transition: 'all 0.3s ease'
                }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                    {/* Hamburger Menu Icon (Mobile) */}
                    <div className="mobile-menu-icon" onClick={() => setMenuOpen(true)} style={{ cursor: 'pointer', display: 'none' }}>
                       <Menu size={24} />
                    </div>
                    <style>{ `@media (max-width: 768px) { .mobile-menu-icon { display: block !important; } }` }</style>

                    <div className="logo" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        VIRA FASHION
                    </div>

                    <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                        {['New Arrivals', 'Clothing', 'Shoes', 'Sale'].map((item) => (
                            <a 
                                key={item} 
                                href="#" 
                                style={{ 
                                    textTransform: 'uppercase', 
                                    fontSize: '0.8rem', 
                                    fontWeight: 600, 
                                    letterSpacing: '1px' 
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <div className="icons" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <Search size={22} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
                        <User size={22} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
                        <div style={{ position: 'relative', cursor: 'pointer' }}>
                            <ShoppingBag size={22} strokeWidth={1.5} />
                            <span style={{ 
                                position: 'absolute', 
                                top: -5, 
                                right: -5, 
                                background: 'var(--color-accent)', 
                                color: 'white', 
                                fontSize: '10px', 
                                width: '16px', 
                                height: '16px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                borderRadius: '50%',
                                fontWeight: 'bold'
                            }}>2</span>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '80%',
                            height: '100vh',
                            background: 'white',
                            zIndex: 200,
                            padding: '2rem',
                            boxShadow: '10px 0 30px rgba(0,0,0,0.1)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
                             <div className="logo" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                                VIRA
                            </div>
                            <X size={24} onClick={() => setMenuOpen(false)} style={{ cursor: 'pointer' }} />
                        </div>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {['New Arrivals', 'Clothing', 'Shoes', 'Sale', 'Collections', 'About'].map((item) => (
                                <li key={item}>
                                    <a href="#" style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'var(--font-sub)' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 199 }} />}
        </>
    );
};

export default Navbar;
