import { GraduationCap, BookOpen, Users2, Calendar, Trophy, ChevronRight, School } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'animate.css';

const cards = [
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: 'Admissions',
    description: 'Join our prestigious institution',
    link: '/admissions',
    hoverClass: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
  },
  
  {
    icon: <Users2 className="w-12 h-12" />,
    title: 'Student/Parents',
    description: 'Experience campus activities',
    link: '/student-parents',
    hoverClass: 'hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500'
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: 'Events',
    description: 'Stay updated with school events',
    link: '/events',
    hoverClass: 'hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500'
  },
  {
    icon: <Trophy className="w-12 h-12" />,
    title: 'Achievements',
    description: 'Our pride and accomplishments',
    link: '/achievements',
    hoverClass: 'hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500'
  },
  {
    icon: <BookOpen className="w-12 h-12" />,
    title: 'Academics',
    description: 'See Information About our Academic Programs',
    link: '/academics',
    hoverClass: 'hover:bg-gradient-to-r hover:from-red-500 hover:to-rose-500'
  }
];

//https://animate.style/#utilities

// {
//   icon: <School className="w-12 h-12" />,
//   title: 'Campus',
//   description: 'Discover our Campus',
//   link: '/campus',
//   hoverClass: 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500'
// },

export default function QuickLinks() {
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={card.link}
              className={`group block bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white 
                transition-all duration-500 hover:shadow-2xl hover:scale-105 
                hover:backdrop-blur-lg ${card.hoverClass} animate__animated animate__zoomIn animate__slow animate__delay-3s `}
            >
              <div className="flex flex-col items-center text-center">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-200 mb-4 group-hover:text-white transition-colors">
                  {card.description}
                </p>
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}