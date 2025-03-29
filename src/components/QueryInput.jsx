import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { submitQuery } from "../redux/querySlice";

function QueryInput({ theme }) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const suggestions = [
    "What’s the sales trend this quarter?",
    "Show revenue by region",
    "Compare product performance",
  ];

  const handleSubmit = () => {
    dispatch(submitQuery(query));
    setQuery("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card-${theme} text-text-${theme}`}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Apna business question poochho..."
        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 transition-all duration-300 bg-card-${theme} text-text-${theme} border-border-${theme} focus:ring-primary-${theme}`}
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mt-3 flex flex-wrap gap-2"
      >
        {suggestions.map((sug, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setQuery(sug)}
            className={`text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-sm text-secondary-${theme} bg-opacity-10 bg-secondary-${theme} hover:bg-opacity-20 hover:bg-secondary-${theme}`}
          >
            {sug}
          </motion.button>
        ))}
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className={`mt-4 px-6 py-2 rounded-full transition-all duration-300 shadow-md bg-primary-${theme} text-headerText-${theme} hover:bg-opacity-90`}
      >
        Submit
      </motion.button>
    </motion.div>
  );
}

export default QueryInput;
