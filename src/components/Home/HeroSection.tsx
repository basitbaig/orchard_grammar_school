import { motion } from 'framer-motion';
import 'animate.css';

export default function HeroSection() {

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate__animated animate__zoomIn animate__slow">
          Civilizations Public School
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate__animated animate__rollIn animate__delay-2s animate__slow">
          Nurturing minds, building character, and shaping futures since 2005
        </p>
      </motion.div>
    </div>
  );
}

 