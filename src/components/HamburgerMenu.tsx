// components/HamburgerMenu.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Floating Hamburger Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="fixed bottom-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-md rounded-full p-3 shadow-md transition duration-300 z-20"
            >
                {menuOpen ? (
                    <X className="text-white w-6 h-6" />
                ) : (
                    <Menu className="text-white w-6 h-6" />
                )}
            </button>

            {/* Animated Dropdown Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-14 right-4 bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-4 w-40 z-10"
                    >
                        <ul className="space-y-2 text-left">
                            <li>
                                <Link href="/">
                                    <span className="block text-black hover:text-indigo-600 transition duration-200">
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <span className="block text-black hover:text-indigo-600 transition duration-200">
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/team">
                                    <span className="block text-black hover:text-indigo-600 transition duration-200">
                                        Our Team
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
