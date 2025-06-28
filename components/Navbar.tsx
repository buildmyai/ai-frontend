"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    setUserEmail(email);
  }, [pathname]); // re-check on route change

  const getInitial = (email: string) => email?.charAt(0).toUpperCase() || "";

  const handleLogout = () => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_id");
    window.location.href = "/login";
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
       <div className="text-2xl font-bold text-emerald-700">
  BuildMyAI
</div>



        {/* Links */}
        <ul className="flex gap-6 text-gray-700 font-medium items-center relative">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/my-bookings">My Bookings</Link></li>
          <li><Link href="/">Consultation</Link></li>
          <li><Link href="/">About</Link></li>

          {!userEmail ? (
            <li><Link href="/login">Login</Link></li>
          ) : (
            <li className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold cursor-pointer select-none"
              >
                {getInitial(userEmail)}
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md z-10">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
// This Navbar component is designed to be used in a Next.js application.