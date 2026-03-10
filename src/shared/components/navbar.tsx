'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`w-full text-white absolute top-0 left-0 transition-all duration-300 ${
                scrolled
                    ? 'bg-black/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)] border-b border-amber-900/30'
                    : 'bg-transparent'
            }`}
            style={{ zIndex: 2 }}
        >
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <Image src='/logo.png' alt='Diegoz Gym' width={300} height={100} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link
                            href="/#equipamiento"
                            className="text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-amber-400 transition-colors duration-300 relative group"
                        >
                            Equipamiento
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Link
                            href="/#espacios"
                            className="text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-amber-400 transition-colors duration-300 relative group"
                        >
                            Espacios
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                        </Link>
                        <Link
                            href="/#contacto"
                            className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-black tracking-widest uppercase rounded transition-colors duration-300"
                        >
                            Únete
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded text-zinc-300 hover:text-amber-400 transition"
                            aria-expanded={isOpen}
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-amber-900/30 px-4 py-4 space-y-2">
                    <Link
                        href="/#equipamiento"
                        className="block px-3 py-3 text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-amber-400 border-b border-zinc-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Equipamiento
                    </Link>
                    <Link
                        href="/#espacios"
                        className="block px-3 py-3 text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-amber-400 border-b border-zinc-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Espacios
                    </Link>
                    <Link
                        href="/#contacto"
                        className="block mt-2 px-3 py-3 bg-amber-500 text-black text-sm font-black tracking-widest uppercase text-center rounded transition hover:bg-amber-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Únete
                    </Link>
                </div>
            )}
        </nav>
    );
}
