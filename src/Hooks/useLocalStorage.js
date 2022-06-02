import React, { useEffect, useState } from 'react'

const PREFIX = "whatsapp-clone";

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + "Key"


    // get our value from localStorage and put it in our State
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue !== null) {
            return JSON.parse(jsonValue)
        };
        if (typeof initialValue === "function") {
            return initialValue();
        }
        else {
            return initialValue;
        }
    });

    // get id
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
