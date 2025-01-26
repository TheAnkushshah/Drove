"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNav() {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="w-40 flex-col gap-4 hidden lg:flex mt-3.5">
        <Link href="/dashboard/files">
          <Button
            variant={"link"}
            className={clsx("flex gap-2", {
              "text-blue-500": pathname.includes("/dashboard/files"),
            })}
          >
            <FileIcon /> All Files
          </Button>
        </Link>

        <Link href="/dashboard/favorites">
          <Button
            variant={"link"}
            className={clsx("flex gap-2", {
              "text-blue-500": pathname.includes("/dashboard/favorites"),
            })}
          >
            <StarIcon /> Favorites
          </Button>
        </Link>

        <Link href="/dashboard/trash">
          <Button
            variant={"link"}
            className={clsx("flex gap-2", {
              "text-blue-500": pathname.includes("/dashboard/trash"),
            })}
          >
            <TrashIcon /> Trash
          </Button>
        </Link>
      </div>

      {/* Bottom navigation for smaller screens */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-10">
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
    </>
  );
}
