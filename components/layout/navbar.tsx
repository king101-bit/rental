"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Home, Menu, Search, Upload, UserPlus, Users, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: "/listings", label: "Listings", icon: Search },
    { link: "/agents", label: "Find Agent", icon: Users },
    { link: "/properties", label: "List Property", icon: Upload },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href={`/`} className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            <span className="font-semibold text-sm">Rental</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-sm font-semibold text-foreground hover:text-foreground/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href={`/register`}>
              <Button size="sm">Register</Button>
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    className="flex items-center gap-3 px-2 py-2 text-sm font-semibold hover:bg-muted rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </Link>
                );
              })}

              {/* Register button */}
              <Link
                href="/register"
                className="flex items-center gap-3 px-2 py-2 text-sm font-semibold hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="h-4 w-4" />
                Register
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
