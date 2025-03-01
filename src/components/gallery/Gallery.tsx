"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// This would typically come from a CMS or API
const defaultGalleryContent = {
  title: "Our Gallery",
  subtitle: "Capturing Moments of Innovation and Impact",
  categories: ["All", "Events", "Projects", "Team", "Awards"],
  images: [
    {
      id: 1,
      src: "/images/img1.jpg",
      alt: "Eco-Digital Initiative",
      category: "Projects",
      title: "Eco-Digital Initiative",
      description: "Launching our flagship sustainable technology program"
    },
    {
      id: 2,
      src: "/images/img2.jpg",
      alt: "Digital Certification",
      category: "Projects",
      title: "Digital Certification Platform",
      description: "Blockchain-based certification system for educational credentials"
    },
    {
      id: 3,
      src: "/images/img3.jpg",
      alt: "Sustainable Tech",
      category: "Projects",
      title: "Sustainable Technology Hub",
      description: "Our green technology innovation center in Bangalore"
    },
    {
      id: 4,
      src: "/images/world-map.jpg",
      alt: "AI Research",
      category: "Projects",
      title: "AI Research Initiative",
      description: "Cutting-edge artificial intelligence research for healthcare"
    },
    {
      id: 5,
      src: "/images/digital-cert.png",
      alt: "BioTech Lab",
      category: "Projects",
      title: "BioTech Laboratory",
      description: "Advanced biotechnology research facility"
    }
  ]
};

const Gallery = () => {
  // In a real application, this would be fetched from an API
  const content = defaultGalleryContent;
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(content.images);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Filter images based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(content.images);
    } else {
      setFilteredImages(content.images.filter(image => image.category === activeCategory));
    }
    setCurrentSlide(0);
  }, [activeCategory, content.images]);
  
  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % filteredImages.length);
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, filteredImages.length]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + filteredImages.length) % filteredImages.length);
    if (isAutoPlaying) setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % filteredImages.length);
    if (isAutoPlaying) setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    if (isAutoPlaying) setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-deep-blue mb-4"
            variants={itemVariants}
          >
            {content.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-dark-grey max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            {content.subtitle}
          </motion.p>
          
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={containerVariants}
          >
            {content.categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-deep-blue text-white shadow-md' 
                    : 'bg-light-grey/30 text-dark-grey hover:bg-light-grey'
                }`}
                onClick={() => setActiveCategory(category)}
                variants={itemVariants}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Slider */}
        <div className="relative">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl">
            {filteredImages.length > 0 ? (
              <>
                {/* Main Image */}
                <div className="relative h-full w-full">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={filteredImages[currentSlide].src}
                      alt={filteredImages[currentSlide].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/70 to-transparent"></div>
                    
                    {/* Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {filteredImages[currentSlide].title}
                      </h3>
                      <p className="text-white/80 max-w-2xl">
                        {filteredImages[currentSlide].description}
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                      }`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Auto-play Toggle */}
                <button 
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                    isAutoPlaying ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'
                  }`}
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </>
            ) : (
              <div className="flex items-center justify-center h-full bg-light-grey/20">
                <p className="text-dark-grey">No images found in this category</p>
              </div>
            )}
          </div>
          
          {/* Thumbnail Preview (visible on larger screens) */}
          <div className="hidden md:flex justify-center mt-6 space-x-4 overflow-x-auto pb-2">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className={`relative w-24 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${
                  currentSlide === index ? 'ring-2 ring-deep-blue scale-110' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => handleDotClick(index)}
              >
                <Image
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-deep-blue text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 inline-flex items-center">
            View Full Gallery
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 