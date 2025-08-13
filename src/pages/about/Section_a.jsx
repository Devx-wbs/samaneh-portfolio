import { motion } from "framer-motion";

export default function Section_a() {
  return (
    <section className="bg-white w-full pt-[150px] pb-[80px] px-4 flex items-center justify-center">
      <motion.div
        className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* TEXT SECTION */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left bg-[#f4f0ff] border-l-4 border-[#6B4EFF] p-8 rounded-xl shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            HEY THERE, NICE <br className="hidden sm:block" />
            TO <span className="text-[#6B4EFF]">MEET YOU!</span>
            <motion.span
              className="inline-block origin-bottom"
              animate={{
                rotate: [0, 15, -10, 15, -5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              👋🏻
            </motion.span>
          </h1>

          <div className="mt-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              HELLO!
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              THIS IS ME. <br className="sm:hidden" /> I MEAN “SHE”.
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              I&apos;m a UX Researcher based in Bay area, California. I always
              try to understand how people’s minds work and &quot;why&quot; they
              choose certain things over others. I was born and raised in
              Shiraz (like the wine), Iran and moved to U.S to be with my family
              in 2014. I love swimming and traveling, baking (not good at it :),
              and gardening. You can also find me binge watching a good old
              comedy on weekends.
            </p>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg bg-[#fff5f0] rounded-xl overflow-hidden shadow-lg">
            <motion.div
              className="absolute -top-8 -left-8 w-48 h-48 bg-[#ffd8c4] rounded-full blur-2xl opacity-50 -z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
            <motion.img
              src="/profile_pic.jpg"
              alt="Profile"
              className="w-full h-auto object-cover transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
