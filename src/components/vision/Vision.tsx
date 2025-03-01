"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// This would typically come from a CMS or API
const defaultVisionContent = {
  title: "Our Vision",
  subtitle: "Building a Digital Bharat with Traditional Values",
  description: "We envision a future where cutting-edge technology harmoniously integrates with India's rich cultural heritage, creating sustainable digital solutions that empower every citizen while preserving our traditional values and wisdom.",
  image: "/images/digital-cert.png",
  pillars: [
    {
      title: "Digital Inclusion",
      description: "Ensuring technology reaches every corner of Bharat, leaving no one behind."
    },
    {
      title: "Cultural Preservation",
      description: "Honoring and digitizing our rich heritage for future generations."
    },
    {
      title: "Sustainable Innovation",
      description: "Creating eco-friendly digital solutions that respect our planet."
    }
  ]
};

const Vision = () => {
  // In a real application, this would be fetched from an API
  const [content, setContent] = useState(defaultVisionContent);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-off-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-deep-blue mb-4"
            variants={itemVariants}
          >
            {content.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-dark-grey max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with floating elements */}
          <motion.div 
            className="relative h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div 
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              variants={imageVariants}
            >
              <Image
                src={content.image}
                alt="Our Vision"
                fill
                className="object-cover"
  
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-deep-blue/40 to-transparent"></div>
            </motion.div>
            
            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -top-8 -left-8 w-24 h-24 bg-gold-accent rounded-full opacity-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 0.2,
                transition: { delay: 0.3, duration: 0.8 }
              }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-rich-red rounded-full opacity-10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 0.1,
                transition: { delay: 0.5, duration: 0.8 }
              }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute top-1/2 -right-5 w-16 h-16 bg-deep-blue rounded-full opacity-15"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 0.15,
                transition: { delay: 0.7, duration: 0.8 }
              }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.p 
              className="text-lg text-dark-grey mb-10 leading-relaxed"
              variants={itemVariants}
            >
              {content.description}
            </motion.p>
            
            <div className="space-y-8">
              {content.pillars.map((pillar, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-deep-blue"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-deep-blue mb-2">{pillar.title}</h3>
                  <p className="text-dark-grey">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <button className="px-8 py-3 bg-deep-blue text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 inline-flex items-center">
                Explore Our Mission
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

export default Vision; 