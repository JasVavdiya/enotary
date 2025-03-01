"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// This would typically come from a CMS or API
const defaultAboutContent = {
  title: "About Eco-Digital Bharatiya",
  description: "We are a forward-thinking team dedicated to bridging traditional Indian values with cutting-edge digital solutions. Our mission is to create sustainable, accessible technology that empowers communities across Bharat while preserving our rich cultural heritage.",
  longDescription: "Founded in 2020, our team of passionate technologists, cultural experts, and sustainability advocates work together to develop innovative solutions that address the unique challenges and opportunities of modern India. We believe in the power of technology to transform lives while honoring the wisdom of our traditions.",
  image: "/images/eco-digital.jpg",
  stats: [
    { value: "5+", label: "Years of Excellence" },
    { value: "50+", label: "Team Members" },
    { value: "100+", label: "Projects Completed" },
    { value: "25+", label: "Awards Won" }
  ]
};

const AboutUs = () => {
  // In a real application, this would be fetched from an API
  const [content, setContent] = useState(defaultAboutContent);
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Image Column */}
          <motion.div 
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            variants={itemVariants}
          >
            <Image
              src={"/images/eco-digital.jpg"}
              alt="About Eco-Digital Bharatiya"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 to-transparent"></div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/30 backdrop-blur-md rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-[#003366]">{stat.value}</p>
                    <p className="text-sm text-[#003366]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div variants={containerVariants}>
            <motion.span 
              className="inline-block px-4 py-1 bg-deep-blue text-white rounded-full text-sm font-medium mb-4"
              variants={itemVariants}
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-deep-blue mb-6 leading-tight"
              variants={itemVariants}
            >
              {content.title}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-dark-grey mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {content.description}
            </motion.p>
            
            <motion.p 
              className="text-base text-dark-grey mb-8"
              variants={itemVariants}
            >
              {content.longDescription}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <button className="px-6 py-3 bg-deep-blue text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 