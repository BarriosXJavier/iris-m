"use client";

import { Button } from "../ui/button";
import Link from "next/link";
// import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Eye, Code, Zap, BarChart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center">
        <Eye className="h-6 w-6" />
        <span className="sr-only">iris-m</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/features"
          className="text-sm font-medium hover:text-gray-900"
        >
          features
        </Link>
        <Link
          href="/how-it-works"
          className="text-sm font-medium hover:text-gray-900"
        >
          how it works
        </Link>
        <Link
          href="/pricing"
          className="text-sm font-medium hover:text-gray-900"
        >
          pricing
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
