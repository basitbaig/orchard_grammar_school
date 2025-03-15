import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Event.css'; // Create this CSS file for styling

const Event: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Sample image galleries for each tab
  const galleries = [
    [
      'https://images.pexels.com/photos/16042589/pexels-photo-16042589/free-photo-of-teenagers-playing-football.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/15955020/pexels-photo-15955020/free-photo-of-girls-during-soccer-match.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/31003854/pexels-photo-31003854/free-photo-of-high-school-rugby-match-in-action-on-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    [
      'https://via.placeholder.com/400x300?text=Event+2+Image+1',
      'https://via.placeholder.com/400x300?text=Event+2+Image+2',
      'https://via.placeholder.com/400x300?text=Event+2+Image+3',
    ],
    [
      'https://via.placeholder.com/400x300?text=Event+3+Image+1',
      'https://via.placeholder.com/400x300?text=Event+3+Image+2',
      'https://via.placeholder.com/400x300?text=Event+3+Image+3',
    ],
  ];

  return (
    <div className="container  mx-auto px-2 py-1">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Events
        </h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Our academic programs are designed to challenge and inspire
            students, preparing them for success in higher education and beyond.
          </p>
          {/* Add more content as needed */}

          <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
        <TabList>
          <Tab>Sports</Tab>
          <Tab>STEM</Tab>
          <Tab>Music & Fun</Tab>
        </TabList>

        {galleries.map((gallery, index) => (
          <TabPanel key={index}>
            <TransitionGroup className="gallery">
              {gallery.map((image, imgIndex) => (
                <CSSTransition key={imgIndex} timeout={500} classNames="fade">
                  <div className="gallery-item">
                    <img src={image} alt={`Event ${index + 1} Image ${imgIndex + 1}`} />
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </TabPanel>
        ))}
      </Tabs>
        </div>
      </motion.div>
    </div>





  
  );
};

export default Event;