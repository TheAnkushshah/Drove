"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Doc, Id } from "../../../../convex/_generated/dataModel";
import { formatRelative } from "date-fns";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileCardActions } from "./file-actions";

function UserCell({ userId }: { userId: Id<"users"> }) {
  const userProfile = useQuery(api.users.getUserProfile, {
    userId: userId,
  });

  return (
    <div className="flex gap-2 items-center w-full sm:w-40 text-xs text-gray-700 truncate">
      <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
        <AvatarImage src={userProfile?.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="truncate">{userProfile?.name || "Unknown User"}</span>
    </div>
  );
}

export const columns: ColumnDef<Doc<"files"> & { url: string | null }>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="truncate max-w-xs sm:max-w-sm">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <span className="text-gray-600 text-sm">{row.original.type}</span>
    ),
  },
  {
    header: "User",
    accessorKey: "userId",
    cell: ({ row }) => <UserCell userId={row.original.userId} />,
  },
  {
    header: "Uploaded On",
    accessorKey: "_creationTime",
    cell: ({ row }) => (
      <div className="text-sm text-gray-500">
        {formatRelative(new Date(row.original._creationTime), new Date())}
      </div>
    ),
  },
  {
    header: "Actions",
    accessorKey: "_id", // Assuming _id is a unique identifier for each file
    cell: ({ row }) => (
      <div className="flex justify-center">
        <FileCardActions
          file={row.original}
          isFavorited={false} // Replace this with the actual isFavorited value
        />
      </div>
    ),
  },
];
