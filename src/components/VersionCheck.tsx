'use client';

import { useEffect } from 'react';

const VERSION_CHECK_INTERVAL = 60000; // Check every minute

export default function VersionCheck() {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        // Fetch version with cache busting
        const response = await fetch(`/version.json?t=${Date.now()}`, {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
          },
        });
        
        if (response.ok) {
          const remoteVersion = await response.json();
          const storedVersion = localStorage.getItem('app-version');
          
          if (!storedVersion) {
            // First visit - store the version
            localStorage.setItem('app-version', remoteVersion.version);
            localStorage.setItem('app-timestamp', remoteVersion.timestamp.toString());
          } else if (storedVersion !== remoteVersion.version) {
            // Version mismatch - update and reload
            console.log(`New version detected: ${remoteVersion.version} (was ${storedVersion})`);
            localStorage.setItem('app-version', remoteVersion.version);
            localStorage.setItem('app-timestamp', remoteVersion.timestamp.toString());
            
            // Force reload without cache
            window.location.reload();
          }
        }
      } catch (error) {
        console.error('Version check failed:', error);
      }
    };

    // Initial check
    checkVersion();

    // Set up interval
    const interval = setInterval(checkVersion, VERSION_CHECK_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return null;
}