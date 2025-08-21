import { ReactNode } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NestedLayoutsLayoutProps {
  children: ReactNode;
}

export default function NestedLayoutsLayout({ children }: NestedLayoutsLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Nested Layout Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
              Nested Layouts 演示
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              这是一个真正的 Nested Layouts 实现，使用 Next.js 的文件系统路由和多层 layout.tsx
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 p-4 bg-muted/30 rounded-lg border border-border/20">
            <Button asChild variant="outline" size="sm">
              <Link href="/layouts/nested-layouts">
                首页
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/layouts/nested-layouts/dashboard">
                仪表板
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/layouts/nested-layouts/settings">
                设置
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/layouts/nested-layouts/profile">
                个人资料
              </Link>
            </Button>
          </div>
        </div>

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Layout Explanation */}
        <div className="mt-8 p-6 bg-muted/30 border border-border/20 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Nested Layouts 技术实现</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">文件结构</h4>
              <div className="font-mono bg-background/50 p-3 rounded border text-xs">
                app/layouts/nested-layouts/
                <br />
                ├── layout.tsx ← 外层布局（当前文件）
                <br />
                ├── page.tsx ← 首页
                <br />
                ├── dashboard/page.tsx
                <br />
                ├── settings/
                <br />
                │&nbsp;&nbsp;├── layout.tsx ← 内层布局
                <br />
                │&nbsp;&nbsp;└── page.tsx
                <br />
                └── profile/page.tsx
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">关键特性</h4>
              <ul className="space-y-1">
                <li>• 外层布局包含导航和公共元素</li>
                <li>• 内层布局可以有特定的侧边栏或工具栏</li>
                <li>• 布局状态在页面切换时保持</li>
                <li>• 支持多层嵌套和独立渲染</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 