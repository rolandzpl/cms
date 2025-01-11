import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services'; // Assume you have an authService to handle API calls

type AuthContextType = {
    user: { username: string } | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    register: (username: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ username: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userData = authService.decodeToken(token);
            setUser(userData);
        }
    }, []);

    const login = async (username: string, password: string) => {
        const token = await authService.login(username, password);
        localStorage.setItem('token', token);
        const userData = authService.decodeToken(token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const register = async (username: string, password: string) => {
        await authService.register(username, password);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

