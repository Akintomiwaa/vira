import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ position: 'relative', marginBottom: '4rem' }}>
                    {/* Background Watermark */}
                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(5rem, 15vw, 12rem)',
                        color: 'rgba(0,0,0,0.03)',
                        textTransform: 'uppercase',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                        zIndex: 0
                    }}>
                        VIRA FASHION
                    </h3>

                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <span style={{
                            background: '#000',
                            color: 'white',
                            padding: '0.3rem 0.8rem',
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            marginBottom: '1rem'
                        }}>
                            Reviews
                        </span>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', textTransform: 'uppercase' }}>
                            From Happy Clients
                        </h4>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            style={{ textAlign: 'center', width: '200px' }}
                        >
                            <div style={{
                                width: '150px',
                                height: '150px',
                                background: '#eee',
                                borderRadius: '50%', // Circle styling
                                margin: '0 auto 1.5rem auto',
                                overflow: 'hidden',
                                border: '3px solid white',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1524504388940-b1c1722653e1' : '1506794778202-cad84cf45f1d'}?w=400&h=500&fit=crop`}
                                    alt="Client"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '0.8rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="var(--color-accent)" color="var(--color-accent)" />
                                ))}
                            </div>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
                                "The quality is unmatched. I wear this everywhere."
                            </p>
                            <h5 style={{ marginTop: '0.5rem', fontFamily: 'var(--font-sub)', fontSize: '0.9rem' }}>
                                — CLIENT {i}
                            </h5>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
