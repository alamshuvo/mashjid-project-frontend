import { useLocation } from 'react-router-dom';

/**
 * Custom hook to generate Tailwind CSS classes for navigation links,
 * providing active and hover states based on the current route.
 * * @param {string} path - The target route path of the link (e.g., "/contact").
 * @returns {string} The combined string of Tailwind CSS classes.
 */
 const useLinkClasses = (path) => {
    // 1. Get the current location object from react-router-dom
    const location = useLocation();

    // 2. Define the classes
    // Base classes for all links
    const baseClasses = "transition duration-300 ease-in-out cursor-pointer relative";
    
    // Classes for the inactive (hover) state:
    // Uses the 'after' pseudo-element for the animated underline
    const inactiveClasses = "hover:text-mainGold after:block after:scale-x-0 after:h-[2px] after:bg-white after:transition after:duration-300 after:hover:scale-x-100 after:absolute after:bottom-0 after:left-0 after:w-full";
    
    // Classes for the active state
    const activeClasses = "text-mainGold border-b-2 border-white"; 
    
    // 3. Return the correct class stringz
    if (location.pathname === path) {
      return `${baseClasses} ${activeClasses}`;
    } else {
      return `${baseClasses} ${inactiveClasses}`;
    }
};

// Export the custom hook
export default useLinkClasses;