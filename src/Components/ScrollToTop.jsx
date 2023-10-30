import { useEffect } from 'react'
import { useLocation } from 'react-router'

import React from 'react'

const ScrolltoTop = () => {
    const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      
      return null;
}

export default ScrolltoTop

// export const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
  
//   return null;
// }
