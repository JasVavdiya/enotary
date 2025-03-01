'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaHandshake, FaChevronRight } from 'react-icons/fa';

const AnnouncementBar = () => {
  // Remove the state for mobile announcement bar
  
  return (
    <div className="bg-deep-blue text-white py-2 relative" style={{ backgroundColor: '#003366' }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Left side with NEW badge and announcement text */}
          <div className="flex items-center flex-grow overflow-hidden">
            <span className="bg-white text-deep-blue text-xs font-montserrat font-semibold px-1 py-0.5 rounded mr-2 flex-shrink-0" style={{ color: '#003366' }}>
              NEW
            </span>
            <span className="text-sm font-lato hidden sm:inline">
              Introducing eNotary Intelligent Agreement Management
            </span>
            {/* Mobile text with ellipsis for overflow */}
            <span className="text-sm font-lato sm:hidden whitespace-nowrap overflow-hidden text-ellipsis max-w-[400px]">
              Introducing eNotary Intelligent Agreement Management
            </span>
            <FaChevronRight className="ml-1 text-xs flex-shrink-0" />
          </div>

          {/* Right side with links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-lato">
            <Link href="/support" className="hover:underline">
              Support
            </Link>
            <Link href="/documents" className="hover:underline">
              Seminars Registration
            </Link>
            <Link href="/login" className="hover:underline">
              Partner With Us
            </Link>
          </div>

          {/* Removed mobile view button and expanded menu */}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 