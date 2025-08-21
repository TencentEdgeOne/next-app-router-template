import { Github, Settings } from "lucide-react";

export default function Header() {
  return <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Settings className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">LAYOUTS 调整</span>
                  <div className="flex space-x-4 text-sm">
                    <a href="/layouts/nested-layouts" className="hover:text-primary transition-colors">Nested layouts</a>
                    <a href="/layouts/route-groups" className="hover:text-primary transition-colors">Route Groups</a>
                    <a href="/layouts/parallel-routes" className="hover:text-primary transition-colors">Parallel Routes</a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground">FILE CONVENTIONS</span>
                  <div className="flex space-x-4 text-sm">
                    <a href="/file-conventions/loading" className="hover:text-primary transition-colors">Loading</a>
                    <a href="/file-conventions/error" className="hover:text-primary transition-colors">Error</a>
                    <a href="/file-conventions/not-found" className="hover:text-primary transition-colors">Not Found</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>
}