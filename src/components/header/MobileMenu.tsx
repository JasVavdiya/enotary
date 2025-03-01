'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaHandshake, FaChevronDown, FaQuestionCircle, FaFileAlt, FaTimes, FaInfoCircle, FaUserPlus, FaUserTie, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import the menu items from MegaMenu
import { menuItems, MenuItemProps } from './menuData';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Type assertion for explore menu
  const exploreMenu = menuItems.explore as MenuItemProps;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-grey z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full bg-white z-50 overflow-y-auto shadow-xl"
          >
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="relative h-10 w-32">
                <Image 
                  src="/logo.png" 
                  alt="e-Notarial Logo" 
                  width={80} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-[#1a3a6c] focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            <div className="p-5">

              {/* Navigation accordion */}
              <nav>
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Menu</h3>
                <ul className="rounded-lg overflow-hidden border border-gray-200">
                    {/* Register */}
                    <li className="border-b border-gray-200">
                    <button
                      onClick={() => toggleSection('register')}
                      className="flex items-center justify-between w-full py-3 px-4 text-left font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <FaUserPlus className="mr-3 text-[#1a3a6c]" />
                        <span>Register</span>
                      </div>
                      <FaChevronDown className={`text-gray-400 transition-transform ${expandedSections['register'] ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedSections['register'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          <div className="py-3 px-5 space-y-4">
                            <div className="border border-gray-200 rounded-lg p-4 hover:bg-white">
                              <Link 
                                href="/become-provider" 
                                className="flex items-center mb-2"
                                onClick={onClose}
                              >
                                <FaUserTie className="text-[#1a3a6c] mr-2" size={18} />
                                <span className="text-[#1a3a6c] font-medium">Become e-notary provider</span>
                              </Link>
                              <p className="text-gray-600 text-sm pl-7">
                                Join our network of certified e-notary providers and expand your professional services online.
                              </p>
                            </div>
                            
                            <div className="border border-gray-200 rounded-lg p-4 hover:bg-white">
                              <Link 
                                href="/need-enotary" 
                                className="flex items-center mb-2"
                                onClick={onClose}
                              >
                                <FaSearch className="text-[#1a3a6c] mr-2" size={18} />
                                <span className="text-[#1a3a6c] font-medium">Need a notary?</span>
                              </Link>
                              <p className="text-gray-600 text-sm pl-7">
                                Find and connect with certified e-notaries for your document notarization needs quickly and securely.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  
                  {/* Why e-Notary */}
                  <li className="border-b border-gray-200">
                    <button
                      onClick={() => toggleSection('explore')}
                      className="flex items-center justify-between w-full py-3 px-4 text-left font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <FaInfoCircle className="mr-3 text-[#1a3a6c]" />
                        <span>Why e-Notary</span>
                      </div>
                      <FaChevronDown className={`text-gray-400 transition-transform ${expandedSections['explore'] ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedSections['explore'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {exploreMenu.items.map((section, index) => (
                            <div key={index} className="py-3 px-5">
                              <h3 className="text-[#1a3a6c] font-medium text-sm mb-2">
                                {section.section}
                              </h3>
                              <ul className="pl-4 space-y-2">
                                {section.links.map((link, linkIndex) => (
                                  <li key={linkIndex}>
                                    <Link 
                                      href={link.href}
                                      className="text-gray-600 text-sm hover:text-[#1a3a6c]"
                                      onClick={onClose}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  
                  {/* UDIN Verify */}
                  <li className="border-b border-gray-200">
                    <Link 
                      href="/udin-verify"
                      className="flex items-center w-full py-3 px-4 text-left font-medium text-gray-700 hover:bg-gray-50"
                      onClick={onClose}
                    >
                      <FaFileAlt className="mr-3 text-[#1a3a6c]" />
                      <span>UDIN Verify</span>
                    </Link>
                  </li>
                  
                  {/* Buy eStamp */}
                  <li className="border-b border-gray-200">
                    <Link 
                      href="/buy-estamp"
                      className="flex items-center w-full py-3 px-4 text-left font-medium text-gray-700 hover:bg-gray-50"
                      onClick={onClose}
                    >
                      <FaFileAlt className="mr-3 text-[#1a3a6c]" />
                      <span>Buy eStamp</span>
                    </Link>
                  </li>
                
                  
                  {/* Help */}
                  <li>
                    <button
                      onClick={() => toggleSection('help')}
                      className="flex items-center justify-between w-full py-3 px-4 text-left font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <FaQuestionCircle className="mr-3 text-[#1a3a6c]" />
                        <span>Help</span>
                      </div>
                      <FaChevronDown className={`text-gray-400 transition-transform ${expandedSections['help'] ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedSections['help'] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          <ul className="py-3 px-5 pl-9 space-y-2">
                            <li>
                              <Link href="/enotary-request" className="text-gray-600 text-sm hover:text-[#1a3a6c]" onClick={onClose}>
                                eNotary Request
                              </Link>
                            </li>
                            <li>
                              <Link href="/grievance" className="text-gray-600 text-sm hover:text-[#1a3a6c]" onClick={onClose}>
                                Grievance
                              </Link>
                            </li>
                            <li>
                              <Link href="/trust-center" className="text-gray-600 text-sm hover:text-[#1a3a6c]" onClick={onClose}>
                                Trust Center
                              </Link>
                            </li>
                            <li>
                              <Link href="/knowledge-center" className="text-gray-600 text-sm hover:text-[#1a3a6c]" onClick={onClose}>
                                Knowledge Center
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </ul>
              </nav>
             
              {/* Announcement bar links for mobile */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Quick Links</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  
                  <div className="flex flex-col space-y-3">
                    <Link 
                      href="/seminars" 
                      className="flex items-center text-gray-700"
                      onClick={onClose}
                    >
                      <FaCalendarAlt className="mr-2 text-[#1a3a6c]" />
                      <span>Seminars Registration</span>
                    </Link>
                    <Link 
                      href="/partner" 
                      className="flex items-center text-gray-700"
                      onClick={onClose}
                    >
                      <FaHandshake className="mr-2 text-[#1a3a6c]" />
                      <span>Partner With Us</span>
                    </Link>
                  </div>
                </div>
              </div>
              
            
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 