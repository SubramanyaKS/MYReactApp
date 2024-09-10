import { useEffect, useState } from "react";

export const useSpinner =()=>{
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000);
    }, []);
    return {spinner}

}