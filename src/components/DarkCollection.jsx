import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import productImg from '../assets/product-leather.png';
import coatImg from '../assets/hero-model-final.jpg';

const products = [
    { id: 1, name: "Autumn Coat", price: "$84.50", category: "BEST SELLER", img: coatImg },
    { id: 2, name: "Leather Jacket", price: "$56.00", category: "BEST SELLER", img: productImg },
    { id: 3, name: "Down Jacket", price: "$154.00", category: "BEST SELLER", img: coatImg },
    { id: 4, name: "Velvet Blazer", price: "$120.00", category: "NEW ARRIVAL", img: productImg },
    { id: 5, name: "Winter Parka", price: "$210.00", category: "TRENDING", img: coatImg },
    { id: 6, name: "Urban Bomber", price: "$95.00", category: "LIMITED", img: productImg },
];

const DarkCollection = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Approx card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section style={{
            backgroundColor: '#111',
            color: 'white',
            padding: '8rem 0',
            position: 'relative',
        }}>
            <div className="container" style={{ overflow: 'hidden' }}> {/* Prevent scrollbar from causing width issues */}

                {/* Header Layout */}
                {/* Header Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    alignItems: 'center',
                    gap: '2rem',
                    marginBottom: '6rem',
                    position: 'relative'
                }}>

                    {/* Left: Description */}
                    <div style={{ maxWidth: '250px' }}>
                        <p style={{ color: '#999', lineHeight: 1.6, fontSize: '0.9rem' }}>
                            Carefully curated best sellers designed for comfort, confidence, and everyday elegance.
                        </p>
                        <div style={{ display: 'flex', gap: '5px', marginTop: '1rem' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)' }}></div>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#333' }}></div>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#333' }}></div>
                        </div>
                    </div>

                    {/* Center: Title (Block Centered, Text Left-Aligned) */}
                    <div style={{ textAlign: 'left' }}>
                        <span style={{
                            background: '#FCA311',
                            color: 'black',
                            padding: '0.3rem 0.8rem',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            borderRadius: '2px',
                            display: 'inline-block',
                            marginBottom: '1rem'
                        }}>
                            Hot Picks
                        </span>
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)', // Scaled down
                            textTransform: 'uppercase',
                            lineHeight: 1.1,
                            marginBottom: '0',
                            letterSpacing: '1px'
                        }}>
                            Everyday Styles<br />Women Love
                        </h2>
                    </div>

                    {/* Right: Controls */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifySelf: 'end'
                    }}>
                        <div onClick={() => scroll('left')} style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '1px solid #333',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            background: 'rgba(255,255,255,0.05)'
                        }}>
                            <ArrowLeft size={20} color="#666" />
                        </div>
                        <div onClick={() => scroll('right')} style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: '1px solid white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.1)'
                        }}>
                            <ArrowRight size={20} color="white" />
                        </div>
                    </div>

                </div>


                {/* Product Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    style={{
                        display: 'flex',
                        gap: '2.5rem',
                        overflowX: 'auto',
                        paddingBottom: '2rem', // Hide scrollbar padding or visual space
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // IE/Edge
                    }}
                    className="no-scrollbar" // Helper class if defined globally for hiding scrollbar
                >
                    <style>{`
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {products.map((product) => (
                        <div key={product.id} style={{ minWidth: '320px', flex: '0 0 auto', scrollSnapAlign: 'start' }}>
                            {/* Card Box */}
                            <motion.div
                                whileHover="hover"
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    height: '450px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    padding: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                {/* Top Badges */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    left: '1.5rem',
                                    width: 'calc(100% - 3rem)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    zIndex: 2
                                }}>
                                    <span style={{
                                        color: 'black',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)' }}></div>
                                        {product.category}
                                    </span>
                                    <Heart size={20} color="black" />
                                </div>

                                {/* Image */}
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '90%',
                                        objectFit: 'contain',
                                        marginTop: '1rem'
                                    }}
                                />

                                {/* Buttons Overlay */}
                                <motion.div
                                    variants={{ hover: { y: 0, opacity: 1 }, initial: { y: 20, opacity: 0 } }}
                                    initial="initial"
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '2rem',
                                        display: 'flex',
                                        gap: '1rem',
                                        zIndex: 3
                                    }}
                                >
                                    <button style={{
                                        background: 'var(--color-accent)',
                                        color: 'white',
                                        border: 'none',
                                        padding: '0.8rem 2rem',
                                        borderRadius: '50px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        Add To Cart <div style={{ fontSize: '10px' }}>👜</div>
                                    </button>
                                </motion.div>
                            </motion.div>

                            {/* Below Card Info */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '1.5rem',
                                alignItems: 'center',
                                padding: '0 0.5rem'
                            }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, fontFamily: 'var(--font-body)' }}>{product.name}</h3>
                                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DarkCollection;
