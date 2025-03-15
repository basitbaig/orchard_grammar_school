import { motion } from 'framer-motion';

export default function Admissions() {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Admissions</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Join our vibrant learning community. We welcome students who are eager 
            to learn, grow, and contribute to our school's diverse environment.
          </p>
          {/* Add more content as needed */}
        </div>
      </motion.div>
    </div>
  );
}