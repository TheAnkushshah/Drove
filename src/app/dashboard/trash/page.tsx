"use client";

import { FileBrowser } from "../_components/file-browser";

export default function FavoritesPage() {
  return (
    <div className="p-4">
      <FileBrowser title="Trash" deletedOnly />
    </div>
  );
}
