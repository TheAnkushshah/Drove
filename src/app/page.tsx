"use client"

import Image from "next/image";
import Link from "next/link";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function LandingPage() {
  const pathname = usePathname();
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-8">
          <div className="text-center">
            <Image
              src="/logo.png"
              width="200"
              height="200"
              alt="Drove"
              className="inline-block mb-8"
            />

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The easiest way to upload and share files with anyone
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Make and account and start managing your files in less than a
              minute.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard/files"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 w-full bg-white shadow-md md:hidden">
        <div className="flex justify-around pt-2 pb-4">
        <Link href="/dashboard/files" className="flex flex-col items-center">
            <Button
              variant={"link"}
              className={clsx("flex gap-2", {
                "text-blue-500": pathname.includes("/dashboard/files"),
              })}
            >
              <FileIcon />
            </Button>
            <span className="text-xs">All Files</span>
          </Link>

          <Link href="/dashboard/favorites" className="flex flex-col items-center">
            <Button
              variant={"link"}
              className={clsx("flex gap-2", {
                "text-blue-500": pathname.includes("/dashboard/favorites"),
              })}
            >
              <StarIcon />
            </Button>
            <span className="text-xs">Favorites</span>
          </Link>

          <Link href="/dashboard/trash" className="flex flex-col items-center">
            <Button
              variant={"link"}
              className={clsx("flex gap-2", {
                "text-blue-500": pathname.includes("/dashboard/trash"),
              })}
            >
              <TrashIcon />
            </Button>
            <span className="text-xs">Trash</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
