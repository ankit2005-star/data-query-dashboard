import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen font-sans flex flex-col transition-colors duration-300 bg-gradient-to-br from-bg-${theme} to-bgGradient-${theme} text-text-${theme}`}
    >
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`p-4 shadow-lg flex items-center justify-between bg-gradient-to-r from-header-${theme} to-headerGradient-${theme} text-headerText-${theme}`}
      >
        <div className="flex items-center gap-3">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <h1 className="text-2xl font-bold">Gen AI Analytics Dashboard</h1>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
           
        </motion.button>
      </motion.header>
      <main className="p-4 flex-grow">
        <QueryInput theme={theme} />
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 w-full">
            <QueryHistory theme={theme} />
          </div>
          <div className="md:w-2/3 w-full">
            <ResultDisplay theme={theme} />
          </div>
        </div>
      </main>
      <footer
        className={`p-4 text-center bg-gray-100 text-headerText-${theme}`}
      >
        <p className="text-sm">Made  by Ankit  </p>
      </footer>
    </motion.div>
  );
}

export default App;
