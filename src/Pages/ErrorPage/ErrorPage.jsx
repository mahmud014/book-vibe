// ErrorPage.jsx
import * as React from "react";
import { motion as m } from "framer-motion"; // Alias to avoid ESLint warning

const ErrorPage = ({
  statusCode = 404,
  title = "Oops! Page Not Found",
  message = "The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.",
}) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center text-gray-200 px-6 relative overflow-hidden">
      {/* Floating gradient glow */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/30 rounded-full blur-3xl -z-10 top-10 left-1/2 -translate-x-1/2"
      />

      {/* 404 Number */}
      <m.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[8rem] sm:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 drop-shadow-xl"
        role="alert"
      >
        {statusCode}
      </m.h1>

      {/* Title */}
      <m.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-3xl sm:text-4xl font-semibold text-white"
      >
        {title}
      </m.h2>

      {/* Message */}
      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-3 text-gray-400 max-w-lg"
      >
        {message}
      </m.p>

      {/* Buttons */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <m.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Return Home
        </m.a>
        <m.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-transparent border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </m.button>
      </m.div>

      {/* Footer */}
      <m.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-10 text-xs text-gray-500"
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </m.footer>
    </main>
  );
};

export default ErrorPage;
