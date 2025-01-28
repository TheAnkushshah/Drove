"use client"; // Mark this as a client component

import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use next/navigation in App Router

export function Header() {
  const pathname = usePathname(); // Get the current path

  // Check if the user is on the homepage
  const isHomePage = pathname === "/" || pathname === "/landing";

  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 sm:gap-10 sm:px-6 lg:pr-8 lg:pl-3">
        {/* Logo and App Name */}
        <Link
          href="/"
          className="flex gap-2.5 items-center text-lg sm:text-xl text-black whitespace-nowrap"
        >
          <Image src="/logo.png" width="40" height="40" alt="Drove" />
          <span>Drove</span>
        </Link>

        {/* Right-side actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Show "Your Files" button only when signed in and on larger screens */}
          <SignedIn>
            <Button
              variant={"outline"}
              className="hidden sm:block"
            >
              <Link href="/dashboard/files">Your Files</Link>
            </Button>
          </SignedIn>

          {/* Conditionally show OrganizationSwitcher and UserButton on non-home pages */}
          {!isHomePage && (
            <div className="flex items-center gap-2 mt-0 sm:mt-1.5">
              {/* Hide OrganizationSwitcher for screens smaller than 412px */}
              <div className="hidden sm:block md:block">
                <OrganizationSwitcher />
              </div>
              <UserButton />
            </div>
          )}

          {/* Show Sign In Button when signed out */}
          <SignedOut>
            <SignInButton>
              <Button className="text-sm sm:text-base">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
