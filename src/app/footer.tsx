import Link from "next/link";

export function Footer() {
  return (
    <div className="hidden custom-md:flex h-40 bg-gray-100 mt-12 items-center"> {/* Use custom-md to hide below 901px */}
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-blue-900 hover:text-blue-500" href="https://github.com">
          Github
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://youtube.com">
          Youtube
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://instagram.com">
          Instagram
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="/privacy">
          Build with ❤️ By Ankush Shah
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://x.com">
          Twitter
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://facebook.com">
          Facebook
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://linkedin.com">
          LinkedIn
        </Link>
      </div>
    </div>
  );
}