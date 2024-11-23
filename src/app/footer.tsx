import Link from "next/link";

export function Footer() {
  return (
    <div className="hidden custom-md:flex h-40 bg-gray-100 mt-12 items-center"> {/* Use custom-md to hide below 901px */}
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-blue-900 hover:text-blue-500" href="https://github.com/havenfutures">
          Github
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://youtube.com/havenfutures">
          Youtube
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://instagram.com/thehavenfutures">
          Instagram
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="/">
          Built with ❤️ By Haven Futures
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://x.com/havenfutures">
          Twitter
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://facebook.com/HavenFutures">
          Facebook
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="https://www.linkedin.com/company/havenfutures">
          LinkedIn
        </Link>
      </div>
    </div>
  );
}