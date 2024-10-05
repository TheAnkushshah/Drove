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
      <div className="items-center container mx-auto justify-between flex gap-44">
        {/* Logo and App Name */}
        <Link href="/" className="flex gap-2 items-center text-xl text-black">
          <Image src="/logo.png" width="50" height="50" alt="Drove" />
          Drove
        </Link>

        {/* Show "Your Files" button only when signed in */}
        <SignedIn>
          <Button variant={"outline"}>
            <Link href="/dashboard/files">Your Files</Link>
          </Button>
        </SignedIn>

        <div className="flex gap-2">
          {/* Conditionally show OrganizationSwitcher and UserButton on non-home pages */}
          {!isHomePage && (
            <>
              <OrganizationSwitcher />
              <UserButton />
            </>
          )}

          {/* Show Sign In Button when signed out */}
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
