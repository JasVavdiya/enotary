"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// This would typically come from a CMS or API
const defaultGlobalContent = {
  title: "Bharat at Global Stage",
  subtitle: "Leading the World with Innovation and Tradition",
  description: "India is emerging as a global leader, combining technological innovation with ancient wisdom to address the world's most pressing challenges. Our unique approach to sustainable development and digital transformation is setting new standards on the international stage.",
  image: "/images/world-map.jpg",
  achievements: [
    {
      title: "Digital Leadership",
      value: "3rd",
      description: "Largest startup ecosystem in the world"
    },
    {
      title: "Sustainable Growth",
      value: "5th",
      description: "Largest renewable energy capacity globally"
    },
    {
      title: "Cultural Influence",
      value: "180+",
      description: "Countries practicing International Yoga Day"
    }
  ],
  partners: [
    { name: "United Nations", logo: "/images/un-logo.png" },
    { name: "World Economic Forum", logo: "/images/wef-logo.png" },
    { name: "G20", logo: "/images/g20-logo.png" }
  ]
};

const BharatGlobal = () => {
  // In a real application, this would be fetched from an API
  const [content, setContent] = useState(defaultGlobalContent);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mapVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-deep-blue text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-gold-accent text-deep-blue rounded-full text-sm font-medium mb-4"
            variants={itemVariants}
          >
            Global Impact
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            {content.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* World Map Visualization */}
          <motion.div 
            className="lg:col-span-7 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
              variants={mapVariants}
            >
              <Image
                src={content.image}
                alt="Bharat Global Presence"
                fill
                className="object-cover"
       
              />
              <div className="absolute inset-0 bg-deep-blue/30"></div>
              
              {/* Animated Pulse Points on Map */}
              <motion.div 
                className="absolute top-[30%] left-[70%]" // India position
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <div className="w-4 h-4 bg-gold-accent rounded-full"></div>
                <div className="w-4 h-4 bg-gold-accent rounded-full absolute top-0 animate-ping"></div>
              </motion.div>
              
              {/* More pulse points can be added at different coordinates */}
              <motion.div 
                className="absolute top-[25%] left-[20%]" // US position
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <div className="w-3 h-3 bg-rich-red rounded-full"></div>
                <div className="w-3 h-3 bg-rich-red rounded-full absolute top-0 animate-ping"></div>
              </motion.div>
              
              <motion.div 
                className="absolute top-[20%] left-[48%]" // Europe position
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2.2,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <div className="w-3 h-3 bg-rich-red rounded-full"></div>
                <div className="w-3 h-3 bg-rich-red rounded-full absolute top-0 animate-ping"></div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg text-white/80 mb-10 leading-relaxed"
              variants={itemVariants}
            >
              {content.description}
            </motion.p>
            
            <div className="space-y-6 mb-10">
              {content.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                  variants={itemVariants}
                >
                  <div className="flex items-start">
                    <div className="mr-4">
                      <span className="text-3xl font-bold text-gold-accent">{achievement.value}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                      <p className="text-white/70">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants}>
              <button className="px-8 py-3 bg-gold-accent text-deep-blue rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 inline-flex items-center font-bold">
                Explore Global Initiatives
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BharatGlobal; 