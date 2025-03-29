import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ResultDisplay({ theme }) {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) {
    return (
      <div
        className={`p-6 rounded-lg shadow-md flex justify-center items-center h-64 bg-card-${theme}`}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={`h-8 w-8 border-4 rounded-full border-t-transparent border-primary-${theme}`}
        />
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`p-6 rounded-lg shadow-md h-64 flex items-center justify-center bg-card-${theme}`}
      >
        <div className="text-center">
          <p className="text-red-500 font-semibold">Error: {error}</p>
          <p
            className={`mt-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            No problem, try again!
          </p>
        </div>
      </motion.div>
    );
  }

  if (!results) {
    return (
      <div
        className={`p-6 rounded-lg shadow-md h-64 flex items-center justify-center bg-card-${theme}`}
      >
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
          No result found. Please submit query!
        </p>
      </div>
    );
  }

  const chartData = {
    labels: results.labels,
    datasets: [
      {
        label: "Sample Data",
        data: results.data,
        backgroundColor: results.data.map((_, idx) =>
          theme === "dark"
            ? ["#60A5FA", "#34D399", "#FBBF24"][idx % 3]
            : ["#3B82F6", "#EC4899", "#FBBF24"][idx % 3]
        ),
        borderColor: results.data.map((_, idx) =>
          theme === "dark"
            ? ["#3B82F6", "#10B981", "#F59E0B"][idx % 3]
            : ["#2563EB", "#DB2777", "#F59E0B"][idx % 3]
        ),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
          color: `text-text-${theme}`,
        },
      },
      title: {
        display: true,
        text: "Query Results",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          bottom: 20,
        },
        color: `text-text-${theme}`,
      },
      tooltip: {
        backgroundColor: theme === "dark" ? "#1F2A44" : "#1F2937",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          font: {
            size: 14,
            weight: "bold",
          },
          color: `text-text-${theme}`,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: `text-text-${theme}`,
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
          font: {
            size: 14,
            weight: "bold",
          },
          color: `text-text-${theme}`,
        },
        beginAtZero: true,
        grid: {
          color: `border-border-${theme}`,
        },
        ticks: {
          color: `text-text-${theme}`,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
      delay: (context) => context.dataIndex * 200,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-96 bg-card-${theme}`}
    >
      <h2 className={`text-lg font-semibold mb-4 text-text-${theme}`}>
        Results
      </h2>
      <div className={`h-80 border rounded-lg p-4 border-border-${theme}`}>
        <Bar data={chartData} options={chartOptions} height={250} />
      </div>
    </motion.div>
  );
}

export default ResultDisplay;
