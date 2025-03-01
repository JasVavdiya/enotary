'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, MenuItemProps, RegisterMenuItemProps } from './menuData';
import { FaUserTie, FaSearch } from 'react-icons/fa';

type MegaMenuProps = {
  activeMenu: string | null;
};

const MegaMenu = ({ activeMenu }: MegaMenuProps) => {
  if (!activeMenu || !menuItems[activeMenu]) return null;

  const menuItem = menuItems[activeMenu];
  
  // Check if it's the register menu
  if (activeMenu === 'register' && 'containers' in menuItem) {
    const registerMenu = menuItem as RegisterMenuItemProps;
    
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-2 gap-8">
              {registerMenu.containers.map((container, index) => {
                // Map icon string to actual icon component
                const IconComponent = container.icon === 'FaUserTie' ? FaUserTie : FaSearch;
                
                return (
                  <Link 
                    href={container.href} 
                    key={index}
                    className="flex flex-col p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1a3a6c] p-3 rounded-full text-white mr-4">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-[#1a3a6c] font-semibold text-xl">
                        {container.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base">
                      {container.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // For other menu types
  const standardMenu = menuItem as MenuItemProps;
  const { items } = standardMenu;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
      >
        <div className="container mx-auto py-8">
          {/* Menu sections in horizontal layout */}
          <div className="grid grid-cols-4 gap-12">
            {items.map((section, index) => (
              <div key={index} className="pb-4">
                <h3 className="text-[#1a3a6c] font-semibold text-lg mb-5 border-b border-gray-200 pb-3">
                  {section.section}
                </h3>
                <ul className="space-y-5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-3">
                      <Link 
                        href={link.href}
                        className="text-[#000] hover:text-[#1a3a6c] transition-colors font-medium text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MegaMenu; 