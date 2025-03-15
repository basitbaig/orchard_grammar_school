import { motion } from "framer-motion";

export default function Academics() {
  return (
    <div className="container mx-auto px-4 py-8">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Academic Programs
        </h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Our academic programs are designed to challenge and inspire
            students, preparing them for success in higher education and beyond.
          </p>
          {/* Add more content as needed */}
        </div>
      </motion.div>
    </div>
  );
}
