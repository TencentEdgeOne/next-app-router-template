import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <Image src="/eo-logo-blue.svg" alt="logo" width={32} height={32} />
                </div>
              </Link>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">LAYOUTS</span>
                  <div className="flex space-x-4 text-sm">
                    <Link href="/layouts/nested-layouts" className="hover:text-primary transition-colors">Nested layouts</Link>
                    <Link href="/layouts/route-groups" className="hover:text-primary transition-colors">Route Groups</Link>
                    <Link href="/layouts/parallel-routes" className="hover:text-primary transition-colors">Parallel Routes</Link>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">FILE CONVENTIONS</span>
                  <div className="flex space-x-4 text-sm">
                    <Link href="/file-conventions/loading" className="hover:text-primary transition-colors">Loading</Link>
                    <Link href="/file-conventions/error" className="hover:text-primary transition-colors">Error</Link>
                    <Link href="/file-conventions/not-found" className="hover:text-primary transition-colors">Not Found</Link>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://github.com/TencentEdgeOne/next-app-router-template" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>
}