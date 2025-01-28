"use client";

import { FileBrowser } from "../_components/file-browser";

export default function FavoritesPage() {
  return (
    <div className="px-4">
      <FileBrowser title="Trash" deletedOnly />
    </div>
  );
}
