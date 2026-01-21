import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#000', color: '#fff', paddingTop: '6rem', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>

                    {/* Column 1 */}
                    <div>
                        <h5 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sub)', letterSpacing: '1px' }}>SHOP</h5>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.7, fontSize: '0.9rem' }}>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h5 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sub)', letterSpacing: '1px' }}>INFO</h5>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.7, fontSize: '0.9rem' }}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Newsletter */}
                    <div>
                        <h5 style={{ fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sub)', letterSpacing: '1px' }}>NEWSLETTER</h5>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>Subscribe for exclusive drops.</p>
                        <div style={{ display: 'flex', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                            <input type="email" placeholder="Your Email" style={{ background: 'transparent', border: 'none', color: 'white', flex: 1, outline: 'none' }} />
                            <button style={{ background: 'transparent', border: 'none', color: 'var(--color-accent)', fontWeight: 'bold', cursor: 'pointer' }}>JOIN</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Massive Footer Brand Name */}
            <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 25vw, 40rem)',
                lineHeight: 0.75,
                textAlign: 'center',
                color: 'var(--color-white)',
                marginBottom: '-2vw'
            }}>
                VIRA
            </div>
        </footer>
    );
};

export default Footer;
