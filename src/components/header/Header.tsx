'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import AnnouncementBar from './AnnouncementBar';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mega-menu-container') && !target.closest('.nav-item')) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  // Handle mouse enter for menu items
  const handleMouseEnter = (menu: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveMenu(menu);
  };

  // Handle mouse leave for menu items with delay
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay before closing
    
    setCloseTimeout(timeout);
  };

  return (
    <header className="w-full z-50">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header */}
      <div className={`bg-white py-2 transition-all duration-300 ${scrolled ? 'py-1 shadow-md' : ''} sticky top-0`}>
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between">
            {/* Left Side Navigation */}
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center mr-4 lg:mr-10">
                <div className="relative h-12 w-auto">
                  <Image 
                    src="/logo.png" 
                    alt="e-Notarial Logo" 
                    width={80} 
                    height={80} 
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Left Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {/* Why e-Notary */}
                <div 
                  className="relative nav-item"
                  onMouseEnter={() => handleMouseEnter('explore')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="flex items-center text-dark-grey hover:text-[#1a3a6c] font-montserrat text-sm font-semibold transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center">
                      <span>Why e-Notarial</span>
                      <span className="flex items-center ml-1 mt-1 pb-0">
                        <FaChevronDown className={`text-[8px] text-dark-grey group-hover:text-rich-red transition-transform ${activeMenu === 'explore' ? 'rotate-180' : ''}`} />
                      </span>
                    </div>
                  </div>
                  {/* Add invisible connector to bridge gap */}
                  {activeMenu === 'explore' && (
                    <div className="absolute w-full h-4 bottom-0 translate-y-full" />
                  )}
                </div>

                {/* UDIN Verify */}
                <Link 
                  href="/udin-verify"
                  className="text-dark-grey hover:text-[#1a3a6c] font-montserrat text-sm font-semibold transition-colors"
                >
                  UDIN Verify
                </Link>

                {/* Buy eStamp */}
                <Link 
                  href="/buy-estamp"
                  className="text-dark-grey hover:text-[#1a3a6c] font-montserrat text-sm font-semibold transition-colors"
                >
                  Buy e-Stamp
                </Link>

                {/* Help */}
                <div 
                  className="relative nav-item"
                  onMouseEnter={() => handleMouseEnter('help')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="flex items-center text-dark-grey hover:text-[#1a3a6c] font-montserrat text-sm font-semibold transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center">
                      <span>Help</span>
                      <span className="flex items-center ml-1 mt-1 pb-0">
                        <FaChevronDown className={`text-[8px] text-dark-grey group-hover:text-rich-red transition-transform ${activeMenu === 'help' ? 'rotate-180' : ''}`} />
                      </span>
                    </div>
                  </div>
                  {/* Add invisible connector to bridge gap */}
                  {activeMenu === 'help' && (
                    <div className="absolute w-full h-4 bottom-0 translate-y-full" />
                  )}
                </div>
              </nav>
            </div>

            {/* Right Side Navigation */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Login button */}
              <div className="hidden lg:flex items-center relative nav-item">
                <div 
                  className="flex items-center cursor-pointer"
                >
                  <Link 
                    href="/login"
                    className="text-dark-grey font-bold text-sm mr-4 hover:text-[#1a3a6c] transition-opacity"
                  >
                    Login
                  </Link>
                </div>
              </div>

              {/* Register */}
              <div 
                className="hidden lg:flex items-center relative nav-item"
                onMouseEnter={() => handleMouseEnter('register')}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="flex items-center justify-center bg-deep-blue text-white hover:bg-[#1a3a6c] font-montserrat text-sm font-semibold transition-colors group py-2 px-4 rounded cursor-pointer"
                >
                  <span>Register</span>
                </div>
                {/* Add invisible connector to bridge gap */}
                {activeMenu === 'register' && (
                  <div className="absolute w-full h-4 bottom-0 translate-y-full" />
                )}
              </div>

              {/* Mobile Login Button */}
              <Link 
                href="/login"
                className="lg:hidden text-[#1a3a6c] font-bold text-sm"
              >
                Login
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-dark-grey hover:text-[#1a3a6c] p-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <FaBars size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Container */}
      <div 
        className="mega-menu-container"
        onMouseEnter={() => handleMouseEnter(activeMenu || '')}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header; 