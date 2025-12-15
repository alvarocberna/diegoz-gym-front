'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-800 text-white shadow-lg">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
                        >
                            <Image src='/logo.png' alt='Diegoz Gym' width={300} height={100}  />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="w-[50%] hidden justify-evenly md:flex space-x-8">
                        <Link
                            href="/"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            Horarios
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            Ubicación
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-blue-400 transition duration-300"
                        >
                            Novedades
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-700 transition"
                            aria-expanded="false"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 px-2 pt-2 pb-3 space-y-1">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md hover:bg-slate-700 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Horarios
                    </Link>
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md hover:bg-slate-700 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Ubicación
                    </Link>
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md hover:bg-slate-700 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Novedades
                    </Link>
                </div>
            )}
        </nav>
    );
}