import { useEffect } from 'react';


export default function useClickOutside(ref, handler) {

    useEffect(() => {

        const handleEvent = (event) => {
            if (!ref.current.contains(event.target)) {
                handler();
            }
        }
        
        document.addEventListener('mousedown', handleEvent);

        return () => {
            document.removeEventListener('mousedown', handleEvent);
        }

    }, [ref, handler]);

}