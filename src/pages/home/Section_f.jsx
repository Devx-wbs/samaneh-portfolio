import React from "react";
import { motion } from "framer-motion";

const Section_f = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#f1f1f1] px-4 sm:py-16 p-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-grotesk font-bold text-gray-800 uppercase mb-12 tracking-wide"
        >
          Want to get in touch? Drop me a line!
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-md bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition font-inter"
                placeholder="Enter your first name"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-md bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition font-inter"
                placeholder="Enter your last name"
              />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
              Your Message
            </label>
            <textarea
              rows="5"
              className="w-full px-5 py-4 rounded-md bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition font-inter"
              placeholder="Write your message here..."
            ></textarea>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="submit"
              className="bg-accent-teal text-white font-inter font-semibold px-8 py-3 rounded-md shadow-md hover:bg-purple-700 transition-all duration-300"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Section_f;
