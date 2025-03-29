import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaHistory, FaTrash } from "react-icons/fa";
import { clearHistory } from "../redux/querySlice";

function QueryHistory({ theme }) {
  const { queryHistory } = useSelector((state) => state.query);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-96 overflow-y-auto bg-card-${theme} text-text-${theme}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Previous Queries</h2>
        {queryHistory.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch(clearHistory())}
            className={`transition text-secondary-${theme} hover:text-opacity-80`}
          >
            <FaTrash />
          </motion.button>
        )}
      </div>
      {queryHistory.length === 0 ? (
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          No query found.
        </p>
      ) : (
        <ul className="space-y-2">
          {queryHistory.map((query, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`p-3 rounded-md transition flex items-center gap-2 ${
                theme === "dark"
                  ? "bg-gray-400 hover:bg-gray-600"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <FaHistory className={`text-primary-${theme}`} />
              <span>{query}</span>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default QueryHistory;
