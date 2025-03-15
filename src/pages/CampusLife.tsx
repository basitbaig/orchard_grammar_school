import { motion } from 'framer-motion';

export default function CampusLife() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Campus Life</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Experience the vibrant and enriching environment of our campus life. 
            From sports to cultural activities, we offer numerous opportunities 
            for students to grow and excel.
          </p>
          {/* Add more content as needed */}
        </div>
      </motion.div>
    </div>
  );
}