import { Button } from "@/components/ui/button";
import RouteGroupsDemo from "./route-groups-demo";
import Header from "@/components/Header";

export default function RouteGroupsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Next.js App Router - Route Groups
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
            <p>
              Route Groups 是 Next.js 中的一个强大功能，允许你将路由组织到逻辑组中，而不影响 URL 路径结构。通过使用括号 `(folderName)` 来创建路由组。
            </p>
            <p>
              这种组织方式特别适用于需要为不同路由段应用不同布局的场景，比如将管理页面、用户页面和公共页面分组，每个组可以有自己的布局和样式，但 URL 路径保持简洁。
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <RouteGroupsDemo />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            查看文档
          </Button>
        </div>
      </main>
    </div>
  );
} 