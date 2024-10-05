"use client";
import { useOrganization, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { UploadButton } from "./upload-button";
import { FileCard } from "./file-card";
import Image from "next/image";
import { GridIcon, Loader2, RowsIcon } from "lucide-react";
import { SearchBar } from "./search-bar";
import { useState } from "react";
import { DataTable } from "./file-table";
import { columns } from "./columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Doc } from "../../../../convex/_generated/dataModel";
import { Label } from "@/components/ui/label";

// Modify the Placeholder component to accept a sectionType for different images
function Placeholder({
  message,
  showButton,
  sectionType,
}: {
  message: string;
  showButton: boolean;
  sectionType: "favorites" | "deleted" | "general";
}) {
  // Choose image based on sectionType
  let imageSrc = "/empty.svg"; // Default image
  if (sectionType === "favorites") {
    imageSrc = "/favorites-empty.svg"; // Image for favorites
  } else if (sectionType === "deleted") {
    imageSrc = "/trash-empty.svg"; // Image for deleted section
  }

  return (
    <div className="flex flex-col gap-8 w-full items-center mt-24">
      <Image
        alt={`Image for ${sectionType} section`}
        width="300"
        height="300"
        src={imageSrc}
      />
      <div className="text-2xl">{message}</div>
      {showButton && <UploadButton />}
    </div>
  );
}

export function FileBrowser({
  title,
  favoritesOnly,
  deletedOnly,
}: {
  title: string;
  favoritesOnly?: boolean;
  deletedOnly?: boolean;
}) {
  const organization = useOrganization();
  const user = useUser();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<Doc<"files">["type"] | "all">("all");

  let orgId: string | undefined = undefined;
  if (organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id;
  }

  const favorites = useQuery(
    api.files.getAllFavorites,
    orgId ? { orgId } : "skip"
  );

  const files = useQuery(
    api.files.getFiles,
    orgId
      ? {
          orgId,
          type: type === "all" ? undefined : type,
          query,
          favorites: favoritesOnly,
          deletedOnly,
        }
      : "skip"
  );
  const isLoading = files === undefined;

  const modifiedFiles =
    files?.map((file) => ({
      ...file,
      isFavorited: (favorites ?? []).some(
        (favorite) => favorite.fileId === file._id
      ),
      url: file.url || null,  // Ensure url is included; set default to null
    })) ?? [];

  // Determine the placeholder message, button visibility, and section type
  let placeholderMessage = "You have no files, upload one now :(";
  let showUploadButton = true;
  let sectionType: "favorites" | "deleted" | "general" = "general";

  if (favoritesOnly) {
    placeholderMessage = "You have no favorite files !";
    sectionType = "favorites";
  } else if (deletedOnly) {
    placeholderMessage = "Your trash is empty :)";
    showUploadButton = false; // No upload button in Trash section
    sectionType = "deleted";
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">{title}</h1>

        <SearchBar query={query} setQuery={setQuery} />

        {/* Show upload button only for non-trash sections */}
        {!deletedOnly && <UploadButton />}
      </div>

      <Tabs defaultValue="grid">
        <div className="flex justify-between items-center">
          <TabsList className="mb-2">
            <TabsTrigger value="grid" className="flex gap-2 items-center">
              <GridIcon />
              Grid
            </TabsTrigger>
            <TabsTrigger value="table" className="flex gap-2 items-center">
              <RowsIcon /> Table
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2 items-center">
            <Label htmlFor="type-select">Type Filter</Label>
            <Select
              value={type}
              onValueChange={(newType) => {
                setType(newType as any);
              }}
            >
              <SelectTrigger id="type-select" className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isLoading && (
          <div className="flex flex-col gap-8 w-full items-center mt-24">
            <Loader2 className="h-32 w-32 animate-spin text-gray-500" />
            <div className="text-2xl">Loading your files...</div>
          </div>
        )}

        <TabsContent value="grid">
          <div className="grid grid-cols-2 gap-4">
            {modifiedFiles?.map((file) => {
              return <FileCard key={file._id} file={file} />;
            })}
          </div>
        </TabsContent>
        <TabsContent value="table">
          <DataTable columns={columns} data={modifiedFiles} />
        </TabsContent>
      </Tabs>

      {/* Conditionally show the placeholder with different images and messages */}
      {files?.length === 0 && (
        <Placeholder
          message={placeholderMessage}
          showButton={showUploadButton}
          sectionType={sectionType}
        />
      )}
    </div>
  );
}