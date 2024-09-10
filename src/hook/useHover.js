import { useState } from "react";

export const useHover = ()=>{
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return {handleMouseEnter,handleMouseLeave,isHovered}
}