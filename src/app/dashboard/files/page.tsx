import { FileBrowser } from "../_components/file-browser";
import { OrganizationSwitcher } from "@clerk/nextjs";

export default function FilesPage() {
  return (
    <div className="p-4">
      {/* Organization Switcher */}
      <div className="mb-4 flex justify-center sm:hidden">
        <OrganizationSwitcher />
      </div>

      {/* File Browser */}
      <FileBrowser title="Your Files" />
    </div>
  );
}
