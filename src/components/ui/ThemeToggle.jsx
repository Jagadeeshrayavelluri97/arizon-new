import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-1 mr-2">
        <SunIcon className={`h-4 w-4 ${isDark ? 'text-gray-500' : 'text-yellow-500'}`} />
      </div>

      <button
        onClick={handleToggle}
        className={`
          w-14 h-7 rounded-full p-1 relative
          ${isDark ? 'bg-blue-900' : 'bg-blue-100'}
          transition-colors duration-300 shadow-md border border-gray-300 dark:border-gray-600
        `}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div
          className={`
            w-5 h-5 rounded-full absolute top-1
            transition-transform duration-300 flex items-center justify-center
            ${isDark ? 'bg-gray-200 transform translate-x-7' : 'bg-white'}
          `}
        >
          {isDark ? (
            <MoonIcon className="h-3 w-3 text-blue-600" />
          ) : (
            <SunIcon className="h-3 w-3 text-yellow-500" />
          )}
        </div>
      </button>

      <div className="flex items-center space-x-1 ml-2">
        <MoonIcon className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-gray-500'}`} />
      </div>

      <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  );
};

export default ThemeToggle;
