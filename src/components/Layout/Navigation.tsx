import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Academics', href: '/academics' },
  { title: 'Admissions', href: '/admissions' },
  { title: 'Campus Life', href: '/campus-life' },
  { title: 'Contact', href: '/contact' }
];

export default function Navigation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-1/2 md:w-1/4 h-full bg-blue-900/95 backdrop-blur-lg z-50"
          >
            <div className="px-6 py-12 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-blue-200"
              >
                <X className="w-6 h-6" />
              </button>
              <nav className="flex flex-col space-y-8 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-white text-xl font-semibold hover:text-blue-200 transition-colors"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}