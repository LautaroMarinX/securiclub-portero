import { useEffect, useState } from "react";


export function useHeader(){
    
    const [isOpen, setIsOpen] = useState(false);
     const [isAtTop, setIsAtTop] = useState(true);


    const handleOpen = () => {
    setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    function useIsAtTop() {

      useEffect(() => {
        const handleScroll = () => {
          setIsAtTop(window.scrollY >= 0 && window.scrollY < 100);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // estado inicial

        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return isAtTop;
    }

    return { handleOpen, isOpen, closeMenu, useIsAtTop };
}

