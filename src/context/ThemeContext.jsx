import { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ThemeContext = createContext(null);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if dark mode is preferred by the system
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initialize dark mode state from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' || (storedTheme === null && prefersDarkMode);
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Apply theme class to html and body elements whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      console.log('Dark mode applied to HTML and body');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      console.log('Light mode applied to HTML and body');
    }
  }, [isDark]);

  // Apply theme on initial render
  useEffect(() => {
    const applyTheme = () => {
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark-mode');
      }
    };

    // Apply immediately
    applyTheme();

    // And also after a short delay to ensure it applies after all components mount
    const timeoutId = setTimeout(applyTheme, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
