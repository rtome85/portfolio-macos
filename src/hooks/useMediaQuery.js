import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(() => {
        if (typeof window != undefined) {
            return window.matchMedia(query).matches;
        }
        return false;
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handleChange = (e) => setMatches(e.matches);

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [query]);

    return matches;
}

export default useMediaQuery