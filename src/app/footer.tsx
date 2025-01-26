import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-gray-100 mt-12 py-8 pb-48 custom-md:py-0"> {/* Added py-4 for top and bottom padding */}
      {/* Footer Container */}
      <div className="container mx-auto flex flex-col items-center custom-md:flex-row justify-between gap-4 h-52">
        {/* Built with Haven Futures - Centered on small screens */}
        <div className="text-center custom-md:text-left w-full">
          <span className="text-blue-900">
            Built with 💚 By Haven Futures
          </span>
        </div>

        {/* Social Media Links - Stack below on smaller screens */}
        <div className="flex flex-col pt-2 custom-md:pt-0 gap-5 custom-md:flex-row custom-md:gap-12 w-full custom-md:w-auto justify-center items-center">
          <Link className="text-blue-900 hover:text-blue-500" href="https://github.com/havenfutures">
            Github
          </Link>
          <Link className="text-blue-900 hover:text-blue-500" href="https://youtube.com/havenfutures">
            Youtube
          </Link>
          <Link className="text-blue-900 hover:text-blue-500" href="https://instagram.com/thehavenfutures">
            Instagram
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
    </div>
  );
}
