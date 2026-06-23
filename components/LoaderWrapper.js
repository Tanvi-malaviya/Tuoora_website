'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';

export default function LoaderWrapper({ children }) {
   const [isLoading, setIsLoading] = useState(true);
   const pathname = usePathname();

   // Trigger loader on initial page load (client mount)
   useEffect(() => {
      const handleLoad = () => {
         setIsLoading(false);
      };

      if (document.readyState === 'complete') {
         // Tiny elegant delay to prevent quick jarring flashes on fast networks
         const timer = setTimeout(() => setIsLoading(false), 850);
         return () => clearTimeout(timer);
      } else {
         window.addEventListener('load', handleLoad);
         // Fallback timer if load event is delayed or already fired
         const fallback = setTimeout(() => setIsLoading(false), 1500);
         return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(fallback);
         };
      }
   }, []);

   // Trigger loader on pathname changes (navigation between pages)
   useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 850);
      return () => clearTimeout(timer);
   }, [pathname]);

   return (
      <>
         <Loader isLoading={isLoading} />
         {children}
      </>
   );
}
