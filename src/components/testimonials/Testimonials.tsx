"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// This would typically come from a CMS or API
const defaultTestimonialsContent = {
  title: "What People Say",
  subtitle: "Testimonials from our partners and clients",
  testimonials: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Director, Digital India Initiative",
      avatar: "/images/person.png", // Placeholder - would need actual images
      quote: "The Eco-Digital Bharatiya team has revolutionized how we approach digital transformation in rural areas. Their solutions are not only technologically advanced but also culturally sensitive and accessible to all.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "CEO, GreenTech Solutions",
      avatar: "/images/person.png", // Placeholder
      quote: "Working with this team has been a game-changer for our sustainability initiatives. Their deep understanding of both technology and traditional Indian values has helped us create truly impactful solutions.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Community Leader, Swaraj Foundation",
      avatar: "/images/person.png", // Placeholder
      quote: "The digital literacy programs developed by Eco-Digital Bharatiya have transformed our village. Elderly members of our community are now confidently using technology while maintaining our cultural practices.",
      rating: 4
    },
    {
      id: 4,
      name: "Dr. Meena Gupta",
      position: "Professor, IIT Delhi",
      avatar: "/images/person.png", // Placeholder
      quote: "As an academic partner, I've been impressed by the team's commitment to research and innovation. They're creating a new paradigm for how technology can honor and preserve traditional knowledge systems.",
      rating: 5
    }
  ]
};

const Testimonials = () => {
  // In a real application, this would be fetched from an API
  const content = defaultTestimonialsContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % content.testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoplay, content.testimonials.length]);
  
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

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    })
  };

  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + content.testimonials.length) % content.testimonials.length);
    setAutoplay(false);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % content.testimonials.length);
    setAutoplay(false);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setAutoplay(false);
  };

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${index < rating ? 'text-gold-accent' : 'text-light-grey'}`}
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-off-white to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-deep-blue text-white rounded-full text-sm font-medium mb-4"
            variants={itemVariants}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-deep-blue mb-4"
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

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-deep-blue rounded-full opacity-5"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rich-red rounded-full opacity-5"></div>
          <div className="absolute top-1/3 -right-4 w-16 h-16 bg-gold-accent rounded-full opacity-10"></div>
          
          {/* Quote Icon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 text-deep-blue opacity-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          {/* Testimonial Cards */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 relative">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col items-center"
              >
                {/* Avatar */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <Image
                    src={content.testimonials[activeIndex].avatar || "https://via.placeholder.com/100"}
                    alt={content.testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {renderStars(content.testimonials[activeIndex].rating)}
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-dark-grey text-center italic mb-8 leading-relaxed">
                  &ldquo;{content.testimonials[activeIndex].quote}&rdquo;
                </blockquote>
                
                {/* Author */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-deep-blue">
                    {content.testimonials[activeIndex].name}
                  </h4>
                  <p className="text-dark-grey">
                    {content.testimonials[activeIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute top-1/2 -left-5 md:-left-8 transform -translate-y-1/2 bg-white hover:bg-light-grey text-deep-blue p-3 rounded-full shadow-lg transition-all z-10"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute top-1/2 -right-5 md:-right-8 transform -translate-y-1/2 bg-white hover:bg-light-grey text-deep-blue p-3 rounded-full shadow-lg transition-all z-10"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {content.testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-deep-blue scale-125' 
                    : 'bg-light-grey hover:bg-deep-blue/50'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-deep-blue mb-4">
            Ready to Experience Our Solutions?
          </h3>
          <p className="text-dark-grey max-w-2xl mx-auto mb-8">
            Join the growing community of organizations and individuals benefiting from our innovative approach to digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-deep-blue text-white rounded-lg shadow-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
              Contact Us Today
            </button>
            <button className="px-8 py-3 border-2 border-deep-blue text-deep-blue rounded-lg hover:bg-deep-blue hover:text-white transition-all transform hover:-translate-y-1">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 