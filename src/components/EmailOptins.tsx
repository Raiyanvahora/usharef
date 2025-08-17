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

  // Styles for the modal
  const styles = {
    modal: {
      position: "fixed" as const,
      zIndex: 70,
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: 560,
      maxWidth: "92vw",
      background: "#dfeee8",   // teal-ish like screenshot
      padding: 22,
      borderRadius: 16,
      boxShadow: "0 24px 60px rgba(0,0,0,.25)"
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
                <h2 id="modal-title" style={{ margin: "0 0 6px 0", fontSize: "24px", fontWeight: "bold", color: "#111" }}>
                  {OFFER_HEADLINE}
                </h2>
                <p style={{ marginTop: 0, color: "#444" }}>
                  {OFFER_SUBTEXT}
                </p>
              </div>
              <button
                onClick={handleModalClose}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close dialog"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleModalSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  style={{ 
                    padding: '12px', 
                    background: 'white', 
                    border: '1px solid #ddd', 
                    borderRadius: '10px', 
                    outline: 'none' 
                  }}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  style={{ 
                    padding: '12px', 
                    background: 'white', 
                    border: '1px solid #ddd', 
                    borderRadius: '10px', 
                    outline: 'none' 
                  }}
                />
              </div>
              
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                style={{ 
                  padding: '12px', 
                  background: 'white', 
                  border: '1px solid #ddd', 
                  borderRadius: '10px', 
                  outline: 'none' 
                }}
                required
              />
              
              <div style={{ display: 'flex' }}>
                <select style={{ 
                  padding: '12px', 
                  background: 'white', 
                  border: '1px solid #ddd', 
                  borderTopLeftRadius: '10px', 
                  borderBottomLeftRadius: '10px',
                  borderRight: 'none',
                  outline: 'none' 
                }}>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  style={{ 
                    flex: 1,
                    padding: '12px', 
                    background: 'white', 
                    border: '1px solid #ddd', 
                    borderTopRightRadius: '10px', 
                    borderBottomRightRadius: '10px',
                    outline: 'none' 
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{ 
                  padding: '14px', 
                  background: '#0d3b66', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '10px', 
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Submit
              </button>
              
              <p style={{ fontSize: '12px', color: '#666', textAlign: 'center', margin: 0 }}>
                By subscribing, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}