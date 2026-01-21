import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
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
    );
};

export default Navbar;
