'use client';

import { useState, useEffect } from 'react';

interface SubscriptionData {
  source: 'permission-inline' | 'modal';
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
}

// Constants
const OFFER_HEADLINE = "SIGN UP & GET 20% OFF";
const OFFER_SUBTEXT = "Get 20% off your first order";

export default function EmailOptins() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  // Get responsive values
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  
  // Styles for the modal
  const styles = {
    modal: {
      position: "fixed" as const,
      zIndex: 70,
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: isMobile ? "calc(100vw - 24px)" : "min(560px, calc(100vw - 32px))",
      maxWidth: "95vw",
      background: "#dfeee8",   // teal-ish like screenshot
      padding: isMobile ? 16 : 22,
      borderRadius: isMobile ? 12 : 16,
      boxShadow: "0 24px 60px rgba(0,0,0,.25)"
    },
    input: {
      padding: isMobile ? '10px' : '12px',
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '10px',
      outline: 'none',
      fontSize: isMobile ? '14px' : '16px'
    },
    button: {
      padding: isMobile ? '12px' : '14px',
      background: '#0d3b66',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontWeight: '600' as const,
      cursor: 'pointer',
      fontSize: isMobile ? '14px' : '16px'
    },
    heading: {
      fontSize: isMobile ? '24px' : '28px',
      fontWeight: '700' as const,
      color: '#0d3b66',
      textAlign: 'center' as const,
      margin: '0 0 8px 0'
    },
    subtext: {
      fontSize: isMobile ? '14px' : '16px',
      color: '#0d3b66',
      textAlign: 'center' as const,
      margin: '0 0 20px 0'
    }
  };


  useEffect(() => {
    // Timer for discount modal (40 seconds) only
    const modalTimer = setTimeout(() => {
      // Show modal after 40 seconds
      setShowModal(true);
    }, 40000);
    
    // Cleanup function
    return () => {
      clearTimeout(modalTimer);
    };
  }, []);


  const handleSubscribe = (data: SubscriptionData) => {
    // Close modal instantly
    setShowModal(false);
    
    // Send API request in background (non-blocking)
    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).catch(error => {
      console.error('Subscription error:', error);
    });
  };


  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      handleSubscribe({
        source: 'modal',
        firstName,
        lastName,
        email,
        phone,
      });
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleModalClose();
    }
  };

  if (!showModal) {
    return null;
  }

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleModalClose}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 id="modal-title" style={styles.heading}>
                  {OFFER_HEADLINE}
                </h2>
                <p style={styles.subtext}>
                  {OFFER_SUBTEXT}
                </p>
              </div>
              <button
                onClick={handleModalClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close dialog"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: isMobile ? '16px' : '18px' }}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleModalSubmit} style={{ display: 'grid', gap: isMobile ? '12px' : '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '8px' : '12px' }}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  style={styles.input}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  style={styles.input}
                />
              </div>
              
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                style={styles.input}
                required
              />
              
              <div style={{ display: 'flex' }}>
                <select style={{ 
                  ...styles.input,
                  borderTopRightRadius: '0', 
                  borderBottomRightRadius: '0',
                  borderRight: 'none',
                  flex: '0 0 80px'
                }}>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  style={{ 
                    ...styles.input,
                    flex: 1,
                    borderTopLeftRadius: '0', 
                    borderBottomLeftRadius: '0'
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={styles.button}
              >
                Submit
              </button>
              
              <p style={{ fontSize: isMobile ? '10px' : '12px', color: '#666', textAlign: 'center', margin: 0, lineHeight: 1.4 }}>
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}