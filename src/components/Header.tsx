import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6rounded-full flex items-center justify-center">
                  <Image
                    src="/eo-logo-blue.svg"
                    alt="EdgeOne Pages"
                    width={32}
                    height={32}
                  />
                </div>
                <h1 className="text-lg font-semibold">EdgeOne Pages</h1>
              </div>
            </a>
            <div className="flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">
                  LAYOUTS
                </span>
                <div className="flex space-x-4 text-sm">
                  <Link
                    href="/layouts/nested-layouts"
                    className="hover:text-primary transition-colors"
                  >
                    Nested layouts
                  </Link>
                  <Link
                    href="/layouts/route-groups"
                    className="hover:text-primary transition-colors"
                  >
                    Route Groups
                  </Link>
                  <Link
                    href="/layouts/parallel-routes"
                    className="hover:text-primary transition-colors"
                  >
                    Parallel Routes
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">
                  FILE CONVENTIONS
                </span>
                <div className="flex space-x-4 text-sm">
                  <Link
                    href="/file-conventions/loading"
                    className="hover:text-primary transition-colors"
                  >
                    Loading
                  </Link>
                  <Link
                    href="/file-conventions/error"
                    className="hover:text-primary transition-colors"
                  >
                    Error
                  </Link>
                  <Link
                    href="/file-conventions/not-found"
                    className="hover:text-primary transition-colors"
                  >
                    Not Found
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/TencentEdgeOne/next-app-router-template"
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <div className="w-6 h-6 text-gray-400 rounded-full flex items-center justify-center ">
                 <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
