// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
    isDarkTheme: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        // Retrieve the saved theme from localStorage
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    const applyTheme = (isDark: boolean) => {
        const root: HTMLElement = document.documentElement;
        const body = document.body;

        if (isDark) {
            root.style.setProperty('--color-gray-200', '#1e1e1e');
            root.style.setProperty('--color-gray-300', '#F5F5F5');

            root.style.setProperty('--dark-secondary-text', '#c7c6c8');
            root.style.setProperty('--color-darkslategray-100', '#2f2f37');
            root.style.setProperty('--color-gray-400', 'rgba(18, 18, 18, 0.95)');
            root.style.setProperty('--dark-primary-text', '#f9f8fa');
            root.style.setProperty('--color-darkgray', '#abafb5');
            root.style.setProperty('--color-darkslategray-200', '#2f2d2d');
            root.style.setProperty('--toggle-icon', '50px');
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            root.style.setProperty('--color-gray-200', '#F5F5F5');
            root.style.setProperty('--color-gray-300', '#F5F5F5');

            root.style.setProperty('--dark-secondary-text', '#000000');
            root.style.setProperty('--color-darkslategray-100', '#ffffff');
            root.style.setProperty('--color-gray-400', '#ffffff');
            root.style.setProperty('--dark-primary-text', '#000000');
            root.style.setProperty('--color-darkgray', '#808080');
            root.style.setProperty('--color-darkslategray-200', '#ffffff');
            root.style.setProperty('--toggle-icon', '50px');
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    useEffect(() => {
        // Apply the saved theme on initial load
        applyTheme(isDarkTheme);
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
