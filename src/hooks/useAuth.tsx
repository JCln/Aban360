import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('tokn');
        setIsAuthenticated(!!token);
    }, []);

    return { isAuthenticated };
};

export default useAuth;