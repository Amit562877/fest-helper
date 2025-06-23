'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Music2, Utensils, Flower, LogIn, Menu, User } from 'lucide-react';
import {
  HomeIcon,
  CameraIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setLoginDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo + Title */}
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Fest Helper Logo" className="h-10 w-10" />
              <span className="text-3xl font-extrabold text-purple-700 tracking-tight">Fest Helper</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
              <Link href="/" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
                <HomeIcon className="h-5 w-5" /> Home
              </Link>
              <Link href="/vendors/photo-studios" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
                <CameraIcon className="h-5 w-5" /> Photo Studios
              </Link>
              <Link href="/vendors/djs" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
                <Music2 className="h-5 w-5" /> DJs
              </Link>
              <Link href="/vendors/caterers" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
                <Utensils className="h-5 w-5" /> Caterers
              </Link>
              <Link href="/vendors/decorators" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition">
                <Flower className="h-5 w-5" /> Decorators
              </Link>

              {/* Login Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setLoginDropdown(!loginDropdown)}
                  className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition focus:outline-none"
                >
                  <LogIn className="h-5 w-5" /> Login <ChevronDown className="h-4 w-4" />
                </button>
                {loginDropdown && (
                  <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <Link
                      href="/auth/login"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setLoginDropdown(false)}
                    >
                      <LogIn className="h-4 w-4" /> Vendor Login
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setLoginDropdown(false)}
                    >
                      <UserPlusIcon className="h-4 w-4" /> Vendor Signup
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/80 backdrop-blur-md shadow-lg border border-gray-200 rounded-2xl flex justify-around items-center py-2 px-4 z-50 md:hidden">
        <NavItem href="/" icon={<HomeIcon className="w-5 h-5 mb-1" />} label="Home" />
        <NavItem href="/vendors/photo-studios" icon={<CameraIcon className="w-5 h-5 mb-1" />} label="Photos" />
        <NavItem href="/vendors/djs" icon={<Music2 className="w-5 h-5 mb-1" />} label="DJs" />
        <NavItem href="/vendors/caterers" icon={<Utensils className="w-5 h-5 mb-1" />} label="Food" />
        <NavItem href="/vendors/decorators" icon={<Flower className="w-5 h-5 mb-1" />} label="Decor" />
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex flex-col items-center text-xs text-gray-700 hover:text-purple-600">
          <Menu className="w-5 h-5 mb-1" />
          More
        </button>

        {/* Mobile Floating Menu */}
        {mobileMenuOpen && (
          <div className="absolute bottom-16 right-2 bg-white shadow-md border rounded-lg z-50">
            <Link
              href="/auth/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="inline h-4 w-4 mr-2" />
              Vendor Login
            </Link>
            <Link
              href="/auth/signup"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <UserPlusIcon className="inline h-4 w-4 mr-2" />
              Vendor Signup
            </Link>
          </div>
        )}
      </nav>

    </>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center text-xs text-gray-700 hover:text-purple-600">
      {icon}
      {label}
    </Link>
  );
}
