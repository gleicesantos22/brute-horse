import React, { useEffect, useState } from 'react';
import { cloaker } from '../utils/cloaker';

interface CloakerGuardProps {
  children: React.ReactNode;
  loadingComponent?: React.ReactNode;
  enableLogging?: boolean;
}

const CloakerGuard: React.FC<CloakerGuardProps> = ({ 
  children, 
  loadingComponent,
  enableLogging = false 
}) => {
  const [isChecking, setIsChecking] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        // Small delay to ensure all parameters are loaded
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const hasAccess = cloaker.shouldAllowAccess();
        
        if (enableLogging) {
          const trafficInfo = cloaker.getTrafficInfo();
          console.log('🔍 Traffic Analysis:', trafficInfo);
        }
        
        if (hasAccess) {
          setShouldShow(true);
          setIsChecking(false);
        } else {
          // Redirect to Google
          cloaker.redirectToGoogle();
        }
      } catch (error) {
        console.error('❌ Cloaker error:', error);
        // On error, allow access to prevent breaking the site
        setShouldShow(true);
        setIsChecking(false);
      }
    };

    checkAccess();
  }, [enableLogging]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {loadingComponent || (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        )}
      </div>
    );
  }

  return shouldShow ? <>{children}</> : null;
};

export default CloakerGuard;